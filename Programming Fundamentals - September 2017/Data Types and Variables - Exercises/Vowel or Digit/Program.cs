using System;

namespace Vowel_or_Digit
{
    class Program
    {
        static void Main(string[] args)
        {
            char input = char.Parse(Console.ReadLine());
            char[] vowels = new char[5] { 'a', 'e', 'i', 'o', 'u' };

            bool isVowel = 
            for (int i = 0; i < vowels.Length; i++)
            {
                if (input == vowels[i])
                {
                    Console.WriteLine("vowel");
                    break;
                }
            }
            if (char.IsDigit(input))
            {
                Console.WriteLine("digit");
            }
            else
            {
                Console.WriteLine("other");
            }
        }
    }
}
