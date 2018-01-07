using System;
using System.Collections.Generic;
using System.Linq;

namespace Phonebook_Upgrade
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();
            SortedDictionary<string, string> data =
                new SortedDictionary<string, string>();


            while (input != "END")
            {
                if (input == "ListAll")
                {
                    foreach (var record in data)
                    {
                        Console.WriteLine("{0} -> {1}", record.Key, record.Value);
                    }
                }

                string[] tokens = input.Split(' ').ToArray();
                string ch = tokens[0];

                if (tokens.Length == 3)
                {
                    if (ch == "A")
                    {
                        string name = tokens[1];
                        string number = tokens[2];
                        if (!data.ContainsKey(name))
                        {
                            data[name] = number;
                        }
                        data[name] = number;
                    }
                }
                else if (tokens.Length == 2)
                {
                    if (ch == "S")
                    {
                        string name = tokens[1];
                        foreach (var record in data)
                        {
                            if (record.Key == name)
                            {
                                Console.WriteLine("{0} -> {1}", record.Key, record.Value);
                            }
                        }
                        if (!data.ContainsKey(name))
                        {
                            Console.WriteLine("Contact {0} does not exist.", name);
                        }
                    }
                }                
                input = Console.ReadLine();
            }
        }
    }
}