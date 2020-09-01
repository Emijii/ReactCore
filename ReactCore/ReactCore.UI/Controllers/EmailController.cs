using Microsoft.AspNetCore.Mvc;
using System;

namespace ReactCore.UI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EmailController : ControllerBase
    {
        [HttpGet("SendEmail/{message}")]
        public ActionResult<string> SendEmail(string message)
        {
            try
            {
                //TODO: Send the email.
                Console.WriteLine(message);

                return Ok(message);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }       
    }
}