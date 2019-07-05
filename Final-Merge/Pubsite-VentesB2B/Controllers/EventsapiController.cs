using Pubsite_VentesB2B.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Pubsite_VentesB2B.Controllers
{
    public class EventsapiController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        public IHttpActionResult GetAllEvent()
        {
            return Ok(db.Events.Where(e=>e.ContentDetail.HideOnSite==false).ToList());
        }

        public IHttpActionResult GetEvent(int id)
        {
            Event events = db.Events.Find(id);
            if (events == null || events.ContentDetail.HideOnSite==true)
            {
                return NotFound();
            }

            return Ok(events);
        }

        public IHttpActionResult GetEvent(string type, int Last=0)
        {
            var events = new List<Event>();

            if (!string.IsNullOrEmpty(type) && type.Trim().ToLower() != "all" && Last != 0)
            {
                events = db.Events.Where(n => (n.EventType.Equals(type)) && (n.ContentDetail.HideOnSite == false)).OrderByDescending(n => n.EventID).Take(Last).ToList();
            }
            else if(Last != 0)
            {   
                events = db.Events.Where(e => e.ContentDetail.HideOnSite == false).OrderByDescending(n => n.EventID).Take(Last).ToList();
            }
            else if (!string.IsNullOrEmpty(type))
            {
                events = db.Events.Where(n => (n.EventType.Equals(type)) && (n.ContentDetail.HideOnSite == false)).OrderByDescending(n => n.EventID).ToList();
            }
            else
            {
                events = db.Events.Where(e => e.ContentDetail.HideOnSite == false).OrderByDescending(n => n.EventID).ToList();
            }
            if (events == null)
            {
                return NotFound();
            }
            return Ok(events);
        }
    }
}
