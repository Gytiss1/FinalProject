using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Aplikacija.Renginiai;
using Domenas;
using Duomenys;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace WebAPI.Controllers
{
    [ApiController]
    public class RenginiaiController : PagrindinisApiController
    {
        private readonly IMediator _mediator;

        // Įvedame Mediator iš aplikacijos į API
        public RenginiaiController(IMediator mediator)
        {
            _mediator = mediator;
        }

        // Endpoint visų renginių grąžinimui naudojant Mediator
        // (visur naudojame async, kad nebūtų vykdomas kodas toliau kol nebaigta)
        [HttpGet]
        public async Task<ActionResult<List<Renginys>>> GetRenginiai()
        {
            return await _mediator.Send(new Sarasas.Query());
        }

        // Endpoint skirtas vieno įrašo grąžinimui
        [HttpGet("{id}")]
        public async Task<ActionResult<Renginys>> GetRenginys(Guid id)
        {
            return Ok();
        }
    }
}