using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AmsDomain
{
    public abstract class Person
    {
        public string FirstName { get; set; }
        public string SurName { get; set; }
        public string Email { get; set; }

        public Person()
        {

        }
    }
}
