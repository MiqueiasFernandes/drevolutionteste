using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace drevolution
{

    [Route("api/[controller]")]
    public class DashboardController : Controller
    {       
        public DashboardController()
        {
        
        }

        [HttpGet]
        public IActionResult Get()
        {
            return new OkObjectResult(new { Message = "This is insecure data!" });
        }

         // GET api/dashboard/home
    [Authorize(Policy = "ApiUser")]
        [HttpGet("home")]
        public IActionResult GetHome()
        {
            return new OkObjectResult(new { Message = "This is secure data!" });
        }
    }
}