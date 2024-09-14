using LogInApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace LogInApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApplicaationController : ControllerBase
    {
        private UserManager<ApplicationUser> _userManager;
        private SignInManager<ApplicationUser> _signInManager;
        public ApplicaationController(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager)
        {
             _userManager= userManager ;
            _signInManager=signInManager ;
        }
        [HttpPost]
        [Route("Register")]
        /////http://localhost:5149/api/Applicaation/Register
        public async Task<Object> PostApiUser(ApplicationUserModel model)
        {
            var applicationUser = new ApplicationUser()
            {
                UserName = model.UserName,
                Email = model.Email,
                FullName = model.FullName

            };
            try
            {
                var result = await _userManager.CreateAsync(applicationUser,model.Password);
                return Ok(result);
            }
            catch (Exception ex)
            {
                throw;
            }
        }

    }
 


}
