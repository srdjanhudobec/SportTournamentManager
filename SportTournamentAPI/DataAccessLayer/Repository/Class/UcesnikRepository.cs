using DataAccessLayer.Helper;
using DataAccessLayer.Model;
using DataAccessLayer.Repository.Interface;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace DataAccessLayer.Repository.Class
{
    public class UcesnikRepository:IUcesnikRepository
    {
        private readonly UserManager<Ucesnik> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly IConfiguration _configuration;

        public UcesnikRepository(UserManager<Ucesnik> userManager, RoleManager<IdentityRole> roleManager,IConfiguration configuration)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _configuration = configuration;
        }

        public async Task<UcesnikRegisterDTO> RegisterUcesnik(UcesnikRegisterDTO ucesnik)
        {
            var existingUser = await _userManager.FindByNameAsync(ucesnik.korisnickoIme);
            if (existingUser != null)
            {
                throw new Exception("Korisničko ime je već zauzeto.");
            }

            var user = new Ucesnik
            {
                UserName = ucesnik.korisnickoIme,
                ime = ucesnik.ime,
                prezime = ucesnik.prezime,
                Email = ucesnik.email,
            };

            var result = await _userManager.CreateAsync(user, ucesnik.lozinka);
            if (result.Succeeded)
            {
                return ucesnik;
            }
            else
            {
                throw new Exception("Korisnik neuspesno kreiran: " + string.Join(", ", result.Errors.Select(e => e.Description)));
            }
        }



        public async Task<string> Login(UcesnikLoginDTO ucesnik)
        {
            var user = await _userManager.FindByNameAsync(ucesnik.korisnickoIme);

            if (user != null && await _userManager.CheckPasswordAsync(user, ucesnik.lozinka))
            {
                var roleExist = await _roleManager.RoleExistsAsync("ucesnik");
                if (!roleExist)
                {
                    var role = new IdentityRole("ucesnik");
                    await _roleManager.CreateAsync(role);
                }

                if (!await _userManager.IsInRoleAsync(user, "ucesnik"))
                {
                    await _userManager.AddToRoleAsync(user, "ucesnik");
                }

                var userRoles = await _userManager.GetRolesAsync(user);
                var authClaims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, user.UserName),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                    new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                    new Claim(ClaimTypes.Email, user.Email)
                };

                foreach (var userRole in userRoles)
                {
                    authClaims.Add(new Claim(ClaimTypes.Role, userRole));
                }

                var token = GetToken(authClaims);
                return new JwtSecurityTokenHandler().WriteToken(token);
            }

            return null;
        }


        private JwtSecurityToken GetToken(List<Claim> authClaims)
        {
            var authSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Secret"]));

            return new JwtSecurityToken(
                issuer: _configuration["JWT:ValidIssuer"],
                audience: _configuration["JWT:ValidAudience"],
                expires: DateTime.Now.AddHours(100),
                claims: authClaims,
                signingCredentials: new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256)
            );
        }
    }
}
