using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace test_url_2
{
    class Program
    {
        static void Main(string[] args)
        {
            //Test url:
            //https://www.pornhub.com/view_video.php?viewkey=608247796

            string input = Console.ReadLine();

            List<string> data = new List<string>();

            string[] prefix = new string[]
            {
                "URL:", "Host:", "Resource:"
            };

            string[] tokens = input.Split(new string[] {":", "www.", "/"},
                StringSplitOptions.RemoveEmptyEntries);

            string protocol = tokens[0];
            string host = tokens[1];
            string presource = input
                .Substring(input.IndexOf("/") + host.Length - 1, input.Length - (protocol.Length + host.Length));

            string resource = string.Join(string.Empty, presource.Skip(7));

            data.Add(protocol);
            data.Add(host);
            data.Add(resource);

            IEnumerable entryRecords = prefix.Zip(data, (entry, record) => entry + " " + record);

            foreach (IEnumerable result in entryRecords)
            {
                Console.WriteLine(result);
            }
        }
    }
}