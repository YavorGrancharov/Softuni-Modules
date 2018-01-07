using System;
using System.Text.RegularExpressions;

namespace Snowflake
{
	class MainClass
	{
		public static void Main(string[] args)
		{
			string surface = @"^([^a-zA-Z0-9]+)$";
			string mantle = @"^([0-9_]+)$";
			string core = @"^([^\w]+)([\d_]+)([a-zA-Z]+)([\d_]+)([^\w]+)$";

			for (int i = 0; i < 1; i++)
			{
				string validSurface = Console.ReadLine();
				string validMantle = Console.ReadLine();
				string validCore = Console.ReadLine();
				string validMantleDup = Console.ReadLine();
				string validSurfaceDup = Console.ReadLine();

				if (Regex.IsMatch(validSurface, surface) && Regex.IsMatch(validMantle, mantle)
					&& Regex.IsMatch(validCore, core) && Regex.IsMatch(validMantleDup, mantle) 
				    && Regex.IsMatch(validSurfaceDup, surface))
				{
					Console.WriteLine("Valid");
					string coreLen = Regex.Match(validCore, core).Groups[3].Value;
					Console.WriteLine(coreLen.Length);
				}
				else
				{
					Console.WriteLine("Invalid");
				}
			}
		}
	}
}
