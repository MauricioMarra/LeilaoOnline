using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LeilaoOnline.Models
{
    public class Leilao
    {
        public long Id { get; set; }
        public string nome { get; set; }
        public decimal valorInicial { get; set; }
        public bool idcItemUsado { get; set; }
        public string responsavelPeloLeilao { get; set; }
        public DateTime dataAbertura { get; set; }
        public DateTime dataFinalizacao { get; set; }
        public string segredo { get; set; }
    }
}
