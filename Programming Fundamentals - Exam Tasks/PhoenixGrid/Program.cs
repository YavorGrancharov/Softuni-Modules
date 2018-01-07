using System;
using System.Text.RegularExpressions;

namespace PhoenixGrid
{
	class MainClass
	{
		public static void Main(string[] args)
		{
			string input = Console.ReadLine();

			string pattern = @"^([^\s_]{3}\.)+([^\s_]{3})*$";

			Regex regex = new Regex(pattern);

			while (input != "ReadMe")
			{
				Match message = regex.Match(input);

				if (message.Success)
				{
					bool isPalindrome = true;
					for (int i = 0; i < input.Length / 2; i++)
					{
						if (input[i] != input[input.Length - 1 - i])
						{
							Console.WriteLine("NO");
							isPalindrome = false;
							break;
						}
					}
					if (isPalindrome)
					{
						Console.WriteLine("YES");
					}				
				}
				else
				{
					Console.WriteLine("NO");
				}
				input = Console.ReadLine();
			}
		}
	}
}
