using System;
using System.Collections.Generic;
using System.Linq;

namespace User_Logs
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();

            Dictionary<string, Dictionary<string, int>> data = 
                new Dictionary<string, Dictionary<string, int>>();

            int count = 1;
            while (input != "end")
            {
                string[] tokens = input
                    .Split(new string[] { "IP", "=", " ", "message", "'&'", "user" },
                    StringSplitOptions.RemoveEmptyEntries);

                string ip = tokens[0];
                string message = tokens[1];
                string user = tokens[2];
                
                if (!data.ContainsKey(user))
                {
                    data.Add(user, new Dictionary<string, int>());
                }
                Dictionary<string, int> adress = data[user];

                if (!adress.ContainsKey(ip))
                {
                    adress[ip] = count;
                }
                else
                {
                    adress[ip] += count;
                }
                input = Console.ReadLine();
            }

            foreach (var entry in data.OrderBy(x => x.Key).ThenBy(x => x.Value))
            {
                string user = entry.Key;
                Console.WriteLine("{0}: ",user);
                Dictionary<string, int> countMessages = entry.Value;
                foreach (var record in countMessages)
                {
                    string ip = record.Key;
                    int cnt = record.Value;
                    if (record.Equals(entry.Value.Last()))
                    {
                        Console.WriteLine("{0} => {1}.",ip,cnt);
                        break;
                    }
                    Console.Write("{0} => {1}, ",ip, cnt);
                }   
            }
        }
    }
}
