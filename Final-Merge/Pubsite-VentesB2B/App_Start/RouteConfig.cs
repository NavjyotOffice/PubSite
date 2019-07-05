using Pubsite_VentesB2B.App_Start;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace Pubsite_VentesB2B
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "NewsList",
                url: "NewsList/{action}/{id}",
                defaults: new { controller = "News", action = "Index", id = UrlParameter.Optional }
            );

            routes.MapRoute(
                name: "EventsList",
                url: "EventsList/{action}/{id}",
                defaults: new { controller = "Events", action = "Index", id = UrlParameter.Optional }
            );

            routes.MapRoute(
                name: "ResourcesList",
                url: "ResourcesList/{action}/{id}",
                defaults: new { controller = "Resources", action = "Index", id = UrlParameter.Optional }
            );

            routes.MapRoute(
                name: "CompaniesList",
                url: "CompaniesList/{action}/{id}",
                defaults: new { controller = "Companies", action = "Index", id = UrlParameter.Optional }
            );

            routes.MapRoute(
                name: "Account",
                url: "Account/{action}/{id}",
                defaults: new { controller = "Account", action = "Login", id = UrlParameter.Optional }
            );

            routes.MapRoute(
                name: "Error",
                url: "Error/{action}/{id}",
                defaults: new { controller = "Error", action = "Index", id = UrlParameter.Optional }
            );

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Default", action = "Index", id = UrlParameter.Optional },
                constraints: new
                {
                  serverRoute = new ServerRouteConstraint(url =>
                    {
                      return url.PathAndQuery.EndsWith("Index", StringComparison.InvariantCultureIgnoreCase);
                    }),
                }
            );

            routes.MapRoute(
              name:"angular",
              url:"{*url}",
              defaults: new { controller= "Default", action="Index" }
            );
        }
    }
}
