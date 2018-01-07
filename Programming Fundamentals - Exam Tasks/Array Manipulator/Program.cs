using System;
using System.Collections.Generic;
using System.Linq;

namespace _02.Array_Manipulator
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> list = Console.ReadLine().Split().Select(int.Parse).ToList();

            string input = Console.ReadLine();
            while (input != "end")
            {
                string[] commands = input.Split();
                if (commands.Length == 2)
                {
                    string command = commands[0];
                    switch (command)
                    {
                        case "exchange":
                            int index = int.Parse(commands[1]);
                            list = Exchange(list, index);
                            break;
                        case "max":
                            Max(list, commands[1]);
                            break;
                        case "min":
                            Min(list, commands[1]);
                            break;
                    }
                }
                else
                {
                    string order = commands[0];
                    int count = int.Parse(commands[1]);
                    string comm = commands[2];
                    FirstLast(list, order, count, comm);
                }
                input = Console.ReadLine();
            }
            Console.WriteLine("[{0}]", string.Join(", ", list));
        }
        private static List<int> Exchange(List<int> list, int index)
        {
            List<int> ex = new List<int>();
            if (index < 0 || index > list.Count - 1)
            {
                Console.WriteLine("Invalid index");
            }
            else
            {               
                ex = list.Skip(index + 1).ToList();
                ex.AddRange(list.Take(index + 1).ToList());
                list = ex;
            }
            return list;
        }
        private static void Max(List<int> list, string comm)
        {
            List<int> data = new List<int>();
            if (comm == "even")
            {
                data = list.Where(x => (x % 2) == 0).ToList();
            }
            else if (comm == "odd")
            {
                data = list.Where(x => (x % 2) != 0).ToList();
            }
            if (data.Count != 0)
            {
                int Max = data.Max();
                Console.WriteLine(list.LastIndexOf(Max));
            }
            else
            {
                Console.WriteLine("No matches");
            }
        }
        private static void Min(List<int> list, string comm)
        {
            List<int> data = new List<int>();
            if (comm == "even")
            {
                data = list.Where(x => (x % 2) == 0).ToList();
            }
            else if (comm == "odd")
            {
                data = list.Where(x => (x % 2) != 0).ToList();
            }
            if (data.Count != 0)
            {
                int Min = data.Min();
                Console.WriteLine(list.LastIndexOf(Min));
            }
            else
            {
                Console.WriteLine("No matches");
            }
        }
        private static void FirstLast(List<int> list, string order, int count, string comm)
        {
            List<int> odds = list.Where(x => (x % 2) != 0).ToList();
            List<int> evens = list.Where(x => (x % 2) == 0).ToList();
            if (count > list.Count)
            {
                Console.WriteLine("Invalid count");
            }
            else
            {
                if (order == "first")
                {
                    if (comm == "odd")
                    {
                        if (odds.Count == 0)
                        {
                            Console.WriteLine("[]");
                        }
                        else if (count > odds.Count)
                        {
                            Console.WriteLine("[{0}]",string.Join(", ",odds));
                        }
                        else
                        {
                            Console.WriteLine("[{0}]",string.Join(", ",odds.Take(count).ToList()));
                        }
                    }
                    else if (comm == "even")
                    {
                        if (evens.Count == 0)
                        {
                            Console.WriteLine("[]");
                        }
                        else if (count > evens.Count)
                        {
                            Console.WriteLine("[{0}]", string.Join(", ", evens));
                        }
                        else
                        {
                            Console.WriteLine("[{0}]", string.Join(", ", evens.Take(count).ToList()));
                        }
                    }
                }
                else if (order == "last")
                {
                    if (comm == "odd")
                    {
                        if (odds.Count == 0)
                        {
                            Console.WriteLine("[]");
                        }
                        else if (count > odds.Count)
                        {
                            Console.WriteLine("[{0}]", string.Join(", ", odds));
                        }
                        else
                        {
                            List<int> temp = odds.Skip(odds.Count - count).Take(count).ToList();
                            Console.WriteLine("[{0}]", string.Join(", ", temp));
                        }
                    }
                    else if (comm == "even")
                    {
                        if (evens.Count == 0)
                        {
                            Console.WriteLine("[]");
                        }
                        else if (count > evens.Count)
                        {
                            Console.WriteLine("[{0}]", string.Join(", ", evens));
                        }
                        else
                        {
                            List<int> temp = evens.Skip(evens.Count - count).Take(count).ToList();
                            Console.WriteLine("[{0}]", string.Join(", ", temp));
                        }
                    }
                }
            }
        }
    }
}