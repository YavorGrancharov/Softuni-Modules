using System;
using System.Collections.Generic;
using System.Linq;

namespace test_url
{
    class Program
    {
        static void Main(string[] args)
        {
            //Test url:
            //https://www.pornhub.com/view_video.php?viewkey=608247796

            string input = Console.ReadLine();

            Dictionary<string, string> data = new Dictionary<string, string>();

            string[] tokens = input.Split(new string[] { ":", "www.", "/" },
                StringSplitOptions.RemoveEmptyEntries);

            string protocol = tokens[0];
            string host = tokens[1];
            string presource = input
                .Substring(input.IndexOf("/") + host.Length - 1, input.Length - (protocol.Length + host.Length));

            string resource = string.Join(string.Empty, presource.Skip(3));

            data.Add("Protocol:", protocol);
            data.Add("Host:", host);
            data.Add("Resource:", resource);

            Console.WriteLine();

            foreach (var entry in data)
            {
                Console.WriteLine("{0} {1}", entry.Key, entry.Value);
            }
        }
    }
}
