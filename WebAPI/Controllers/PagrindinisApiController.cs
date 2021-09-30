using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    // Pagrindinis kontroleris leidžia globaliai konfigūruoti paveldinčius kontrolerius
    [ApiController]
    [Route("api/[controller]")]
    [Produces("application/json")] // Priešpaskutinė Roberto paskaita (paskaitos vidurys)
    public class PagrindinisApiController : ControllerBase
    {
        
    }
}