using api.Entities.User;

namespace api.RepositoryInterface
{
    public interface IUserRepository
    {
        Task<User> GetByUsernameAsync(string username, string password); // Fetch a user by username
        Task<bool> RegisterUserAsync(RegisterUser user); // Add a new user to the database
    }
}
