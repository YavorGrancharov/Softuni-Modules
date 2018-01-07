using System;
using System.Linq;
using System.Collections.Generic;

namespace Change_List
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();

            List<int> list = input
        .Split().Select(int.Parse).ToList();

            while (input != "Odd" && input != "Even")
            {
                input = Console.ReadLine();
                string[] tokens = input.Split(' ').ToArray();
                if (tokens[0] == "Delete")
                {
                    int num = int.Parse(tokens[1]);
                    list.RemoveAll(x => x == num);
                }
                else if (tokens[0] == "Insert")
                {
                    int num = int.Parse(tokens[1]);
                    int pos = int.Parse(tokens[2]);
                    list.Insert(pos, num);
                }
            }

            List<int> odd = new List<int>();
            List<int> even = new List<int>();

            for (int i = 0; i < list.Count; i++)
            {
                if (list[i] % 2 == 0)
                {
                    even.Add(list[i]);
                }
                else if (list[i] % 2 == 1)
                {
                    odd.Add(list[i]);
                }
            }

            if (input == "Odd")
            {
                Console.WriteLine(string.Join(" ", odd));
            }
            else if (input == "Even")
            {
                Console.WriteLine(string.Join(" ", even));
            }
        }
    }
}