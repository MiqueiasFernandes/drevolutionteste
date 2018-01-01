using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace drevolution
{
    public class Program
    {


        public static void Main(string[] args)
        {


           BuildWebHost(args).Run();
        }

        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
            
            
        .UseKestrel()                
        .UseUrls("http://*:51204;http://*:80;")   // <!-- this 
        .UseContentRoot(Directory.GetCurrentDirectory())
        .UseIISIntegration()
        .UseConfiguration(new ConfigurationBuilder()
        .AddCommandLine(args)
        .Build())




                .UseStartup<Startup>()
                .Build();
    }
}
