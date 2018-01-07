using System;
using System.Collections.Generic;
using System.Linq;

namespace Dict_Ref
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] input = Console.ReadLine().Split().ToArray();
            Dictionary<string, int> output = new Dictionary<string, int>();

            while (input[0] != "end")
            {
                string name = input[0];
                string secondname = input[2];
                int value = 0;

                if (int.TryParse(secondname, out value))
                {
                    output[name] = value;
                }
                else
                {
                    if (output.ContainsKey(secondname))
                    {
                        int secondValue = output[secondname];
                        output[name] = secondValue;
                    }
                }
                input = Console.ReadLine().Split(' ').ToArray();
            }

            foreach (var x in output)
            {
                Console.WriteLine($"{x.Key} === {x.Value}");
            }
        }
    }
}
