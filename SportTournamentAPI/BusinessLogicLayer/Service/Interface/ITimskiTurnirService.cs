using DataAccessLayer.Model;

namespace BusinessLogicLayer.Service.Interface
{
    public interface ITimskiTurnirService
    {
        Task<IEnumerable<TimskiTurnir>> getTimskiTurniriByTim(int timId);
    }
}
