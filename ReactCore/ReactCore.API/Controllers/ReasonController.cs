using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using Microsoft.AspNetCore.Mvc;
using ReactCore.API.Classes;

namespace ReactCore.API.Controllers
{
    [ApiController]
    [Route("[controller]")]    
    public class ReasonController : ControllerBase
    {
        private const string SQL_GET_REASONS = "GetReasons";
        private const string COLUMN_NAME = "Reason";

        //The database connection string was base-64 encoded. The value lives in App.config.
        public static string SqlConnection = Helper.DecodeBase64String(ConfigurationManager.ConnectionStrings["SqlConnectionReactCoreProdDB"].ConnectionString);

        [HttpGet]
        public ActionResult<List<Reason>> Get()
        {
            return GetReasons();
        }

        public List<Reason> GetReasons()
        {
            List<Reason> dataList = new List<Reason>();

            using (SqlConnection connection = new SqlConnection(SqlConnection))
            {
                using (SqlCommand command = new SqlCommand(SQL_GET_REASONS, connection))
                {
                    command.CommandType = CommandType.StoredProcedure;
                    connection.Open();

                    SqlDataReader dataReader = command.ExecuteReader();
                    DataTable dataTable = new DataTable();

                    dataTable.Load(dataReader);

                    for (int i = 0; i < dataTable.Rows.Count; i++)
                    {
                        dataList.Add(new Reason() { Id = i, Summary = dataTable.Rows[i][COLUMN_NAME].ToString() });
                    }
                }
            }

            return dataList;
        }
    }
}