using api.DTOs;
using api.Entities.User;
using api.RepositoryInterface;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Text;

namespace api.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly ApplicationDbContext _context;
        private readonly IPasswordHasher<User> _passwordHasher;

        public UserRepository(ApplicationDbContext context, IPasswordHasher<User> passwordHasher)
        {
            _context = context;
            _passwordHasher = passwordHasher;
        }

        public async Task<bool> RegisterUserAsync(RegisterUser registerUser)
        {
            if (await _context.Users.AnyAsync(u => u.Email == registerUser.Email || u.UserName == registerUser.Username))
            {
                return false; // User already exists
            }

            var salt = GenerateSalt();
            // Create a new User entity
            var user = new User
            {
                UserName = registerUser.Username,
                Email = registerUser.Email,
                Salt = salt,
                CreatedDate = DateTime.UtcNow
            };

            // Hash the password
            user.PasswordHash = HashPassword(registerUser.Password, salt);

            // Add and save the user to the database
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return true;
        }

        public async Task<User> GetByUsernameAsync(string username, string password)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.UserName == username);
            if (user == null)
            {
                return null;
            }

            var hashedPassword = HashPassword(password, user.Salt);
            if (user.PasswordHash != hashedPassword)
            {
                return null;
            }

            return user;
        }

        #region Private Method
        private string GenerateSalt()
        {
            byte[] saltBytes = new byte[16];
            using (var rng = new System.Security.Cryptography.RNGCryptoServiceProvider())
            {
                rng.GetBytes(saltBytes);
            }
            return Convert.ToBase64String(saltBytes);
        }

        private string HashPassword(string password, string salt)
        {
            var combinedPassword = password + salt;
            using (var sha256 = System.Security.Cryptography.SHA256.Create())
            {
                byte[] hashedBytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(combinedPassword));
                return Convert.ToBase64String(hashedBytes);
            }
        }
        #endregion
    }
}
