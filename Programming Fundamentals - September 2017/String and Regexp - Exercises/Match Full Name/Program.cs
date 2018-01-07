using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace Match_Full_Name
{
    class Program
    {
        static void Main(string[] args)
        {
            string pattern = @"\b[A-Z][a-z]+ [A-Z][a-z]+\b";

            string input = Console.ReadLine();

            MatchCollection names = Regex.Matches(input, pattern);

            foreach (Match name in names)
            {
                Console.Write(name.Value + " ");
            }
            Console.WriteLine();
        }
    }
}
