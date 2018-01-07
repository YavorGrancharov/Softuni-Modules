using System;
using System.Collections.Generic;
using System.Linq;

namespace Sino_The_Walker
{
    class Program
    {
        static void Main(string[] args)
        {
            long[] arr = Console.ReadLine().Split(':').Select(long.Parse).ToArray();
            var steps = long.Parse(Console.ReadLine()) % 86400;
            var oneStepTime = long.Parse(Console.ReadLine()) % 86400;

            var hours = arr[0];
            var minutes = arr[1];
            var seconds = arr[2];

            var stepsHours = ((steps * oneStepTime) / 60) / 60;
            var stepsMinutes = (steps * oneStepTime) / 60;
            var stepsSeconds = (steps * oneStepTime) % 60;

            var totalHours = hours + stepsHours;
            var totalMinutes = minutes + stepsMinutes;
            var totalSeconds = seconds + stepsSeconds;

            for (int i = 0; i < arr.Length; i++)
            {
                if (totalSeconds > 59)
                {
                    totalMinutes += 1;
                    totalSeconds -= 60;
                }
                if (totalMinutes > 59)
                {
                    totalHours += 1;
                    totalMinutes -= 60;
                }
                if (totalHours > 23)
                {
                    totalHours = 0;
                }
            }

            if (totalHours < 10 || totalMinutes < 10 || totalSeconds < 10)
            {
                Console.WriteLine("Time Arrival: {0:D2}:{1:D2}:{2:D2}", totalHours, totalMinutes, totalSeconds);
            }
            else
            {
                Console.WriteLine("Time Arrival: {0}:{1}:{2}", totalHours, totalMinutes, totalSeconds);
            }
        }
    }
}