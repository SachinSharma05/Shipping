using api.Entities.User;

namespace api.RepositoryInterface
{
    public interface IUserRepository
    {
        Task<User> GetByUsernameAsync(string username); // Fetch a user by username
        Task AddUserAsync(User user); // Add a new user to the database
    }
}
