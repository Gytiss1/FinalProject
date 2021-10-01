using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
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
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            // Reikia mapperio?
            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var renginys = await _context.Renginiai.FindAsync(request.Renginys.Id);
                // Mappinu visus fieldus iš domeno su requestu
                _mapper.Map(request.Renginys, renginys);
                await _context.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }
}