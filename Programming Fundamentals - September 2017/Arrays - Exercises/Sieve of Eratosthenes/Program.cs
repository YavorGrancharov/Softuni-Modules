using System;

namespace Sieve_of_Eratosthenes
{
    class Program
    {
        static void Main(string[] args)
        {
            long n = long.Parse(Console.ReadLine());
            long[] num = new long[n + 1];
            long count = 2;
            for (int i = 2; i <= n; i++)
            {
                num[i] = count;
                count++;
            }
            for (int i = 2; (i * i) <= n; i++)
            {
                for (int j = (i * i); j <= n; j+=i)
                {
                    num[j] = 0;
                }
            }
            for (int i = 2; i <= n; i++)
            {
                if (num[i] != 0)
                {
                    Console.Write(num[i] + " ");
                }
            }
            Console.WriteLine();
        }
    }
}
