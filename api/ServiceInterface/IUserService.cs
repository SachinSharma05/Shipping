using api.Entities.User;

namespace api.Interface
{
    public interface IUserService
    {
        Task<User> ValidateUserAsync(string username, string password);
        string GenerateJwtToken(User user);
        Task RegisterUserAsync(User user);
    }
}
