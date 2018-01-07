using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Travel_Company
{
    class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, Dictionary<string, int>> stock = new Dictionary<string, Dictionary<string, int>>();
            string[] input = Console.ReadLine().Split(new string[] {":"}, StringSplitOptions.RemoveEmptyEntries);

            while (input[0] != "ready")
            {
                string city = input[0];
                string[] vehicleType = input[1].Split('-', ',');

                if (!stock.ContainsKey(city))
                {
                    stock.Add(city, new Dictionary<string, int>());
                }
                for (int i = 0; i < vehicleType.Length; i+=2)
                {
                    string vehicle = vehicleType[i];
                    int capacity = int.Parse(vehicleType[i + 1]);

                    if (!stock[city].ContainsKey(vehicle))
                    {
                        stock[city].Add(vehicle, capacity);
                    }
                    else
                    {
                        stock[city][vehicle] = capacity;
                    }
                }
                input = Console.ReadLine().Split(new string[] { ":" }, StringSplitOptions.RemoveEmptyEntries);
            }
            string[] secondInput = Console.ReadLine().Split(' ');

            while (secondInput[0] != "travel")
            {
                string city = secondInput[0];
                int people = int.Parse(secondInput[1]);

                foreach (KeyValuePair<string, Dictionary<string, int>> offer in stock)
                {
                    string town = offer.Key;
                    var vehicleCapacity = offer.Value;
                    int sum = 0;

                    if (city == town)
                    {
                        foreach (var item in vehicleCapacity)
                        {
                            sum += item.Value;
                        }
                        if (sum >= people)
                        {
                            Console.WriteLine($"{city} -> all {people} accommodated");
                        }
                        else
                        {
                            Console.WriteLine($"{city} -> all except {people - sum} accommodated");
                        }
                    }
                }
                secondInput = Console.ReadLine().Split(' ');
            }
        }
    }
}
