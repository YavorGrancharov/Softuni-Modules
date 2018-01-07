using System;

namespace Data_Overflow
{
    class Program
    {
        static void Main(string[] args)
        {
            ulong first = ulong.Parse(Console.ReadLine());
            ulong second = ulong.Parse(Console.ReadLine());

            byte a = byte.MinValue;
            byte a2 = byte.MaxValue;
            ushort b = ushort.MinValue;
            ushort b2 = ushort.MaxValue;
            uint c = uint.MinValue;
            uint c2 = uint.MaxValue;
            ulong d = ulong.MinValue;
            ulong d2 = ulong.MaxValue;

            double result = 0.0;

            if (first >= b && first <= b2 && second >= a && second <= a2)
            {
                result = Math.Round((double)first / a2);
                Console.WriteLine("bigger type: ushort");
                Console.WriteLine("smaller type: byte");
                Console.WriteLine($"{first} can overflow byte {result} times");
            }
            else if (first >= c && first <= c2 && second >= a && second <= a2)
            {
                result = Math.Round((double)first / a2);
                Console.WriteLine("bigger type: uint");
                Console.WriteLine("smaller type: byte");
                Console.WriteLine($"{first} can overflow byte {result} times");
            }
            else if (first >= c && first <= c2 && second >= b && second <= b2)
            {
                result = Math.Round((double)first / b2);
                Console.WriteLine("bigger type: uint");
                Console.WriteLine("smaller type: ushort");
                Console.WriteLine($"{first} can overflow ushort {result} times");
            }
            else if (second >= c && second <= c2 && first >= a && first <= a2)
            {
                result = Math.Round((double)second / a2);
                Console.WriteLine("bigger type: uint");
                Console.WriteLine("smaller type: byte");
                Console.WriteLine($"{second} can overflow byte {result} times");
            }
            else if (second >= c && second <= c2 && first >= b && first <= b2)
            {
                result = Math.Round((double)second / b2);
                Console.WriteLine("bigger type: uint");
                Console.WriteLine("smaller type: ushort");
                Console.WriteLine($"{second} can overflow ushort {result} times");
            }
            else if (first >= d && first >= d2 && second >= a && second <= a2)
            {
                result = Math.Round((double)first / a2);
                Console.WriteLine("bigger type: ulong");
                Console.WriteLine("smaller type: byte");
                Console.WriteLine($"{first} can overflow byte {result} times");
            }
            else if (first >= d && first <= d2 && second >= b && second <= b2)
            {
                result = Math.Round((double)first / b2);
                Console.WriteLine("bigger type: ulong");
                Console.WriteLine("smaller type: ushort");
                Console.WriteLine($"{first} can overflow ushort {result} times");
            }
            else if (first >= d && first <= d2 && second >= c && second <= c2)
            {
                result = Math.Round((double)first / c2);
                Console.WriteLine("bigger type: ulong");
                Console.WriteLine("smaller type: uint");
                Console.WriteLine($"{first} can overflow ushort {result} times");
            }
            else if (second >= d && second <= d2 && first >= a && first <= a2)
            {
                result = Math.Round((double)second / a2);
                Console.WriteLine("bigger type: ulong");
                Console.WriteLine("smaller type: byte");
                Console.WriteLine($"{second} can overflow byte {result} times");
            }
            else if (second >= d && second <= d2 && first >= b && first <= b2)
            {
                result = Math.Round((double)second / b2);
                Console.WriteLine("bigger type: ulong");
                Console.WriteLine("smaller type: ushort");
                Console.WriteLine($"{second} can overflow ushort {result} times");
            }
            else if (second >= d && second <= d2 && first >= c && first <= c2)
            {
                result = Math.Round((double)second / c2);
                Console.WriteLine("bigger type: ulong");
                Console.WriteLine("smaller type: uint");
                Console.WriteLine($"{second} can overflow uint {result} times");
            }
        }
    }
}
