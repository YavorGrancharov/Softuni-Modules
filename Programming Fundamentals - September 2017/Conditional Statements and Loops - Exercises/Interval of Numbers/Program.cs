﻿using System;

namespace Interval_of_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            int first = int.Parse(Console.ReadLine());
            int second = int.Parse(Console.ReadLine());

            if (first < second)
            {
                for (int i = first; i <= second; i++)
                {
                    Console.WriteLine(i);
                }
            }
            else
            {
                for (int i = second; i <= first; i++)
                {
                    Console.WriteLine(i);
                }
            }
        }
    }
}
