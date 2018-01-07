using System;

namespace Value_of_a_String
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();
            string command = Console.ReadLine().ToUpper();

            var chars = string.Join(string.Empty, input).ToCharArray();

            int sum = 0;
            for (int i = 0; i < chars.Length; i++)
            {
                if (command == "UPPERCASE")
                {
                    if (char.IsLetter(chars[i]) && char.IsUpper(chars[i]))
                    {
                        sum += chars[i];
                    }
                }
                else if (command == "LOWERCASE")
                {
                    if (char.IsLetter(chars[i]) && char.IsLower(chars[i]))
                    {
                        sum += chars[i];
                    }
                }
            }
            Console.WriteLine("The total sum is: {0}", sum);
        }
    }
}
