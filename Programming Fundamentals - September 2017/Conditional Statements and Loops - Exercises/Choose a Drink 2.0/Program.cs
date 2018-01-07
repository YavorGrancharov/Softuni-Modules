using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Choose_a_Drink_2._0
{
    class Program
    {
        static void Main(string[] args)
        {
            string profession = Console.ReadLine();
            int quantity = int.Parse(Console.ReadLine());

            double waterPrice = 0.70;
            double coffeePrice = 1.00;
            double beerPrice = 1.70;
            double teaPrice = 1.20;

            if (profession.Equals("Athlete"))
            {
                waterPrice *= quantity;
                Console.WriteLine($"The {profession} has to pay {waterPrice:F2}.");
            }
            else if (profession.Equals("Businessman") || profession.Equals("Businesswoman"))
            {
                coffeePrice *= quantity;
                Console.WriteLine($"The {profession} has to pay {coffeePrice:F2}.");
            }
            else if (profession.Equals("SoftUni Student"))
            {
                beerPrice *= quantity;
                Console.WriteLine($"The {profession} has to pay {beerPrice:F2}.");
            }
            else
            {
                teaPrice *= quantity;
                Console.WriteLine($"The {profession} has to pay {teaPrice:F2}.");
            }
        }
    }
}
