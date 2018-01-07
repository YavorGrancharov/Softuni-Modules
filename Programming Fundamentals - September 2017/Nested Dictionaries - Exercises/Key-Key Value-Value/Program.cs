using System;
using System.Collections.Generic;
using System.Linq;

namespace Key_Key_Value_Value
{
    class Program
    {
        static void Main(string[] args)
        {
            string key = Console.ReadLine();

            string value = Console.ReadLine();

            Dictionary<string, List<string>> stock = new Dictionary<string, List<string>>();

            int n = int.Parse(Console.ReadLine());
            for (int i = 0; i < n; i++)
            {
                string[] input = Console.ReadLine().Split(new string[] { " => " }, StringSplitOptions.RemoveEmptyEntries);

                string leftEntry = input[0];

                List<string> raightEntry = input[1].Split(';').ToList();

                if (leftEntry.Contains(key))
                {
                    if (!stock.ContainsKey(leftEntry))
                    {
                        stock[leftEntry] = new List<string>();
                    }
                    foreach (string word in raightEntry)
                    {
                        if (word.Contains(value))
                        {
                            stock[leftEntry].Add(word);
                        }
                    }
                }
            }
            foreach (KeyValuePair<string, List<string>> match in stock)
            {
                Console.WriteLine("{0}:", match.Key);
                foreach (var val in match.Value)
                {
                    Console.WriteLine("-{0}", val);
                }
            }
        }
    }
}
