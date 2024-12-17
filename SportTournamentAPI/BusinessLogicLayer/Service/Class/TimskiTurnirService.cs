using BusinessLogicLayer.Service.Interface;
using DataAccessLayer.Model;
using DataAccessLayer.Repository.Interface;

namespace BusinessLogicLayer.Service.Class
{
    public class TimskiTurnirService : ITimskiTurnirService
    {
        private readonly ITimskiTurnirRepository _repository;

        public TimskiTurnirService(ITimskiTurnirRepository repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<TimskiTurnir>> getTimskiTurniriByTim(int timId)
        {
            return await _repository.getTimskiTurniriByTim(timId);
        }
    }
}
