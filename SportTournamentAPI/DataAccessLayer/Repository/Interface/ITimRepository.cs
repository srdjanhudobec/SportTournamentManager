﻿using DataAccessLayer.Model;

namespace DataAccessLayer.Repository.Interface
{
    public interface ITimRepository
    {
        Task<IEnumerable<Tim>> getAll();

        Task<Tim> joinTim(int timId,string ucesnikUserName);
    }
}