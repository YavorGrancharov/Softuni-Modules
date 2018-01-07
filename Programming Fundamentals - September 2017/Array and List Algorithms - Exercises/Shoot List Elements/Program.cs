using System;
using System.Collections.Generic;
using System.Linq;

namespace Shoot_List_Elements
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();

            List<int> list = new List<int>();

            int lastShot = 0;

            while (true)
            {
                if (input == "bang")
                {
                    if (list.Count == 0)
                    {
                        Console.WriteLine("nobody left to shoot! last one was " + lastShot);
                        break;
                    }

                    double average = list.Average();
                    for (int i = 0; i < list.Count; i++)
                    {
                        if (list[i] < average)
                        {
                            lastShot = list[i];
                            list.RemoveAt(i);
                            Console.WriteLine("shot " + lastShot);
                            break;
                        }
                        else if (list.Count == 1)
                        {
                            lastShot = list[0];
                            list.RemoveAt(0);
                            Console.WriteLine("shot " + lastShot);
                            break;
                        }
                    }
                    for (int j = 0; j < list.Count; j++)
                    {
                        list[j]--;
                    }
                }
                else if (input == "stop")
                {
                    if (list.Count == 0)
                    {
                        Console.WriteLine("you shot them all. last one was " + lastShot);
                        break;
                    }
                    else
                    {
                        Console.WriteLine("survivors: {0}", string.Join(" ", list));
                        break;
                    }
                }
                else
                {
                    int number = int.Parse(input);
                    list.Insert(0, number);
                }
                input = Console.ReadLine();
            }
            Console.WriteLine(string.Join(" ", list));
        }
    }
}