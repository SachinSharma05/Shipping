using api.DTOs;
using api.Interface;
using api.Repository;
using api.RepositoryInterface;
using api.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System.Text;

namespace api
{
    public class Startup
    {
        private readonly IConfiguration _config;
        public void ConfigureServices(IServiceCollection services)
        {
            var key = Encoding.ASCII.GetBytes(_config["Jwt:Key"]);  // Make sure to use the same key

            services.AddAuthentication(x =>
            {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(x =>
            {
                x.RequireHttpsMetadata = false;
                x.SaveToken = true;
                x.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(key),
                    ValidateIssuer = true,   // Consider enabling in production
                    ValidIssuer = _config["Jwt:Issuer"], // Read from appsettings
                    ValidateAudience = true, // Consider enabling in production
                    ValidAudience = _config["Jwt:Issuer"] // or another audience value
                };
            });

            services.AddCors(options =>
            {
                options.AddPolicy("AllowAllOrigins",  // Consistent CORS policy name
                    builder =>
                    {
                        builder.AllowAnyOrigin()
                               .AllowAnyMethod()
                               .AllowAnyHeader();
                    });
            });

            services.AddControllers();

            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(_config.GetConnectionString("DefaultConnection")));

            // Register your services and repositories
            services.AddScoped<IUserService, UserService>();
            services.AddScoped<IUserRepository, UserRepository>();

            services.AddSwaggerGen(c =>
            {
                c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
                {
                    Description = "JWT Authorization header using the Bearer scheme (Example: 'Bearer 12345abcdef')",
                    Name = "Authorization",
                    In = ParameterLocation.Header,
                    Type = SecuritySchemeType.ApiKey,
                    Scheme = "Bearer"
                });
                c.AddSecurityRequirement(new OpenApiSecurityRequirement{
            {
                new OpenApiSecurityScheme
                {
                    Reference = new OpenApiReference
                    {
                        Type = ReferenceType.SecurityScheme,
                        Id = "Bearer"
                    }
                },
                new string[] {}
            }});
            });
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting(); // First, set up routing

            app.UseCors("AllowAllOrigins"); // Ensure the CORS policy is applied here

            app.UseAuthentication();  // Then authentication
            app.UseAuthorization();   // Then authorization

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers(); // Map controllers
            });
        }
    }
}
