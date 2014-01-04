using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Webclient.Startup))]
namespace Webclient
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
