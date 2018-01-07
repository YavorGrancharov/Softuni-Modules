using System;
using System.Collections.Generic;
using System.Linq;

namespace Pyramidic
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            string str = string.Empty;

            List<string> nth = new List<string>();
            List<string> extrted = new List<string>();

            char empty = '\0';
            for (int i = 0; i < n; i++)
            {
                str = Console.ReadLine();
                nth.Add(str);
            }

            for (int j = nth.Count - 1; j < nth.Count; j++)
            {
                foreach (char ch in nth[j])
                {
                    empty = ch;
                }
            }

            int count = 0;
            foreach (string t in nth)
            {
                count = t.Count(p => p == empty);
                if (count >= 1)
                {
                    string curr = t.Substring(t.IndexOf(empty));
                    curr = curr.Substring(0, curr.LastIndexOf(empty) + 1);
                    extrted.Add(curr);
                }
                count += 2;
            }

            foreach (string x in extrted)
            {
                Console.WriteLine(x);
            }
        }
    }
}