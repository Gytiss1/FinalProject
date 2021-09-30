using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Aplikacija.Renginiai;
using Domenas;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [ApiController]
    public class RenginiaiController : PagrindinisApiController
    {
        // Endpoint visų renginių grąžinimui naudojant Mediator
        // (visur naudojame async, kad nebūtų vykdomas kodas toliau kol nebaigta)
        [HttpGet]
        public async Task<ActionResult<List<Renginys>>> GetRenginiai()
        {   
            // propsas gaunamas iš tėvinio kontrolerio
            return await Mediator.Send(new Sarasas.Query());
        }

        // Endpoint skirtas vieno įrašo grąžinimui
        [HttpGet("{id}")]
        public async Task<ActionResult<Renginys>> GetRenginys(Guid id)
        {
            return Ok();
        }
    }
}