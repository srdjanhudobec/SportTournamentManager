using BusinessLogicLayer.Service.Interface;
using DataAccessLayer.Helper;
using Microsoft.AspNetCore.Mvc;

namespace SportTournamentAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UcesnikController : ControllerBase
    {
        private readonly IUcesnikService _service;

        public UcesnikController(IUcesnikService service)
        {
            _service = service;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] UcesnikLoginDTO ucesnik)
        {
            var response = await _service.Login(ucesnik);
            return response != null
                ? Ok(response)
                : NotFound("Ucesnik sa unetim kredencijalima nije pronadjen.");
        }


        [HttpPost("register-ucesnik")]
        public async Task<IActionResult> RegisterUcesnik(UcesnikRegisterDTO ucesnik)
        {
            var response = await _service.RegisterUcesnik(ucesnik);
            return response != null
                ? Ok(response)
                : BadRequest("Ucesnik nije uspesno registrovan.");
        }

    }
}
