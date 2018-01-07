using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Variable_in_Hexadecimal_Format
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();

            int n;
            if (input.StartsWith("0x"))
            {
                n = Int32.Parse(input.Substring(2), NumberStyles.HexNumber);
            }
            else
            {
                n = Int32.Parse(input);
            }
            Console.WriteLine(n);
        }
    }
}
