using System; 
using System.Collections.Generic;
using System.Linq;

namespace Placeholders
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();

            string concat = string.Empty;
            while (input != "end")
            {
                string[] leftEntry = input.Split('-')[0].Split(' ');
                string[] rightEntry = input.Split('>')[1].TrimStart(' ').TrimEnd(' ').Split(',');

                concat = string.Join(" ", leftEntry);

                for (int i = 0; i < rightEntry.Length; i++)
                {
                    string placeholder = $"{"{" + i + "}"}";
                    string repalce = rightEntry[i];

                    if (concat.Contains(placeholder))
                    {
                        concat = concat.Replace(placeholder, repalce);
                    }
                }
                Console.WriteLine(string.Join(" ", concat
                    .Split(new string [] { " " }, 
                    StringSplitOptions.RemoveEmptyEntries))
                    .Trim(','));

                input = Console.ReadLine();
            }           
        }
    }
}