using System;
using System.Collections.Generic;
using System.Linq;

namespace Points_Counter
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();

            Dictionary<string, Dictionary<string, int>> data =
            new Dictionary<string, Dictionary<string, int>>();

            while (input != "Result")
            {
                string[] chars = new string[]
                {
                    "@", "$", "%", "*"
                };

                for (int i = 0; i < chars.Length; i++)
                {
                    if (input.Contains(chars[i]))
                    {
                        input = input.Replace(chars[i], "");
                    }
                }

                string[] tokens = input.Split('|');
                string name = tokens[0];
                string team = tokens[1];
                int scores = int.Parse(tokens[2]);

                if (!data.ContainsKey(name))
                {
                    data.Add(name, new Dictionary<string, int>());
                }
                if (!data[name].ContainsKey(team))
                {
                    data[name].Add(team, 0);
                }
                data[name][team] = scores;

                input = Console.ReadLine();
            }

            foreach (KeyValuePair<string, Dictionary<string, int>> kvp in data
                .OrderByDescending(p => p.Value.Values.Sum()))
            {
                if (kvp.Key.ToUpper() == kvp.Key)
                {
                    string team = kvp.Key;
                    Dictionary<string, int> playerScores = kvp.Value;

                    Console.WriteLine("{0} => {1}", team, kvp.Value.Values.Sum());

                    foreach (KeyValuePair<string, int> player in playerScores.Take(1))
                    {
                        Console.WriteLine("Most points scored by {0}", player.Key);
                    }
                }
                else
                {
                    string name = kvp.Key;
                    Dictionary<string, int> playerScores = kvp.Value;

                    foreach (KeyValuePair<string, int> player in playerScores.Take(1))
                    {
                        string team = player.Key;
                        Console.WriteLine("{0} => {1}", team, kvp.Value.Values.Sum());
                        Console.WriteLine("Most points scored by {0}", name);
                    }
                }
            }
        }
    }
}