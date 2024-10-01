using api.DTOs;
using api.Entities.User;
using api.RepositoryInterface;
using Microsoft.EntityFrameworkCore;
using System;

namespace api.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly ApplicationDbContext _context;

        public UserRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public Task AddUserAsync(User user)
        {
            throw new NotImplementedException();
        }

        public async Task<User> GetByUsernameAsync(string username)
        {
            return await _context.Users.FirstOrDefaultAsync(u => u.UserName == username);
        }
    }
}
