using System;
using System.Text;

namespace JSON_Parse
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();

            StringBuilder concat = new StringBuilder();

            string[] parts = input
                .Split(new string[] { "},{" }, 
                StringSplitOptions.RemoveEmptyEntries);

            foreach (string part in parts)
            {
                string[] tokens = part
                    .Split(new string[] { "[{name:\"", "\",age:", ",grades:", "name:\""}, 
                    StringSplitOptions.RemoveEmptyEntries);

                string name = tokens[0];
                string age = tokens[1];
                string grades = tokens[2].Substring(1, tokens[2].Length - 1 - 1);

                if (grades == string.Empty)
                {
                    grades = "None";
                }
                Console.WriteLine("{0} : {1} -> {2}", 
                    name, age, string.Join(" ", grades).TrimEnd('}', ']'));
            }
        }
    }
}