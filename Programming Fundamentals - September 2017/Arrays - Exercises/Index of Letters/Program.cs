using System;

namespace Index_of_Letters
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine().ToLower();
            char[] ch = string.Join(string.Empty, input).ToCharArray();

            for (int i = 0; i < ch.Length; i++)
            {
                Console.WriteLine("{0} -> {1}",ch[i],ch[i] - 97);
            }
        }
    }
}
