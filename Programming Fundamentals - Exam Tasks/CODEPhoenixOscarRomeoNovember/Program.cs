using System;
using System.Collections.Generic;
using System.Linq;

namespace CODEPhoenixOscarRomeoNovember
{
	class MainClass
	{
		public static void Main(string[] args)
		{
			string input = Console.ReadLine();

			Dictionary<string, HashSet<string>> data = new Dictionary<string, HashSet<string>>();

			while (input != "Blaze it!")
			{
				string[] tokens = input.Split(new string[] { " -> " }, StringSplitOptions.RemoveEmptyEntries);
				string creature = tokens[0];
				string squadMate = tokens[1];

				if (!data.ContainsKey(creature))
				{
					data.Add(creature, new HashSet<string>());
				}
				if (creature != squadMate)
				{
					data[creature].Add(squadMate);
				}

				input = Console.ReadLine();
			}

			Dictionary<string, List<string>> output = new Dictionary<string, List<string>>();

			foreach (var record in data)
			{
				output.Add(record.Key, new List<string>());

				foreach (var mate in record.Value)
				{
					if (data.ContainsKey(mate) && data[mate].Contains(record.Key))
					{
						continue;
					}
					else
					{
						output[record.Key].Add(mate);
					}
				}
			}

			foreach (var entry in output.OrderByDescending(x => x.Value.Count))
			{
				Console.WriteLine("{0} : {1}", entry.Key, string.Join(" ", entry.Value.Count));
			}
		}
	}
}
