using System;

namespace Test_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            var n = int.Parse(Console.ReadLine());
            var m = int.Parse(Console.ReadLine());
            var max = int.Parse(Console.ReadLine());

            int sum = 0;

            int i, j;

            int count = 0;


            for (i = 0; i < m - 1; i++)
            {
                for (j = 1; j <= m; j++)
                {
                    var sumLocal = (n * j) * 3;
                    sum += sumLocal;

                    if (sum >= max)
                    {
                        Console.WriteLine($"Sum: {sum} >= {max}");
                        count++;
                        return;
                    }
                    else
                    {
                        Console.WriteLine($"{sum}");
                    }
                }
                n--;
            }
        }
    }
}
