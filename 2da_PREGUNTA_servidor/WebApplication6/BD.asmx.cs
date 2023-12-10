using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Data.SqlClient;

namespace WebApplication6
{
    /// <summary>
    /// Descripción breve de BD
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // Para permitir que se llame a este servicio web desde un script, usando ASP.NET AJAX, quite la marca de comentario de la línea siguiente. 
    // [System.Web.Script.Services.ScriptService]
    public class BD : System.Web.Services.WebService
    {
        [WebMethod]
        public string HelloWorld()
        {
            return "Hola a todos";
        }
        [WebMethod]
        public DataSet mostrar()
        {
            SqlConnection cnn = new SqlConnection();
            cnn.ConnectionString = "Data Source=DESKTOP-ITKER80; Initial Catalog=academico; User=sa; Password=0704";
            SqlDataAdapter da = new SqlDataAdapter("select * from alumnos", cnn);
            DataSet ds = new DataSet();
            da.Fill(ds);
            return ds;
        }
        [WebMethod]
        public DataSet llenar_grid()
        {
            SqlConnection cnn = new SqlConnection();
            cnn.ConnectionString = "Data Source=DESKTOP-ITKER80; Initial Catalog=academico; User=sa; Password=0704";
            cnn.Open();
            DataSet ds = new DataSet();
            string llenar = "select * from alumnos";
            SqlCommand cmd = new SqlCommand(llenar, cnn);
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(ds);
            cnn.Close();
            return ds;
        }
        [WebMethod]
        public string agregar(string ci, string nom, string carrera)
        {
            SqlConnection cnn = new SqlConnection();
            cnn.ConnectionString = "Data Source=DESKTOP-ITKER80; Initial Catalog=academico; User=sa; Password=0704";
            cnn.Open();
            int num = int.Parse(ci);
            string insertar = "INSERT INTO alumnos (id, nombre, carrera) VALUES (@id, @nom, @carrera)";
            SqlCommand cmd = new SqlCommand(insertar, cnn);
            cmd.Parameters.AddWithValue("@id", num);
            cmd.Parameters.AddWithValue("@nom", nom);
            cmd.Parameters.AddWithValue("@carrera",carrera);
            cmd.ExecuteNonQuery();
            cnn.Close();
            return "Datos AGREGADOS con exito";
        }
        [WebMethod]
        public string actualizar(string ci, string nom, string carrera)
        {
            SqlConnection cnn = new SqlConnection();
            cnn.ConnectionString = "Data Source=DESKTOP-ITKER80; Initial Catalog=academico; User=sa; Password=0704";
            cnn.Open();
            int num = int.Parse(ci);
            string actualizar = "UPDATE alumnos SET id=@id, nombre=@nom, carrera=@carrera WHERE id=@id";
            SqlCommand cmd = new SqlCommand(actualizar, cnn);
            cmd.Parameters.AddWithValue("@id", num);
            cmd.Parameters.AddWithValue("@nom", nom);
            cmd.Parameters.AddWithValue("@carrera", carrera);
            cmd.ExecuteNonQuery();
            cnn.Close();
            return "Datos ACTUALIZADOS con exito";
        }
        [WebMethod]
        public string eliminar(string ci)
        {
            SqlConnection cnn = new SqlConnection();
            cnn.ConnectionString = "Data Source=DESKTOP-ITKER80; Initial Catalog=academico; User=sa; Password=0704";
            cnn.Open();
            int num = int.Parse(ci);
            string eliminar = "DELETE FROM alumnos WHERE id=@id";
            SqlCommand cmd = new SqlCommand(eliminar, cnn);
            cmd.Parameters.AddWithValue("@id", num);
            cmd.ExecuteNonQuery();
            cnn.Close();
            return "Datos ELIMINADOS con exito";
        }
        [WebMethod]
        public DataSet buscar(int ci)
        {
            SqlConnection cnn = new SqlConnection();
            cnn.ConnectionString = "Data Source=DESKTOP-ITKER80; Initial Catalog=academico; User=sa; Password=0704";
            cnn.Open();
            DataSet ds = new DataSet();
            string llenar = "SELECT * FROM alumnos WHERE id=@id";
            SqlCommand cmd = new SqlCommand(llenar, cnn);
            cmd.Parameters.AddWithValue("@id", ci);
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(ds);
            cnn.Close();
            return ds;
        }
        [WebMethod]
        public DataSet buscar1(string b)
        {
            SqlConnection cnn = new SqlConnection();
            cnn.ConnectionString = "Data Source=DESKTOP-ITKER80; Initial Catalog=academico; User=sa; Password=0704";
            cnn.Open();
            String b1 = b;
            DataSet ds = new DataSet();
            string llenar = "SELECT * FROM alumnos WHERE nombre=@nom OR  carrera=@carrera";
            SqlCommand cmd = new SqlCommand(llenar, cnn);
            cmd.Parameters.AddWithValue("@nom", b);
            cmd.Parameters.AddWithValue("@carrera", b1);
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(ds);
            cnn.Close();
            return ds;
        }
    }
}
