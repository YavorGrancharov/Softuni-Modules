using System;
using System.Collections.Generic;

namespace Capitalize_Words
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();

            List<string> concat = new List<string>();

            while (input != "end")
            {
                string[] tokens = input
                    .Split(new[] 
                    { ' ', '!', '\\', '@', '#', '$', '%', '^', '&', '*',
                        '(', ')', '|', '/', '.', ':', '"', ',', '+', '-',
                        '=', ';', '<', '>', '[', ']', '{', '}', '_', '~',
                        '`', '§', '°', '²', '³', '?'}, 
                    StringSplitOptions.RemoveEmptyEntries);

                string parts = string.Empty;
                for (int i = 0; i < tokens.Length; i++)
                {
                    parts += tokens[i].ToLower() + ", ";
                }

                string result = System.Globalization
                    .CultureInfo
                    .InvariantCulture
                    .TextInfo
                    .ToTitleCase(parts);

                Console.WriteLine(result.TrimEnd(',', ' '));

                input = Console.ReadLine();
            }
        }
    }
}
