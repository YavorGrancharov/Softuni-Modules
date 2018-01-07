using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hornet_Armada
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            Dictionary<string, Dictionary<string, long>> legionParams = new Dictionary<string, Dictionary<string, long>>();
            Dictionary<string, long> legionActivity = new Dictionary<string, long>();

            for (int i = 0; i < n; i++)
            {
                string input = Console.ReadLine();

                string[] tokens = input
                    .Split(new string[] { "=", " ", "->", ":"}, StringSplitOptions.RemoveEmptyEntries);

                int lastActivity = int.Parse(tokens[0]);
                string legionName = tokens[1];
                string soldierType = tokens[2];
                long soldierCount = long.Parse(tokens[3]);

                if (!legionParams.ContainsKey(legionName))
                {
                    legionParams.Add(legionName, new Dictionary<string, long>());
                    legionActivity[legionName] = lastActivity;
                }

                if (!legionParams[legionName].ContainsKey(soldierType))
                {
                    legionParams[legionName][soldierType] = 0;
                }
                legionParams[legionName][soldierType] += soldierCount;

                if (legionActivity[legionName] < lastActivity)
                {
                    legionActivity[legionName] = lastActivity;
                }
            }

            string[] secondInput = Console.ReadLine().Split('\\');

            if (secondInput.Length < 2)
            {
                string currentSoldierType = secondInput[0];

                foreach (var legion in legionActivity.OrderByDescending(x => x.Value))
                {
                    if (legionParams[legion.Key].ContainsKey(currentSoldierType))
                    {
                        Console.WriteLine($"{legion.Value} : {legion.Key}");
                    }
                }
            }
            else
            {
                var currentActivity = long.Parse(secondInput[0]);
                var currentSoldierType = secondInput[1];

                foreach (var legion in legionParams
                    .Where(x => x.Value.ContainsKey(currentSoldierType))
                    .OrderByDescending(x => x.Value[currentSoldierType]))
                {
                    if (legionActivity[legion.Key] < currentActivity && legionParams[legion.Key].ContainsKey(currentSoldierType))
                    {
                        Console.WriteLine($"{legion.Key} -> {legionParams[legion.Key][currentSoldierType]}");
                    }
                }
            }  
        }
    }
}
