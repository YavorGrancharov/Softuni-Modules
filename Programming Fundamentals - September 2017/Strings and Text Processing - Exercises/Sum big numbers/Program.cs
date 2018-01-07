using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Numerics;

namespace Sum_big_numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            string a = Console.ReadLine();
            string b = Console.ReadLine();
            var carry = 0;
            string result = string.Empty;

            int minLen = Math.Min(a.Length, b.Length);

            int sum = 0;
            for (int i = 0; i < minLen; i++)
            {
                var a2 = Convert.ToInt32(a.Substring(i, 1));
                var b2 = Convert.ToInt32(b.Substring(i, 1));
                
        }
    }
}
