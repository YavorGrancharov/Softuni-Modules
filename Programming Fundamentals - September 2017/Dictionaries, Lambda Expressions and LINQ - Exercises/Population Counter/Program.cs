using System;
using System.Collections.Generic;
using System.Linq;

namespace Population_Counter
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();

            Dictionary<string, Dictionary<string, long>> data = 
                new Dictionary<string, Dictionary<string, long>>();

            while (input != "report")
            {
                string[] tokens = input.Split('|').ToArray();
                string city = tokens[0];
                string country = tokens[1];
                int population = int.Parse(tokens[2]);

                if (!data.ContainsKey(country))
                {
                    data.Add(country, new Dictionary<string, long>());
                }
                if (!data[country].ContainsKey(city))
                {
                    data[country].Add(city, population);
                }

                input = Console.ReadLine();
            }
            foreach (var entry in data.OrderByDescending(x => x.Value.Values.Sum()))
            {
                string country = entry.Key;
                Console.WriteLine("{0} (total population: {1})", country,entry.Value.Values.Sum());
                Dictionary<string, long> cities = entry.Value;
                foreach (var city in cities.OrderByDescending(x => x.Value))
                {                    
                    Console.WriteLine("=>{0}: {1}",city.Key,city.Value);
                }
            }
        }
    }
}
