using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using Pubsite_VentesB2B.Models;
using PagedList;
using PagedList.Mvc;

namespace Pubsite_VentesB2B.Controllers
{
    [Authorize]
    public class CompaniesController : Controller
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: Companies
        public ActionResult Index(int? Page, string searchText = "")
        {
            searchText = searchText.Trim();
            var companies = db.Companies.Where(c=>(c.CompanyName.Contains(searchText))).OrderByDescending(c=>c.CompanyID).ToList().ToPagedList(Page ?? 1, 10);
            return View(companies);
        }

        // GET: Companies/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Company company = db.Companies.Find(id);
            if (company == null)
            {
                return HttpNotFound();
            }
            return View(company);
        }

        // GET: Companies/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Companies/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(Company company)
        {
            if (ModelState.IsValid)
            {
                if (company.Upload != null && company.Upload.ContentLength > 0)
                {
                    string fileName = Guid.NewGuid().ToString() + Path.GetExtension(company.Upload.FileName);
                    string path = Path.Combine(Server.MapPath("~/Uploads/Companies/Images"), fileName);
                    company.Upload.SaveAs(path);
                    company.LogoImage = "Uploads/Companies/Images/" + fileName;
                }
                ApplicationUser user = System.Web.HttpContext.Current.GetOwinContext().GetUserManager<ApplicationUserManager>().FindById(System.Web.HttpContext.Current.User.Identity.GetUserId());
                company.CreatedDate = DateTime.Now;
                company.UpdatedDate = DateTime.Now;
                company.CreatedById = user.Id;
                company.UpdatedById = user.Id;
                db.Companies.Add(company);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            //ViewBag.AddressID = new SelectList(db.Addresses, "AddressID", "DetailAddress", company.AddressID);
            return View(company);
        }

        // GET: Companies/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Company company = db.Companies.Find(id);
            if (company == null)
            {
                return HttpNotFound();
            }
            //ViewBag.AddressID = new SelectList(db.Addresses, "AddressID", "DetailAddress", company.AddressID);
            return View(company);
        }

        // POST: Companies/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(Company company)
        {
            if (ModelState.IsValid)
            {
                if (company.Upload !=null && company.Upload.ContentLength > 0)
                {
                    string fileName = Guid.NewGuid().ToString() + Path.GetExtension(company.Upload.FileName);
                    string path = Path.Combine(Server.MapPath("~/Uploads/Companies/Images"), fileName);
                    company.Upload.SaveAs(path);
                    company.LogoImage = "Uploads/Companies/Images/" + fileName;
                }
                ApplicationUser user = System.Web.HttpContext.Current.GetOwinContext().GetUserManager<ApplicationUserManager>().FindById(System.Web.HttpContext.Current.User.Identity.GetUserId());
                company.UpdatedDate = DateTime.Now;
                company.UpdatedById = user.Id;

                db.Entry(company).State = EntityState.Modified;
                //db.Entry(company.Address).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            //ViewBag.AddressID = new SelectList(db.Addresses, "AddressID", "DetailAddress", company.AddressID);
            return View(company);
        }

        // GET: Companies/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Company company = db.Companies.Find(id);
            if (company == null)
            {
                return HttpNotFound();
            }
            return View(company);
        }

        // POST: Companies/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        [AuthFilter(Roles ="AppAdmin")]
        public ActionResult DeleteConfirmed(int id)
        {
            Company company = db.Companies.Find(id);
            db.Companies.Remove(company);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
