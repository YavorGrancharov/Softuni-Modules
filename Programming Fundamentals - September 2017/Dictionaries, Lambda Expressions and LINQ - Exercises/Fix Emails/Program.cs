using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fix_Emails
{
    class Program
    {
        static void Main(string[] args)
        {
            string name = Console.ReadLine();

            Dictionary<string, string> data = new Dictionary<string, string>();

            while (name != "stop")
            {
                string email = Console.ReadLine();

                if (!data.ContainsKey(name))
                {
                    data.Add(name, email);
                }
                data[name] = email;

                name = Console.ReadLine();
            }

            foreach (var record in data.Where(x => !x.Value.Contains("us") || !x.Value.Contains("uk")))
            {
                Console.WriteLine("{0} -> {1}", record.Key, record.Value);
            }
        }
    }
}
