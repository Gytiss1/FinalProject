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
        // Pridėtas Mediator patternas grąžinimui
        [HttpGet("{id}")]
        public async Task<ActionResult<Renginys>> GetRenginys(Guid id)
        {
            return await Mediator.Send(new Filtras.Query{Id = id});
        }

        [HttpPost]
        public async Task<IActionResult> SukurtiRengini(Renginys renginys)
        {
            // Gražinu ok jeigu pavyko operacija
            return Ok(await Mediator.Send(new Sukurti.Command{Renginys = renginys}));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> RedaguotiRengini(Guid id, Renginys renginys)
        {
            renginys.Id = id;
            return Ok(await Mediator.Send(new Redaguoti.Command{Renginys = renginys}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> IstrintiRengini(Guid id)
        {
            // Grąžinu ok jeigu pavyksta
            return Ok(await Mediator.Send(new Istrinti.Command{Id = id});
        }
    }
}