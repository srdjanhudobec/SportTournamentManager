using BusinessLogicLayer.DTOs;
using DataAccessLayer.Model;

namespace BusinessLogicLayer.Service.Interface
{
    public interface ITimService
    {
        Task<IEnumerable<TimGetResponse>> getAll();

        Task<IEnumerable<TimGetResponse>> getTimoviByUcesnik(string ucesnikUserName);

        Task<TimGetResponse> joinTim(int timId, string ucesnikUserName);
    }
}
