﻿using DataAccessLayer.Data;
using DataAccessLayer.Model;
using DataAccessLayer.Repository.Interface;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace DataAccessLayer.Repository.Class
{
    public class TimRepository : ITimRepository
    {
        private readonly DataContext _context;

        public TimRepository(DataContext context) {
            _context = context;
        }

        public async Task<IEnumerable<Tim>> getAll()
        {
            var timovi = await _context.Timovi
                 .Include(t => t.ucesnici)
                 .ToListAsync();

            return timovi;
        }

        public async Task<Tim> getTimById(int id)
        {
            return await _context.Timovi
                .Include(t => t.ucesnici)
                .FirstOrDefaultAsync(u => u.id == id);
        }

        public async Task<IEnumerable<Tim>> getTimoviByUcesnik(string ucesnikUserName)
        {
            return await _context.Timovi
                .Include(t => t.ucesnici)
                .Where(t => t.ucesnici.Any(u => u.UserName == ucesnikUserName))
                .ToListAsync();
        }

        public async Task<Tim> joinTim(int timId, string ucesnikUserName)
        {
            var tim = await _context.Timovi
                .Include(t => t.ucesnici)
                .FirstOrDefaultAsync(t => t.id == timId);

            if (tim == null)
            {
                return null;
            }
            var ucesnik = await _context.Ucesnici
                .FirstOrDefaultAsync(u => u.UserName == ucesnikUserName); 

            await Console.Out.WriteLineAsync(ucesnikUserName + " "+  ucesnik);
            if (ucesnik == null)
            {
                return null;
            }
            if (tim.ucesnici.FirstOrDefault(u => u.UserName == ucesnikUserName) != null) {
                throw new Exception("Ucesnik je vec pridruzen timu.");
            }
            tim.ucesnici.Add(ucesnik);

            await _context.SaveChangesAsync();

            return tim;
        }
    }
}
