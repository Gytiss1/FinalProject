using System;
using System.Threading;
using System.Threading.Tasks;
using Duomenys;
using MediatR;

namespace Aplikacija.Renginiai
{
    public class Istrinti
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
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
                var renginys = await _context.Renginiai.FindAsync(request.Id);
                // Ištriname iš atminties
                _context.Remove(renginys);
                // Išsaugau duombazėje
                await _context.SaveChangesAsync();
                // Grąžinu nieką, kad baigtųsi metodas
                return Unit.Value;
            }
        }
    }
}