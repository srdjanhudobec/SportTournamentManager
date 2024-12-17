using DataAccessLayer.Helper;

namespace BusinessLogicLayer.Service.Interface
{
    public interface IUcesnikService
    {
        Task<string> Login(UcesnikLoginDTO ucesnik);
        Task<UcesnikRegisterDTO> RegisterUcesnik(UcesnikRegisterDTO ucesnik);
    }
}
