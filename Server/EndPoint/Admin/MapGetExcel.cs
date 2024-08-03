using System.Data;
using ClosedXML.Excel;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;


class MapGetExcel
{
  public static IResult GetExcel(MapModelDateRange model, IAdminRep rep)
  {
    var employers = rep.getMonthlyWork(model.Start, model.End)
      .Where(a => a.WorkDays.Count() > 0)
      .Select(Tmp);

    using XLWorkbook workbook = new();
    using MemoryStream save = new();
    foreach (var data in employers)
    {
      IXLWorksheet iXLWorksheet =
        workbook.AddWorksheet(data,
          data.TableName.Substring(0, data.TableName.Length < 31 ? data.TableName.Length : 31));
    }
    workbook.SaveAs(save);

    return Results.File(save.ToArray(), contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", fileDownloadName: "Sample.xlsx");
  }

  public static IResult GetExcel2(DateOnly start, DateOnly end, IAdminRep rep)
  {
    var employers = rep.getMonthlyWork(start, end)
      .Where(a => a.WorkDays.Count() > 0)
      .Select(Tmp);

    using XLWorkbook workbook = new();
    using MemoryStream save = new();
    foreach (var data in employers)
    {
      IXLWorksheet iXLWorksheet =
        workbook.AddWorksheet(data,
          data.TableName.Substring(0, data.TableName.Length < 31 ? data.TableName.Length : 31));
    }
    workbook.SaveAs(save);

    return Results.File(save.ToArray(), contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", fileDownloadName: "Sample.xlsx");
  }

  private static DataTable Tmp(ModelUser model)
  {
    DataTable dt = new DataTable
    {
      TableName = $"Pracownik {model.FirstName} {model.LastName} {model.UserName}"
    };
    dt.Columns.Add("Data", typeof(string));
    dt.Columns.Add("Rozpoczęcie pracy", typeof(string));
    dt.Columns.Add("Zakończenie pracy", typeof(string));
    dt.Columns.Add("Nazwa budowy", typeof(string));
    dt.Columns.Add("Założona kwota", typeof(string));

    foreach (var data in model.WorkDays)
    {
      dt.Rows.Add(data.Date, data.StartTime, data.EndTime, data.Construction?.Name ?? "", data.CashRegister);
    }

    return dt;
  }
}

