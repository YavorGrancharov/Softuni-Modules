using System;
using System.Numerics;

namespace Snowballs
{
	class MainClass
	{
		public static void Main(string[] args)
		{
			BigInteger n = BigInteger.Parse(Console.ReadLine());

			BigInteger maxValue = 0;
			BigInteger currentSnow = 0;
			BigInteger currentTime = 0;
			BigInteger currentQuality = 0;
			BigInteger snowballValue = 0;

			for (BigInteger i = 0; i < n; i++)
			{
				BigInteger snowballSnow = BigInteger.Parse(Console.ReadLine());
				BigInteger snowballTime = BigInteger.Parse(Console.ReadLine());
				int snowballQuality = int.Parse(Console.ReadLine());

				snowballValue = BigInteger.Pow((snowballSnow / snowballTime), snowballQuality);

				if (maxValue < snowballValue)
				{
					maxValue = snowballValue;
					currentSnow = snowballSnow;
					currentTime = snowballTime;
					currentQuality = snowballQuality;
				}
			}
			Console.WriteLine("{0} : {1} = {2} ({3})",currentSnow, currentTime, maxValue, currentQuality);
		}
	}
}
