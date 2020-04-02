using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using ReactCore.UI.Classes;

namespace ReactCore.UI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ReasonController : ControllerBase
    {
        [HttpGet]
        public ActionResult<List<Reason>> Get()
        {
            return GetReasons();
        }

        private List<Reason> GetReasons()
        {
            List<Reason> reasons = new List<Reason>();

            reasons.Add(new Reason() { Summary = "I'd like to work for a company that values diversity and inclusion." });
            reasons.Add(new Reason() { Summary = "I'd like to work with some great people who are exicted about collaborating on new projects and technologies." });
            reasons.Add(new Reason() { Summary = "I'd like to share my experience and be a resource for my colleagues." });

            return reasons;
        }
    }
}