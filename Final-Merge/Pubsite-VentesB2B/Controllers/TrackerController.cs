using Pubsite_VentesB2B.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Pubsite_VentesB2B.Controllers
{
  public class TrackerController : Controller
  {
    private ApplicationDbContext db;
    public ActionResult Index()
    {
      return View();
    }

    public ActionResult GetEmailDetailsWithIP(string Email)
    {
      using (db = new ApplicationDbContext())
      {
        var emailDetails = db.EmailCampaignLandingPageTracks.Where(e => e.Email.Contains(Email.Trim())).ToList();
        return View(emailDetails);
      }
    }
  }
}
