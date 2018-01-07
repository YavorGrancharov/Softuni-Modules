using System;
using System.Collections.Generic;
using System.Linq;

namespace SoftUni_Beer_Pong
{
    class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, Dictionary<string, int>> equip = 
                new Dictionary<string, Dictionary<string, int>>();

            string[] input = Console.ReadLine().Split('|');

            while (input[0] != "stop the game")
            {
                string player = input[0];
                string team = input[1];
                string points = input[2];

                if (!equip.ContainsKey(team))
                {
                    equip.Add(team, new Dictionary<string, int>());
                }
                if (equip[team].Count < 3)
                {
                    equip[team][player] = int.Parse(points);
                }
                
                input = Console.ReadLine().Split('|');
            }

            equip = equip
                .Where(p => p.Value.Keys.Count == 3)
                .ToDictionary(k => k.Key, p => p.Value)
                .OrderByDescending(p => p.Value.Values.Sum())
                .ToDictionary(k => k.Key, p => p.Value);

            int index = 1;
            foreach (KeyValuePair<string, Dictionary<string, int>> team in equip)
            {
                Console.WriteLine("{0}. {1}; Players:", index, team.Key);

                Dictionary<string, int> teamsPoints = team.Value
                    .OrderByDescending(p => p.Value)
                    .ToDictionary(k => k.Key, p => p.Value);

                foreach (KeyValuePair<string, int> printTeams in teamsPoints
                    .OrderByDescending(p => p.Value))
                {                   
                    Console.WriteLine("###{0}: {1}", printTeams.Key, printTeams.Value);
                }
                index++;
            }
        }
    }
}
