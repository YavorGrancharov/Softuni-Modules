using System;
using System.Collections.Generic;
using System.Linq;

namespace Worms_World_Party
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();

            Dictionary<string, Dictionary<string, long>> data = 
                new Dictionary<string, Dictionary<string, long>>();

            while (input != "quit")
            {
                string[] tokens = input
                    .Split(new string[] { " -> " }, 
                    StringSplitOptions.RemoveEmptyEntries);

                string wormName = tokens[0];
                string teamName = tokens[1];
                int wormScore = int.Parse(tokens[2]);

                try 
                {
                    var hasWorm = data.Values.Where(x => x.ContainsKey(wormName)).First().Count;
                }
                catch (Exception e)
                {
                    if (!data.ContainsKey(teamName))
                    {
                        data.Add(teamName, new Dictionary<string, long>());
                    }

                    if (!data[teamName].ContainsKey(wormName))
                    {
                        data[teamName][wormName] = 0;
                    }
                    data[teamName][wormName] = wormScore;
                }
                input = Console.ReadLine();
            }

            int indexer = 1;
            foreach (var team in data
                .OrderByDescending(x => x.Value.Values.Sum())
                .ThenByDescending(x => x.Value.Values.Sum() / x.Value.Values.Count))
            {
                Console.WriteLine($"{indexer}. Team: {team.Key} - {team.Value.Values.Sum()}");

                Dictionary<string, long> wormScores = team.Value;

                foreach (var worm in wormScores.OrderByDescending(x => x.Value))
                {
                    Console.WriteLine($"###{worm.Key} : {worm.Value}");
                }
                indexer++;
            }
        }
    }
}