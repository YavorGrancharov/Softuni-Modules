using System;
using System.Collections.Generic;
using System.Linq;

namespace Default_Values
{
    class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, string> stock = new Dictionary<string, string>();
            string[] input = Console.ReadLine()
                .Split(new string[] { " -> " }, StringSplitOptions.RemoveEmptyEntries); ;

            while (input[0] != "end")
            {
                string leftEntry = input[0];
                string rightEntry = input[1];

                if (!stock.ContainsKey(leftEntry))
                {
                    stock[leftEntry] = rightEntry;
                }
                input = Console.ReadLine()
                    .Split(new string[] { " -> " }, StringSplitOptions.RemoveEmptyEntries); ;
            }
            string defaultInput = Console.ReadLine();

            Dictionary<string, string> ordered = stock
                .Where(p => p.Value != "null")
                .OrderByDescending(p => p.Value.Length)
                .ToDictionary(p => p.Key, p => p.Value);

            Dictionary<string, string> nulls = stock
                .Where(v => v.Value == "null")
                .ToDictionary(v => v.Key, v => defaultInput);

            Dictionary<string, string> concat = ordered
                .Concat(nulls)
                .ToDictionary(p => p.Key, p => p.Value);

            foreach (var pair in concat)
            {
                Console.WriteLine("{0} <-> {1}", pair.Key, pair.Value);
            }
        }
    }
}