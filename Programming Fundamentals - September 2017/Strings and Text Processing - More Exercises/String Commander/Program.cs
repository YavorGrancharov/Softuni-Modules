using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace String_Commander
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();
            string commands = Console.ReadLine();

            while (commands != "end")
            {
                string[] tokens = commands.Split(' ');
                string command = tokens[0];
                switch (command)
                {
                    case "Left":
                        int left = int.Parse(tokens[1]);
                        left %= input.Length;
                        input = input.Substring(left) + input.Substring(0, left);
                        break;
                    case "Right":
                        int right = int.Parse(tokens[1]);
                        right %= input.Length;
                        input = input.Substring(input.Length - right) + input.Substring(0, input.Length - right);
                        break;
                    case "Insert":
                        int index = int.Parse(tokens[1]);
                        string insert = tokens[2];
                        input = input.Insert(index, insert);
                        break;
                    case "Delete":
                        int start = int.Parse(tokens[1]);
                        int end = int.Parse(tokens[2]);
                        input = input.Remove(start, end - start + 1);
                        break;
                }

                commands = Console.ReadLine();
            }
            Console.WriteLine(input);
        }
    }
}
