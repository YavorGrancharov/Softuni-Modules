using System;
using System.Collections.Generic;
using System.Linq;

namespace Mixed_Phones
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] input = Console.ReadLine().Split().ToArray();
            Dictionary<string, string> output = new Dictionary<string, string>();

            while (input[0] != "Over")
            {
                string name = input[0];
                string number = input[2];
                long value = 0;

                if (long.TryParse(number, out value))
                {
                    output[name] = number;
                }
                else if (long.TryParse(name, out value))
                {
                    output[number] = name;
                }
                input = Console.ReadLine().Split().ToArray();
            }
            var list = output.Keys.ToList();
            list.Sort();
            foreach (var x in list)
            {
                Console.WriteLine("{0} -> {1}", x, output[x].TrimStart('0'));
            }
        }
    }
}