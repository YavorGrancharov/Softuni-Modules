using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Problem_3___Endurance_Rally
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] drivers = Console.ReadLine().Split().ToArray();
            double[] fuel = Console.ReadLine().Split().Select(double.Parse).ToArray();
            int[] checkpoints = Console.ReadLine().Split().Select(int.Parse).ToArray();

            double startingFuel = 0.0;
            foreach (var driver in drivers)
            {
                startingFuel = Convert.ToInt32(driver.FirstOrDefault());
                for (int i = 0; i < fuel.Length; i++)
                {
                    if (checkpoints.Contains(i))
                    {
                        startingFuel += fuel[i];
                    }
                    else
                    {
                        startingFuel -= fuel[i];
                    }
                    if (startingFuel <= 0)
                    {
                        Console.WriteLine("{0} - reached {1}",driver,i);
                        break;
                    }
                }
                if (startingFuel > 0)
                {
                    Console.WriteLine("{0} - fuel left {1:F2}", driver,startingFuel);
                }
            }          
        }
    }
}
