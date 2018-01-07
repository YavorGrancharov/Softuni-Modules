using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Char_Rotation
{
    class Program
    {
        static void Main(string[] args)
        {
            var chars = Console.ReadLine()
                .ToCharArray();

            var numbers = Console.ReadLine()
                .Split(new char[] { ' ' },
                StringSplitOptions.RemoveEmptyEntries)
                .Select(int.Parse)
                .ToArray();

            string empty = string.Empty;

            for (int i = 0; i < numbers.Length; i++)
            {
                if (numbers[i] % 2 == 0)
                {
                    empty += (char)(chars[i] - numbers[i]);
                }
                else
                {
                    empty += (char)(numbers[i] + chars[i]);
                }
            }
            Console.WriteLine(empty);
        }
    }
}
