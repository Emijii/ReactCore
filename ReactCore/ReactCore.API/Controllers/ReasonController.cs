using System.Collections.Generic;
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
        private const string SQL_CONNECTION = "Server=.;Database=ReactCore;Trusted_Connection=True;";
        private const string SQL_GET_REASONS = "GetReasons";
        private const string COLUMN_NAME = "Reason";

        [HttpGet]
        public ActionResult<List<Reason>> Get()
        {
            return GetReasons();
        }

        private List<Reason> GetReasons()
        {
            List<Reason> dataList = new List<Reason>();

            using (SqlConnection connection = new SqlConnection(SQL_CONNECTION))
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
                        dataList.Add(new Reason() { Summary = dataTable.Rows[i][COLUMN_NAME].ToString() });
                    }
                }
            }

            return dataList;
        }
    }
}