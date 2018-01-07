using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace Match_Name
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();

            string pattern = @"(\+[\d]{3}[\s]{1}[\d]{1}[\s]{1}[\d]{3}[\s]{1}[\d]{4})|(\+[\d]{3}[\-]{1}[\d]{1}[\-]{1}[\d]{3}[\-]{1}[\d]{4})";

            Regex regex = new Regex(pattern);

            Match output = regex.Match(input);

            while (output.Success)
            {
                Console.Write(output.Value + ", ".TrimEnd(','));
                output = output.NextMatch();
            }
            Console.WriteLine();
        }
    }
}
