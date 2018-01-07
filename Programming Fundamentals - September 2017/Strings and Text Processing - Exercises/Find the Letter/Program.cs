using System;

namespace Find_the_Letter
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();
            var chars = string.Join(string.Empty, input).ToCharArray();

            string[] indexer = Console.ReadLine().Split(' ');

            int count = 0;
            for (int i = 0; i < chars.Length; i++)
            {
                char letter = char.Parse(indexer[0]);
                int position = int.Parse(indexer[1]);

                if (chars[i] == letter)
                {
                    count++;
                    if (count == position)
                    {
                        Console.WriteLine(i);
                        return;
                    }
                }
            }
            Console.WriteLine("Find the letter yourself!");
        }
    }
}
