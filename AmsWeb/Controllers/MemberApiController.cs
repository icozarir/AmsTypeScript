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
            List<Member> memberList = new List<Member>() { new Member() { FirstName = "Anders", SurName = "Svensson", Email = "as@as.dk", MemberNumber = 1, MemberType = 1 } };
            return Ok(memberList);
        }
    }
}