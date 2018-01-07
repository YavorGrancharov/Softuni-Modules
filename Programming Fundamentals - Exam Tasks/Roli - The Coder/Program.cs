using System;
using System.Collections.Generic;
using System.Linq;

namespace Roli___The_Coder
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();

            Dictionary<string, List<string>> data = new Dictionary<string, List<string>>();
            Dictionary<int, string> ids = new Dictionary<int, string>();

            while(input != "Time for Code")
            {
                string[] tokens = input.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries);
                int id = int.Parse(tokens[0]);
                string eventName = tokens[1];
                List<string> participants = tokens.Skip(2).ToList();

                if (eventName[0] != '#')
                {

                }
                else
                {
                    if (ids.ContainsKey(id))
                    {
                        if (ids[id] == eventName)
                        {
                            foreach (var name in participants)
                            {
                                if (!data[eventName].Contains(name))
                                {
                                    data[eventName].Add(name);
                                }
                            }
                        }
                    }
                    else if (!ids.ContainsKey(id))
                    {
                        ids[id] = eventName;
                        data[eventName] = new List<string>();

                        foreach (var name in participants)
                        {
                            if (!data[eventName].Contains(name))
                            {
                                data[eventName].Add(name);
                            }
                        }
                    }
                }
                input = Console.ReadLine();
            }

            foreach (var eventt in data.OrderByDescending(x => x.Value.Count).ThenBy(x => x.Key))
            {
                Console.WriteLine($"{eventt.Key.Remove(0, 1)} - {eventt.Value.Count}");
                foreach (var name in eventt.Value.OrderBy(x => x))
                {
                    Console.WriteLine($"{name}");
                } 
            }
        }
    }
}
