using System.IO.Compression;
using Microsoft.AspNetCore.ResponseCompression;

namespace Wasko;

internal class ServiceCompression : IService {
  public void DefineService(WebApplicationBuilder builder)
  {
    builder.Services.AddResponseCompression(static options => {
      options.EnableForHttps = true;
      options.MimeTypes = ["text/plain", "application/json"];
    });
  }
}