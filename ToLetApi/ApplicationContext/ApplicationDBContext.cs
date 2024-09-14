using Microsoft.EntityFrameworkCore;
using ToLetApi.Models;

namespace ToLetApi.ApplicationContext
{
    public class ApplicationDBContext:DbContext
    {
        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options) : base(options)
        {

        }
       public DbSet<RegistrationModel> RegistrationModels { get; set; }
       public DbSet<Country> Country { get; set; }
      public  DbSet<Division> Division { get; set; }
    }
}
