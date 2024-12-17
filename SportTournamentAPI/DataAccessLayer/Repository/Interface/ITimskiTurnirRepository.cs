using DataAccessLayer.Model;

namespace DataAccessLayer.Repository.Interface
{
    public interface ITimskiTurnirRepository
    {
        Task<IEnumerable<TimskiTurnir>> getTimskiTurniriByTim(int timId);

    }
}
