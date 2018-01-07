using System;
using System.Collections.Generic;
using System.Linq;

namespace Average_Character_Delimiter
{
    class Program
    {
        static void Main(string[] args)
        {
            var array = Console.ReadLine().Split().ToArray();
            var chars = string.Join(string.Empty, array).ToCharArray();

            var delimiter = '\0';

            var sum = 0.0;
            var digits = 0;
            var average = 0;
            var result = string.Empty;
            foreach (char c in chars)
            {
                digits = Convert.ToInt32(c);
                sum += digits;
                average = (int)(sum / chars.Length);
                delimiter = Convert.ToChar(average);
                delimiter = char.ToUpper(delimiter);
            }

            for (int i = 0; i < array.Length; i++)
            {
                result += array[i] + delimiter;
            }
            result = result.Remove(result.Length - 1);
            Console.WriteLine(string.Join("", result));
        }
    }
}