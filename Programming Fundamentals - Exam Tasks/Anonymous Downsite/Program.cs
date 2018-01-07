using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using System.Text;
using System.Threading.Tasks;

namespace exam01
{
    class Program
    {

        static void Main(string[] args)
        {
            BigInteger numberOfWebsites = BigInteger.Parse(Console.ReadLine());

            BigInteger securityKey = BigInteger.Parse(Console.ReadLine());

            int power = 0;
            decimal siteLoss = 0M;
            for (int i = 0; i < numberOfWebsites; i++)
            {
                string input = Console.ReadLine();
                string[] tokens = input.Split(' ');
                string siteName = tokens[0];
                long siteVisits = long.Parse(tokens[1]);
                decimal siteCommercialPricePerVisit = decimal.Parse(tokens[2]);

                siteLoss += siteVisits * siteCommercialPricePerVisit;
                Console.WriteLine(siteName);
                power++;
            }
            Console.WriteLine("Total Loss: {0:F20}", siteLoss);
            Console.WriteLine("Security Token: {0}", BigInteger.Pow(securityKey,power));
        }
    }
}
