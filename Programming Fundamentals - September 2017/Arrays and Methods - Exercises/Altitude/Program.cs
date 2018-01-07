using System;

namespace Altitude
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();

            string[] tokens = input.Split(' ');
            int alt = int.Parse(tokens[0]);

            for (int i = 1; i < tokens.Length; i++)
            {
                if (tokens[i] == "up")
                {
                    alt += int.Parse(tokens[i + 1]);
                }
                else if (tokens[i] == "down")
                {
                    alt -= int.Parse(tokens[i + 1]);

                    if (alt <= 0)
                    {
                        break;
                    }
                }
            }

            if (alt > 0)
            {
                Console.WriteLine("got through safely. current altitude: {0}m", alt);
            }
            else
            {
                Console.WriteLine("crashed");
            }            
        }
    }
}