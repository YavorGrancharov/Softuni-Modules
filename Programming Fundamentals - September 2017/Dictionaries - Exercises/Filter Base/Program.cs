using System;
using System.Collections.Generic;
using System.Linq;

namespace Filter_Base
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] input = Console.ReadLine().Split(new char[] { ' ', '-', '>' }, StringSplitOptions.RemoveEmptyEntries);
            Dictionary<string, string> positions = new Dictionary<string, string>();
            Dictionary<string, int> age = new Dictionary<string, int>();
            Dictionary<string, double> salary = new Dictionary<string, double>();

            while (input[0] != "filter")
            {
                string key = input[0];
                string value = input[1];

                int Age;
                double Salary;
                if (int.TryParse(value, out Age))
                {
                    age[key] = Age;
                }
                else if (double.TryParse(value, out Salary))
                {
                    salary[key] = Salary;
                }
                else
                {
                    positions[key] = value;
                }
                input = Console.ReadLine().Split(new char[] { ' ', '-', '>' }, StringSplitOptions.RemoveEmptyEntries);
            }

            string end = Console.ReadLine().ToLower();
            if (end == "position")
            {
                foreach (KeyValuePair<string, string> emloee in positions)
                {
                    Console.WriteLine($"Name: {emloee.Key}");
                    Console.WriteLine($"Position: {emloee.Value}");
                    Console.WriteLine(new string('=', 20));
                }
            }
            else if (end == "age")
            {
                foreach (KeyValuePair<string, int> emloee in age)
                {
                    Console.WriteLine($"Name: {emloee.Key}");
                    Console.WriteLine($"Age: {emloee.Value}");
                    Console.WriteLine(new string('=', 20));
                }
            }
            else if (end == "salary")
            {
                foreach (KeyValuePair<string, double> emloee in salary)
                {
                    Console.WriteLine($"Name: {emloee.Key}");
                    Console.WriteLine($"Salary: {emloee.Value:F2}");
                    Console.WriteLine(new string('=', 20));
                }
            }
        }
    }
}
