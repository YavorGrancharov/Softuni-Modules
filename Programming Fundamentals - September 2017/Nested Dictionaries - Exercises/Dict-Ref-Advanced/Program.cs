using System;
using System.Collections.Generic;
using System.Linq;

namespace Dict_Ref_Advanced
{
    class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, List<int>> stock = new Dictionary<string, List<int>>();
            string end = Console.ReadLine();
            while (end != "end")
            {
                string[] input = end.Split(new string[] { " -> " }, StringSplitOptions.RemoveEmptyEntries);
                string name = input[0];
                string[] num = input[1].Split(", ".ToCharArray(), StringSplitOptions.RemoveEmptyEntries);
                int value = 0;
                if (int.TryParse(num[0], out value))
                {
                    if (!stock.ContainsKey(name))
                    {
                        stock[name] = new List<int>();
                    }
                    for (int i = 0; i < num.Length; i++)
                    {
                        stock[name].Add(int.Parse(num[i]));
                    }
                }
                else
                {
                    if (stock.ContainsKey(num[0]))
                    {
                        stock[name] = new List<int>(stock[num[0]]);
                    }
                }
                end = Console.ReadLine();
            }
            foreach (var name in stock)
            {
                Console.WriteLine($"{name.Key} === {string.Join(", ", name.Value)}");
            }
        }
    }
}
