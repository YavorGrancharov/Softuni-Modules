using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;

namespace Convert_from_base_10_to_base_N
{
    class Program
    {
        static void Main(string[] args)
        {
            BigInteger[] input = Console.ReadLine().Split().Select(BigInteger.Parse).ToArray();

            BigInteger num = input[0];
            BigInteger toBase = input[1];

            BigInteger reminder = 0;
            List<BigInteger> result = new List<BigInteger>();
            while ( num > 0)
            {
                reminder = num % toBase;
                result.Add(reminder);
                num /= toBase;
            }
            result.Reverse();
            Console.WriteLine(string.Join("",result));
        }
    }
}
