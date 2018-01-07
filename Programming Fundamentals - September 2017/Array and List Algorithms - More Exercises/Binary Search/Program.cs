using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Binary_Search
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> numbers = Console.ReadLine().Split(' ').Select(int.Parse).ToList();
            int element = int.Parse(Console.ReadLine());
            int count = 0;
            int linear = Linear(numbers, element);
            int binary = Binary(numbers, element);

            numbers.Sort();
            if (numbers.Contains(element))
            {
                Console.WriteLine("Yes");
            }
            else
            {
                Console.WriteLine("No");
            }
            Console.WriteLine($"Linear search made {linear} iterations");
            Console.WriteLine($"Binary search made {binary} iterations");

        }

        static int Linear(List<int> numbers, int element)
        {
            int count = 0;
            foreach (int x in numbers)
            {
                count++;
                if (x == element)
                {
                    return count;
                }
            }
            return count;          
        }

        static int Binary(List<int> numbers, int element)
        {
            numbers.Sort();

            int min = 0;
            int max = numbers.Count - 1;
            int count = 0;
            while (min <= max)
            {
                int mid = (min + max) / 2;
                count++;
                if (numbers[mid] < element)
                {
                    min = mid + 1;
                }
                if (numbers[mid] > element)
                {
                    max = mid - 1;
                }
                if (numbers[mid] == element)
                {
                    break;
                }
            }
            return count;
        }
    } 
}
