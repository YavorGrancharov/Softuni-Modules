using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace String_Repeater
{
    class Program
    {
        static void Main(string[] args)
        {
            string word = Console.ReadLine();
            int count = int.Parse(Console.ReadLine());

            string repeated = RepeatString(word, count);
            Console.WriteLine(repeated);
        }

        static string RepeatString(string word, int count)
        {
            string repeated = string.Empty;

            for (int i = 0; i < count; i++)
            {
                repeated += word;
            }
            return repeated;
        }
    }
}
