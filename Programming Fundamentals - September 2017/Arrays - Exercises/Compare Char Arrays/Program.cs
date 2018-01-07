using System;
using System.Linq;

namespace Compare_Char_Arrays
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] first = Console.ReadLine().Split(' ').ToArray();
            char[] charsFirst = string.Join(string.Empty, first).ToCharArray();

            string[] second = Console.ReadLine().Split(' ').ToArray();
            char[] charsSecond = string.Join(string.Empty, second).ToCharArray();

            if (charsFirst.Length == charsSecond.Length)
            {
                if (charsFirst[0] - '0' < charsSecond[0] - '0')
                {
                    Console.WriteLine(string.Join("", charsFirst));
                    Console.WriteLine(string.Join("", charsSecond));
                }
                else
                {
                    Console.WriteLine(string.Join("", charsSecond));
                    Console.WriteLine(string.Join("", charsFirst));
                }
            }
            else if (charsFirst.Length > charsSecond.Length)
            {
                Console.WriteLine(string.Join("", charsSecond));
                Console.WriteLine(string.Join("", charsFirst));
            }
            else
            {
                Console.WriteLine(string.Join("", charsFirst));
                Console.WriteLine(string.Join("", charsSecond));
            }
        }
    }
}
