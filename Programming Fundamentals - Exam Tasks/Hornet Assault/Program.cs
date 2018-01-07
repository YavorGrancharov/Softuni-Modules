using System;
using System.Collections.Generic;
using System.Linq;

namespace Hornet_Assault
{
    class Program
    {
        static void Main(string[] args)
        {
            long[] beehives = Console.ReadLine().Split(' ').Select(long.Parse).ToArray();
            long[] hornets = Console.ReadLine().Split(' ').Select(long.Parse).ToArray();

            long hornetsSumPower = 0;
            for (int i = 0; i < hornets.Length; i++)
            {
                hornetsSumPower += hornets[i];
            }

            List<long> aliveBees = new List<long>();
            List<long> aliveHornets = hornets.ToList();

            long aliveBee = 0;
            for (int i = 0; i < beehives.Length; i++)
            {
                if (hornetsSumPower <= beehives[i])
                {
                    aliveBee = beehives[i] - hornetsSumPower;
                    if (aliveBee != 0)
                    {
                        aliveBees.Add(aliveBee);
                    }
                    hornetsSumPower -= aliveHornets[0];
                    aliveHornets.Remove(aliveHornets[0]);
                }
            }

            if (aliveBees.Sum() > 0)
            {
                Console.WriteLine(string.Join(" ", aliveBees));
            }
            else
            {
                Console.WriteLine(string.Join(" ", aliveHornets));
            }
        }
    }
}