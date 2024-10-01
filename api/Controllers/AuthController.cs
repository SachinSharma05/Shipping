using api.Entities.User;
using api.Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IUserService _userService;

        public AuthController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginModel loginModel)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var user = await _userService.ValidateUserAsync(loginModel.Username, loginModel.Password);
            if (user == null)
                return Unauthorized("Invalid username or password.");

            // Generate JWT token (optional)
            var token = _userService.GenerateJwtToken(user);

            return Ok(new { Token = token, Username = user.UserName });
        }
    }
}
