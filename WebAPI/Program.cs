using System;
using Duomenys;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace WebAPI
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var host = CreateHostBuilder(args).Build();
            // Sukuriame variable atsakingą už servisų išmetimą
            using var scope = host.Services.CreateScope();
            var services = scope.ServiceProvider;

            try
            {
                // Mechanizmas tikrinantis ar įmanoma sukurti duombazę
                 var context = services.GetRequiredService<DataContext>();
                 context.Database.Migrate();
            }
            catch (Exception ex)
            {
                // Išvedamas klaidos pranešimas
                var logger = services.GetRequiredService<ILogger<Program>>();
                logger.LogError(ex, "Įvyko klaida duomenų migracijoje");
            }

            // Programos paleidimas
            host.Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
