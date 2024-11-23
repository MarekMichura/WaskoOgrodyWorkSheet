global using DotNetEnv;
global using FluentValidation;
global using FluentValidation.AspNetCore;
global using Microsoft.AspNetCore.Components;
global using Microsoft.AspNetCore.Identity;
global using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
global using Microsoft.AspNetCore.Mvc;
global using Microsoft.AspNetCore.StaticFiles;
global using Microsoft.EntityFrameworkCore;
global using Microsoft.Extensions.Caching.Memory;
global using Microsoft.Extensions.FileProviders;
global using Microsoft.Extensions.Primitives;
global using System.Collections.Concurrent;
global using System.ComponentModel;
global using System.ComponentModel.DataAnnotations;
global using System.ComponentModel.DataAnnotations.Schema;
global using System.Diagnostics.CodeAnalysis;
global using System.Reflection;
global using System.Security.Claims;
global using System.Text.Json;
global using System.Text.Json.Serialization;

// Types
global using DicWorkHours = System.Collections.Generic.Dictionary<System.DateOnly, System.Collections.Generic.List<Wasko.ModelWorkHours>>;
global using DicDaysOff = System.Collections.Generic.Dictionary<System.DateOnly, System.Collections.Generic.List<Wasko.ModelDayOff>>;
