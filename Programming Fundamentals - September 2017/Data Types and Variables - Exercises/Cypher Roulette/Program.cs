using System;
using System.Collections.Generic;

namespace test
{
    internal class Program
    {
        public static void Main(string[] args)
        {
            List<string> cypher = new List<string>();
            
            int n = int.Parse(Console.ReadLine());

            int count = 0;
            for (int i = 0; i < n; i++)
            {
                string input = Console.ReadLine();
                if (input == "spin")
                {
                    input = Console.ReadLine();
                    count++;
                    if (count % 2 == 0)
                    {
                        cypher.Add(input);
                    }
                    else
                    {
                        cypher.Insert(0, input);
                    }
                }
                else
                {
                    cypher.Add(input);
                }
                for (int j = 1; j < cypher.Count; j++)
                {
                    if (cypher[j].Equals(cypher[j - 1]))
                    {
                        cypher.Clear();
                    }
                }
            }          
            Console.WriteLine(string.Join("", cypher));
        }
    }
}

