﻿// <auto-generated />
using System;
using Duomenys;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Duomenys.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "5.0.10");

            modelBuilder.Entity("Domenas.Renginys", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("Aprasymas")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("Data")
                        .HasColumnType("TEXT");

                    b.Property<string>("Kategorija")
                        .HasColumnType("TEXT");

                    b.Property<string>("Miestas")
                        .HasColumnType("TEXT");

                    b.Property<string>("Pavadinimas")
                        .HasColumnType("TEXT");

                    b.Property<string>("RenginioVieta")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Renginiai");
                });
#pragma warning restore 612, 618
        }
    }
}
