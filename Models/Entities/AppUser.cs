using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


using Microsoft.AspNetCore.Identity;

namespace drevolution.Models.Entities
{
  public class AppUser : IdentityUser
  {

    // Extended Properties
    public string FirstName { get; set; }
    public string LastName { get; set; }

  }

}
