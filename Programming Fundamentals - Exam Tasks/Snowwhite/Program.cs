using System;
using System.Collections.Generic;
using System.Linq;

namespace Snowwhite
{
	class MainClass
	{
		public static void Main(string[] args)
		{
			string input = Console.ReadLine();

			Dictionary<string, int> dwarfsData = new Dictionary<string, int>();

			while (input != "Once upon a time")
			{
				string[] tokens = input.Split(new string[] { " <:> " }, StringSplitOptions.RemoveEmptyEntries);
				string dwarfName = tokens[0];
				string dwarfHatColor = tokens[1];
				int dwarfPhysics = int.Parse(tokens[2]);

				string ID= dwarfName + ":" + dwarfHatColor;

				if (!dwarfsData.ContainsKey(ID))
				{
					dwarfsData.Add(ID, dwarfPhysics);
				}
				else
				{
					dwarfsData[ID] = Math.Max(dwarfsData[ID], dwarfPhysics);
				}

				input = Console.ReadLine();
			}

			foreach (var dwarf in dwarfsData
					 .OrderByDescending(x => x.Value)
			         .ThenByDescending(x => dwarfsData
			                           .Where(y => y.Key.Split(':')[1] == x.Key.Split(':')[1])
			                           .Count()))
			{
				Console.WriteLine("({0}) {1} <-> {2}", 
				                  dwarf.Key.Split(':')[1], 
				                  dwarf.Key.Split(':')[0], 
				                  dwarf.Value);
			}
		}
	}
}
