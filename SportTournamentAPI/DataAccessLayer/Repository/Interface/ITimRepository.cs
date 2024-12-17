using DataAccessLayer.Model;

namespace DataAccessLayer.Repository.Interface
{
    public interface ITimRepository
    {
        Task<IEnumerable<Tim>> getAll();

        Task<IEnumerable<Tim>> getTimoviByUcesnik(string ucesnikUserName);

        Task<Tim> joinTim(int timId,string ucesnikUserName);
    }
}
