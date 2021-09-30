using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Domenas;
using Duomenys;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace WebAPI.Controllers
{
    public class RenginiuController : PagrindinisApiController
    {
        private readonly DataContext _context;

        public RenginiuController(DataContext context)
        {
            _context = context;
        }

        // Endpoint visų renginių grąžinimui 
        // (visur naudojame async, kad nebūtų vykdomas kodas toliau kol nebaigta)
        [HttpGet]
        public async Task<ActionResult<List<Renginys>>> GetRenginiai()
        {
            return await _context.Renginiai.ToListAsync();
        }

        // Endpoint skirtas vieno įrašo grąžinimui
        [HttpGet("{id}")]
        public async Task<ActionResult<Renginys>> GetRenginys(Guid id)
        {
            return await _context.Renginiai.FindAsync(id);
        }
    }
}