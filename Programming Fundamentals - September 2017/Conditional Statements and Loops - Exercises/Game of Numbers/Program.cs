using System;

namespace Game_of_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int m = int.Parse(Console.ReadLine());
            int mag = int.Parse(Console.ReadLine());

            int i, j;

            int sum = 0;

            int count = 0;

            int match = 0;

            if (n >= 1 && n <= 999 && m >= 1 && m <= 1000)
            {
                for (i = m; i >= n; i--)
                {
                    for (j = m; j >= n; j--)
                    {
                        sum = i + j;
                        count++;

                        if (sum == mag)
                        {
                            Console.WriteLine($"Number found! {i} + {j} = {mag}");
                            match++;
                            return;
                        }
                    }
                }
                if (match == 0)
                {
                    Console.WriteLine($"{count} combinations - neither equals {mag}");
                }
            }
        }
    }
}
