using System;
using System.Collections.Generic;
using System.Linq;

namespace Snowmen
{
	class MainClass
	{
		public static void Main(string[] args)
		{
			List<int> snowmen = Console.ReadLine().Split(' ').Select(int.Parse).ToList();

			HashSet<int> loosers = new HashSet<int>();

			while(snowmen.Count > 1)
			{
				for (int attacker = 0; attacker < snowmen.Count; attacker++)
				{
					if (!loosers.Contains(attacker))
					{
						if (snowmen[attacker] >= snowmen.Count)
						{
							int target = snowmen[attacker] % snowmen.Count;
							int diff = Math.Abs(attacker - target);
							if (attacker == target)
							{
								Console.WriteLine("{0} performed harakiri", attacker);
								loosers.Add(attacker);
							}
							else if (diff % 2 == 0)
							{
								Console.WriteLine("{0} x {1} -> {2} wins", attacker, target, attacker);
								loosers.Add(target);
							}
							else
							{
								Console.WriteLine("{0} x {1} -> {2} wins", attacker, target, target);
								loosers.Add(attacker);
							}
						}
						else
						{
							int target = snowmen[attacker];
							int diff = Math.Abs(attacker - target);
							if (attacker == target)
							{
								Console.WriteLine("{0} performed harakiri", attacker);
								loosers.Add(attacker);
							}
							else if (diff % 2 == 0)
							{
								Console.WriteLine("{0} x {1} -> {2} wins", attacker, target, attacker);
								loosers.Add(target);
							}
							else
							{
								Console.WriteLine("{0} x {1} -> {2} wins", attacker, target, target);
								loosers.Add(attacker);
							}

						}
						if (snowmen.Count - loosers.Count == 1)
						{
							return;
						}
					}
				}
				foreach (var index in loosers)
				{
					snowmen[index] = -1;
				}
				loosers.Clear();
				snowmen = snowmen.Where(x => x != -1).ToList();
			}
		}
	}
}
