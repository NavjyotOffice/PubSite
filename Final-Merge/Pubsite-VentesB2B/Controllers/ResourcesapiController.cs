using Pubsite_VentesB2B.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Pubsite_VentesB2B.Controllers
{
    public class ResourcesapiController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        public IHttpActionResult GetAllResources()
        {
            return Ok(db.Resources.Where(r=>r.ContentDetail.HideOnSite==false).ToList());
        }

        public IHttpActionResult GetResource(int id)
        {
            Resource resources = db.Resources.Find(id);

            if (resources == null || resources.ContentDetail.HideOnSite==true)
            {
                return NotFound();
            }

            return Ok(resources);
        }

        public IHttpActionResult GetResource(string type, int Last=0)
        {
            var resources = new List<Resource>();

            if (!string.IsNullOrEmpty(type) && type.Trim().ToLower() != "all" && Last != 0)
            {
              resources = db.Resources.Where(n => (n.ResourceType.Equals(type)) && (n.ContentDetail.HideOnSite == false)).OrderByDescending(n => n.ResourcesID).Take(Last).ToList();
            }
            else if(Last != 0)
            {
              resources = db.Resources.Where(r => r.ContentDetail.HideOnSite == false).OrderByDescending(n => n.ResourcesID).Take(Last).ToList();
            }
            else if (!string.IsNullOrEmpty(type))
            {
              resources = db.Resources.Where(n => (n.ResourceType.Equals(type)) && (n.ContentDetail.HideOnSite == false)).OrderByDescending(n => n.ResourcesID).ToList();
            }
            else
            {
              resources = db.Resources.Where(r => r.ContentDetail.HideOnSite == false).OrderByDescending(n => n.ResourcesID).ToList();
            }
            if (resources == null)
            {
                return NotFound();
            }
            return Ok(resources);
        }
    }
}
