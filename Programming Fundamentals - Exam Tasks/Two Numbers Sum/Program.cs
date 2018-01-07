using System;

namespace Problem_06___Two_Numbers_Sum
{
    class Program
    {
        static void Main(string[] args)
        {
            int start = int.Parse(Console.ReadLine());
            int end = int.Parse(Console.ReadLine());
            int magic = int.Parse(Console.ReadLine());

            int count = 0;
            int i = 0;
            int j = 0;
            bool found = i + j == magic;

            for ( i = start; i >= end; i--)
            {
                for ( j = start; j >= end; j--)
                {
                    count++;
                    if (i + j == magic)
                    {
                        Console.WriteLine("Combination N:{0} ({1} + {2} = {3})", count, i, j, magic);
                        return;                     
                    }                   
                }
            }
            if (!found)
            {
                Console.WriteLine("{0} combinations - neither equals {1}", count, magic);
            }           
        }
    }
}
