using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Foreign_Languages
{
    class Program
    {
        static void Main(string[] args)
        {
            string country = Console.ReadLine();

            if(country.Equals("England") || country.Equals("USA"))
            {
                Console.WriteLine("English");
            }
            else if(country.Equals("Spain") || country.Equals("Argentina") || country.Equals("Mexico"))
            {
                Console.WriteLine("Spanish");
            }
            else
            {
                Console.WriteLine("unknown");
            }
        }
    }
}
