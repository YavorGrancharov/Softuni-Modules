using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

namespace Rage_Quit
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();

            string toRepeat = @"([^\d]+)([\d]+)";

            List<string> list = new List<string>();
            foreach (Match m in Regex.Matches(input,toRepeat))
            {               
                string repeated = m.Groups[1].ToString().ToUpper();
                var newstr = string.Concat(Enumerable.Repeat(repeated, int.Parse(m.Groups[2].Value)));
                list.Add(newstr);
            }
            string result = string.Join("",list);
            Console.WriteLine("Unique symbols used: {0}",result.Where(x => !char.IsDigit(x)).Distinct().Count());
            Console.WriteLine(result);
        }
    }
}