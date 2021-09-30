using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Duomenys.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Renginiai",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    Pavadinimas = table.Column<string>(type: "TEXT", nullable: true),
                    Data = table.Column<DateTime>(type: "TEXT", nullable: false),
                    Aprasymas = table.Column<string>(type: "TEXT", nullable: true),
                    Kategorija = table.Column<string>(type: "TEXT", nullable: true),
                    Miestas = table.Column<string>(type: "TEXT", nullable: true),
                    RenginioVieta = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Renginiai", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Renginiai");
        }
    }
}
