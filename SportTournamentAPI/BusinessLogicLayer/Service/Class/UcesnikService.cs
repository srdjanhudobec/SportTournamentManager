using BusinessLogicLayer.Service.Interface;
using DataAccessLayer.Helper;
using DataAccessLayer.Repository.Interface;

namespace BusinessLogicLayer.Service.Class
{
    public class UcesnikService : IUcesnikService
    {
        private readonly IUcesnikRepository _repository;

        public UcesnikService(IUcesnikRepository repository)
        {
            _repository = repository;
        }
        public async Task<string> Login(UcesnikLoginDTO ucesnik)
        {
            return await _repository.Login(ucesnik);
        }

        public async Task<UcesnikRegisterDTO> RegisterUcesnik(UcesnikRegisterDTO ucesnik)
        {
            return await _repository.RegisterUcesnik(ucesnik);
        }
    }
}
