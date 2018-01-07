using System;
using System.Collections.Generic;
using System.Linq;

namespace Problem_2.SoftUni_Karaoke
{
    class Program
    {
        static void Main(string[] args)
        {
            List<string> participants = Console.ReadLine()
                .Split(new string[] { ", ", }, StringSplitOptions.RemoveEmptyEntries)
                .ToList();
            List<string> songs = Console.ReadLine(
                ).Split(new string[] { ", " }, StringSplitOptions.RemoveEmptyEntries)
                .ToList();

            Dictionary<string, HashSet<string>> data = new Dictionary<string, HashSet<string>>();

            string input = Console.ReadLine();
            while (input != "dawn")
            {
                string[] tokens = input
                    .Split(new string[] { ", " }, StringSplitOptions.RemoveEmptyEntries)
                    .ToArray();
                string name = tokens[0];
                string song = tokens[1];
                string award = tokens[2];

                if (participants.Contains(name) && songs.Contains(song))
                {
                    if (!data.ContainsKey(name))
                    {
                        data.Add(name, new HashSet<string>());
                    }
                    data[name].Add(award);
                }
                input = Console.ReadLine();
            }
            if (data.Count() == 0)
            {
                Console.WriteLine("No awards");
            }
            else
            {
                foreach (var entry in data
                    .Where(x => x.Value.Count() > 0)
                    .OrderByDescending(x => x.Value.Count())
                    .ThenBy(x => x.Key))
                {
                    Console.WriteLine("{0}: {1} awards", entry.Key, entry.Value.Distinct().Count());
                    HashSet<string> awards = entry.Value;
                    foreach (var award in awards.OrderBy(x => x))
                    {
                        Console.WriteLine("--{0}", award);
                    }
                }
            }
        }
    }
}