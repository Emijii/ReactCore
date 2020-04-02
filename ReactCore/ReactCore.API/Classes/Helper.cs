using System;
using System.Text;

namespace ReactCore.API.Classes
{
    public static class Helper
    {
        public static string DecodeBase64String(string encodedValue)
        {
            var decodedValue = Encoding.UTF8.GetString(Convert.FromBase64String(encodedValue));

            return decodedValue;
        }
    }
}
