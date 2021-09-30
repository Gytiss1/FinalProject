using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Domenas;
using Duomenys;
using MediatR;

namespace Aplikacija.Renginiai
{
    // Sukurta pagal filtras.cs
    public class Redaguoti
    {
        public class Command : IRequest
        {
            public Renginys Renginys { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var renginys = await _context.Renginiai.FindAsync(request.Renginys.Id);
                renginys.Pavadinimas = request.Renginys.Pavadinimas ?? renginys.Pavadinimas;

                await _context.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }
}