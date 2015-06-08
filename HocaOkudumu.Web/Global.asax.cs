using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.SessionState;
using Funq;
using HocaOkudumu.Common;
using HocaOkudumu.Web.Services;
using ServiceStack.Api.Swagger;
using ServiceStack.CacheAccess;
using ServiceStack.CacheAccess.Providers;
using ServiceStack.ServiceInterface.Auth;
using ServiceStack.WebHost.Endpoints;

namespace HocaOkudumu.Web
{
    public class Global : System.Web.HttpApplication
    {
        public class HocaOkudumuAppHost : AppHostBase
        {
            //Tell Service Stack the name of your application and where to find your web services
            public HocaOkudumuAppHost()
                : base("Hoca Okudumu Web Services", typeof(HocaService).Assembly)
            {
            }

            public override void Configure(Container container)
            {

                container.Register<ICacheClient>(new MemoryCacheClient());
                Plugins.Add(new SwaggerFeature());
            }
        }

        protected void Application_Start(object sender, EventArgs e)
        {
            new HocaOkudumuAppHost().Init();
        }
    }
}