using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using System.Text;
using System.Threading.Tasks;

namespace CriticalBreakpoint
{
	class MainClass
	{
		public static void Main(string[] args)
		{
			List<string> lines = new List<string>();

			long absoluteCriticalRatio = 0;

			string input = Console.ReadLine();

			int count = 0;
			while (input != "Break it.")
			{
				string[] nums = input.Split(' ');
				long num1 = long.Parse(nums[0]);
				long num2 = long.Parse(nums[1]);
				long num3 = long.Parse(nums[2]);
				long num4 = long.Parse(nums[3]);

				lines.Add(input);

				long currentCriticalRatio = Math.Abs((num4 + num3) - (num2 + num1));
				if (absoluteCriticalRatio == 0 && currentCriticalRatio != 0)
				{
					absoluteCriticalRatio = currentCriticalRatio;
				}
				if (currentCriticalRatio != 0 && currentCriticalRatio != absoluteCriticalRatio)
				{
					Console.WriteLine("Critical breakpoint does not exist.");
					return;
				}
				input = Console.ReadLine();
				count++;
			}

			BigInteger criticalBreakPoint = BigInteger.Pow(absoluteCriticalRatio, count) % count;

			foreach (var line in lines)
			{
				Console.WriteLine("Line: [{0}]", string.Join(", ",line.Split(' ')));
			}
			Console.WriteLine("Critical Breakpoint: {0}",criticalBreakPoint);
		}
	}
}
