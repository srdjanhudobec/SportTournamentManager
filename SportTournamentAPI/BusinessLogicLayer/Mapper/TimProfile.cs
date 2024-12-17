using AutoMapper;
using BusinessLogicLayer.DTOs;
using DataAccessLayer.Model;

namespace BusinessLogicLayer.Mapper
{
    public class TimProfile:Profile
    {
        public TimProfile() {
            CreateMap<Tim, TimGetResponse>()
            .ForMember(dest => dest.ucesnici, opt => opt.MapFrom(src => src.ucesnici.Select(u => u.UserName).ToList()));
            CreateMap<TimGetResponse, Tim>();
        }
    }
}
