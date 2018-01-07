using System;
using System.Linq;

namespace Wormhole
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] wholes = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();

            int count = 0;
            int currentPosition = 0;
            for (int index = 0; index < wholes.Length; index++)
            {
                if (wholes[index] != 0 && index != -1)
                {
                    currentPosition = wholes[index];
                    wholes[index] = 0;
                    index = currentPosition;
                    
                }
                count++;
            }
            Console.WriteLine(count);
        }
    }
}
