using AutoMapper;
using BusinessLogicLayer.DTOs;
using BusinessLogicLayer.Service.Interface;
using DataAccessLayer.Repository.Interface;

namespace BusinessLogicLayer.Service.Class
{
    public class TimService:ITimService
    {
        private readonly ITimRepository _repository;
        private readonly IMapper _mapper;
        public TimService(ITimRepository repository,IMapper mapper) {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<IEnumerable<TimGetResponse>> getAll()
        {
            var tims = await _repository.getAll();
            var timGetResponses = _mapper.Map<IEnumerable<TimGetResponse>>(tims);
            return timGetResponses;
        }

        public async Task<TimGetResponse> getTimById(int id)
        {
            var tim = await _repository.getTimById(id);
            var timGetResponse = _mapper.Map<TimGetResponse>(tim);
            return timGetResponse;
        }

        public async Task<IEnumerable<TimGetResponse>> getTimoviByUcesnik(string ucesnikUserName)
        {
            var tims = await _repository.getTimoviByUcesnik(ucesnikUserName);
            var timGetResponses = _mapper.Map<IEnumerable<TimGetResponse>>(tims);
            return timGetResponses;
        }

        public async Task<TimGetResponse> joinTim(int timId, string ucesnikUserName)
        {
            var tim = await _repository.joinTim(timId, ucesnikUserName);
            return _mapper.Map<TimGetResponse>(tim);
        }
    }
}
