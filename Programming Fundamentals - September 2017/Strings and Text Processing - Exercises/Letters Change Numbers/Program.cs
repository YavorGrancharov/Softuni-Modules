using System;
using System.Linq;

namespace Letters_Change_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] input = Console.ReadLine()
                .Split(new char[] { ' ', '\t', '\n' },StringSplitOptions.RemoveEmptyEntries)
                .ToArray();

            double output = 0.0;
            double result = 0.0;
            double tempResult = 0.0;
            double number = 0.0;
            double indexFirst = 0.0;
            double indexLast = 0.0;
            string first = "";
            string last = "";
            string isNumber = "";
            string temp = "";

            for (int i = 0; i < input.Length; i++)
            {
                temp = input[i];
                for (int j = 0; j < temp.Length; j++)
                {
                    first = temp.Substring(0,1);
                    last = temp.Substring(temp.Length - 1, 1);
                    isNumber = temp.Substring(1, temp.Length - 2);
                    number = int.Parse(isNumber);                    
                }
                if (first.ToUpper() == first)
                {
                    indexFirst = Convert.ToChar(first) - 64;
                }
                else
                {
                    indexFirst = Convert.ToChar(first) - 96;
                }
                if (last.ToUpper() == last)
                {
                    indexLast = Convert.ToChar(last) - 64;
                }
                else
                {
                    indexLast = Convert.ToChar(last) - 96;
                }

                if (first.ToUpper() == first && last.ToUpper() == last)
                {
                    result = number / indexFirst;
                    result -= indexLast;
                }
                else if (first.ToUpper() == first && last.ToLower() == last)
                {
                    result = number / indexFirst;
                    result += indexLast;
                }
                else if (first.ToLower() == first && last.ToUpper() == last)
                {
                    result = number * indexFirst;
                    result -= indexLast;
                }
                else if (first.ToLower() == first && last.ToLower() == last)
                {
                    result = number * indexFirst;
                    result += indexLast;
                }
                tempResult = result;
                output += tempResult;
            }
            Console.WriteLine("{0:F2}",output);
        }
    }
}