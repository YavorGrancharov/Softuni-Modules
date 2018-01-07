using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

namespace AverageGrades
{
    internal class Program
    {
        public static void Main(string[] args)
        {
            Dictionary<string, List<double>> students =
                new Dictionary<string, List<double>>();

            string pattern = @"([a-zA-Z]+)(?:\s)([0-9|0-9\s|\.]+)";

            Regex regex = new Regex(pattern, RegexOptions.IgnoreCase);

            int n = int.Parse(Console.ReadLine());

            for (int i = 0; i < n; i++)
            {
                string input = Console.ReadLine();

                Match match = regex.Match(input);

                string name = match.Groups[1].Value;
                
                List<double> grades = match
                    .Groups[2].Value
                    .Split(' ')
                    .Select(double.Parse)
                    .ToList();

                if (!students.ContainsKey(name))
                {
                    students[name] = new List<double>();
                }
                students[name] = grades;
            }
                
            foreach (var rec in students                
                .OrderBy(x => x.Key)
                .ThenByDescending(x => x.Value.Average())
                .Where(x => x.Value.Average() >= 5.0))
            {
                Console.WriteLine("{0} -> {1:F2}", rec.Key, rec.Value.Average());
            }
        }
    }
}