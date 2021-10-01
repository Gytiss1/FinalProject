using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domenas;
using Duomenys;
using MediatR;
using Microsoft.EntityFrameworkCore;

// MediatR naudojamas norint apjungti klientinę aplikacijos dalį su mūsų duomenų baze per API
// https://medium.com/dotnet-hub/use-mediatr-in-asp-net-or-asp-net-core-cqrs-and-mediator-in-dotnet-how-to-use-mediatr-cqrs-aspnetcore-5076e2f2880c
namespace Aplikacija.Renginiai
{
    public class Sarasas
    {
        public class Query : IRequest<List<Renginys>> { }

        public class Handler : IRequestHandler<Query, List<Renginys>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            // Grąžinamas sąrašas renginių aplikacijos sluoksnyje
            // CancellationToken naudojamas jeigu kimba aplikacija ir norime ją nukillint (arba useris uždaro naršyklę)
            public async Task<List<Renginys>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Renginiai.ToListAsync(cancellationToken);
            }
        }
    }
}