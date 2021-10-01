using AutoMapper;
using Domenas;

namespace Aplikacija.Priedai
{
    public class Mapperis
    {
        public class MappingProfiles : Profile
        {
            public MappingProfiles()
            {
                CreateMap<Renginys, Renginys>();
            }
        }
    }
}