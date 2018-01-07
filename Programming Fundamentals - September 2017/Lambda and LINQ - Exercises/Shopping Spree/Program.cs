using System;
using System.Collections.Generic;
using System.Linq;

namespace Shopping_Spree
{
    class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, decimal> stock = new Dictionary<string, decimal>();

            decimal budget = decimal.Parse(Console.ReadLine());

            string[] input = Console.ReadLine().Split(' ');

            while (input[0] != "end")
            {
                string productName = input[0];
                decimal productPrice = decimal.Parse(input[1]);

                if (!stock.ContainsKey(productName))
                {
                    stock[productName] = productPrice;
                }
                else
                {
                    if (stock[productName] > productPrice)
                    {
                        stock[productName] = productPrice;
                    }
                }
                input = Console.ReadLine().Split(' ');
            }

            decimal sum = stock.Values.Sum();

            if (sum > budget)
            {
                Console.WriteLine("Need more money... Just buy banichka");
            }
            else
            {
                stock = stock
                    .OrderByDescending(p => p.Value)
                    .ThenBy(v => v.Key.Length)
                    .ToDictionary(v => v.Key, p => p.Value);

                foreach (KeyValuePair<string, decimal> kvp in stock)
                {
                    Console.WriteLine("{0} costs {1:F2}", kvp.Key, kvp.Value);
                }
            }
        }
    }
}
