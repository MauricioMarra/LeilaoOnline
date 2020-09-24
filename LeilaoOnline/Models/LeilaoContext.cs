using Microsoft.EntityFrameworkCore;

namespace LeilaoOnline.Models 
{
    public class LeilaoContext : DbContext
    {
        public LeilaoContext(DbContextOptions<LeilaoContext> options) : base(options)
        {

        }

        public DbSet<Leilao> Leiloes { get; set; }
    }
}
