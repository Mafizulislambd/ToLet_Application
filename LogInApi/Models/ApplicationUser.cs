﻿using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations.Schema;

namespace LogInApi.Models
{
    public class ApplicationUser:IdentityUser
    {
        [Column(TypeName ="nvarchar(150)") ]
       public string FullName { get; set; }
    }
}
