using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Magic_Letter
{
    class Program
    {
        static void Main(string[] args)
        {
            var firstLetter = char.Parse(Console.ReadLine());
            var lastLetter = char.Parse(Console.ReadLine());
            var magicLetter = char.Parse(Console.ReadLine());

            for (char first = firstLetter; first <= lastLetter; first++)
            {
                for (char second = firstLetter; second <= lastLetter; second++)
                {
                    for (char third = firstLetter; third <= lastLetter; third++)
                    {
                        string combination = first.ToString() + second.ToString() + third.ToString();

                        if (!combination.Contains(magicLetter)) {
                            Console.Write(combination + " ");
                        }
                    }
                }
            }
        }
    }
}
