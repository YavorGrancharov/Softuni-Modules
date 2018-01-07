using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace Match_Phone_Number
{
    class Program
    {
        static void Main(string[] args)
        {
            //string pattern = @"( ?\+359 2 \d{3} \d{4})|(\+ ?359-2-\d{3}-\d{4})+\b";
            string pattern = @"( ?\+359 2 \d{3} \d{4})|(\+ ?359-2-\d{3}-\d{4})+\b|(\+ ?359\/2\/\d{3}\/\d{4})+\b";

            string input = Console.ReadLine();

            string result = string.Empty;
            MatchCollection phones = Regex.Matches(input, pattern);

            foreach (Match phone in phones)
            {
                result += phone.Value + ", ";                
            }
            Console.Write(result.TrimEnd(' ', ','));
            Console.WriteLine();
        }
    }
}
