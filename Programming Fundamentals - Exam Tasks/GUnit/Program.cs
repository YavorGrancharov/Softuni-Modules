using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

namespace GUnit
{
	class MainClass
	{
		public static void Main(string[] args)
		{
			SortedDictionary<string, SortedDictionary<string, SortedSet<string>>> map =
				new SortedDictionary<string, SortedDictionary<string, SortedSet<string>>>();

			Dictionary<string, int> classUnits = new Dictionary<string, int>();

			string input = Console.ReadLine();
			string pattern = @"^([A-Z][a-zA-Z0-9]+) \| ([A-Z][a-zA-Z0-9]+) \| ([A-Z][a-zA-Z0-9]+)$";

			Regex regex = new Regex(pattern);

			while (input != "It's testing time!")
			{
				Match match = regex.Match(input);
				if (match.Success)
				{
					string className = match.Groups[1].Value.Trim();
					string methods = match.Groups[2].Value.Trim();
					string tests = match.Groups[3].Value.Trim();

					if (!map.ContainsKey(className))
					{
						map.Add(className, new SortedDictionary<string, SortedSet<string>>());
						classUnits.Add(className, 0);
					}

					if (!map[className].ContainsKey(methods))
					{
						map[className].Add(methods, new SortedSet<string>());
					}

					if (!map[className][methods].Contains(tests))
					{
						map[className][methods].Add(tests);
						classUnits[className] += 1;
					}
				}
				input = Console.ReadLine();
			}

			Dictionary<string, SortedDictionary<string, SortedSet<string>>> sortedMap = map
				.OrderByDescending(c => classUnits[c.Key])
				.ThenBy(c => c.Value.Count())
				.ToDictionary(c => c.Key, c => c.Value);

			foreach (var clas in sortedMap)
			{
				Console.WriteLine(clas.Key + ":");

				foreach (var method in clas.Value.OrderByDescending(m => m.Value.Count))
				{
					Console.WriteLine("##" + method.Key);
					foreach (var unit in method.Value.OrderBy(t => t.Length))
					{
						Console.WriteLine("####" + unit);
					}
				}
			}
		}
	}
}