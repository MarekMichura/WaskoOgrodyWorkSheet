global using System.Text.Json.Serialization;
global using System.Text.Json;
global using System.Security.Claims;
global using System.Reflection;
global using System.Diagnostics.CodeAnalysis;
global using System.ComponentModel.DataAnnotations.Schema;
global using System.ComponentModel.DataAnnotations;
global using System.ComponentModel;
global using System.Collections.Concurrent;
global using Microsoft.Extensions.Primitives;
global using Microsoft.Extensions.FileProviders;
global using Microsoft.Extensions.Caching.Memory;
global using Microsoft.EntityFrameworkCore;
global using Microsoft.AspNetCore.OutputCaching;
global using Microsoft.AspNetCore.Mvc;
global using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
global using Microsoft.AspNetCore.Identity;
global using Microsoft.AspNetCore.DataProtection;
global using Microsoft.AspNetCore.Components;
global using FluentValidation.AspNetCore;
global using FluentValidation;
global using DotNetEnv;


// Types
global using DicWorkHours = System.Collections.Generic.Dictionary<System.DateOnly, System.Collections.Generic.List<Wasko.ModelWorkHours>>;
global using DicDaysOff = System.Collections.Generic.Dictionary<System.DateOnly, System.Collections.Generic.List<Wasko.ModelDayOff>>;