using System;
using System.Collections.Generic;
using System.Linq;

namespace Shellbound
{
    class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, HashSet<int>> stock = new Dictionary<string, HashSet<int>>();
            string input = Console.ReadLine();

            while (input != "Aggregate")
            {
                string[] tokens = input.Split(' ');
                string city = tokens[0];
                int size = int.Parse(tokens[1]);
                if (!stock.ContainsKey(city))
                {
                    stock[city] = new HashSet<int>();
                }
                stock[city].Add(size);

                input = Console.ReadLine();
            }
            foreach (var shell in stock)
            {
                string city = shell.Key;
                HashSet<int> shellSize = shell.Value;
                Console.WriteLine($"{city} -> {string.Join(", ", shellSize)} ({Math.Ceiling(shellSize.Sum() - shellSize.Average())})");
            }
        }
    }
}