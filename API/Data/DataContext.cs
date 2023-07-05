using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<AppUser> Users { get; set; } 
        // no photos dbset because they are always going to be used by users and not spereately. Photos table will be included in the migration.
    }
}