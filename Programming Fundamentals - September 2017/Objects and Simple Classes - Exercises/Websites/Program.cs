using System;
using System.Collections.Generic;
using System.Linq;

namespace Websites
{
    class Program
    {
        class Website
        {
            public string Host { get; set; }

            public string Domain { get; set; }

            public List<string> Queries { get; set; }
        }

        static void Main(string[] args)
        {
            List<Website> data = new List<Website>();

            string input = Console.ReadLine();

            while (input != "end")
            {
                string[] tokens = input
                    .Split(new string[] { " | " },
                    StringSplitOptions.RemoveEmptyEntries);

                string host = tokens[0];
                string domain = tokens[1];
                List<string> queries;

                if (tokens.Length > 2)
                {
                    queries = tokens[2].Split(',').ToList();
                }
                else
                {
                    queries = new List<string>();
                }

                Website newWebData = new Website
                {
                    Host = host,
                    Domain = domain,
                    Queries = queries
                };

                data.Add(newWebData);

                input = Console.ReadLine();
            }

            foreach (var info in data)
            {
                Console.Write("https://www.{0}.{1}", 
                    info.Host, info.Domain);

                if (info.Queries.Count > 0)
                {
                    Console.Write("/query?=[{0}]", 
                        string.Join("]&[", info.Queries));
                }
                Console.WriteLine();
            }
        }
    }
}
