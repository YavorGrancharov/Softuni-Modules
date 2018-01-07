using System;
using System.Collections.Generic;
using System.Linq;

namespace Forum_Topics
{
    class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, List<string>> stock = new Dictionary<string, List<string>>();
            string end = Console.ReadLine();
            while (end != "filter")
            {
                string[] input = end.Split(new string[] { " -> " }, StringSplitOptions.RemoveEmptyEntries);
                string topic = input[0];
                string[] tags = input[1].Split(", ".ToCharArray(), StringSplitOptions.RemoveEmptyEntries);

                if (!stock.ContainsKey(topic))
                {
                    stock.Add(topic, new List<string>());
                }
                else if (stock.ContainsKey(topic))
                {
                    stock[topic] = new List<string>(stock[tags[0]]);
                }
                for (int i = 0; i < tags.Length; i++)
                {
                    stock[topic].Add(tags[i]);
                }
                end = Console.ReadLine();
            }
            end = Console.ReadLine();
            string[] check = end.Split(", ".ToCharArray(), StringSplitOptions.RemoveEmptyEntries);

            foreach (var topic in stock)
            {
                bool contains = true;
                for (int i = 0; i < check.Length; i++)
                {
                    if (!topic.Value.Contains(check[i]))
                    {
                        contains = false;
                        break;
                    }                        
                }
                if (contains)
                {
                    Console.WriteLine($"{topic.Key} | #{string.Join(", #", topic.Value)}");
                }
            }
        }
    }
}
