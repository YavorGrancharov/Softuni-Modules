using System;

namespace Hornet_Wings
{
    class Program
    {
        static void Main(string[] args)
        {
            int flaps = int.Parse(Console.ReadLine());
            double distance = double.Parse(Console.ReadLine());
            int endurance = int.Parse(Console.ReadLine());

            double meters = (flaps / 1000) * distance;
            long seconds = (flaps / 100) + ((flaps / endurance) * 5);
            Console.WriteLine("{0:F2} m.", meters);
            Console.WriteLine("{0} s.", seconds);
        }
    }
}
