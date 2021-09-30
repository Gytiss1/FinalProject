using System;

namespace Domenas
{
    public class Renginys
    {
        public Guid Id { get; set; }
        public string Pavadinimas { get; set; }
        public DateTime Data { get; set; }
        public string Aprasymas { get; set; }
        public string Kategorija { get; set; }
        public string Miestas { get; set; }
        public string RenginioVieta { get; set; }
    }
}