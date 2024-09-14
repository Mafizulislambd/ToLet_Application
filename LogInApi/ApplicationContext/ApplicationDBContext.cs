using LogInApi.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace LogInApi.ApplicationContext
{
    public class ApplicationDBContext:IdentityDbContext<ApplicationUser>
    {
        public ApplicationDBContext(DbContextOptions options):base(options)
        {

        }
        public DbSet<ApplicationUser> applicationUsers{ get; set; }
        public DbSet<Country> country { get; set; }
    }
}
