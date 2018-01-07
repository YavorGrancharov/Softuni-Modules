using System;
using System.Collections.Generic;
using System.Linq;

namespace User_Logins
{
    class Program
    {
        static void Main(string[] args)
        {
            List<string> input = Console.ReadLine().Split(' ').ToList();
            Dictionary<string, string> sequences = new Dictionary<string, string>();

            while (input[0] != "login")
            {
                string name = input[0];
                string password = input[2];
                if (!sequences.ContainsKey(name))
                {
                    sequences[name] = password;
                }
                input = Console.ReadLine().Split(' ').ToList();
            }
            input = Console.ReadLine().Split(' ').ToList();

            int count = 0;
            while (input[0] != "end")
            {
                string name = input[0];
                string password = input[2];
                if (sequences.ContainsKey(name) && sequences.ContainsValue(password))
                {
                    Console.WriteLine($"{name}: logged in successfully");
                }
                else
                {
                    Console.WriteLine($"{name}: login failed");
                    count++;
                }
                input = Console.ReadLine().Split(' ').ToList();
            }
            Console.WriteLine($"unsuccessful login attempts: {count}");
        }
    }
}