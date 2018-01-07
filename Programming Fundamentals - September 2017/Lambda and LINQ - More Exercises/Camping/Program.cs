using System;
using System.Collections.Generic;
using System.Linq;

namespace Camping
{
    class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, Dictionary<string, int>> regCampers = 
                new Dictionary<string, Dictionary<string, int>>();

            string[] input = Console.ReadLine().Split(' ');

            while (input[0] != "end")
            {
                string persons = input[0];
                string camperModel = input[1];
                int nights = int.Parse(input[2]);

                if (!regCampers.ContainsKey(persons))
                {
                    regCampers.Add(persons, new Dictionary<string, int>());
                }
                regCampers[persons][camperModel] = nights;

                input = Console.ReadLine().Split(' ');
            }
            
            foreach (var person in regCampers.OrderByDescending(p => p.Value.Count()).ThenBy(p => p.Key.Length))
            {
                int sumNights = 0;

                string personName = person.Key;
                int countDup = person.Value.Count();

                Dictionary<string, int> campers = person.Value;
               
                Console.WriteLine("{0}: {1}", personName, countDup);

                foreach (var camper in campers)
                {
                    string camperModel = camper.Key;
                    Console.WriteLine("***{0}", camperModel);
                    int nights = camper.Value;
                    sumNights += nights;                    
                }
                Console.WriteLine("Total stay: {0} nights", sumNights);
            }
        }
    }
}
