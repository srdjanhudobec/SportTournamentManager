using DataAccessLayer.Helper;

namespace DataAccessLayer.Repository.Interface
{
    public interface IUcesnikRepository
    {
        Task<string> Login(UcesnikLoginDTO ucesnik);
        Task<UcesnikRegisterDTO> RegisterUcesnik(UcesnikRegisterDTO ucesnik);
    }
}
