using NUnit.Framework;
using ReactCore.API.Classes;

namespace ReactCore.Tests
{
    [TestFixture]
    public class HelperTest
    {
        [Test]
        public void DecodeBase64String_ShouldEqualDBConnectionString()
        {
            //Assign  
            var base64EncodedValue = "U2VydmVyPS47RGF0YWJhc2U9UmVhY3RDb3JlO1RydXN0ZWRfQ29ubmVjdGlvbj1UcnVlO0Nvbm5lY3Rpb24gVGltZW91dD05MA==";
            var base64DecodedValue = "Server=.;Database=ReactCore;Trusted_Connection=True;Connection Timeout=90";

            //Act
            var result = Helper.DecodeBase64String(base64EncodedValue);

            //Assert
            Assert.AreEqual(base64DecodedValue, result);
        }
    }
}
