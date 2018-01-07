using System;
using System.Collections.Generic;
using System.Linq;

namespace Flatten_Dictionary
{
    class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, Dictionary<string, string>> set =
                new Dictionary<string, Dictionary<string, string>>();

            string[] input = Console.ReadLine().Split(' ');
            while (input[0] != "end")
            {
                if (input.Length > 2)
                {
                    string category = input[0];
                    string innerKey = input[1];
                    string innerValue = input[2];

                    if (!set.ContainsKey(category))
                    {
                        set[category] = new Dictionary<string, string>();
                    }
                    set[category][innerKey] = innerValue;
                }
                else
                {
                    if (input[0] == "flatten")
                    {
                        string flat = input[1];

                        set[flat] = set[flat]
                            .ToDictionary(p => p.Key + "" + p.Value, p => string.Empty);
                    }
                }
                input = Console.ReadLine().Split(' ');
            }

            
            foreach (KeyValuePair<string, Dictionary<string, string>> kvp in set
                .OrderByDescending(p => p.Key.Length))
            {
                string category = kvp.Key;

                Console.WriteLine("{0}", category);

                Dictionary<string, string> newSet = kvp.Value.Where(p => p.Value != string.Empty)
                    .ToDictionary(p => p.Key, p => p.Value);               

                Dictionary<string, string> newSet2 = kvp.Value.Where(p => p.Value == string.Empty)
                    .ToDictionary(p => p.Key, p => p.Value);

                int indexer = 1;
                foreach (KeyValuePair<string, string> kvpSet in newSet
                    .OrderBy(p => p.Key.Length))
                {
                    Console.WriteLine("{0}. {1} - {2}", indexer, kvpSet.Key, kvpSet.Value);
                    indexer++;
                }

                foreach (KeyValuePair<string, string> kvpSet in newSet2)
                {
                    Console.WriteLine("{0}. {1}{2}", indexer, kvpSet.Key, kvpSet.Value);
                    indexer++;
                }
            }
        }
    }
}
