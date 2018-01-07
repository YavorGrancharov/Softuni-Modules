using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;

namespace Register_Users
{
    class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, DateTime> users = new Dictionary<string, DateTime>();
            string[] input = Console.ReadLine().Split(new string[] { " -> " }, StringSplitOptions.RemoveEmptyEntries);

            while (input[0] != "end")
            {
                string user = input[0];
                DateTime date = DateTime.ParseExact(input[1], "dd/MM/yyyy", CultureInfo.InvariantCulture);

                if (!users.ContainsKey(user))
                {
                    users[user] = date;
                }
                input = Console.ReadLine().Split(new string[] { " -> " }, StringSplitOptions.RemoveEmptyEntries);
            }

            foreach (var pair in users.Reverse().OrderBy(p => p.Value).Take(5).OrderByDescending(p => p.Value))
            {
                Console.WriteLine("{0}", pair.Key);
            }
        }
    }
}