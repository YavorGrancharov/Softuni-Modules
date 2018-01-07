using System;
using System.Collections.Generic;
using System.Linq;

namespace Entertrain
{
    class Program
    {
        static void Main(string[] args)
        {
            int locomotivePower = int.Parse(Console.ReadLine());
            string wagonWeight = Console.ReadLine();

            List<int> train = new List<int>();

            while (wagonWeight != "All ofboard!")
            {
                train.Add(int.Parse(wagonWeight));
                
                for (int i = 1; i < train.Count; i++)
                {
                    int sum = train.Sum();
                    int avg = sum / train.Count();
                    int nearrestWagon = train.OrderBy(x => Math.Abs(x - avg)).First();

                    if (sum > locomotivePower)
                    {
                        train.Remove(nearrestWagon);
                    }
                }
                wagonWeight = Console.ReadLine();
            }
            Console.WriteLine(string.Join(" ", train.AsEnumerable().Reverse()) + " " + locomotivePower);
        }
    }
}