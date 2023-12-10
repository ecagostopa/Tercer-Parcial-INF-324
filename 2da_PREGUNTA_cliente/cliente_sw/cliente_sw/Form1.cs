using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace cliente_sw
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }
        private void Form1_Load(object sender, EventArgs e)
        {
           
        }
        private void limpiar()
        {
            textBox1.Clear();
            textBox2.Clear();
            textBox3.Clear();
        }
        private void button1_Click(object sender, EventArgs e)
        {
            //AGREGAR ALUMNO 

            BDSW.BDSoapClient sw = new BDSW.BDSoapClient();
            MessageBox.Show(sw.agregar(textBox1.Text, textBox2.Text, textBox3.Text));
            DataSet dss1 = sw.llenar_grid();
            dataGridView1.DataSource = dss1.Tables[0];
            limpiar();
        }

        private void Form1_Load_1(object sender, EventArgs e)
        {
            BDSW.BDSoapClient sw = new BDSW.BDSoapClient();
            DataSet dss = sw.llenar_grid();
            dataGridView1.DataSource = dss.Tables[0];
        }
        private void dataGridView1_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {
            try
            {
                textBox1.Text = dataGridView1.CurrentRow.Cells[0].Value.ToString();
                textBox2.Text = dataGridView1.CurrentRow.Cells[1].Value.ToString();
                textBox3.Text = dataGridView1.CurrentRow.Cells[2].Value.ToString();
            }
            catch { }
        }

        private void button3_Click(object sender, EventArgs e)
        {
            //ACTUALIZAR ALUMNO

            BDSW.BDSoapClient sw = new BDSW.BDSoapClient();
            MessageBox.Show(sw.actualizar(textBox1.Text, textBox2.Text, textBox3.Text));
            DataSet dss1 = sw.llenar_grid();
            dataGridView1.DataSource = dss1.Tables[0];
            limpiar();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            //ELIMINAR ALUMNO

            BDSW.BDSoapClient sw = new BDSW.BDSoapClient();
            MessageBox.Show(sw.eliminar(textBox1.Text));
            DataSet dss1 = sw.llenar_grid();
            dataGridView1.DataSource = dss1.Tables[0];
            limpiar();
        }

        private void button4_Click(object sender, EventArgs e)
        {
            //BUSCAR ALUMNO
            BDSW.BDSoapClient sw = new BDSW.BDSoapClient();
            int numericValue = 0;
            bool isNumber = int.TryParse(textBox4.Text, out numericValue);
            if (isNumber == true)
            {
                DataSet dss = sw.buscar(numericValue);
                dataGridView1.DataSource = dss.Tables[0];
            }
            else
            {
                DataSet dss = sw.buscar1(textBox4.Text);
                dataGridView1.DataSource = dss.Tables[0];
            }

        }

        private void button5_Click(object sender, EventArgs e)
        {
            BDSW.BDSoapClient sw = new BDSW.BDSoapClient();
            DataSet dss = sw.llenar_grid();
            dataGridView1.DataSource = dss.Tables[0];
            textBox4.Clear();
        }
    }
}
