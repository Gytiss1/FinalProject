using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domenas;

namespace Duomenys
{
    public class PradiniaiDuomenys
    {
        // Statinis metodas leidžia išvengti instance kūrimo
        // Naudojamas pridėti įrašams į duombazę
        public static async Task SeedData(DataContext context)
        {
            // Grąžiname viską iš duombazės
            if (context.Renginiai.Any()) return;
            
            var renginiai = new List<Renginys>
            {
                new Renginys
                {
                    Pavadinimas = "Praėjęs Renginys 1",
                    Data = DateTime.Now.AddMonths(-3),
                    Aprasymas = "Renginys įvykęs prieš 3 mėnesius",
                    Kategorija = "gerimai",
                    Miestas = "Vilnius",
                    RenginioVieta = "Mililitrai",
                },
                new Renginys
                {
                    Pavadinimas = "Praėjęs Renginys 2",
                    Data = DateTime.Now.AddMonths(-1),
                    Aprasymas = "Renginys įvykęs prieš 1 mėnesį",
                    Kategorija = "kultura",
                    Miestas = "Kaunas",
                    RenginioVieta = "Kauno valstybinis muzikinis teatras",
                },
                new Renginys
                {
                    Pavadinimas = "Ateities renginys 1",
                    Data = DateTime.Now.AddMonths(1),
                    Aprasymas = "Renginys įvyksiantis už 1 mėnesio",
                    Kategorija = "kultura",
                    Miestas = "Vilnius",
                    RenginioVieta = "Lietuvos nacionalinė Martyno Mažvydo biblioteka",
                },
                new Renginys
                {
                    Pavadinimas = "Ateities renginys 2",
                    Data = DateTime.Now.AddMonths(2),
                    Aprasymas = "Renginys įvyksiantis už 2 mėnesių",
                    Kategorija = "muzika",
                    Miestas = "Kaunas",
                    RenginioVieta = "Žalgirio arena",
                },
                new Renginys
                {
                    Pavadinimas = "Ateities renginys 3",
                    Data = DateTime.Now.AddMonths(3),
                    Aprasymas = "Renginys įvyksiantis už 3 mėnesių",
                    Kategorija = "gerimai",
                    Miestas = "Klaipėda",
                    RenginioVieta = "Bardakas Klaipėda",
                },
                new Renginys
                {
                    Pavadinimas = "Ateities renginys 4",
                    Data = DateTime.Now.AddMonths(4),
                    Aprasymas = "Renginys įvyksiantis už 4 mėnesių",
                    Kategorija = "gerimai",
                    Miestas = "Panevėžys",
                    RenginioVieta = "Seklyčia prie uosio",
                },
                new Renginys
                {
                    Pavadinimas = "Ateities renginys 5",
                    Data = DateTime.Now.AddMonths(5),
                    Aprasymas = "Renginys įvyksiantis už 5 mėnesių",
                    Kategorija = "gerimai",
                    Miestas = "Šiauliai",
                    RenginioVieta = "Pegasas",
                },
                new Renginys
                {
                    Pavadinimas = "Ateities renginys 6",
                    Data = DateTime.Now.AddMonths(6),
                    Aprasymas = "Renginys įvyksiantis už 6 mėnesių",
                    Kategorija = "muzika",
                    Miestas = "Alytus",
                    RenginioVieta = "Fenix Bar",
                },
                new Renginys
                {
                    Pavadinimas = "Ateities renginys 7",
                    Data = DateTime.Now.AddMonths(7),
                    Aprasymas = "Renginys įvyksiantis už 7 mėnesių",
                    Kategorija = "mokslas",
                    Miestas = "Vilnius",
                    RenginioVieta = "Litexpo",
                },
                new Renginys
                {
                    Pavadinimas = "Ateities renginys 8",
                    Data = DateTime.Now.AddMonths(8),
                    Aprasymas = "Renginys įvyksiantis už 8 mėnesių",
                    Kategorija = "kinas",
                    Miestas = "Vilnius",
                    RenginioVieta = "Forum Cinemas Vingis",
                }
            };

            await context.Renginiai.AddRangeAsync(renginiai);
            await context.SaveChangesAsync();
        }
    }
}