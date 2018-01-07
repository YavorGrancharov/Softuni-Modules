using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace Extract_Emails
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();

            string pattern = @"([a-zA-Z0-9+-._]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+)";

            Regex regex = new Regex(pattern);

            Match email = regex.Match(input);

            if (email.Success)
            {
                Console.WriteLine(email.Value.ToString());
            }
        }
    }
}
