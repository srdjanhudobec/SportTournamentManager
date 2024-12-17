using BusinessLogicLayer.Service.Interface;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace SportTournamentAPI.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class TimskiTurnirController : ControllerBase
    {
        private readonly ITimskiTurnirService _service;
        public TimskiTurnirController(ITimskiTurnirService service) {
            _service = service;
        }

        [HttpGet("get-turniri-by-tim")]
        public async Task<IActionResult> GetTimskiTurniriByTim(int timId)
        {
            var response = await _service.getTimskiTurniriByTim(timId);
            return response != null
                ? Ok(response)
                : NotFound("Doslo je do greske prilikom dobavljanja turnira.");
        }
    }
}
