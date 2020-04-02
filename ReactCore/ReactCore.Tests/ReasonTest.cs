using NUnit.Framework;
using ReactCore.API.Controllers;
using ReactCore.API.Classes;
using System.Collections.Generic;

namespace ReactCore.Tests
{
    [TestFixture]
    public class ReasonTest
    {
        [Test]
        public void GetReasons_ShouldReturnAllReasons()
        {
            //Assign  
            var controller = new ReasonController();
            var testProducts = new List<Reason>();

            testProducts.Add(new Reason() { Id = 1, Summary = "Reason 1" });
            testProducts.Add(new Reason() { Id = 2, Summary = "Reason 2" });
            testProducts.Add(new Reason() { Id = 3, Summary = "Reason 3" });

            //Act
            var result = controller.GetReasons();

            //Assert
            Assert.AreEqual(testProducts.Count, result.Count);
        }
    }
}
