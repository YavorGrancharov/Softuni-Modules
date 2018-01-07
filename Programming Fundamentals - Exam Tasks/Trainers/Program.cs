using System;
using System.Collections.Generic;
using System.Linq;

namespace Trainers
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            Dictionary<string, double> data = new Dictionary<string, double>();

            for (int i = 0; i < n; i++)
            {
                var distance = int.Parse(Console.ReadLine());
                var cargo = double.Parse(Console.ReadLine());
                string team = Console.ReadLine();

                var miles = distance * 1600;
                var carried = cargo * 1000;
                var fuelExpences = (0.7 * miles) * 2.5;
                var cargoPrice = 1.5 * carried;
                var totalMoney = cargoPrice - fuelExpences;

                if (team == "Technical" || team == "Theoretical" || team == "Practical")
                {
                    if (!data.ContainsKey(team))
                    {
                        data[team] = totalMoney;
                    }
                }              
            }

            double maxValue = data.Max(x => x.Value);
            foreach (var money in data.Where(x => x.Value == maxValue))
            {
                Console.WriteLine("The {0} Trainers win with ${1:F3}.", money.Key, money.Value);
            }
        }
    }
}