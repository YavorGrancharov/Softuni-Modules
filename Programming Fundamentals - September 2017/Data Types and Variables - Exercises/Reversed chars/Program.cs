using System;

namespace Reversed_chars
{
    class Program
    {
        static void Main(string[] args)
        {
            string concat = string.Empty;
            for (int i = 0; i < 3; i++)
            {
                char input = char.Parse(Console.ReadLine());
                concat += input;
            }
            for (int i = concat.Length - 1; i >= 0; i--)
            {
                Console.Write(concat[i]);
            }        
            Console.WriteLine();
        }
    }
}
