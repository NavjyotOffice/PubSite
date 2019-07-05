using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using Pubsite_VentesB2B.Models;

namespace Pubsite_VentesB2B.Controllers
{
    public class NewsapiController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        public IHttpActionResult GetAllNews()
        {
            var AllNews = db.News;
            return Ok(AllNews.Where(n=>n.ContentDetail.HideOnSite==false).OrderByDescending(n => n.NewsID).ToList());
        }

        [ResponseType(typeof(News))]
        public IHttpActionResult GetNews(int id)
        {
            News news = db.News.Find(id);
            if (news == null || news.ContentDetail.HideOnSite)
            {
                return NotFound();
            }

            return Ok(news);
        }

        public IHttpActionResult GetNews(string type, int Last=0)
        {
            var news=new List<News>();

            if(!string.IsNullOrEmpty(type) && type.Trim().ToLower() != "all" && Last != 0)
            {
              news = db.News.Where(n => (n.NewsType.Equals(type)) && n.ContentDetail.HideOnSite == false).OrderByDescending(n => n.NewsID).Take(Last).ToList();
            }
            else if(Last != 0)
            {
              news = db.News.Where(n => n.ContentDetail.HideOnSite == false).OrderByDescending(n => n.NewsID).Take(Last).ToList();
            }
            else if(!string.IsNullOrEmpty(type))
            {
              news = db.News.Where(n => (n.NewsType.Equals(type)) && n.ContentDetail.HideOnSite == false).OrderByDescending(n => n.NewsID).ToList();
            }
            else
            {
              news = db.News.Where(n => n.ContentDetail.HideOnSite == false).OrderByDescending(n => n.NewsID).ToList();
            }
            if (news == null)
            {
                return NotFound();
            }
            return Ok(news);
        }
    }
}
