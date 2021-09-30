using System.Threading;
using System.Threading.Tasks;
using Domenas;
using Duomenys;
using MediatR;

namespace Aplikacija.Renginiai
{
    public class Sukurti
    {
        // Sukurta pagal sarasas.cs
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
                _context.Renginiai.Add(request.Renginys);

                await _context.SaveChangesAsync();

                // Metodas reikalauja grąžinimo, tai yra grąžinama žinutė kad API baigė savo darbą
                return Unit.Value;
            }
        }
    }
}