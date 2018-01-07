using System;
using System.Collections.Generic;
using System.Linq;

namespace Batteries
{
    class Program
    {
        static void Main(string[] args)
        {
            double[] capacities = Console.ReadLine().Split(' ').Select(double.Parse).ToArray();

            double[] usage = Console.ReadLine().Split(' ').Select(double.Parse).ToArray();

            int hours = int.Parse(Console.ReadLine());

            int count = 0;
            double lasted = 0;
            double status = 0.00;
            double capacitiesLeft = 0.00;
            for (int i = 0; i < capacities.Length; i++)
            {
                for (int j = 0; j < usage.Length; j++)
                {
                    status = ((capacities[i] - (hours * usage[i])) / capacities[i]) * 100;
                    capacitiesLeft = capacities[i] - (hours * usage[i]);
                    lasted = Math.Ceiling(capacities[i] / usage[i]);
                }
                count++;
                if (status > 0)
                {
                    Console.WriteLine($"Battery {count}: {capacitiesLeft:F2} mAh ({status:F2})%");
                }
                else
                {
                    Console.WriteLine($"Battery {count}: dead (lasted {lasted} hours)");
                }
            }
            
        }
    }
}
