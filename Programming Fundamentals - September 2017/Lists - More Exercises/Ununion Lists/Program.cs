using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ununion_Lists
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> primal = Console.ReadLine().Split(' ').Select(int.Parse).ToList();

            int n = int.Parse(Console.ReadLine());

            //List<int> added = new List<int>();

            for (int i = 0; i < n; i++)
            {
                List<int> sequence = Console.ReadLine().Split(' ').Select(int.Parse).ToList();

                for (int j = 0; j < sequence.Count; j++)
                {
                    if (primal.Contains(sequence[j]))
                    {
                        primal.Remove(sequence[j]);
                    }
                    else if (!primal.Contains(sequence[j]))
                    {
                        primal.Add(sequence[j]);
                    }
                }
            }
            primal.Sort();
            Console.WriteLine(string.Join(" ", primal));
        }
    }
}
