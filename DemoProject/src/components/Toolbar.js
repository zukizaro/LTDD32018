using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MXHCoreApp.Application.Interfaces;
using MXHCoreApp.Application.ViewModels.Page;
using MXHCoreApp.Data.Entities;
using MXHCoreApp.Utilities.Dtos;
using MXHCoreApp.Data.EF.Repositories;
using MXHCoreApp.Data.EF;
using MXHCoreApp.Utilities.Constants;
using MXHCoreApp.Application.Searchs;

namespace MXHCoreApp.Application.Implementation
{
    public class PageUserService : BaseService, IPageUserService
    {
        private IRepository<PageUser> _PageUserRepository;
        private IUnitOfWork _unitOfWork;

        public PageUserService(IUnitOfWork unitOfWork) : base(unitOfWork)
        {
            _unitOfWork = unitOfWork;
            _PageUserRepository = unitOfWork.PageUserRepository;
        }

        public bool Add(PageUserViewModel entityvm)
        {
            try
            {
                var entity = Mapper.Map<PageUser>(entityvm);
                entity.Status = CommonConstants.StatusActive;
                _PageUserRepository.Insert(entity);
                _unitOfWork.Commit();
                return true;
            }
            catch
            {
                return false;
            }
        }

        public bool Delete(int id)
        {
            try
            {
                var entity = _PageUserRepository.GetById(id);
                entity.Status = CommonConstants.StatusDeactivated;
                _PageUserRepository.Update(entity);
                _unitOfWork.Commit();
                return true;
            }
            catch
            {
                return false;
            }
        }

        public List<PageUserViewModel> GetAll()
        {
            var entities = _PageUserRepository.GetAll().ToList();
            var results = Mapp