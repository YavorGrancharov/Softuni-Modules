using System;
using System.Globalization;

namespace Softuni_Coffee_Orders
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            decimal result = 0M;
            for (int i = 0; i < n; i++)
            {
                decimal pricePerCapsule = decimal.Parse(Console.ReadLine());
                string orderDate = Console.ReadLine();
                string format = "d/M/yyyy";
                DateTime dateTime = DateTime.ParseExact(orderDate, format, CultureInfo.InvariantCulture);
                decimal capsulesCount = decimal.Parse(Console.ReadLine());

                int days = DateTime.DaysInMonth(dateTime.Year, dateTime.Month);
                decimal coffeePrice = (days * capsulesCount) * pricePerCapsule;
                Console.WriteLine("The price for the coffee is: ${0:F2}", coffeePrice);
                result += coffeePrice;
            }
            Console.WriteLine("Total: ${0:F2}", result);
        }
    }
}
