using System;
using System.Collections.Generic;

namespace A_Miner_Task
{
    class Program
    {
        static void Main(string[] args)
        {
            string resource = Console.ReadLine();

            Dictionary<string, int> data = new Dictionary<string, int>();

            while (resource != "stop")
            {
                int quantity = int.Parse(Console.ReadLine());

                if (!data.ContainsKey(resource))
                {
                    data.Add(resource, 0);
                }
                data[resource] += quantity;

                resource = Console.ReadLine();
            }

            foreach (var record in data)
            {
                Console.WriteLine("{0} -> {1}",record.Key,record.Value);
            }
        }
    }
}
