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
        public Task<string> Login(UcesnikLoginDTO ucesnik)
        {
            return _repository.Login(ucesnik);
        }

        public Task<UcesnikRegisterDTO> RegisterUcesnik(UcesnikRegisterDTO ucesnik)
        {
            return _repository.RegisterUcesnik(ucesnik);
        }
    }
}
