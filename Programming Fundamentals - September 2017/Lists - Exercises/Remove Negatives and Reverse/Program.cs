using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Remove_Negatives_and_Reverse
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> nums = Console.ReadLine()
                .Split(' ')
                .Select(int.Parse)
                .ToList();

            List<int> empty = new List<int>();

            foreach (int n in nums)
            {
                if (n >= 0)
                {
                    empty.Add(n);
                }
            }

            foreach (int n in nums)
            {
                if (n < 0)
                {
                    empty.Remove(n);
                }
            }

            empty.Reverse();

            if (!empty.Any())
            {
                Console.WriteLine("empty");
            }
            else
            {
                Console.WriteLine(String.Join(" ", empty));
            }
        }
    }
}
