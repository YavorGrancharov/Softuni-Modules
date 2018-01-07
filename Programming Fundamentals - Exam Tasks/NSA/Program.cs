using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NSA
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();

            Dictionary<string, Dictionary<string, int>> data = 
                new Dictionary<string, Dictionary<string, int>>();

            while (input != "quit")
            {
                string[] parts = input
                    .Split(new string[] { " -> " }, 
                    StringSplitOptions.RemoveEmptyEntries);

                string countryName = parts[0];
                string spyName = parts[1];
                int daysInService = int.Parse(parts[2]);

                if (!data.ContainsKey(countryName))
                {
                    data[countryName] = new Dictionary<string, int>();
                }

                if (!data[countryName].ContainsKey(spyName))
                {
                    data[countryName][spyName] = 0;
                }
                data[countryName][spyName] = daysInService;

                input = Console.ReadLine();
            }
            
            foreach (var country in data.OrderByDescending(x => x.Value.Values.Count))
            {
                Console.WriteLine($"Country: {country.Key}");

                Dictionary<string, int> spyes = country.Value;

                foreach (var spy in spyes.OrderByDescending(x => x.Value))
                {
                    Console.WriteLine($"**{spy.Key} : {spy.Value}");
                }
            } 
        }
    }
}
