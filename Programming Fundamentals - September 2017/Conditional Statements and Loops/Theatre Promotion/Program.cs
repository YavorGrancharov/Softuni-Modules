using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Theatre_Promotion
{
    class Program
    {
        static void Main(string[] args)
        {
            string day = Console.ReadLine();
            var age = int.Parse(Console.ReadLine());

            if (day.Equals("Weekday"))
            {
                if (age >= 0 && age <= 18 || age > 64 && age <= 122)
                {
                    Console.WriteLine("12$");
                }
                else if (age > 18 && age <= 64)
                {
                    Console.WriteLine("18$");
                } 
                else
                {
                    Console.WriteLine("Error!");
                }
            }
            if(day.Equals("Weekend"))
            {
                if (age >= 0 && age <= 18 || age > 64 && age <= 122)
                {
                    Console.WriteLine("15$");
                }
                else if (age > 18 && age <= 64)
                {
                    Console.WriteLine("20$");
                }
                else
                {
                    Console.WriteLine("Error!");
                }
            }
            if(day.Equals("Holiday"))
            {
                if (age >= 0 && age <= 18)
                {
                    Console.WriteLine("5$");
                }
                else if (age > 18 && age <= 64)
                {
                    Console.WriteLine("12$");
                }
                else if(age > 64 && age <= 122)
                {
                    Console.WriteLine("10$");
                }
                else
                {
                    Console.WriteLine("Error!");
                }
            }
        }
    }
}
