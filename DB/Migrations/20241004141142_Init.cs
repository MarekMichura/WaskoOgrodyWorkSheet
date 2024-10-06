using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Server.Migrations
{
    /// <inheritdoc />
    public partial class Init : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AspNetUsers",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(36)", maxLength: 36, nullable: false),
                    Active = table.Column<bool>(type: "bit", nullable: false),
                    UserName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    NormalizedUserName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Email = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    NormalizedEmail = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    EmailConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    PasswordHash = table.Column<string>(type: "nvarchar(84)", maxLength: 84, nullable: false),
                    SecurityStamp = table.Column<string>(type: "nvarchar(36)", maxLength: 36, nullable: false),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(36)", maxLength: 36, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUsers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "LastActualizations",
                columns: table => new
                {
                    ID = table.Column<string>(type: "nvarchar(36)", maxLength: 36, nullable: false),
                    TableName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    LastUpdated = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LastActualizations", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "WorkLocations",
                columns: table => new
                {
                    ID = table.Column<string>(type: "nvarchar(36)", maxLength: 36, nullable: false, defaultValueSql: "NewId()"),
                    Name = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Active = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WorkLocations", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "AspNetRoles",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(36)", maxLength: 36, nullable: false),
                    AuthorID = table.Column<string>(type: "nvarchar(36)", maxLength: 36, nullable: false),
                    TitleStrength = table.Column<int>(type: "int", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: false),
                    NormalizedName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoles", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetRoles_AspNetUsers_AuthorID",
                        column: x => x.AuthorID,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserClaims",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<string>(type: "nvarchar(36)", nullable: false),
                    ClaimType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClaimValue = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUserClaims_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserLogins",
                columns: table => new
                {
                    LoginProvider = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ProviderKey = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ProviderDisplayName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserId = table.Column<string>(type: "nvarchar(36)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserLogins", x => new { x.LoginProvider, x.ProviderKey });
                    table.ForeignKey(
                        name: "FK_AspNetUserLogins_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserTokens",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "nvarchar(36)", nullable: false),
                    LoginProvider = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Value = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserTokens", x => new { x.UserId, x.LoginProvider, x.Name });
                    table.ForeignKey(
                        name: "FK_AspNetUserTokens_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Bonus",
                columns: table => new
                {
                    ID = table.Column<string>(type: "nvarchar(36)", maxLength: 36, nullable: false, defaultValueSql: "NewId()"),
                    Bonus = table.Column<decimal>(type: "money", nullable: false),
                    BonusDescription = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Date = table.Column<DateOnly>(type: "date", nullable: false, defaultValueSql: "GETDATE()"),
                    CreatorID = table.Column<string>(type: "nvarchar(36)", maxLength: 36, nullable: false),
                    TargetID = table.Column<string>(type: "nvarchar(36)", maxLength: 36, nullable: false),
                    ApproverID = table.Column<string>(type: "nvarchar(36)", maxLength: 36, nullable: true),
                    BonusRejectionReason = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Bonus", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Bonus_AspNetUsers_ApproverID",
                        column: x => x.ApproverID,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Bonus_AspNetUsers_CreatorID",
                        column: x => x.CreatorID,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Bonus_AspNetUsers_TargetID",
                        column: x => x.TargetID,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Chords",
                columns: table => new
                {
                    ID = table.Column<string>(type: "nvarchar(36)", maxLength: 36, nullable: false, defaultValueSql: "NewId()"),
                    Name = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Active = table.Column<bool>(type: "bit", nullable: false),
                    CreatorID = table.Column<string>(type: "nvarchar(36)", maxLength: 36, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Chords", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Chords_AspNetUsers_CreatorID",
                        column: x => x.CreatorID,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "DayOffDates",
                columns: table => new
                {
                    ID = table.Column<string>(type: "nvarchar(36)", maxLength: 36, nullable: false, defaultValueSql: "NewId()"),
                    Reason = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Off = table.Column<bool>(type: "bit", nullable: false),
                    StopActive = table.Column<DateOnly>(type: "date", nullable: true),
                    StartDate = table.Column<DateOnly>(type: "date", nullable: false),
                    EndDate = table.Column<DateOnly>(type: "date", nullable: true),
                    AuthorID = table.Column<string>(type: "nvarchar(36)", maxLength: 36, nullable: false),
                    ApproverID = table.Column<string>(type: "nvarchar(36)", maxLength: 36, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DayOffDates", x => x.ID);
                    table.ForeignKey(
                        name: "FK_DayOffDates_AspNetUsers_ApproverID",
                        column: x => x.ApproverID,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_DayOffDates_AspNetUsers_AuthorID",
                        column: x => x.AuthorID,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "DayOffExpression",
                columns: table => new
                {
                    ID = table.Column<string>(type: "nvarchar(36)", maxLength: 36, nullable: false, defaultValueSql: "NewId()"),
                    Reason = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Off = table.Column<bool>(type: "bit", nullable: false),
                    Year = table.Column<short>(type: "smallint", nullable: true),
                    Month = table.Column<byte>(type: "tinyint", nullable: true),
                    Day = table.Column<byte>(type: "tinyint", nullable: true),
                    DayOfWeek = table.Column<byte>(type: "tinyint", nullable: true),
                    DaysAfterEaster = table.Column<short>(type: "smallint", nullable: true),
                    Order = table.Column<byte>(type: "tinyint", nullable: false),
                    StopActive = table.Column<DateOnly>(type: "date", nullable: true),
                    AuthorID = table.Column<string>(type: "nvarchar(36)", maxLength: 36, nullable: false),
                    ApproverID = table.Column<string>(type: "nvarchar(36)", maxLength: 36, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DayOffExpression", x => x.ID);
                    table.ForeignKey(
                        name: "FK_DayOffExpression_AspNetUsers_ApproverID",
                        column: x => x.ApproverID,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_DayOffExpression_AspNetUsers_AuthorID",
                        column: x => x.AuthorID,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Founds",
                columns: table => new
                {
                    ID = table.Column<string>(type: "nvarchar(36)", maxLength: 36, nullable: false, defaultValueSql: "NewId()"),
                    Founded = table.Column<decimal>(type: "money", nullable: false),
                    FoundDescription = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Date = table.Column<DateOnly>(type: "date", nullable: false, defaultValueSql: "GETDATE()"),
                    CreatorID = table.Column<string>(type: "nvarchar(36)", maxLength: 36, nullable: false),
                    TargetID = table.Column<string>(type: "nvarchar(36)", maxLength: 36, nullable: false),
                    ApproverID = table.Column<string>(type: "nvarchar(36)", maxLength: 36, nullable: true),
                    FoundRejectionReason = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Founds", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Founds_AspNetUsers_ApproverID",
                        column: x => x.ApproverID,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Founds_AspNetUsers_CreatorID",
                        column: x => x.CreatorID,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Founds_AspNetUsers_TargetID",
                        column: x => x.TargetID,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "ModelNotification",
                columns: table => new
                {
                    ID = table.Column<string>(type: "nvarchar(36)", maxLength: 36, nullable: false, defaultValueSql: "NewId()"),
                    TemplateName = table.Column<short>(type: "smallint", nullable: false),
                    Content = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TargetID = table.Column<string>(type: "nvarchar(36)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ModelNotification", x => x.ID);
                    table.ForeignKey(
                        name: "FK_ModelNotification_AspNetUsers_TargetID",
                        column: x => x.TargetID,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ModelProfil",
                columns: table => new
                {
                    ID = table.Column<string>(type: "nvarchar(36)", maxLength: 36, nullable: false),
                    FirstName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    WorkStartDate = table.Column<DateOnly>(type: "Date", nullable: false, defaultValueSql: "getdate()"),
                    ProfileImage = table.Column<byte[]>(type: "varbinary(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ModelProfil", x => x.ID);
                    table.ForeignKey(
                        name: "FK_ModelProfil_AspNetUsers_ID",
                        column: x => x.ID,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "ModelUserSalary",
                columns: table => new
                {
                    Date = table.Column<DateOnly>(type: "date", nullable: false, defaultValueSql: "GETDATE()"),
                    ID = table.Column<string>(type: "nvarchar(36)", maxLength: 36, nullable: false, defaultValueSql: "NewId()"),
                    HourlySalary = table.Column<decimal>(type: "money", nullable: false),
                    ApproverID = table.Column<string>(type: "nvarchar(36)", maxLength: 36, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ModelUserSalary", x => new { x.ID, x.Date });
                    table.ForeignKey(
                        name: "FK_ModelUserSalary_AspNetUsers_ApproverID",
                        column: x => x.ApproverID,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ModelUserSalary_AspNetUsers_ID",
                        column: x => x.ID,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "WorkLocationRoles",
                columns: table => new
                {
                    ID = table.Column<string>(type: "nvarchar(36)", maxLength: 36, nullable: false, defaultValueSql: "NewId()"),
                    Name = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    AuthorID = table.Column<string>(type: "nvarchar(36)", maxLength: 36, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WorkLocationRoles", x => x.ID);
                    table.ForeignKey(
                        name: "FK_WorkLocationRoles_AspNetUsers_AuthorID",
                        column: x => x.AuthorID,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "WorkHours",
                columns: table => new
                {
                    ID = table.Column<string>(type: "nvarchar(36)", maxLength: 36, nullable: false, defaultValueSql: "NewId()"),
                    AddDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Date = table.Column<DateOnly>(type: "date", nullable: false),
                    WorkStart = table.Column<TimeOnly>(type: "time", nullable: false),
                    WorkEnd = table.Column<TimeOnly>(type: "time", nullable: false),
                    Active = table.Column<bool>(type: "bit", nullable: false),
                    WorkLocationID = table.Column<string>(type: "nvarchar(36)", maxLength: 36, nullable: false),
                    UserID = table.Column<string>(type: "nvarchar(36)", maxLength: 36, nullable: false),
                    AuthorID = table.Column<string>(type: "nvarchar(36)", maxLength: 36, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WorkHours", x => x.ID);
                    table.ForeignKey(
                        name: "FK_WorkHours_AspNetUsers_AuthorID",
                        column: x => x.AuthorID,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_WorkHours_AspNetUsers_UserID",
                        column: x => x.UserID,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_WorkHours_WorkLocations_WorkLocationID",
                        column: x => x.WorkLocationID,
                        principalTable: "WorkLocations",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "AspNetRoleClaims",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RoleId = table.Column<string>(type: "nvarchar(36)", nullable: false),
                    ClaimType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClaimValue = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoleClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserRoles",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "nvarchar(36)", nullable: false),
                    RoleId = table.Column<string>(type: "nvarchar(36)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserRoles", x => new { x.UserId, x.RoleId });
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "WorkLocationTargetRoles",
                columns: table => new
                {
                    WorkLocationID = table.Column<string>(type: "nvarchar(36)", maxLength: 36, nullable: false),
                    RoleID = table.Column<string>(type: "nvarchar(36)", maxLength: 36, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WorkLocationTargetRoles", x => new { x.RoleID, x.WorkLocationID });
                    table.ForeignKey(
                        name: "FK_WorkLocationTargetRoles_AspNetRoles_RoleID",
                        column: x => x.RoleID,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_WorkLocationTargetRoles_WorkLocations_WorkLocationID",
                        column: x => x.WorkLocationID,
                        principalTable: "WorkLocations",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "ChordPrices",
                columns: table => new
                {
                    ID = table.Column<string>(type: "nvarchar(36)", maxLength: 36, nullable: false, defaultValueSql: "NewId()"),
                    Date = table.Column<DateOnly>(type: "date", nullable: false),
                    Price = table.Column<decimal>(type: "money", nullable: false),
                    ChordID = table.Column<string>(type: "nvarchar(36)", maxLength: 36, nullable: false),
                    CreatorID = table.Column<string>(type: "nvarchar(36)", maxLength: 36, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ChordPrices", x => x.ID);
                    table.ForeignKey(
                        name: "FK_ChordPrices_AspNetUsers_CreatorID",
                        column: x => x.CreatorID,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ChordPrices_Chords_ChordID",
                        column: x => x.ChordID,
                        principalTable: "Chords",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "DayOffDatesTargetRole",
                columns: table => new
                {
                    TargetID = table.Column<string>(type: "nvarchar(36)", maxLength: 36, nullable: false),
                    DayOffID = table.Column<string>(type: "nvarchar(36)", maxLength: 36, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DayOffDatesTargetRole", x => new { x.DayOffID, x.TargetID });
                    table.ForeignKey(
                        name: "FK_DayOffDatesTargetRole_AspNetUsers_TargetID",
                        column: x => x.TargetID,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_DayOffDatesTargetRole_DayOffDates_DayOffID",
                        column: x => x.DayOffID,
                        principalTable: "DayOffDates",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "DayOffDatesTargetUser",
                columns: table => new
                {
                    TargetID = table.Column<string>(type: "nvarchar(36)", maxLength: 36, nullable: false),
                    DayOffID = table.Column<string>(type: "nvarchar(36)", maxLength: 36, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DayOffDatesTargetUser", x => new { x.DayOffID, x.TargetID });
                    table.ForeignKey(
                        name: "FK_DayOffDatesTargetUser_AspNetRoles_TargetID",
                        column: x => x.TargetID,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_DayOffDatesTargetUser_DayOffDates_DayOffID",
                        column: x => x.DayOffID,
                        principalTable: "DayOffDates",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "DayOffExpressionTargetRole",
                columns: table => new
                {
                    TargetID = table.Column<string>(type: "nvarchar(36)", maxLength: 36, nullable: false),
                    DayOffID = table.Column<string>(type: "nvarchar(36)", maxLength: 36, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DayOffExpressionTargetRole", x => new { x.DayOffID, x.TargetID });
                    table.ForeignKey(
                        name: "FK_DayOffExpressionTargetRole_AspNetUsers_TargetID",
                        column: x => x.TargetID,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_DayOffExpressionTargetRole_DayOffExpression_DayOffID",
                        column: x => x.DayOffID,
                        principalTable: "DayOffExpression",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "DayOffExpressionTargetUser",
                columns: table => new
                {
                    TargetID = table.Column<string>(type: "nvarchar(36)", maxLength: 36, nullable: false),
                    DayOffID = table.Column<string>(type: "nvarchar(36)", maxLength: 36, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DayOffExpressionTargetUser", x => new { x.DayOffID, x.TargetID });
                    table.ForeignKey(
                        name: "FK_DayOffExpressionTargetUser_AspNetRoles_TargetID",
                        column: x => x.TargetID,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_DayOffExpressionTargetUser_DayOffExpression_DayOffID",
                        column: x => x.DayOffID,
                        principalTable: "DayOffExpression",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "ModelWorkLocationRoleWorkLocation",
                columns: table => new
                {
                    RoleID = table.Column<string>(type: "nvarchar(36)", maxLength: 36, nullable: false),
                    LocationID = table.Column<string>(type: "nvarchar(36)", maxLength: 36, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ModelWorkLocationRoleWorkLocation", x => new { x.LocationID, x.RoleID });
                    table.ForeignKey(
                        name: "FK_ModelWorkLocationRoleWorkLocation_WorkLocationRoles_RoleID",
                        column: x => x.RoleID,
                        principalTable: "WorkLocationRoles",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ModelWorkLocationRoleWorkLocation_WorkLocations_LocationID",
                        column: x => x.LocationID,
                        principalTable: "WorkLocations",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "ModelWorkChord",
                columns: table => new
                {
                    ID = table.Column<string>(type: "nvarchar(36)", maxLength: 36, nullable: false, defaultValueSql: "NewId()"),
                    Quantity = table.Column<long>(type: "bigint", nullable: false),
                    Date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Active = table.Column<bool>(type: "bit", nullable: false),
                    ChordID = table.Column<string>(type: "nvarchar(36)", maxLength: 36, nullable: false),
                    WorkHourID = table.Column<string>(type: "nvarchar(36)", maxLength: 36, nullable: false),
                    AuthorID = table.Column<string>(type: "nvarchar(36)", maxLength: 36, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ModelWorkChord", x => x.ID);
                    table.ForeignKey(
                        name: "FK_ModelWorkChord_AspNetUsers_AuthorID",
                        column: x => x.AuthorID,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ModelWorkChord_Chords_ChordID",
                        column: x => x.ChordID,
                        principalTable: "Chords",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ModelWorkChord_WorkHours_WorkHourID",
                        column: x => x.WorkHourID,
                        principalTable: "WorkHours",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "Active", "ConcurrencyStamp", "Email", "EmailConfirmed", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "SecurityStamp", "UserName" },
                values: new object[,]
                {
                    { "26453523-4cb2-448a-90d4-663072a57ecc", false, "15b30608-fbea-4a80-81e9-a5dec6d9a76d", "user@gmail.com", false, "USER@GMAIL.COM", "USER", "AQAAAAIAAYagAAAAEInI35xqVlRsmy0NW0xZy/Ly5SPp39seveVgjyqyERNyqnHhYOwPSDAKYBqWrcwv9A==", "6ed3c55f-dd15-40f7-885f-451712b96b19", "user" },
                    { "68553cdf-0a20-4969-9693-c49315c7df58", true, "501e13e2-6635-4849-b903-d21b0476d978", "eryk@gmail.com", false, "ERYK@GMAIL.COM", "ERYK", "AQAAAAIAAYagAAAAECLzGKjOhoG83+Yag6lBtnhdEQwlFJ0UlQNweUqJ+Q63Kh+ghz2w66O277d9uLbEAA==", "76287ccf-889d-4af5-99dd-a2353bfb6152", "Eryk" },
                    { "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f", true, "5946e931-5f03-40ed-a3b9-61a67907d71f", "loszka@gmail.com", false, "LOSZKA@GMAIL.COM", "LOSZKA", "AQAAAAIAAYagAAAAEPSEMFfmWi64R4ftk9/5g2knpLZKnUY8qRa7gqBFkydgTmhxXvQSA9vJaOrZh7ReRQ==", "0c3fb8b0-6c13-46fd-a889-7754e5642893", "Loszka" },
                    { "cb24a0c2-506f-4810-880b-7f6caa1c21b8", false, "80c9f42b-f53c-46b8-bc23-8b36d0a87808", "marekti012@gmail.com", false, "MAREKTI012@GMAIL.COM", "ADMIN", "AQAAAAIAAYagAAAAEMrAbv1Rt0uYW9kRsnpAb+Ann3BsI+IoP/clGuoMpxTvKH+SMjEjFSw2eFmxqBLDBQ==", "f37cd9b2-b35e-4fd5-bbdb-ede3c60f7f09", "admin" },
                    { "ec0f6916-7a14-4dd9-80e9-f20cd09cd6a9", true, "a3b89fe2-c5fe-4031-913c-1c1f693ab68c", "dima@gmail.com", false, "DIMA@GMAIL.COM", "DIMA", "AQAAAAIAAYagAAAAEFGCXsMXwPGlhlVwSkgHmke3CgQlWTH1WpIvZaN1YpQFYcCQMvQasElByo6VIez29g==", "d56ac5b4-6558-4fef-b2b0-16d6908d6ac3", "Dima" }
                });

            migrationBuilder.InsertData(
                table: "WorkLocations",
                columns: new[] { "ID", "Active", "Name" },
                values: new object[,]
                {
                    { "047921e7-1329-4542-acd3-119bcb645077", true, "Drive" },
                    { "0e267c34-0a14-4818-8ed3-6f835bf4108a", true, "Narama" },
                    { "1a5fc842-45c2-4eb1-b252-904e9e8a1725", true, "Kielce" },
                    { "1db06608-e532-45b2-b1a8-3cfeaab85f3d", true, "klimanowa" },
                    { "295508c3-b32e-4b97-bc9c-5b1eeef4c6fb", true, "Poleska" },
                    { "32319c27-ebab-415c-a836-f701595519d3", true, "Tarnów Dach" },
                    { "49667c7f-80d9-4436-ac6e-e11c2f96a1f5", true, "Grzegórzecka" },
                    { "5a3a2d6b-b21b-486e-bcf0-5cff0637396d", true, "Tarnów Eurovia" },
                    { "8ca4ff43-6da4-490e-ac6e-b493b7054baf", true, "Piaskowa" },
                    { "a5e51680-f19e-4836-926a-ecb947eae937", true, "Wizjonerów" },
                    { "b721d3d1-04cd-4244-9fa7-751b085aebfc", true, "Office" },
                    { "c1cfab1c-eb87-4a5f-919b-5ca7b1f7b50c", true, "Mogilska" },
                    { "c31c6339-82b5-4249-87dc-14e8b09a1276", true, "3maja" },
                    { "cf9220d9-b583-4831-aff4-c7517ff84888", true, "Henniger Graby" },
                    { "e4aa4014-3ae3-456c-ae08-d992f4713524", true, "Quattro" },
                    { "f90a6f03-1109-438e-bb07-1ba7e5900ea3", true, "Rondo" },
                    { "fbda133c-eeb6-4b07-a173-3873e87f3767", true, "Pychowicka" },
                    { "fd9991df-5d66-4b30-92df-a3c6b64748ca", true, "Nieustawiona" }
                });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "AuthorID", "ConcurrencyStamp", "Name", "NormalizedName", "TitleStrength" },
                values: new object[,]
                {
                    { "05e6fbeb-ad91-4dfb-bfc3-298fac57e6b4", "cb24a0c2-506f-4810-880b-7f6caa1c21b8", "ed543742-e2ab-442b-9b53-20a8c2c3b518", "Gardener", "GARDENER", 2 },
                    { "144d7ab4-8c81-4c03-98a8-4f6beb754a65", "cb24a0c2-506f-4810-880b-7f6caa1c21b8", "d8dc27ed-3111-45d2-acb5-788c2205696d", "Block_employer_found", "BLOCK_EMPLOYER_FOUND", 0 },
                    { "1d923116-d460-4809-b8d8-47d1c4216b2c", "cb24a0c2-506f-4810-880b-7f6caa1c21b8", "ef0f6972-d8f3-471d-9cf4-eff5fed3c02d", "Polish_holidays", "POLISH_HOLIDAYS", 0 },
                    { "264462d7-74f0-45c3-bcf2-7ad0741e7676", "cb24a0c2-506f-4810-880b-7f6caa1c21b8", "ba1ebb79-f766-483d-8e5d-90f5d2b56357", "Block_employer_day_off", "BLOCK_EMPLOYER_DAY_OFF", 0 },
                    { "38dcacea-ee73-4c98-bc7b-cfba196ccab5", "cb24a0c2-506f-4810-880b-7f6caa1c21b8", "18dced7c-5513-4914-b6aa-186bcc57e973", "Employer", "EMPLOYER", 1 },
                    { "8962bf18-a454-4c90-a7f8-0927ddb6d7e5", "cb24a0c2-506f-4810-880b-7f6caa1c21b8", "46cdeb6e-6bff-4b0b-a4cc-b6b8c9a4e88c", "Block_employer_bonus", "BLOCK_EMPLOYER_BONUS", 0 }
                });

            migrationBuilder.InsertData(
                table: "Bonus",
                columns: new[] { "ID", "ApproverID", "Bonus", "BonusDescription", "BonusRejectionReason", "CreatorID", "Date", "TargetID" },
                values: new object[,]
                {
                    { "5a744293-575a-44b5-83bd-91818e8924a4", null, 100m, "Za prace w sobote", null, "ec0f6916-7a14-4dd9-80e9-f20cd09cd6a9", new DateOnly(2024, 10, 4), "ec0f6916-7a14-4dd9-80e9-f20cd09cd6a9" },
                    { "66b3fdf2-ebcc-4bc7-8626-ae8c8941cf0b", null, 10m, "Za bycie kierowca", null, "68553cdf-0a20-4969-9693-c49315c7df58", new DateOnly(2024, 10, 4), "68553cdf-0a20-4969-9693-c49315c7df58" },
                    { "b055128e-a98a-421d-98d5-0ca059552457", null, 50m, "Za prace w sobote", null, "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f", new DateOnly(2024, 10, 4), "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f" }
                });

            migrationBuilder.InsertData(
                table: "Chords",
                columns: new[] { "ID", "Active", "CreatorID", "Name" },
                values: new object[,]
                {
                    { "34929715-6e9b-4ebd-bdb7-591fa7bfc1dc", true, "cb24a0c2-506f-4810-880b-7f6caa1c21b8", "C3" },
                    { "4a445a6a-07cf-490a-b1d4-37364ad15e4d", true, "cb24a0c2-506f-4810-880b-7f6caa1c21b8", "Drzewa 16-18" },
                    { "4c1dadaa-8d6a-4a02-99db-aeca64fdc0bf", true, "cb24a0c2-506f-4810-880b-7f6caa1c21b8", "c1,5" },
                    { "68c97d5f-b6b1-457c-addd-100873004b9d", true, "cb24a0c2-506f-4810-880b-7f6caa1c21b8", "C9" },
                    { "6b5f2ead-4357-482f-9022-e5eb02822313", true, "cb24a0c2-506f-4810-880b-7f6caa1c21b8", "p9" },
                    { "7b989a90-b2a4-4514-9020-756501c7061d", true, "cb24a0c2-506f-4810-880b-7f6caa1c21b8", "Goły korzeń" },
                    { "7dd19798-98d4-4411-9c21-8fe1e2212e8a", true, "cb24a0c2-506f-4810-880b-7f6caa1c21b8", "p11" },
                    { "b7e7da00-6c48-4bb0-8399-fe44f33d94e4", true, "cb24a0c2-506f-4810-880b-7f6caa1c21b8", "Drzewa 18-20" },
                    { "bd13c6b0-8e2c-4048-a42c-a843d8581466", true, "cb24a0c2-506f-4810-880b-7f6caa1c21b8", "C5" },
                    { "c92154e8-e9b9-4379-89db-23fdb7eef1e7", true, "cb24a0c2-506f-4810-880b-7f6caa1c21b8", "C2" },
                    { "d386701e-18cd-4cfc-ab3e-5d0750266bd7", true, "cb24a0c2-506f-4810-880b-7f6caa1c21b8", "Rozchodniki" }
                });

            migrationBuilder.InsertData(
                table: "DayOffDates",
                columns: new[] { "ID", "ApproverID", "AuthorID", "EndDate", "Off", "Reason", "StartDate", "StopActive" },
                values: new object[,]
                {
                    { "0e3f76fc-7878-44e2-acf3-8f8a262ace1c", null, "ec0f6916-7a14-4dd9-80e9-f20cd09cd6a9", null, true, "Niezaplanowana nieobecność", new DateOnly(2024, 6, 24), null },
                    { "3ee7fe12-ec83-444b-a064-9559eca11ba2", null, "68553cdf-0a20-4969-9693-c49315c7df58", null, true, "Niezaplanowana nieobecność", new DateOnly(2024, 6, 25), null },
                    { "c2b5dea3-85fc-469e-a265-088a7feb2172", null, "cb24a0c2-506f-4810-880b-7f6caa1c21b8", new DateOnly(2024, 7, 10), true, "Wolne z powodu widzi mi się autora", new DateOnly(2024, 7, 1), null },
                    { "c8011577-6247-419b-8695-1f8278c3c180", null, "68553cdf-0a20-4969-9693-c49315c7df58", null, true, "Niezaplanowana nieobecność", new DateOnly(2024, 6, 4), null },
                    { "fb981f9c-f565-49b6-a126-881d7d706f59", null, "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f", null, true, "Niezaplanowana nieobecność", new DateOnly(2024, 6, 7), null }
                });

            migrationBuilder.InsertData(
                table: "DayOffExpression",
                columns: new[] { "ID", "ApproverID", "AuthorID", "Day", "DayOfWeek", "DaysAfterEaster", "Month", "Off", "Order", "Reason", "StopActive", "Year" },
                values: new object[,]
                {
                    { "168416f7-c582-4c95-a336-13e477abace7", "cb24a0c2-506f-4810-880b-7f6caa1c21b8", "cb24a0c2-506f-4810-880b-7f6caa1c21b8", null, null, (short)60, null, true, (byte)128, "Boże Ciało", null, null },
                    { "1989fd11-07a0-496c-820d-cb78d06722a5", "cb24a0c2-506f-4810-880b-7f6caa1c21b8", "cb24a0c2-506f-4810-880b-7f6caa1c21b8", (byte)6, null, null, (byte)1, true, (byte)128, "Trzech Króli", null, null },
                    { "1ba70b58-d25d-4837-9661-369513254cb2", "cb24a0c2-506f-4810-880b-7f6caa1c21b8", "cb24a0c2-506f-4810-880b-7f6caa1c21b8", null, (byte)6, null, null, true, (byte)1, "Wolne soboty", null, null },
                    { "261d4eed-273d-4127-a49a-ea0201318421", "cb24a0c2-506f-4810-880b-7f6caa1c21b8", "cb24a0c2-506f-4810-880b-7f6caa1c21b8", (byte)26, null, null, (byte)12, true, (byte)128, "Boże narodzenie, dzień drugi", null, null },
                    { "324359d6-af00-4baf-bd61-afa615ed76b9", "cb24a0c2-506f-4810-880b-7f6caa1c21b8", "cb24a0c2-506f-4810-880b-7f6caa1c21b8", null, null, null, (byte)10, true, (byte)128, "Wolne dla najlepszego pracownika", null, null },
                    { "3c1e3bae-7e41-40fe-afef-930d8a91dbed", "cb24a0c2-506f-4810-880b-7f6caa1c21b8", "cb24a0c2-506f-4810-880b-7f6caa1c21b8", (byte)15, null, null, (byte)8, true, (byte)128, "Wniebowzięcie Najświętszej Maryi Panny", null, null },
                    { "4f072e47-9eef-4a3d-859b-f350e5c7c115", "cb24a0c2-506f-4810-880b-7f6caa1c21b8", "cb24a0c2-506f-4810-880b-7f6caa1c21b8", (byte)25, null, null, (byte)12, true, (byte)128, "Boże narodzenie, dzień pierwszy", null, null },
                    { "6b8ba2b0-f4fb-4370-945c-3da1394ce55e", "cb24a0c2-506f-4810-880b-7f6caa1c21b8", "cb24a0c2-506f-4810-880b-7f6caa1c21b8", null, null, (short)49, null, true, (byte)128, "Zielone Świątki", null, null },
                    { "7dd7ab24-4108-4365-bed5-317ebee2243d", "cb24a0c2-506f-4810-880b-7f6caa1c21b8", "cb24a0c2-506f-4810-880b-7f6caa1c21b8", (byte)1, null, null, (byte)5, true, (byte)128, "Święto pracy", null, null },
                    { "878b8028-eeb7-4ad9-b018-d37f914f1324", "cb24a0c2-506f-4810-880b-7f6caa1c21b8", "cb24a0c2-506f-4810-880b-7f6caa1c21b8", (byte)11, null, null, (byte)11, true, (byte)128, "Święto Niepodległości", null, null },
                    { "9269fc85-b704-4cb8-a02e-0ca0999b95f6", "cb24a0c2-506f-4810-880b-7f6caa1c21b8", "cb24a0c2-506f-4810-880b-7f6caa1c21b8", null, null, (short)1, null, true, (byte)128, "Poniedziałek wielkanocny", null, null },
                    { "9caccdfa-bf74-42cd-afa8-13cfda695999", "cb24a0c2-506f-4810-880b-7f6caa1c21b8", "cb24a0c2-506f-4810-880b-7f6caa1c21b8", (byte)3, null, null, (byte)5, true, (byte)128, "Święto konstytucji", null, null },
                    { "ad3be738-bd43-4b68-a769-1fb75c20f03f", "cb24a0c2-506f-4810-880b-7f6caa1c21b8", "cb24a0c2-506f-4810-880b-7f6caa1c21b8", (byte)1, null, null, (byte)11, true, (byte)128, "Wszystkich świętych", null, null },
                    { "c73896be-a7c6-40e4-bd0c-2bf861229466", "cb24a0c2-506f-4810-880b-7f6caa1c21b8", "cb24a0c2-506f-4810-880b-7f6caa1c21b8", (byte)1, null, null, (byte)1, true, (byte)128, "Nowy rok", null, null },
                    { "ceac62d2-f2e4-4a75-b2f0-6d27c2034e2f", "cb24a0c2-506f-4810-880b-7f6caa1c21b8", "cb24a0c2-506f-4810-880b-7f6caa1c21b8", null, (byte)0, null, null, true, (byte)1, "Wolne niedziele", null, null },
                    { "d08fc9d8-be2a-4b41-9690-9d25ac42bbb2", "cb24a0c2-506f-4810-880b-7f6caa1c21b8", "cb24a0c2-506f-4810-880b-7f6caa1c21b8", null, null, (short)0, null, true, (byte)128, "Wielkanoc", null, null }
                });

            migrationBuilder.InsertData(
                table: "Founds",
                columns: new[] { "ID", "ApproverID", "CreatorID", "Date", "FoundDescription", "FoundRejectionReason", "Founded", "TargetID" },
                values: new object[,]
                {
                    { "07e2e81a-a2b1-4dcf-8bf5-1605e6e3a04a", null, "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f", new DateOnly(2024, 6, 21), "voda", null, 15m, "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f" },
                    { "1a01e30c-c5df-483d-af05-79e181797407", null, "ec0f6916-7a14-4dd9-80e9-f20cd09cd6a9", new DateOnly(2024, 6, 28), "Nie podane", null, 20m, "ec0f6916-7a14-4dd9-80e9-f20cd09cd6a9" },
                    { "2f2c1ee4-cf09-4ba2-ae77-72245aa5351e", null, "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f", new DateOnly(2024, 6, 19), "drzewa", null, 80m, "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f" },
                    { "5e594928-3c8e-4311-b3a9-9b8631ec2973", null, "ec0f6916-7a14-4dd9-80e9-f20cd09cd6a9", new DateOnly(2024, 6, 15), "Nie podane", null, 24m, "ec0f6916-7a14-4dd9-80e9-f20cd09cd6a9" },
                    { "906c1da0-983d-4554-b960-057665a77766", null, "ec0f6916-7a14-4dd9-80e9-f20cd09cd6a9", new DateOnly(2024, 6, 5), "Nie podane", null, 70m, "ec0f6916-7a14-4dd9-80e9-f20cd09cd6a9" },
                    { "a3c1dd56-7e58-4200-ab5f-e23e83dc8df2", null, "68553cdf-0a20-4969-9693-c49315c7df58", new DateOnly(2024, 6, 21), "sadzenie", null, 92m, "68553cdf-0a20-4969-9693-c49315c7df58" },
                    { "b0365983-d5d0-4d56-995a-8c5c06e90d45", null, "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f", new DateOnly(2024, 6, 18), "voda", null, 30m, "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f" },
                    { "ce36031b-1e97-47a1-b276-aa287757195e", null, "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f", new DateOnly(2024, 6, 3), "Nie podane", null, 120m, "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f" },
                    { "dc51017b-be23-4634-a021-59795fbdfa75", null, "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f", new DateOnly(2024, 6, 24), "rozhodnik", null, 864m, "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f" }
                });

            migrationBuilder.InsertData(
                table: "ModelProfil",
                columns: new[] { "ID", "FirstName", "LastName", "ProfileImage", "WorkStartDate" },
                values: new object[,]
                {
                    { "26453523-4cb2-448a-90d4-663072a57ecc", "User", "test", new byte[0], new DateOnly(2024, 8, 1) },
                    { "68553cdf-0a20-4969-9693-c49315c7df58", "Eryk", "IDK", new byte[0], new DateOnly(2024, 8, 1) },
                    { "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f", "Loszka", "IDK", new byte[0], new DateOnly(2024, 8, 1) },
                    { "cb24a0c2-506f-4810-880b-7f6caa1c21b8", "Marek", "Michura", new byte[0], new DateOnly(2000, 1, 1) },
                    { "ec0f6916-7a14-4dd9-80e9-f20cd09cd6a9", "Dima", "IDK", new byte[0], new DateOnly(2024, 8, 1) }
                });

            migrationBuilder.InsertData(
                table: "ModelUserSalary",
                columns: new[] { "Date", "ID", "ApproverID", "HourlySalary" },
                values: new object[,]
                {
                    { new DateOnly(2024, 8, 1), "68553cdf-0a20-4969-9693-c49315c7df58", "cb24a0c2-506f-4810-880b-7f6caa1c21b8", 26m },
                    { new DateOnly(2024, 8, 1), "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f", "cb24a0c2-506f-4810-880b-7f6caa1c21b8", 30m },
                    { new DateOnly(2024, 8, 1), "ec0f6916-7a14-4dd9-80e9-f20cd09cd6a9", "cb24a0c2-506f-4810-880b-7f6caa1c21b8", 30m }
                });

            migrationBuilder.InsertData(
                table: "WorkHours",
                columns: new[] { "ID", "Active", "AddDate", "AuthorID", "Date", "UserID", "WorkEnd", "WorkLocationID", "WorkStart" },
                values: new object[,]
                {
                    { "0006b282-d45d-454e-be1d-bc80937025b0", true, new DateTime(2024, 10, 4, 14, 11, 40, 182, DateTimeKind.Local).AddTicks(156), "ec0f6916-7a14-4dd9-80e9-f20cd09cd6a9", new DateOnly(2024, 6, 7), "ec0f6916-7a14-4dd9-80e9-f20cd09cd6a9", new TimeOnly(17, 0, 0), "295508c3-b32e-4b97-bc9c-5b1eeef4c6fb", new TimeOnly(7, 0, 0) },
                    { "078c0943-842a-4228-851a-c796e595ac7d", true, new DateTime(2024, 10, 4, 14, 11, 40, 182, DateTimeKind.Local).AddTicks(787), "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f", new DateOnly(2024, 6, 15), "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f", new TimeOnly(13, 30, 0), "fbda133c-eeb6-4b07-a173-3873e87f3767", new TimeOnly(7, 0, 0) },
                    { "09401924-6e23-4c75-9335-f9a590e76cb5", true, new DateTime(2024, 10, 4, 14, 11, 40, 182, DateTimeKind.Local).AddTicks(778), "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f", new DateOnly(2024, 6, 13), "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f", new TimeOnly(13, 30, 0), "295508c3-b32e-4b97-bc9c-5b1eeef4c6fb", new TimeOnly(7, 0, 0) },
                    { "0aa36bdb-1fec-468b-8331-7e374f24d480", true, new DateTime(2024, 10, 4, 14, 11, 40, 182, DateTimeKind.Local).AddTicks(738), "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f", new DateOnly(2024, 6, 1), "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f", new TimeOnly(14, 30, 0), "a5e51680-f19e-4836-926a-ecb947eae937", new TimeOnly(8, 30, 0) },
                    { "13c3bc92-dd9b-4b50-b7d7-230d8209b7b5", true, new DateTime(2024, 10, 4, 14, 11, 40, 182, DateTimeKind.Local).AddTicks(768), "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f", new DateOnly(2024, 6, 11), "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f", new TimeOnly(17, 0, 0), "c1cfab1c-eb87-4a5f-919b-5ca7b1f7b50c", new TimeOnly(7, 0, 0) },
                    { "159230c6-b2a1-425c-bc1f-1adbcc7e35e2", true, new DateTime(2024, 10, 4, 14, 11, 40, 182, DateTimeKind.Local).AddTicks(149), "ec0f6916-7a14-4dd9-80e9-f20cd09cd6a9", new DateOnly(2024, 6, 6), "ec0f6916-7a14-4dd9-80e9-f20cd09cd6a9", new TimeOnly(17, 0, 0), "c1cfab1c-eb87-4a5f-919b-5ca7b1f7b50c", new TimeOnly(7, 0, 0) },
                    { "17e391bf-8908-4692-8136-6dfb3c9dcf96", true, new DateTime(2024, 10, 4, 14, 11, 40, 182, DateTimeKind.Local).AddTicks(815), "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f", new DateOnly(2024, 6, 21), "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f", new TimeOnly(15, 0, 0), "c1cfab1c-eb87-4a5f-919b-5ca7b1f7b50c", new TimeOnly(7, 0, 0) },
                    { "1d65baa5-eb10-47d1-845b-2edc652ac77d", true, new DateTime(2024, 10, 4, 14, 11, 40, 182, DateTimeKind.Local).AddTicks(811), "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f", new DateOnly(2024, 6, 20), "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f", new TimeOnly(14, 30, 0), "c1cfab1c-eb87-4a5f-919b-5ca7b1f7b50c", new TimeOnly(7, 0, 0) },
                    { "1d7cc0a4-9bf2-459d-b015-10ca6e3be617", true, new DateTime(2024, 10, 4, 14, 11, 40, 178, DateTimeKind.Local).AddTicks(195), "ec0f6916-7a14-4dd9-80e9-f20cd09cd6a9", new DateOnly(2024, 6, 3), "ec0f6916-7a14-4dd9-80e9-f20cd09cd6a9", new TimeOnly(17, 0, 0), "fbda133c-eeb6-4b07-a173-3873e87f3767", new TimeOnly(7, 0, 0) },
                    { "1f38a532-3ed4-42c5-9195-9b5ec4c5e1fe", true, new DateTime(2024, 10, 4, 14, 11, 40, 182, DateTimeKind.Local).AddTicks(999), "68553cdf-0a20-4969-9693-c49315c7df58", new DateOnly(2024, 6, 28), "68553cdf-0a20-4969-9693-c49315c7df58", new TimeOnly(19, 0, 0), "e4aa4014-3ae3-456c-ae08-d992f4713524", new TimeOnly(5, 30, 0) },
                    { "22cc8f94-940d-4f3c-9eef-7be9c38b2cde", true, new DateTime(2024, 10, 4, 14, 11, 40, 182, DateTimeKind.Local).AddTicks(782), "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f", new DateOnly(2024, 6, 14), "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f", new TimeOnly(14, 0, 0), "fbda133c-eeb6-4b07-a173-3873e87f3767", new TimeOnly(7, 0, 0) },
                    { "240106d1-7327-449a-9bf6-01298dea5b22", true, new DateTime(2024, 10, 4, 14, 11, 40, 182, DateTimeKind.Local).AddTicks(360), "ec0f6916-7a14-4dd9-80e9-f20cd09cd6a9", new DateOnly(2024, 6, 15), "ec0f6916-7a14-4dd9-80e9-f20cd09cd6a9", new TimeOnly(13, 30, 0), "fbda133c-eeb6-4b07-a173-3873e87f3767", new TimeOnly(7, 0, 0) },
                    { "31f69f16-3d8f-4327-b40a-21aae4c55cad", true, new DateTime(2024, 10, 4, 14, 11, 40, 182, DateTimeKind.Local).AddTicks(309), "ec0f6916-7a14-4dd9-80e9-f20cd09cd6a9", new DateOnly(2024, 6, 10), "ec0f6916-7a14-4dd9-80e9-f20cd09cd6a9", new TimeOnly(17, 0, 0), "c1cfab1c-eb87-4a5f-919b-5ca7b1f7b50c", new TimeOnly(7, 0, 0) },
                    { "324e8a5d-3add-41c8-80ff-26cb8058d498", true, new DateTime(2024, 10, 4, 14, 11, 40, 182, DateTimeKind.Local).AddTicks(392), "ec0f6916-7a14-4dd9-80e9-f20cd09cd6a9", new DateOnly(2024, 6, 17), "ec0f6916-7a14-4dd9-80e9-f20cd09cd6a9", new TimeOnly(17, 0, 0), "c1cfab1c-eb87-4a5f-919b-5ca7b1f7b50c", new TimeOnly(8, 0, 0) },
                    { "4199a8aa-2b73-4ffc-8bab-8aca4d78b501", true, new DateTime(2024, 10, 4, 14, 11, 40, 182, DateTimeKind.Local).AddTicks(833), "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f", new DateOnly(2024, 6, 27), "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f", new TimeOnly(16, 0, 0), "8ca4ff43-6da4-490e-ac6e-b493b7054baf", new TimeOnly(7, 0, 0) },
                    { "4301ddda-3cdf-4031-8d28-cdcb541682b1", true, new DateTime(2024, 10, 4, 14, 11, 40, 182, DateTimeKind.Local).AddTicks(397), "ec0f6916-7a14-4dd9-80e9-f20cd09cd6a9", new DateOnly(2024, 6, 18), "ec0f6916-7a14-4dd9-80e9-f20cd09cd6a9", new TimeOnly(17, 0, 0), "c1cfab1c-eb87-4a5f-919b-5ca7b1f7b50c", new TimeOnly(8, 0, 0) },
                    { "43739c45-fa3a-4583-8386-e8d9d4670e2c", true, new DateTime(2024, 10, 4, 14, 11, 40, 182, DateTimeKind.Local).AddTicks(773), "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f", new DateOnly(2024, 6, 12), "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f", new TimeOnly(17, 0, 0), "295508c3-b32e-4b97-bc9c-5b1eeef4c6fb", new TimeOnly(7, 0, 0) },
                    { "514d64e8-5d71-4b55-b808-c5998b90f405", true, new DateTime(2024, 10, 4, 14, 11, 40, 182, DateTimeKind.Local).AddTicks(824), "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f", new DateOnly(2024, 6, 25), "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f", new TimeOnly(18, 0, 0), "8ca4ff43-6da4-490e-ac6e-b493b7054baf", new TimeOnly(8, 0, 0) },
                    { "5919896d-f2b2-4656-9e46-fb4050211f1b", true, new DateTime(2024, 10, 4, 14, 11, 40, 182, DateTimeKind.Local).AddTicks(900), "68553cdf-0a20-4969-9693-c49315c7df58", new DateOnly(2024, 6, 20), "68553cdf-0a20-4969-9693-c49315c7df58", new TimeOnly(16, 30, 0), "1a5fc842-45c2-4eb1-b252-904e9e8a1725", new TimeOnly(4, 30, 0) },
                    { "5948aa6a-966e-47e6-a0c3-6f1954077827", true, new DateTime(2024, 10, 4, 14, 11, 40, 182, DateTimeKind.Local).AddTicks(895), "68553cdf-0a20-4969-9693-c49315c7df58", new DateOnly(2024, 6, 19), "68553cdf-0a20-4969-9693-c49315c7df58", new TimeOnly(16, 30, 0), "295508c3-b32e-4b97-bc9c-5b1eeef4c6fb", new TimeOnly(7, 0, 0) },
                    { "65d8a463-ca86-428f-b1b0-160c6f1dd080", true, new DateTime(2024, 10, 4, 14, 11, 40, 181, DateTimeKind.Local).AddTicks(9778), "ec0f6916-7a14-4dd9-80e9-f20cd09cd6a9", new DateOnly(2024, 6, 4), "ec0f6916-7a14-4dd9-80e9-f20cd09cd6a9", new TimeOnly(12, 0, 0), "c1cfab1c-eb87-4a5f-919b-5ca7b1f7b50c", new TimeOnly(7, 0, 0) },
                    { "6a4e0f51-523b-4ffd-b58e-2ab96e46b375", true, new DateTime(2024, 10, 4, 14, 11, 40, 182, DateTimeKind.Local).AddTicks(806), "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f", new DateOnly(2024, 6, 19), "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f", new TimeOnly(16, 30, 0), "295508c3-b32e-4b97-bc9c-5b1eeef4c6fb", new TimeOnly(7, 0, 0) },
                    { "6e03dd08-0f2d-49aa-abe6-c5b5a7dec4fd", true, new DateTime(2024, 10, 4, 14, 11, 40, 182, DateTimeKind.Local).AddTicks(838), "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f", new DateOnly(2024, 6, 28), "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f", new TimeOnly(16, 30, 0), "cf9220d9-b583-4831-aff4-c7517ff84888", new TimeOnly(7, 0, 0) },
                    { "6e9a4d3e-bdd2-476a-8a07-7c4eb9a0f16f", true, new DateTime(2024, 10, 4, 14, 11, 40, 182, DateTimeKind.Local).AddTicks(869), "68553cdf-0a20-4969-9693-c49315c7df58", new DateOnly(2024, 6, 12), "68553cdf-0a20-4969-9693-c49315c7df58", new TimeOnly(17, 0, 0), "fbda133c-eeb6-4b07-a173-3873e87f3767", new TimeOnly(7, 0, 0) },
                    { "704e6de6-e60e-4afc-bbc1-61f0cb2d4ae0", true, new DateTime(2024, 10, 4, 14, 11, 40, 182, DateTimeKind.Local).AddTicks(851), "68553cdf-0a20-4969-9693-c49315c7df58", new DateOnly(2024, 6, 6), "68553cdf-0a20-4969-9693-c49315c7df58", new TimeOnly(17, 0, 0), "fbda133c-eeb6-4b07-a173-3873e87f3767", new TimeOnly(7, 0, 0) },
                    { "7566cb39-0dc7-48d6-bacb-8982803b7c9d", true, new DateTime(2024, 10, 4, 14, 11, 40, 182, DateTimeKind.Local).AddTicks(985), "68553cdf-0a20-4969-9693-c49315c7df58", new DateOnly(2024, 6, 24), "68553cdf-0a20-4969-9693-c49315c7df58", new TimeOnly(16, 0, 0), "c1cfab1c-eb87-4a5f-919b-5ca7b1f7b50c", new TimeOnly(7, 0, 0) },
                    { "776f6d12-92fe-4c23-a0e7-99b39b1f04b9", true, new DateTime(2024, 10, 4, 14, 11, 40, 182, DateTimeKind.Local).AddTicks(744), "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f", new DateOnly(2024, 6, 3), "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f", new TimeOnly(17, 0, 0), "fbda133c-eeb6-4b07-a173-3873e87f3767", new TimeOnly(7, 0, 0) },
                    { "77a83193-0a81-46e0-a506-06b2169e69a0", true, new DateTime(2024, 10, 4, 14, 11, 40, 182, DateTimeKind.Local).AddTicks(415), "ec0f6916-7a14-4dd9-80e9-f20cd09cd6a9", new DateOnly(2024, 6, 25), "ec0f6916-7a14-4dd9-80e9-f20cd09cd6a9", new TimeOnly(18, 0, 0), "8ca4ff43-6da4-490e-ac6e-b493b7054baf", new TimeOnly(8, 0, 0) },
                    { "7e5f8d92-32d6-4fec-b39a-7fe9ce3404bb", true, new DateTime(2024, 10, 4, 14, 11, 40, 182, DateTimeKind.Local).AddTicks(316), "ec0f6916-7a14-4dd9-80e9-f20cd09cd6a9", new DateOnly(2024, 6, 11), "ec0f6916-7a14-4dd9-80e9-f20cd09cd6a9", new TimeOnly(17, 0, 0), "c1cfab1c-eb87-4a5f-919b-5ca7b1f7b50c", new TimeOnly(7, 0, 0) },
                    { "7f028452-94aa-4185-a7b8-971b4141f0f0", true, new DateTime(2024, 10, 4, 14, 11, 40, 182, DateTimeKind.Local).AddTicks(873), "68553cdf-0a20-4969-9693-c49315c7df58", new DateOnly(2024, 6, 13), "68553cdf-0a20-4969-9693-c49315c7df58", new TimeOnly(15, 30, 0), "fbda133c-eeb6-4b07-a173-3873e87f3767", new TimeOnly(7, 0, 0) },
                    { "7f5b26a2-3605-4d17-b420-10dc31ac96a0", true, new DateTime(2024, 10, 4, 14, 11, 40, 182, DateTimeKind.Local).AddTicks(754), "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f", new DateOnly(2024, 6, 5), "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f", new TimeOnly(17, 0, 0), "295508c3-b32e-4b97-bc9c-5b1eeef4c6fb", new TimeOnly(7, 0, 0) },
                    { "830af400-9f02-4b71-98cb-f5005a716db8", true, new DateTime(2024, 10, 4, 14, 11, 40, 182, DateTimeKind.Local).AddTicks(860), "68553cdf-0a20-4969-9693-c49315c7df58", new DateOnly(2024, 6, 10), "68553cdf-0a20-4969-9693-c49315c7df58", new TimeOnly(17, 0, 0), "32319c27-ebab-415c-a836-f701595519d3", new TimeOnly(7, 0, 0) },
                    { "89cf0ab5-b392-4461-a144-cc1538a29db0", true, new DateTime(2024, 10, 4, 14, 11, 40, 182, DateTimeKind.Local).AddTicks(994), "68553cdf-0a20-4969-9693-c49315c7df58", new DateOnly(2024, 6, 27), "68553cdf-0a20-4969-9693-c49315c7df58", new TimeOnly(16, 0, 0), "8ca4ff43-6da4-490e-ac6e-b493b7054baf", new TimeOnly(7, 0, 0) },
                    { "8faa518a-20e5-483f-9863-4443b47dca8d", true, new DateTime(2024, 10, 4, 14, 11, 40, 182, DateTimeKind.Local).AddTicks(865), "68553cdf-0a20-4969-9693-c49315c7df58", new DateOnly(2024, 6, 11), "68553cdf-0a20-4969-9693-c49315c7df58", new TimeOnly(16, 30, 0), "32319c27-ebab-415c-a836-f701595519d3", new TimeOnly(7, 0, 0) },
                    { "964d9d0a-920c-4f8a-ae6f-4ec4569f9912", true, new DateTime(2024, 10, 4, 14, 11, 40, 182, DateTimeKind.Local).AddTicks(729), "ec0f6916-7a14-4dd9-80e9-f20cd09cd6a9", new DateOnly(2024, 6, 27), "ec0f6916-7a14-4dd9-80e9-f20cd09cd6a9", new TimeOnly(16, 0, 0), "8ca4ff43-6da4-490e-ac6e-b493b7054baf", new TimeOnly(7, 0, 0) },
                    { "96fff12b-46da-41d2-aeee-87f1f2c45a04", true, new DateTime(2024, 10, 4, 14, 11, 40, 182, DateTimeKind.Local).AddTicks(749), "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f", new DateOnly(2024, 6, 4), "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f", new TimeOnly(14, 0, 0), "295508c3-b32e-4b97-bc9c-5b1eeef4c6fb", new TimeOnly(7, 0, 0) },
                    { "992b861a-ab84-4664-8e14-dc4f14bd9f0a", true, new DateTime(2024, 10, 4, 14, 11, 40, 182, DateTimeKind.Local).AddTicks(793), "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f", new DateOnly(2024, 6, 17), "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f", new TimeOnly(17, 0, 0), "295508c3-b32e-4b97-bc9c-5b1eeef4c6fb", new TimeOnly(8, 30, 0) },
                    { "99a6a776-738c-43e6-b4ad-adc899bc2b75", true, new DateTime(2024, 10, 4, 14, 11, 40, 182, DateTimeKind.Local).AddTicks(820), "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f", new DateOnly(2024, 6, 24), "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f", new TimeOnly(14, 30, 0), "c1cfab1c-eb87-4a5f-919b-5ca7b1f7b50c", new TimeOnly(7, 0, 0) },
                    { "9bcfef0a-5b7b-4f35-b993-296061bb8620", true, new DateTime(2024, 10, 4, 14, 11, 40, 182, DateTimeKind.Local).AddTicks(410), "ec0f6916-7a14-4dd9-80e9-f20cd09cd6a9", new DateOnly(2024, 6, 21), "ec0f6916-7a14-4dd9-80e9-f20cd09cd6a9", new TimeOnly(16, 0, 0), "c1cfab1c-eb87-4a5f-919b-5ca7b1f7b50c", new TimeOnly(7, 0, 0) },
                    { "9f2a4ad8-4470-4dd1-aea5-1de5f14fe12b", true, new DateTime(2024, 10, 4, 14, 11, 40, 182, DateTimeKind.Local).AddTicks(887), "68553cdf-0a20-4969-9693-c49315c7df58", new DateOnly(2024, 6, 17), "68553cdf-0a20-4969-9693-c49315c7df58", new TimeOnly(17, 0, 0), "295508c3-b32e-4b97-bc9c-5b1eeef4c6fb", new TimeOnly(7, 0, 0) },
                    { "a33bf103-f861-4995-8816-ea231aa52e8f", true, new DateTime(2024, 10, 4, 14, 11, 40, 182, DateTimeKind.Local).AddTicks(829), "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f", new DateOnly(2024, 6, 26), "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f", new TimeOnly(12, 30, 0), "fbda133c-eeb6-4b07-a173-3873e87f3767", new TimeOnly(7, 0, 0) },
                    { "a38e086c-f980-4b8a-b6b2-de40cf2e39a0", true, new DateTime(2024, 10, 4, 14, 11, 40, 182, DateTimeKind.Local).AddTicks(891), "68553cdf-0a20-4969-9693-c49315c7df58", new DateOnly(2024, 6, 18), "68553cdf-0a20-4969-9693-c49315c7df58", new TimeOnly(17, 0, 0), "295508c3-b32e-4b97-bc9c-5b1eeef4c6fb", new TimeOnly(7, 0, 0) },
                    { "a4bf3aa8-c5fa-4348-9a75-6b132bade208", true, new DateTime(2024, 10, 4, 14, 11, 40, 182, DateTimeKind.Local).AddTicks(797), "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f", new DateOnly(2024, 6, 18), "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f", new TimeOnly(17, 0, 0), "295508c3-b32e-4b97-bc9c-5b1eeef4c6fb", new TimeOnly(7, 0, 0) },
                    { "b0402c2b-b931-4eb0-ade1-8cbb2ba332e6", true, new DateTime(2024, 10, 4, 14, 11, 40, 182, DateTimeKind.Local).AddTicks(719), "ec0f6916-7a14-4dd9-80e9-f20cd09cd6a9", new DateOnly(2024, 6, 26), "ec0f6916-7a14-4dd9-80e9-f20cd09cd6a9", new TimeOnly(15, 0, 0), "fbda133c-eeb6-4b07-a173-3873e87f3767", new TimeOnly(7, 0, 0) },
                    { "b0acad31-fb2b-4e08-829f-24f339215545", true, new DateTime(2024, 10, 4, 14, 11, 40, 182, DateTimeKind.Local).AddTicks(882), "68553cdf-0a20-4969-9693-c49315c7df58", new DateOnly(2024, 6, 15), "68553cdf-0a20-4969-9693-c49315c7df58", new TimeOnly(14, 0, 0), "fbda133c-eeb6-4b07-a173-3873e87f3767", new TimeOnly(7, 0, 0) },
                    { "b509cc46-b0fe-4a93-9686-602b42effe8e", true, new DateTime(2024, 10, 4, 14, 11, 40, 182, DateTimeKind.Local).AddTicks(136), "ec0f6916-7a14-4dd9-80e9-f20cd09cd6a9", new DateOnly(2024, 6, 5), "ec0f6916-7a14-4dd9-80e9-f20cd09cd6a9", new TimeOnly(17, 0, 0), "c1cfab1c-eb87-4a5f-919b-5ca7b1f7b50c", new TimeOnly(7, 0, 0) },
                    { "b6139bae-58be-4341-88d1-6674d284fb3a", true, new DateTime(2024, 10, 4, 14, 11, 40, 182, DateTimeKind.Local).AddTicks(878), "68553cdf-0a20-4969-9693-c49315c7df58", new DateOnly(2024, 6, 14), "68553cdf-0a20-4969-9693-c49315c7df58", new TimeOnly(16, 30, 0), "32319c27-ebab-415c-a836-f701595519d3", new TimeOnly(7, 0, 0) },
                    { "c42fc8ff-1c6f-4a2f-9ba8-3e52bdfed7fb", true, new DateTime(2024, 10, 4, 14, 11, 40, 182, DateTimeKind.Local).AddTicks(402), "ec0f6916-7a14-4dd9-80e9-f20cd09cd6a9", new DateOnly(2024, 6, 19), "ec0f6916-7a14-4dd9-80e9-f20cd09cd6a9", new TimeOnly(16, 30, 0), "c1cfab1c-eb87-4a5f-919b-5ca7b1f7b50c", new TimeOnly(7, 0, 0) },
                    { "c5b94d70-07a2-4bfd-ab75-ac6b6302e7dc", true, new DateTime(2024, 10, 4, 14, 11, 40, 182, DateTimeKind.Local).AddTicks(406), "ec0f6916-7a14-4dd9-80e9-f20cd09cd6a9", new DateOnly(2024, 6, 20), "ec0f6916-7a14-4dd9-80e9-f20cd09cd6a9", new TimeOnly(15, 0, 0), "c1cfab1c-eb87-4a5f-919b-5ca7b1f7b50c", new TimeOnly(7, 0, 0) },
                    { "c9d06c5d-724a-493b-8501-e7e98fd40a1c", true, new DateTime(2024, 10, 4, 14, 11, 40, 182, DateTimeKind.Local).AddTicks(320), "ec0f6916-7a14-4dd9-80e9-f20cd09cd6a9", new DateOnly(2024, 6, 12), "ec0f6916-7a14-4dd9-80e9-f20cd09cd6a9", new TimeOnly(17, 0, 0), "295508c3-b32e-4b97-bc9c-5b1eeef4c6fb", new TimeOnly(7, 0, 0) },
                    { "d8b690a3-d32a-4aa9-a844-6530dfa632c5", true, new DateTime(2024, 10, 4, 14, 11, 40, 182, DateTimeKind.Local).AddTicks(763), "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f", new DateOnly(2024, 6, 10), "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f", new TimeOnly(17, 0, 0), "c1cfab1c-eb87-4a5f-919b-5ca7b1f7b50c", new TimeOnly(7, 0, 0) },
                    { "da3170b6-791e-4993-b2bf-6f016f0ac7b9", true, new DateTime(2024, 10, 4, 14, 11, 40, 182, DateTimeKind.Local).AddTicks(759), "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f", new DateOnly(2024, 6, 6), "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f", new TimeOnly(11, 30, 0), "a5e51680-f19e-4836-926a-ecb947eae937", new TimeOnly(7, 0, 0) },
                    { "e61875cf-3467-4653-917d-2b1bd60a5e06", true, new DateTime(2024, 10, 4, 14, 11, 40, 182, DateTimeKind.Local).AddTicks(978), "68553cdf-0a20-4969-9693-c49315c7df58", new DateOnly(2024, 6, 21), "68553cdf-0a20-4969-9693-c49315c7df58", new TimeOnly(15, 30, 0), "c1cfab1c-eb87-4a5f-919b-5ca7b1f7b50c", new TimeOnly(7, 0, 0) },
                    { "e6733e6d-2852-4269-8739-0d01e4643441", true, new DateTime(2024, 10, 4, 14, 11, 40, 182, DateTimeKind.Local).AddTicks(734), "ec0f6916-7a14-4dd9-80e9-f20cd09cd6a9", new DateOnly(2024, 6, 28), "ec0f6916-7a14-4dd9-80e9-f20cd09cd6a9", new TimeOnly(16, 30, 0), "cf9220d9-b583-4831-aff4-c7517ff84888", new TimeOnly(7, 0, 0) },
                    { "e6ed8d0e-9de8-42dd-a364-b36b1a7634d2", true, new DateTime(2024, 10, 4, 14, 11, 40, 182, DateTimeKind.Local).AddTicks(856), "68553cdf-0a20-4969-9693-c49315c7df58", new DateOnly(2024, 6, 7), "68553cdf-0a20-4969-9693-c49315c7df58", new TimeOnly(16, 0, 0), "a5e51680-f19e-4836-926a-ecb947eae937", new TimeOnly(7, 0, 0) },
                    { "e8d2da5c-33b9-4d93-be95-a276c30efe3d", true, new DateTime(2024, 10, 4, 14, 11, 40, 182, DateTimeKind.Local).AddTicks(847), "68553cdf-0a20-4969-9693-c49315c7df58", new DateOnly(2024, 6, 5), "68553cdf-0a20-4969-9693-c49315c7df58", new TimeOnly(17, 0, 0), "32319c27-ebab-415c-a836-f701595519d3", new TimeOnly(7, 0, 0) },
                    { "ee3f3034-8d51-4b11-855b-53ea6cdc97a9", true, new DateTime(2024, 10, 4, 14, 11, 40, 182, DateTimeKind.Local).AddTicks(325), "ec0f6916-7a14-4dd9-80e9-f20cd09cd6a9", new DateOnly(2024, 6, 13), "ec0f6916-7a14-4dd9-80e9-f20cd09cd6a9", new TimeOnly(13, 30, 0), "295508c3-b32e-4b97-bc9c-5b1eeef4c6fb", new TimeOnly(7, 0, 0) },
                    { "ef1f9a3d-a2b0-40f9-a27d-b44ffe2bfb9d", true, new DateTime(2024, 10, 4, 14, 11, 40, 182, DateTimeKind.Local).AddTicks(990), "68553cdf-0a20-4969-9693-c49315c7df58", new DateOnly(2024, 6, 26), "68553cdf-0a20-4969-9693-c49315c7df58", new TimeOnly(17, 30, 0), "c31c6339-82b5-4249-87dc-14e8b09a1276", new TimeOnly(7, 0, 0) },
                    { "efe84007-f0bb-4039-88ed-a5f5c2add6cc", true, new DateTime(2024, 10, 4, 14, 11, 40, 182, DateTimeKind.Local).AddTicks(332), "ec0f6916-7a14-4dd9-80e9-f20cd09cd6a9", new DateOnly(2024, 6, 14), "ec0f6916-7a14-4dd9-80e9-f20cd09cd6a9", new TimeOnly(17, 0, 0), "c1cfab1c-eb87-4a5f-919b-5ca7b1f7b50c", new TimeOnly(7, 0, 0) },
                    { "fc69443c-bb26-463c-81b3-c4897d1f1530", true, new DateTime(2024, 10, 4, 14, 11, 40, 182, DateTimeKind.Local).AddTicks(843), "68553cdf-0a20-4969-9693-c49315c7df58", new DateOnly(2024, 6, 3), "68553cdf-0a20-4969-9693-c49315c7df58", new TimeOnly(17, 0, 0), "32319c27-ebab-415c-a836-f701595519d3", new TimeOnly(7, 0, 0) }
                });

            migrationBuilder.InsertData(
                table: "WorkLocationRoles",
                columns: new[] { "ID", "AuthorID", "Name" },
                values: new object[] { "1638d369-1b20-48fb-a8f7-586040ecbf51", "cb24a0c2-506f-4810-880b-7f6caa1c21b8", "Chord" });

            migrationBuilder.InsertData(
                table: "AspNetUserRoles",
                columns: new[] { "RoleId", "UserId" },
                values: new object[,]
                {
                    { "05e6fbeb-ad91-4dfb-bfc3-298fac57e6b4", "26453523-4cb2-448a-90d4-663072a57ecc" },
                    { "1d923116-d460-4809-b8d8-47d1c4216b2c", "26453523-4cb2-448a-90d4-663072a57ecc" },
                    { "38dcacea-ee73-4c98-bc7b-cfba196ccab5", "26453523-4cb2-448a-90d4-663072a57ecc" },
                    { "05e6fbeb-ad91-4dfb-bfc3-298fac57e6b4", "68553cdf-0a20-4969-9693-c49315c7df58" },
                    { "1d923116-d460-4809-b8d8-47d1c4216b2c", "68553cdf-0a20-4969-9693-c49315c7df58" },
                    { "38dcacea-ee73-4c98-bc7b-cfba196ccab5", "68553cdf-0a20-4969-9693-c49315c7df58" },
                    { "05e6fbeb-ad91-4dfb-bfc3-298fac57e6b4", "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f" },
                    { "1d923116-d460-4809-b8d8-47d1c4216b2c", "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f" },
                    { "38dcacea-ee73-4c98-bc7b-cfba196ccab5", "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f" },
                    { "05e6fbeb-ad91-4dfb-bfc3-298fac57e6b4", "ec0f6916-7a14-4dd9-80e9-f20cd09cd6a9" },
                    { "1d923116-d460-4809-b8d8-47d1c4216b2c", "ec0f6916-7a14-4dd9-80e9-f20cd09cd6a9" },
                    { "38dcacea-ee73-4c98-bc7b-cfba196ccab5", "ec0f6916-7a14-4dd9-80e9-f20cd09cd6a9" }
                });

            migrationBuilder.InsertData(
                table: "ChordPrices",
                columns: new[] { "ID", "ChordID", "CreatorID", "Date", "Price" },
                values: new object[,]
                {
                    { "03d72c0a-8769-4c9e-852e-7f8abee42fa6", "c92154e8-e9b9-4379-89db-23fdb7eef1e7", "cb24a0c2-506f-4810-880b-7f6caa1c21b8", new DateOnly(2000, 1, 1), 2m },
                    { "17deb4e8-8a65-47b9-9b24-4717049a46b5", "7dd19798-98d4-4411-9c21-8fe1e2212e8a", "cb24a0c2-506f-4810-880b-7f6caa1c21b8", new DateOnly(2000, 1, 1), 1.1m },
                    { "30ec8d82-eeb4-4bbd-ab8c-97234a8b3436", "34929715-6e9b-4ebd-bdb7-591fa7bfc1dc", "cb24a0c2-506f-4810-880b-7f6caa1c21b8", new DateOnly(2000, 1, 1), 2.5m },
                    { "4b875b61-1fe5-4d80-b8ac-025f525f76dd", "b7e7da00-6c48-4bb0-8399-fe44f33d94e4", "cb24a0c2-506f-4810-880b-7f6caa1c21b8", new DateOnly(2000, 1, 1), 50m },
                    { "6ac1359a-8db5-4bb3-8bf6-1939e3b76d3f", "4a445a6a-07cf-490a-b1d4-37364ad15e4d", "cb24a0c2-506f-4810-880b-7f6caa1c21b8", new DateOnly(2000, 1, 1), 35m },
                    { "6d743df0-601f-481b-bafe-7bd70f0212b0", "6b5f2ead-4357-482f-9022-e5eb02822313", "cb24a0c2-506f-4810-880b-7f6caa1c21b8", new DateOnly(2000, 1, 1), 1.1m },
                    { "7f7fa0d4-cc4c-46a6-a89b-a1806018f99c", "d386701e-18cd-4cfc-ab3e-5d0750266bd7", "cb24a0c2-506f-4810-880b-7f6caa1c21b8", new DateOnly(2000, 1, 1), 0.2m },
                    { "c0bc0799-67f2-48c6-a341-ec6664d86b9e", "bd13c6b0-8e2c-4048-a42c-a843d8581466", "cb24a0c2-506f-4810-880b-7f6caa1c21b8", new DateOnly(2000, 1, 1), 3m },
                    { "e2f11f1f-ed0a-4007-97a2-f3ba1ee78150", "7b989a90-b2a4-4514-9020-756501c7061d", "cb24a0c2-506f-4810-880b-7f6caa1c21b8", new DateOnly(2000, 1, 1), 1m },
                    { "ed53c2cf-a9f4-419b-9711-40cda1920588", "4c1dadaa-8d6a-4a02-99db-aeca64fdc0bf", "cb24a0c2-506f-4810-880b-7f6caa1c21b8", new DateOnly(2000, 1, 1), 1.1m }
                });

            migrationBuilder.InsertData(
                table: "DayOffDatesTargetRole",
                columns: new[] { "DayOffID", "TargetID" },
                values: new object[,]
                {
                    { "0e3f76fc-7878-44e2-acf3-8f8a262ace1c", "ec0f6916-7a14-4dd9-80e9-f20cd09cd6a9" },
                    { "3ee7fe12-ec83-444b-a064-9559eca11ba2", "68553cdf-0a20-4969-9693-c49315c7df58" },
                    { "c8011577-6247-419b-8695-1f8278c3c180", "68553cdf-0a20-4969-9693-c49315c7df58" },
                    { "fb981f9c-f565-49b6-a126-881d7d706f59", "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f" }
                });

            migrationBuilder.InsertData(
                table: "DayOffDatesTargetUser",
                columns: new[] { "DayOffID", "TargetID" },
                values: new object[] { "c2b5dea3-85fc-469e-a265-088a7feb2172", "38dcacea-ee73-4c98-bc7b-cfba196ccab5" });

            migrationBuilder.InsertData(
                table: "DayOffExpressionTargetRole",
                columns: new[] { "DayOffID", "TargetID" },
                values: new object[] { "324359d6-af00-4baf-bd61-afa615ed76b9", "ec0f6916-7a14-4dd9-80e9-f20cd09cd6a9" });

            migrationBuilder.InsertData(
                table: "DayOffExpressionTargetUser",
                columns: new[] { "DayOffID", "TargetID" },
                values: new object[,]
                {
                    { "168416f7-c582-4c95-a336-13e477abace7", "1d923116-d460-4809-b8d8-47d1c4216b2c" },
                    { "1989fd11-07a0-496c-820d-cb78d06722a5", "1d923116-d460-4809-b8d8-47d1c4216b2c" },
                    { "1ba70b58-d25d-4837-9661-369513254cb2", "1d923116-d460-4809-b8d8-47d1c4216b2c" },
                    { "261d4eed-273d-4127-a49a-ea0201318421", "1d923116-d460-4809-b8d8-47d1c4216b2c" },
                    { "3c1e3bae-7e41-40fe-afef-930d8a91dbed", "1d923116-d460-4809-b8d8-47d1c4216b2c" },
                    { "4f072e47-9eef-4a3d-859b-f350e5c7c115", "1d923116-d460-4809-b8d8-47d1c4216b2c" },
                    { "6b8ba2b0-f4fb-4370-945c-3da1394ce55e", "1d923116-d460-4809-b8d8-47d1c4216b2c" },
                    { "7dd7ab24-4108-4365-bed5-317ebee2243d", "1d923116-d460-4809-b8d8-47d1c4216b2c" },
                    { "878b8028-eeb7-4ad9-b018-d37f914f1324", "1d923116-d460-4809-b8d8-47d1c4216b2c" },
                    { "9269fc85-b704-4cb8-a02e-0ca0999b95f6", "1d923116-d460-4809-b8d8-47d1c4216b2c" },
                    { "9caccdfa-bf74-42cd-afa8-13cfda695999", "1d923116-d460-4809-b8d8-47d1c4216b2c" },
                    { "ad3be738-bd43-4b68-a769-1fb75c20f03f", "1d923116-d460-4809-b8d8-47d1c4216b2c" },
                    { "c73896be-a7c6-40e4-bd0c-2bf861229466", "1d923116-d460-4809-b8d8-47d1c4216b2c" },
                    { "ceac62d2-f2e4-4a75-b2f0-6d27c2034e2f", "1d923116-d460-4809-b8d8-47d1c4216b2c" },
                    { "d08fc9d8-be2a-4b41-9690-9d25ac42bbb2", "1d923116-d460-4809-b8d8-47d1c4216b2c" }
                });

            migrationBuilder.InsertData(
                table: "ModelWorkChord",
                columns: new[] { "ID", "Active", "AuthorID", "ChordID", "Date", "Quantity", "WorkHourID" },
                values: new object[,]
                {
                    { "3fe7a838-3fb8-4786-9ac8-4df8815e8f8a", true, "ec0f6916-7a14-4dd9-80e9-f20cd09cd6a9", "6b5f2ead-4357-482f-9022-e5eb02822313", new DateTime(2024, 10, 4, 14, 11, 41, 268, DateTimeKind.Local).AddTicks(5616), 55L, "1d7cc0a4-9bf2-459d-b015-10ca6e3be617" },
                    { "466373cb-2d58-4ccc-91f7-3bde8cbb21bc", true, "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f", "c92154e8-e9b9-4379-89db-23fdb7eef1e7", new DateTime(2024, 10, 4, 14, 11, 41, 268, DateTimeKind.Local).AddTicks(5627), 143L, "da3170b6-791e-4993-b2bf-6f016f0ac7b9" },
                    { "6787d4f2-9cfc-4d45-8c6a-deee6e29d0a2", true, "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f", "c92154e8-e9b9-4379-89db-23fdb7eef1e7", new DateTime(2024, 10, 4, 14, 11, 41, 268, DateTimeKind.Local).AddTicks(5743), 39L, "0aa36bdb-1fec-468b-8331-7e374f24d480" },
                    { "6eceacfc-367e-4a83-b4bb-2d6f5f34bd0e", true, "ec0f6916-7a14-4dd9-80e9-f20cd09cd6a9", "7b989a90-b2a4-4514-9020-756501c7061d", new DateTime(2024, 10, 4, 14, 11, 41, 268, DateTimeKind.Local).AddTicks(5542), 40L, "1d7cc0a4-9bf2-459d-b015-10ca6e3be617" },
                    { "71b58aa9-a271-486c-9cda-2deef9c304ee", true, "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f", "6b5f2ead-4357-482f-9022-e5eb02822313", new DateTime(2024, 10, 4, 14, 11, 41, 268, DateTimeKind.Local).AddTicks(5692), 52L, "22cc8f94-940d-4f3c-9eef-7be9c38b2cde" },
                    { "cd93ea9d-19fe-4a14-a05f-48b98769036f", true, "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f", "bd13c6b0-8e2c-4048-a42c-a843d8581466", new DateTime(2024, 10, 4, 14, 11, 41, 268, DateTimeKind.Local).AddTicks(5719), 41L, "22cc8f94-940d-4f3c-9eef-7be9c38b2cde" },
                    { "f29e2649-1f47-464f-92b7-c1d735b376a7", true, "8b4eb9ef-1ddb-49b1-9b25-fc200b63d63f", "c92154e8-e9b9-4379-89db-23fdb7eef1e7", new DateTime(2024, 10, 4, 14, 11, 41, 268, DateTimeKind.Local).AddTicks(5663), 84L, "22cc8f94-940d-4f3c-9eef-7be9c38b2cde" }
                });

            migrationBuilder.InsertData(
                table: "WorkLocationTargetRoles",
                columns: new[] { "RoleID", "WorkLocationID" },
                values: new object[,]
                {
                    { "05e6fbeb-ad91-4dfb-bfc3-298fac57e6b4", "0e267c34-0a14-4818-8ed3-6f835bf4108a" },
                    { "05e6fbeb-ad91-4dfb-bfc3-298fac57e6b4", "1a5fc842-45c2-4eb1-b252-904e9e8a1725" },
                    { "05e6fbeb-ad91-4dfb-bfc3-298fac57e6b4", "1db06608-e532-45b2-b1a8-3cfeaab85f3d" },
                    { "05e6fbeb-ad91-4dfb-bfc3-298fac57e6b4", "295508c3-b32e-4b97-bc9c-5b1eeef4c6fb" },
                    { "05e6fbeb-ad91-4dfb-bfc3-298fac57e6b4", "32319c27-ebab-415c-a836-f701595519d3" },
                    { "05e6fbeb-ad91-4dfb-bfc3-298fac57e6b4", "49667c7f-80d9-4436-ac6e-e11c2f96a1f5" },
                    { "05e6fbeb-ad91-4dfb-bfc3-298fac57e6b4", "5a3a2d6b-b21b-486e-bcf0-5cff0637396d" },
                    { "05e6fbeb-ad91-4dfb-bfc3-298fac57e6b4", "8ca4ff43-6da4-490e-ac6e-b493b7054baf" },
                    { "05e6fbeb-ad91-4dfb-bfc3-298fac57e6b4", "a5e51680-f19e-4836-926a-ecb947eae937" },
                    { "05e6fbeb-ad91-4dfb-bfc3-298fac57e6b4", "c1cfab1c-eb87-4a5f-919b-5ca7b1f7b50c" },
                    { "05e6fbeb-ad91-4dfb-bfc3-298fac57e6b4", "c31c6339-82b5-4249-87dc-14e8b09a1276" },
                    { "05e6fbeb-ad91-4dfb-bfc3-298fac57e6b4", "cf9220d9-b583-4831-aff4-c7517ff84888" },
                    { "05e6fbeb-ad91-4dfb-bfc3-298fac57e6b4", "e4aa4014-3ae3-456c-ae08-d992f4713524" },
                    { "05e6fbeb-ad91-4dfb-bfc3-298fac57e6b4", "f90a6f03-1109-438e-bb07-1ba7e5900ea3" },
                    { "05e6fbeb-ad91-4dfb-bfc3-298fac57e6b4", "fbda133c-eeb6-4b07-a173-3873e87f3767" },
                    { "38dcacea-ee73-4c98-bc7b-cfba196ccab5", "047921e7-1329-4542-acd3-119bcb645077" },
                    { "38dcacea-ee73-4c98-bc7b-cfba196ccab5", "b721d3d1-04cd-4244-9fa7-751b085aebfc" },
                    { "38dcacea-ee73-4c98-bc7b-cfba196ccab5", "fd9991df-5d66-4b30-92df-a3c6b64748ca" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_AspNetRoleClaims_RoleId",
                table: "AspNetRoleClaims",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetRoles_AuthorID",
                table: "AspNetRoles",
                column: "AuthorID");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetRoles_Name",
                table: "AspNetRoles",
                column: "Name",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles",
                column: "NormalizedName",
                unique: true,
                filter: "[NormalizedName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserClaims_UserId",
                table: "AspNetUserClaims",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserLogins_UserId",
                table: "AspNetUserLogins",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserRoles_RoleId",
                table: "AspNetUserRoles",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "EmailIndex",
                table: "AspNetUsers",
                column: "NormalizedEmail",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_Email",
                table: "AspNetUsers",
                column: "Email",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_UserName",
                table: "AspNetUsers",
                column: "UserName",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "AspNetUsers",
                column: "NormalizedUserName",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Bonus_ApproverID",
                table: "Bonus",
                column: "ApproverID");

            migrationBuilder.CreateIndex(
                name: "IX_Bonus_CreatorID",
                table: "Bonus",
                column: "CreatorID");

            migrationBuilder.CreateIndex(
                name: "IX_Bonus_TargetID",
                table: "Bonus",
                column: "TargetID");

            migrationBuilder.CreateIndex(
                name: "IX_ChordPrices_ChordID",
                table: "ChordPrices",
                column: "ChordID");

            migrationBuilder.CreateIndex(
                name: "IX_ChordPrices_CreatorID",
                table: "ChordPrices",
                column: "CreatorID");

            migrationBuilder.CreateIndex(
                name: "IX_Chords_CreatorID",
                table: "Chords",
                column: "CreatorID");

            migrationBuilder.CreateIndex(
                name: "IX_DayOffDates_ApproverID",
                table: "DayOffDates",
                column: "ApproverID");

            migrationBuilder.CreateIndex(
                name: "IX_DayOffDates_AuthorID",
                table: "DayOffDates",
                column: "AuthorID");

            migrationBuilder.CreateIndex(
                name: "IX_DayOffDatesTargetRole_TargetID",
                table: "DayOffDatesTargetRole",
                column: "TargetID");

            migrationBuilder.CreateIndex(
                name: "IX_DayOffDatesTargetUser_TargetID",
                table: "DayOffDatesTargetUser",
                column: "TargetID");

            migrationBuilder.CreateIndex(
                name: "IX_DayOffExpression_ApproverID",
                table: "DayOffExpression",
                column: "ApproverID");

            migrationBuilder.CreateIndex(
                name: "IX_DayOffExpression_AuthorID",
                table: "DayOffExpression",
                column: "AuthorID");

            migrationBuilder.CreateIndex(
                name: "IX_DayOffExpression_Order",
                table: "DayOffExpression",
                column: "Order");

            migrationBuilder.CreateIndex(
                name: "IX_DayOffExpressionTargetRole_TargetID",
                table: "DayOffExpressionTargetRole",
                column: "TargetID");

            migrationBuilder.CreateIndex(
                name: "IX_DayOffExpressionTargetUser_TargetID",
                table: "DayOffExpressionTargetUser",
                column: "TargetID");

            migrationBuilder.CreateIndex(
                name: "IX_Founds_ApproverID",
                table: "Founds",
                column: "ApproverID");

            migrationBuilder.CreateIndex(
                name: "IX_Founds_CreatorID",
                table: "Founds",
                column: "CreatorID");

            migrationBuilder.CreateIndex(
                name: "IX_Founds_TargetID",
                table: "Founds",
                column: "TargetID");

            migrationBuilder.CreateIndex(
                name: "IX_ModelNotification_TargetID",
                table: "ModelNotification",
                column: "TargetID");

            migrationBuilder.CreateIndex(
                name: "IX_ModelUserSalary_ApproverID",
                table: "ModelUserSalary",
                column: "ApproverID");

            migrationBuilder.CreateIndex(
                name: "IX_ModelWorkChord_AuthorID",
                table: "ModelWorkChord",
                column: "AuthorID");

            migrationBuilder.CreateIndex(
                name: "IX_ModelWorkChord_ChordID",
                table: "ModelWorkChord",
                column: "ChordID");

            migrationBuilder.CreateIndex(
                name: "IX_ModelWorkChord_WorkHourID",
                table: "ModelWorkChord",
                column: "WorkHourID");

            migrationBuilder.CreateIndex(
                name: "IX_ModelWorkLocationRoleWorkLocation_RoleID",
                table: "ModelWorkLocationRoleWorkLocation",
                column: "RoleID");

            migrationBuilder.CreateIndex(
                name: "IX_WorkHours_AuthorID",
                table: "WorkHours",
                column: "AuthorID");

            migrationBuilder.CreateIndex(
                name: "IX_WorkHours_UserID",
                table: "WorkHours",
                column: "UserID");

            migrationBuilder.CreateIndex(
                name: "IX_WorkHours_WorkLocationID",
                table: "WorkHours",
                column: "WorkLocationID");

            migrationBuilder.CreateIndex(
                name: "IX_WorkLocationRoles_AuthorID",
                table: "WorkLocationRoles",
                column: "AuthorID");

            migrationBuilder.CreateIndex(
                name: "IX_WorkLocationTargetRoles_WorkLocationID",
                table: "WorkLocationTargetRoles",
                column: "WorkLocationID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AspNetRoleClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserLogins");

            migrationBuilder.DropTable(
                name: "AspNetUserRoles");

            migrationBuilder.DropTable(
                name: "AspNetUserTokens");

            migrationBuilder.DropTable(
                name: "Bonus");

            migrationBuilder.DropTable(
                name: "ChordPrices");

            migrationBuilder.DropTable(
                name: "DayOffDatesTargetRole");

            migrationBuilder.DropTable(
                name: "DayOffDatesTargetUser");

            migrationBuilder.DropTable(
                name: "DayOffExpressionTargetRole");

            migrationBuilder.DropTable(
                name: "DayOffExpressionTargetUser");

            migrationBuilder.DropTable(
                name: "Founds");

            migrationBuilder.DropTable(
                name: "LastActualizations");

            migrationBuilder.DropTable(
                name: "ModelNotification");

            migrationBuilder.DropTable(
                name: "ModelProfil");

            migrationBuilder.DropTable(
                name: "ModelUserSalary");

            migrationBuilder.DropTable(
                name: "ModelWorkChord");

            migrationBuilder.DropTable(
                name: "ModelWorkLocationRoleWorkLocation");

            migrationBuilder.DropTable(
                name: "WorkLocationTargetRoles");

            migrationBuilder.DropTable(
                name: "DayOffDates");

            migrationBuilder.DropTable(
                name: "DayOffExpression");

            migrationBuilder.DropTable(
                name: "Chords");

            migrationBuilder.DropTable(
                name: "WorkHours");

            migrationBuilder.DropTable(
                name: "WorkLocationRoles");

            migrationBuilder.DropTable(
                name: "AspNetRoles");

            migrationBuilder.DropTable(
                name: "WorkLocations");

            migrationBuilder.DropTable(
                name: "AspNetUsers");
        }
    }
}
