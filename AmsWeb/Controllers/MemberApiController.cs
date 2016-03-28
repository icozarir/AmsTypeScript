using AmsDomain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AmsWeb.Controllers
{
    public class MemberApiController : ApiController
    {
        public IHttpActionResult GetMembers()
        {
            List<Member> memberList = new List<Member>() {
                new Member() { FirstName = "Anders", SurName = "Svensson", Email = "as@as.dk", MemberNumber = 1, MemberType = 1 },
                new Member() { FirstName = "Sven", SurName = "Hansson", Email = "sh@as.dk", MemberNumber = 2, MemberType = 2 },
                new Member() { FirstName = "Joen", SurName = "Nilsson", Email = "jn@as.dk", MemberNumber = 3, MemberType = 3 },
                new Member() { FirstName = "Eva", SurName = "Andersson", Email = "ea@as.dk", MemberNumber = 4, MemberType = 3 },
                new Member() { FirstName = "Therese", SurName = "Tørnstrøm", Email = "tt@as.dk", MemberNumber = 5, MemberType = 2 },
                new Member() { FirstName = "Ola", SurName = "Isaksson", Email = "oi@as.dk", MemberNumber = 6, MemberType = 1 },
            };
            return Ok(memberList);
        }
    }
}