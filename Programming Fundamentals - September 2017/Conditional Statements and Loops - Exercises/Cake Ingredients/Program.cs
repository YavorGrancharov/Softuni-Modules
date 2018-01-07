using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cake_Ingredients
{
    class Program
    {
        static void Main(string[] args)
        {
            int count = 0;
            for (int i = 0; i <= 20; i++)
            {
                string ingrediante = Console.ReadLine();

                if (ingrediante.Equals("Bake!"))
                {
                    Console.WriteLine($"Preparing cake with {i} ingredients.");
                    break;
                }
                else
                {
                    Console.WriteLine($"Adding ingredient {ingrediante}.");
                    count++;
                }
            }
        }
    }
}
