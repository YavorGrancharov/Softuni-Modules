using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Beverage_Labels
{
    class Program
    {
        static void Main(string[] args)
        {
            var name = Console.ReadLine();
            var volume = int.Parse(Console.ReadLine());
            var energyContent = int.Parse(Console.ReadLine());
            var sugarContent = int.Parse(Console.ReadLine());

            var realEnergyContent = (double)(energyContent * volume) / 100;
            var realSugarContent = (double)(sugarContent * volume) / 100;
            
            Console.WriteLine($"{volume}" + "ml " + $"{name}" + ":");
            Console.WriteLine($"{realEnergyContent}" + "kcal, " + $"{realSugarContent}" + "g sugars");
        }
    }
}
