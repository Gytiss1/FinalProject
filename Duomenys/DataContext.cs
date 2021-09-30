using Domenas;
using Microsoft.EntityFrameworkCore;

namespace Duomenys
{
    public class DataContext : DbContext
    {
        // Įvedamas duomenų kontekstas į programą
        public DataContext(DbContextOptions options) : base(options)
        {
        }
        // Nustatomas objektas pagal kurį turi būti kuriama duombazė
        public DbSet<Renginys> Renginiai { get; set; }
    }
}