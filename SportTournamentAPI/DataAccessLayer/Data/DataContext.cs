using DataAccessLayer.Model;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace DataAccessLayer.Data
{
    public class DataContext : IdentityDbContext<Ucesnik>
    {
        public DbSet<Ucesnik> Ucesnici {  get; set; }
        public DbSet<Tim> Timovi { get; set; }
        public DbSet<TimskiTurnir> TimskiTurniri { get; set; }
        public DbSet<TipTurnira> TipoviTurnira { get; set; }

        public DataContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Tim>()
                .HasMany(t => t.timskiTurniri)
                .WithMany(t => t.timovi)
                .UsingEntity(j => j.ToTable("TimTimskiTurnir"));

            modelBuilder.Entity<TimskiTurnir>()
                .HasOne(t => t.prvoMesto)
                .WithMany()
                .HasForeignKey(t => t.prvoMestoId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<TimskiTurnir>()
                .HasOne(t => t.drugoMesto)
                .WithMany()
                .HasForeignKey(t => t.drugoMestoId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<TimskiTurnir>()
                .HasOne(t => t.treceMesto)
                .WithMany()
                .HasForeignKey(t => t.treceMestoId)
                .OnDelete(DeleteBehavior.Restrict);
        }

    }

}
