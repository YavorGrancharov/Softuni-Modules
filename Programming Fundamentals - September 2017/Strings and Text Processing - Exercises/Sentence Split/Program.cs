using System;

namespace Sentence_Split
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();
            string delimiter = Console.ReadLine();

            string[] parts = input.Split(new string[] { delimiter }, StringSplitOptions.None);

            Console.WriteLine($"[{string.Join(", ", parts)}]");
        }
    }
}