using System;
using System.Threading;
using System.Threading.Tasks;
using Domenas;
using Duomenys;
using MediatR;

namespace Aplikacija.Renginiai
{
    public class Filtras
    {
        public class Query : IRequest<Renginys>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Renginys>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Renginys> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Renginiai.FindAsync(request.Id);
            }
        }
    }
}