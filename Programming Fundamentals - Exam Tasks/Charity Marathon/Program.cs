using System;

namespace Charity_Marathon
{
    class Program
    {
        static void Main(string[] args)
        {
            ulong lengthDays = ulong.Parse(Console.ReadLine());
            ulong runners = ulong.Parse(Console.ReadLine());
            ulong averageLaps = ulong.Parse(Console.ReadLine());
            ulong trackLength = ulong.Parse(Console.ReadLine());
            ulong trackCapacity = ulong.Parse(Console.ReadLine());
            double moneyPerKilometer = double.Parse(Console.ReadLine());

            ulong overallCapacity = trackCapacity * lengthDays;
            ulong peopleRunning = 0;

            if (overallCapacity > runners)
            {
                peopleRunning = runners; ;
            }
            else
            {
                peopleRunning = overallCapacity;                     
            }
            double totalKilometers = peopleRunning * (double)averageLaps * trackLength / 1000d;
            double moneyRaisedForMarathon = totalKilometers * moneyPerKilometer;
            Console.WriteLine("Money raised: {0:F2}", moneyRaisedForMarathon);
        }
    }
}
