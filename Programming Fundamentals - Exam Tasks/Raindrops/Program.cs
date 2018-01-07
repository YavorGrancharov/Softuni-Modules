using System;

namespace Raindrops
{
	class MainClass
	{
		public static void Main(string[] args)
		{
			int regionsAmount = int.Parse(Console.ReadLine());
			decimal density = decimal.Parse(Console.ReadLine());

			decimal sum = 0;
			decimal regionCoefficient = 0;
			for (int i = 0; i < regionsAmount; i++)
			{
				string line = Console.ReadLine();
				string[] tokens = line.Split(' ');
				decimal raindropsCount = decimal.Parse(tokens[0]);
				decimal squareMeters = decimal.Parse(tokens[1]);

				sum += raindropsCount / squareMeters;
				regionCoefficient = sum / density; 
			}
			if (density <= 0)
			{
				Console.WriteLine(sum);
			}
			else
			{
				Console.WriteLine("{0:F3}", regionCoefficient);
			}
		}
	}
}
