﻿using System;
using System.Collections.Generic;
using System.Linq;

namespace Magic_exchangeable_words
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] input = Console.ReadLine().Split().ToArray();
            Console.WriteLine(areExchangeable(input).ToString().ToLower());
            
        }
        public static Boolean areExchangeable(string[] input)
        {
            var left = input[0].Distinct().ToArray();
            var right = input[1].Distinct().ToArray();

            if (left.Length == right.Length)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
