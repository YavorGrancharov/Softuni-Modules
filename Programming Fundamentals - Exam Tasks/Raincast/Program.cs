using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;

namespace Raincast
{
	class MainClass
	{
		public static void Main(string[] args)
		{
			string type = @"^(?:Type:\s)(Normal|Warning|Danger)$";
			string source = @"^(?:Source:\s)(\w+)$";
			string forecast = @"^(?:Forecast:\s)([^\.\!\,\?]+)$";

			string input = Console.ReadLine();

			List<string> raincasts = new List<string>();

			string types = "type";

			string currentRainCast = string.Empty;

			while (input != "Davai Emo")
			{
				switch (types)
				{
					case "type":
						if (Regex.IsMatch(input, type))
						{
							currentRainCast = "(" + Regex.Match(input, type).Groups[1].Value + ")";
							types = "source";
						}
						break;
					case "source":
						if (Regex.IsMatch(input, source))
						{
							currentRainCast += " " + "***" + " ~ " + Regex.Match(input, source).Groups[1].Value;
							types = "forecast";
						}
						break;
					case "forecast":
						if (Regex.IsMatch(input, forecast))
						{
							currentRainCast = currentRainCast.Replace("***", Regex.Match(input, forecast).Groups[1].Value);
							raincasts.Add(currentRainCast);
							types = "type";
						}
						break;
				}
				input = Console.ReadLine();
			}
			foreach (var raincast in raincasts)
			{
				Console.WriteLine(raincast);
			}
		}
	}
}
