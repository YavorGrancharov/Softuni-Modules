using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Training_Hall_Equipment
{
    class Program
    {
        static void Main(string[] args)
        {
            double budget = double.Parse(Console.ReadLine());
            int count = int.Parse(Console.ReadLine());

            double realPrice = 0.00;

            if (count >= 0 && count <= 10)
            {
                for (int i = 0; i < count; i++)
                {
                    String item = Console.ReadLine();
                    double price = double.Parse(Console.ReadLine());
                    int itemCount = int.Parse(Console.ReadLine());

                    realPrice += price * itemCount;

                    if (budget >= realPrice)
                    {
                        Console.WriteLine(
                            itemCount != 1 ?
                            $"Adding {itemCount} {item}s to cart." :
                            $"Adding {itemCount} {item} to cart.");
                    }
                    else
                    {
                        Console.WriteLine(itemCount != 1 ?
                            $"Adding {itemCount} {item}s to cart." :
                            $"Adding {itemCount} {item} to cart.");
                    }
                }
                Console.WriteLine($"Subtotal: ${realPrice:F2}");

                Console.WriteLine(budget >= realPrice ? 
                    $"Money left: ${Math.Abs(budget - realPrice):F2}" : 
                    $"Not enough. We need ${Math.Abs(realPrice - budget):F2} more.");
            }
        }
    }
}
