using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using Pubsite_VentesB2B.Models;

namespace Pubsite_VentesB2B.Controllers
{
    public class ContactsapiController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/Contactsapi
        //public IQueryable<Contact> GetContacts()
        //{
        //    return db.Contacts;
        //}

        // POST: api/Contactsapi
        [ResponseType(typeof(Contact))]
        public async Task<HttpResponseMessage> PostContact(Contact contact)
        {
            if (!ModelState.IsValid)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }

            db.Contacts.Add(contact);
            await db.SaveChangesAsync();

            return Request.CreateResponse(HttpStatusCode.Created, contact);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ContactExists(int id)
        {
            return db.Contacts.Count(e => e.ContactID == id) > 0;
        }
    }
}
