using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AmsDomain
{
    public class Member: Person
    {
        public int MemberType { get; set; }
        public int MemberNumber { get; set; }

        public Member()
        {

        }
    }
}
