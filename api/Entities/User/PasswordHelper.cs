using System.Security.Cryptography;

namespace api.Entities.User
{
    public static class PasswordHelper
    {
        public static string HashPassword(string password, out string salt)
        {
            // Generate a cryptographic random salt
            byte[] saltBytes = new byte[16];
            using (var rng = new RNGCryptoServiceProvider())
            {
                rng.GetBytes(saltBytes);
            }
            salt = Convert.ToBase64String(saltBytes);

            // Hash the password with the salt
            var pbkdf2 = new Rfc2898DeriveBytes(password, saltBytes, 10000);
            byte[] hashBytes = pbkdf2.GetBytes(20);

            // Return the hashed password as a base64 string
            return Convert.ToBase64String(hashBytes);
        }

        public static bool VerifyPassword(string enteredPassword, string storedHash, string storedSalt)
        {
            // Convert the stored salt back to bytes
            byte[] saltBytes = Convert.FromBase64String(storedSalt);

            // Hash the entered password with the stored salt
            var pbkdf2 = new Rfc2898DeriveBytes(enteredPassword, saltBytes, 10000);
            byte[] enteredPasswordHash = pbkdf2.GetBytes(20);

            // Compare the hash of the entered password with the stored password hash
            return Convert.ToBase64String(enteredPasswordHash) == storedHash;
        }
    }
}
