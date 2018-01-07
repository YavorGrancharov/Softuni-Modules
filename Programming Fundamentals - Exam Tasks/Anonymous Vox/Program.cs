using System;
using System.Text.RegularExpressions;

namespace exam03
{
    class Program
    {
        static void Main(string[] args)
        {
            string statement = Console.ReadLine();

            string placeholder = Console.ReadLine();

            string pattern = @"([a-zA-Z]+)(.+)(\1)";

            string recognition = @"\{(.*?[a-zA-Z]+.*?)\}";

            string replacer = string.Empty;
            string toReplace = string.Empty;

            MatchCollection m = Regex.Matches(statement, pattern);
            MatchCollection n = Regex.Matches(placeholder, recognition);

            int len = Math.Min(m.Count, n.Count);
            for (int i = 0; i < len; i++)
            {
                toReplace = m[i].Groups[2].Value.ToString();
                replacer = n[i].Groups[1].Value.ToString();
                statement = statement.Replace(toReplace, replacer);
            }
            Console.WriteLine(statement);
        }
    }
}