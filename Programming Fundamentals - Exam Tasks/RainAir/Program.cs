using System;
using System.Collections.Generic;
using System.Linq;

namespace RainAir
{
	class MainClass
	{
		public static void Main(string[] args)
		{
			string input = Console.ReadLine();

			Dictionary<string, List<int>> data = new Dictionary<string, List<int>>();

			while (input != "I believe I can fly!")
			{
				if (!input.Contains("="))
				{
					string[] tokens = input.Split(new [] { ' ' }, 2);
					string customerName = tokens[0];
					string flights = tokens[1];
					List<int> customerFlights = flights.Split(' ').Select(int.Parse).ToList();

					if (!data.ContainsKey(customerName))
					{
						data.Add(customerName, new List<int>());
					}
					data[customerName].AddRange(customerFlights);
				}
				else
				{
					string[] tokens = input.Split(new string[] {" = "},StringSplitOptions.RemoveEmptyEntries);
					string customerName = tokens[0];
					string secondname = tokens[1];

					if (!data.ContainsKey(customerName))
					{
						data.Add(customerName, new List<int>());
					}
					if (data.ContainsKey(customerName) && data.ContainsKey(secondname))
					{
						data[customerName] = new List<int>(data[secondname]);
					}
				}
				input = Console.ReadLine();
			}
			foreach (var entry in data
			         .OrderByDescending(x => x.Value.Count())
			         .ThenBy(x => x.Key))
			{
				Console.WriteLine("#{0} ::: {1}", entry.Key, string.Join(", ", entry.Value.OrderBy(x => x)));
			}
		}
	}
}
