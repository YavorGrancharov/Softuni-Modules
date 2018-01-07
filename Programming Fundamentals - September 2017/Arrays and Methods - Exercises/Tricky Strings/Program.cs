using System;

namespace Tricky_Strings
{
    public class TrickyStrings
    {
        public static void Main()
        {
            string delimiter = Console.ReadLine();

            int n = int.Parse(Console.ReadLine());

            string result = string.Empty;

            for (int i = 0; i < n; i++)
            {
                string words = Console.ReadLine();
                result += words + delimiter;
            }
            result = result.Remove(result.Length - delimiter.Length);
            Console.WriteLine(result);
        }
    }
}
