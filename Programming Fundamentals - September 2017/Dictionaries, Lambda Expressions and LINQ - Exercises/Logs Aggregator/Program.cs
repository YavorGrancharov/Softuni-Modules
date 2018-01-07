using System;
using System.Collections.Generic;
using System.Linq;

namespace Logs_Aggregator
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            SortedDictionary<string, Dictionary<string, int>> data =
                new SortedDictionary<string, Dictionary<string, int>>();

            for (int i = 0; i < n; i++)
            {
                string input = Console.ReadLine();

                string[] tokens = input.Split(' ').ToArray();
                string ip = tokens[0];
                string name = tokens[1];
                int duration = int.Parse(tokens[2]);

                if (!data.ContainsKey(name))
                {
                    data.Add(name, new Dictionary<string, int>());
                }
                if (!data[name].ContainsKey(ip))
                {
                    data[name][ip] = duration;
                }
                else
                {
                    data[name][ip] += duration;
                }
            }
            foreach (var entry in data)
            {
                string name = entry.Key;
                int total = entry.Value.Values.Sum();
                List<string> ips = entry.Value.Keys.OrderBy(x => x).Distinct().ToList();
                Console.WriteLine("{0}: {1} [{2}]", name, total, string.Join(", ", ips));
            }
        }
    }
}
