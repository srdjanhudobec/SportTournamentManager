using BusinessLogicLayer.DTOs;
using DataAccessLayer.Model;

namespace BusinessLogicLayer.Service.Interface
{
    public interface ITimService
    {
        Task<IEnumerable<TimGetResponse>> getAll();

        Task<TimGetResponse> getTimById(int id);

        Task<IEnumerable<TimGetResponse>> getTimoviByUcesnik(string ucesnikUserName);

        Task<TimGetResponse> joinTim(int timId, string ucesnikUserName);
    }
}
