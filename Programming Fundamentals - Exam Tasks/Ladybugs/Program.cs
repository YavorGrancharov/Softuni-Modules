using System;
using System.Linq;

namespace Ladybugs
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] field = new int[int.Parse(Console.ReadLine())];
            int[] bugs = Console.ReadLine().Split().Select(int.Parse).ToArray();

            for (int i = 0; i < field.Length; i++)
            {
                if (bugs.Contains(i))
                {
                    field[i] = 1;
                }
                else
                {
                    field[i] = 0;
                }
            }

            string input = Console.ReadLine();

            while (input != "end")
            {
                string[] indexCommands = input.Split(' ').ToArray();           
                int ladybugIndex = int.Parse(indexCommands[0]);
                string direction = indexCommands[1];
                int flyLength = int.Parse(indexCommands[2]);
            
                if (ladybugIndex < 0 || ladybugIndex >= field.Length)
                {
                    input = Console.ReadLine();
                    continue;
                }
                if (field[ladybugIndex] != 1)
                {
                    input = Console.ReadLine();
                    continue;
                }
                if (field[ladybugIndex] == 0)
                {
                    input = Console.ReadLine();
                    continue;
                }
                field[ladybugIndex] = 0;

                int pos = ladybugIndex;

                while (true)
                {
                    if (direction == "right")
                    {
                        pos += flyLength;
                    }
                    else if (direction == "left")
                    {
                        pos -= flyLength;
                    }
                    if (pos < 0 || pos >= field.Length)
                    {
                        break;
                    }
                    if (field[pos] == 1)
                    {
                        continue;
                    }
                    else
                    {
                        field[pos] = 1;
                        break;
                    }
                }
                input = Console.ReadLine();
            }
            Console.WriteLine(string.Join(" ",field));
        }
    }
}
