using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Deserialize_String
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();

            StringBuilder index = new StringBuilder(new string(' ', 500));

            while (input != "end")
            {
                string[] tokens = input.Split(':');
                char letter = char.Parse(tokens[0]);
                List<int> indexes = tokens[1].Split('/').Select(int.Parse).ToList();

                foreach (var num in indexes)
                {
                    index[num] = letter;
                }

                input = Console.ReadLine();
            }
            Console.WriteLine(index.ToString());
        }
    }
}