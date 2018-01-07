using System;
using System.Collections.Generic;
using System.Linq;

namespace Exam_Shopping
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] input = Console.ReadLine().Split(' ').ToArray();
            Dictionary<string, int> stock = new Dictionary<string, int>();

            while (input[0] != "shopping")
            {
                string key = input[1];
                int val = int.Parse(input[2]);
                if (!stock.ContainsKey(key))
                {
                    stock[key] = 0;
                }
                stock[key] += val;
                if (stock.ContainsKey(key))
                {

                }
                input = Console.ReadLine().Split(' ').ToArray();
            }
            input = Console.ReadLine().Split(' ').ToArray();
            while (input[0] != "exam")
            {
                string key = input[1];
                int val = int.Parse(input[2]);
                if (!stock.ContainsKey(key))
                {
                    Console.WriteLine($"{key} doesn't exist");
                }
                else if (stock.ContainsKey(key))
                {
                    if (stock[key] > 0)
                    {
                        stock[key] -= val;
                    }
                    else if (stock[key] <= 0)
                    {
                        stock[key] = 0;
                        Console.WriteLine($"{key} out of stock");
                    }
                }
                input = Console.ReadLine().Split(' ').ToArray();
            }

            foreach (KeyValuePair<string, int> x in stock)
            {
                if (x.Value > 0)
                {
                    Console.WriteLine("{0} -> {1}", x.Key, x.Value);
                }
            }
        }
    }
}
