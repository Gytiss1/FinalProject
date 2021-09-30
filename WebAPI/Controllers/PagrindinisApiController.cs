using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;

namespace WebAPI.Controllers
{
    // Pagrindinis kontroleris leidžia globaliai konfigūruoti paveldinčius kontrolerius
    [ApiController]
    [Route("api/[controller]")]
    [Produces("application/json")] // Priešpaskutinė Roberto paskaita (paskaitos vidurys)
    public class PagrindinisApiController : ControllerBase
    {
        // Kiekvienas kontroleris turi turėti mediatorių, kad API susikalbėtų su aplikacija
        private IMediator _mediator;

        // ??= operatorius reiškia 'jeigu null, tai...'
        // https://refactoring.guru/design-patterns/mediator/csharp/example
        protected IMediator Mediator => _mediator ??= HttpContext.RequestServices.GetService<IMediator>();
        
    }
}