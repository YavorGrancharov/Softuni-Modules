using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Last_3_Consecutive_Equal_Strings
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] array = Console.ReadLine()
                .Split(' ')
                .ToArray();

            int count = 1;

            for (int i = array.Length - 1; i > 0; i--)
            {
                if (array[i] == array[i - 1])
                {
                    count++;

                    if (count == 3)
                    {
                        Console.WriteLine($"{array[i]} {array[i]} {array[i]}");
                        break;
                    }
                }
                else
                {
                    count = 1;
                }
            }
        }
    }
}
