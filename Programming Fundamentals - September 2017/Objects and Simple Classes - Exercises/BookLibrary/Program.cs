using System;
using System.Collections.Generic;
using System.Linq;

namespace BookLibrary
{
	class MainClass
	{
		public static void Main(string[] args)
		{
			int n = int.Parse(Console.ReadLine());

			Dictionary<string, double> library = new Dictionary<string, double>();

			for (int i = 0; i < n; i++)
			{
				List<string> input = Console.ReadLine().Split(' ').ToList();
				string title = input[0];
				string author = input[1];
				string publisher = input[2];
				string date = input[3];
				string isbn = input[4];
				double price = double.Parse(input[5]);

				if (!library.ContainsKey(author))
				{
					library.Add(author, 0);
				}
				library[author] += price;
			}
			foreach (var entry in library.OrderByDescending(x => x.Value).ThenBy(x => x.Key))
			{
				Console.WriteLine("{0} -> {1:F2}", entry.Key, entry.Value);
			}
		}
	}
}
