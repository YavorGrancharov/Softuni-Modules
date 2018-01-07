using System;
using System.Collections.Generic;
using System.Linq;

namespace Sum_Reversed_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            List<string> input = Console.ReadLine().Split(' ').ToList();

            List<int> asNumber = new List<int>();

            int sum = 0;
            string temp = string.Empty;
            for (int i = 0; i < input.Count; i++)
            {
                temp = input[i];
                char[] ch = temp.ToCharArray();
                char[] rev = ch.Reverse().ToArray();
                asNumber.Add(int.Parse(string.Join("",rev)));
            }
            for (int i = 0; i < asNumber.Count; i++)
            {
                sum += asNumber[i];
            }
            Console.WriteLine(sum);
        }
    }
}
