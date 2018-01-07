using System;

namespace ASCII_String
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            char converted = '\0';

            string concatenate = String.Empty;

            for (int i = 0; i < n; i++)
            {
                int num = int.Parse(Console.ReadLine());
                converted = Convert.ToChar(num);
                concatenate += converted;
            }
            Console.WriteLine(concatenate);
        }
    }
}
