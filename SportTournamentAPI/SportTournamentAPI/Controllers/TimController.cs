using BusinessLogicLayer.Service.Interface;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace SportTournamentAPI.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class TimController : ControllerBase
    {
        private readonly ITimService _service;

        public TimController(ITimService service) {
            _service = service;
        }

        [HttpGet("get-all")]
        public async Task<IActionResult> GetAll() {
            var response = await _service.getAll();
            return response != null
                ? Ok(response)
                : NotFound("Doslo je do greske prilikom dobavljanja timova.");
        }

        [HttpPost("join-team")]
        [Authorize]
        public async Task<IActionResult> joinTeam(int timId)
        {
            try
            {
                var ucesnikUserName = HttpContext.User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.Name)?.Value;

                if (string.IsNullOrEmpty(ucesnikUserName))
                {
                    return Unauthorized("Username nije pronađen u JWT tokenu.");
                }

                var response = await _service.joinTim(timId, ucesnikUserName);

                return response != null
                    ? Ok(response)
                    : NotFound("Došlo je do greške prilikom pridruživanja timu.");
            }

            catch (Exception ex)
            {
                return BadRequest("Došlo je do greške: " + ex.Message);
            }
        }
    }
}
