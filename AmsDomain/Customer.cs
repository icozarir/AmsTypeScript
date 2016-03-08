using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AmsDomain
{
    public class Customer: Person
    {
        public int CustomerType { get; set; }
        public int CustomerNumber { get; set; }

        public Customer()
        {

        }
    }
}
