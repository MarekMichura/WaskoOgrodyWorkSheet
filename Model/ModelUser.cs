using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

public class ModelUser : IdentityUser
{
  [Required]
  [StringLength(50)]
  public required string FirstName { get; set; }
  [Required]
  [StringLength(50)]
  public required string LastName { get; set; }
  [Required]
  public bool ChangePassword { get; set; } = true;

  public IEnumerable<ModelWorkDay> WorkDays { get; set; } = [];

  public static void ModelCreate(ModelBuilder builder)
  {
    builder.Entity<ModelUser>()
      .Ignore(x => x.PhoneNumber)
      .Ignore(x => x.PhoneNumberConfirmed)
      .Ignore(x => x.AccessFailedCount)
      .Ignore(x => x.TwoFactorEnabled)
      .Ignore(x => x.LockoutEnabled)
      .Ignore(x => x.LockoutEnd)
      .Ignore(x => x.EmailConfirmed)
      .HasData(DefaultUserData);

    builder.Entity<IdentityRole>().HasData(DefaultRoles);
    builder.Entity<IdentityUserRole<string>>().HasData(DefaultUserRoles);
  }

  private class UserModelStorage
  {
    public Guid ID { get; init; }
    public string UserName { get; init; } = string.Empty;
    public string Password { get; init; } = string.Empty;
    public string Email { get; init; } = string.Empty;
    public string FirstName { get; init; } = string.Empty;
    public string LastName { get; init; } = string.Empty;

    public UserModelStorage(string username, string password, string email, string firstName, string lastName)
    {
      ID = Guid.NewGuid();
      UserName = username;
      Password = password;
      Email = email;
      FirstName = firstName;
      LastName = lastName;
    }

    public static implicit operator ModelUser(UserModelStorage model)
    {
      PasswordHasher<ModelUser> passHash = new();
      ModelUser user = new()
      {
        Id = model.ID.ToString(),
        UserName = model.UserName,
        Email = model.Email,
        FirstName = model.FirstName,
        LastName = model.LastName,

        NormalizedUserName = model.UserName.ToUpper(),
        NormalizedEmail = model.Email.ToUpper(),

        SecurityStamp = Guid.NewGuid().ToString(),
      };

      user.PasswordHash = passHash.HashPassword(user, model.Password);
      return user;
    }
  }

  private class RoleStorage
  {
    public Guid ID { get; init; }
    public string Name { get; init; }

    public RoleStorage(string name)
    {
      ID = Guid.NewGuid();
      Name = name;
    }

    public static implicit operator IdentityRole(RoleStorage model) => new()
    {
      Id = model.ID.ToString(),
      Name = model.Name,
      NormalizedName = model.Name.ToUpper(),
      ConcurrencyStamp = Guid.NewGuid().ToString()
    };
  }

  private class UserModelRoleStorage
  {
    public ModelUser User { get; init; }
    public IdentityRole Role { get; init; }

    public UserModelRoleStorage(ModelUser user, IdentityRole role)
    {
      User = user;
      Role = role;
    }

    public static implicit operator IdentityUserRole<string>(UserModelRoleStorage model) => new()
    {
      RoleId = model.Role.Id,
      UserId = model.User.Id
    };
  }

  internal static IReadOnlyList<ModelUser> DefaultUserData = [
    new UserModelStorage("Marek", "J4ZH^quOU$GiCcR8uaC1Z2N+7h_g^}DQ", "marekti012@gmail.com", "Marek", "Michura"),
    new UserModelStorage("Wasko", ".fnPqCNfGgU7AN%corW6g^FmoAPDX8q%", "ogrodywasko@gmail.com", "Szef", "Wszystkich szefów"),
    new UserModelStorage("User1", "@@jkpxClA:$RT3(Ckc_$jIKTu%(K4L5V", "user1@gmail.com", "Name", "LastName"),
    new UserModelStorage("User2", "@@jkpxClA:$RT3(Ckc_$jIKTu%(K4L5V", "user2@gmail.com", "Name", "LastName"),
  ];
  internal static IReadOnlyList<IdentityRole> DefaultRoles = [
    new RoleStorage("User"),
    new RoleStorage("Admin"),
    new RoleStorage("Owner")
  ];
  private static IReadOnlyList<IdentityUserRole<string>> DefaultUserRoles =
  [
    new IdentityUserRole<string>{UserId = DefaultUserData[0].Id, RoleId = DefaultRoles[0].Id},
    new IdentityUserRole<string>{UserId = DefaultUserData[0].Id, RoleId = DefaultRoles[1].Id},

    new IdentityUserRole<string>{UserId = DefaultUserData[1].Id, RoleId = DefaultRoles[0].Id},
    new IdentityUserRole<string>{UserId = DefaultUserData[1].Id, RoleId = DefaultRoles[1].Id},
    new IdentityUserRole<string>{UserId = DefaultUserData[1].Id, RoleId = DefaultRoles[2].Id},

    new IdentityUserRole<string>{UserId = DefaultUserData[2].Id, RoleId = DefaultRoles[0].Id},
    new IdentityUserRole<string>{UserId = DefaultUserData[3].Id, RoleId = DefaultRoles[0].Id},
  ];
}