using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Character_Stats
{
    class Program
    {
        static void Main(string[] args)
        {
            var name = Console.ReadLine();
            var currentHealth = int.Parse(Console.ReadLine());
            var maximumHealth = int.Parse(Console.ReadLine());
            var currentEnergy = int.Parse(Console.ReadLine());
            var maximumEnergy = int.Parse(Console.ReadLine());

            Console.WriteLine("Name: " + "{0}", name);

            var health = maximumHealth - currentHealth;
            var energy = maximumEnergy - currentEnergy;

            string dotsHealth = new string('.', health);
            string dotsEnergy = new string('.', energy);
            string lineHealth = new string('|', currentHealth + 1);
            string lineEnergy = new string('|', currentEnergy + 1);
            string lineRight = new string('|', 1);

            Console.WriteLine("Health: " + $"{lineHealth}{dotsHealth}{lineRight}");
            Console.WriteLine("Energy: " + $"{lineEnergy}{dotsEnergy}{lineRight}");
        }
    }
}
