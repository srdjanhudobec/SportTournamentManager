using DataAccessLayer.Data;
using DataAccessLayer.Model;
using DataAccessLayer.Repository.Interface;
using Microsoft.EntityFrameworkCore;

namespace DataAccessLayer.Repository.Class
{
    public class TimskiTurnirRepository:ITimskiTurnirRepository
    {
        private readonly DataContext _context;

        public TimskiTurnirRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<TimskiTurnir>> getTimskiTurniriByTim(int timId)
        {
            return await _context.TimskiTurniri
                .Include(t => t.timovi)
                .Where(t => t.timovi.Any(u => u.id == timId))
                .ToListAsync();
        }
    }
}
