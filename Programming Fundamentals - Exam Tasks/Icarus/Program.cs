using System;
using System.Collections.Generic;
using System.Linq;

namespace _02.Icarus
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> plane = Console.ReadLine().Split(' ').Select(int.Parse).ToList();

            int index = int.Parse(Console.ReadLine());

            int damage = 1;

            string input = Console.ReadLine();
            while (input != "Supernova")
            {
                string[] tokens = input.Split(' ');
                string direction = tokens[0];
                int step = int.Parse(tokens[1]);

                switch (direction)
                {
                    case "left":
                        for (int i = 0; i < step; i++)
                        {
                            index--;
                            if (index < 0)
                            {
                                index = plane.Count - 1;
                                damage++;
                            }
                            plane[index] -= damage;
                        }
                        break;
                    case "right":
                        for (int i = 0; i < step; i++)
                        {
                            index++;
                            if (index > plane.Count - 1)
                            {
                                index = 0;
                                damage++;
                            }
                            plane[index] -= damage;
                        }
                        break;
                }
                input = Console.ReadLine();
            }
            Console.WriteLine(string.Join(" ", plane));
        }
    }
}
