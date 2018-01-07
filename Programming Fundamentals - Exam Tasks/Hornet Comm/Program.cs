using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hornet_Comm
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();

            List<string> broadcast = new List<string>();
            List<string> message = new List<string>();

            while (input != "Hornet is Green")
            {
                string[] tokens = input
                    .Split(new string[] { " <-> " },
                    StringSplitOptions.RemoveEmptyEntries);

                string left = tokens[0];
                string right = tokens[1];

                if (left.All(char.IsDigit) && right.All(char.IsLetterOrDigit))
                {
                    char[] reversed = left.ToCharArray();
                    Array.Reverse(reversed);
                    string newLeft = new string(reversed);
                    message.Add(newLeft);
                    message.Add(right);
                }
                else if (!left.All(char.IsDigit) && right.All(char.IsLetterOrDigit))
                {
                    string newRight = string.Empty;
                    foreach (var ch in right)
                    {
                        if (char.IsUpper(ch))
                        {
                            newRight += Char.ToLower(ch);
                        }
                        else
                        {
                            newRight += Char.ToUpper(ch);
                        }
                    }
                    broadcast.Add(newRight);
                    broadcast.Add(left);
                }

                input = Console.ReadLine();
            }

            Console.WriteLine("Broadcasts:");
            if (!broadcast.Any())
            {
                Console.WriteLine("None");
            }
            else
            {
                string broad = string.Empty;
                for (int i = 0; i < broadcast.Count; i += 2)
                {
                    broad = broadcast[i] + " -> " + broadcast[i + 1];
                    Console.WriteLine(string.Join("", broad));
                }
            }
            Console.WriteLine("Messages:");
            if (!message.Any())
            {
                Console.WriteLine("None");
            }
            else
            {
                string mess = string.Empty;
                for (int i = 0; i < message.Count; i += 2)
                {
                    mess = message[i] + " -> " + message[i + 1];
                    Console.WriteLine(string.Join("", mess));
                }
            }
        }
    }
}