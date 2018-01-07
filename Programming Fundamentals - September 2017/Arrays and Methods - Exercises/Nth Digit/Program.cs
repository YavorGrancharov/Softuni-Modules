using System;

namespace Nth_Digit
{
    class Program
    {
        static void Main(string[] args)
        {
            int num = int.Parse(Console.ReadLine());
            int index = int.Parse(Console.ReadLine());

            int result = NthIndex(num, index);
            Console.WriteLine(result);
        }

        static int NthIndex(int num, int index)
        {
            var str = num.ToString().ToCharArray();
            int digit = 0;
            int count = 0;

            while (str.Length - 1 != 0)
            {
                digit = str.Length % 10;
                count++;

                if (count == index)
                {
                    return digit;
                }
                else
                {
                    str.Length = str.Length / 10;
                }
            }
            return NthIndex(num, index);
        }
    }
}
