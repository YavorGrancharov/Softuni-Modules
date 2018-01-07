using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DNA_Sequences
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            string[] acid = { "A", "C", "G", "T" };

            int i, j, k;

            for (i = 1; i <= 4; i++)
            {
                for (j = 1; j <= 4; j++)
                {
                    for (k = 1; k <= 4; k++)
                    {
                        int sum = i + j + k;

                        if (sum >= n)
                        {
                            Console.Write($"O{acid[i - 1]}{acid[j - 1]}{acid[k - 1]}O ");
                        }
                        else
                        {
                            Console.Write($"X{acid[i - 1]}{acid[j - 1]}{acid[k - 1]}X ");
                        }
                    }
                    Console.WriteLine();
                }
            }
        }
    }
}
