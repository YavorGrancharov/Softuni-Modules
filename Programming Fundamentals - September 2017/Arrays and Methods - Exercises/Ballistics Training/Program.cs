using System;
using System.Collections.Generic;
using System.Linq;

namespace Ballistics_Training
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] coordinates = Console.ReadLine()
                .Split(' ').Select(int.Parse).ToArray();

            string[] commands = Console.ReadLine()
                .Split(' ').ToArray();

            int x = 0;
            int y = 0;
            for (int i = 0; i < commands.Length; i++)
            {
                if (commands[i] == "up")
                {
                    y += int.Parse(commands[i + 1]);
                }
                else if (commands[i] == "down")
                {
                    y -= int.Parse(commands[i + 1]);
                }
                else if (commands[i] == "left")
                {
                    x -= int.Parse(commands[i + 1]);
                }
                else if (commands[i] == "right")
                {
                    x += int.Parse(commands[i + 1]);
                }
            }
            Console.WriteLine("firing at [{0}, {1}]", x, y);

            if (x == coordinates[0] && y == coordinates[1])
            {
                Console.WriteLine("got 'em!");
            }
            else
            {
                Console.WriteLine("better luck next time...");
            }
        }
    }
}