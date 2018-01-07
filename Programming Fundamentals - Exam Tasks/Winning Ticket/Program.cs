using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace Problem_4___Winning_Ticket
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] input = Console.ReadLine()
                .Split(new char[] { ',', ' ', '\t' }, StringSplitOptions.RemoveEmptyEntries);

            for (int i = 0; i < input.Length; i++)
            {
                string leftHalf = input[i].Substring(0, input[i].Length / 2);
                string rightHalf = input[i].Substring(input[i].Length / 2, input[i].Length - leftHalf.Length);

                if (input[i].Length < 20 || input[i].Length > 20)
                {
                    Console.WriteLine("invalid ticket");
                }
                if (input[i].Length == 20 && leftHalf.Contains("$") && rightHalf.Contains("$"))
                {
                    int countLeft = leftHalf.Count(x => x == '$');
                    int countRight = rightHalf.Count(x => x == '$');

                    if (countLeft + countRight == 20)
                    {
                        Console.WriteLine("ticket \"{0}\" - {1}$ Jackpot!", input[i], countLeft);
                    }
                    else if (countLeft > 5 && countLeft < 10 && countRight > 5 && countRight < 10)
                    {
                        Console.WriteLine("ticket \"{0}\" - {1}$", input[i], countLeft);
                    }
                }
                if (input[i].Length == 20 && leftHalf.Contains("@") && rightHalf.Contains("@"))
                {
                    int countLeft = leftHalf.Count(x => x == '@');
                    int countRight = rightHalf.Count(x => x == '@');

                    if (countLeft + countRight == 20)
                    {
                        Console.WriteLine("ticket \"{0}\" - {1}@ Jackpot!", input[i], countLeft);
                    }
                    else if (countLeft > 5 && countLeft < 10 && countRight > 5 && countRight < 10)
                    {
                        Console.WriteLine("ticket \"{0}\" - {1}@", input[i], countLeft);
                    }
                }
                if (input[i].Length == 20 && leftHalf.Contains("#") && rightHalf.Contains("#"))
                {
                    int countLeft = leftHalf.Count(x => x == '#');
                    int countRight = rightHalf.Count(x => x == '#');

                    if (countLeft + countRight == 20)
                    {
                        Console.WriteLine("ticket \"{0}\" - {1}# Jackpot!", input[i], countLeft);
                    }
                    else if (countLeft > 5 && countLeft < 10 && countRight > 5 && countRight < 10)
                    {
                        Console.WriteLine("ticket \"{0}\" - {1}#", input[i], countLeft);
                    }
                }
                if (input[i].Length == 20 && leftHalf.Contains("^") && rightHalf.Contains("^"))
                {
                    int countLeft = leftHalf.Count(x => x == '^');
                    int countRight = rightHalf.Count(x => x == '^');

                    if (countLeft + countRight == 20)
                    {
                        Console.WriteLine("ticket \"{0}\" - {1}^ Jackpot!", input[i], countLeft);
                    }
                    else if (countLeft > 5 && countLeft < 10 && countRight > 5 && countRight < 10)
                    {
                        Console.WriteLine("ticket \"{0}\" - {1}^", input[i], countLeft);
                    }
                }
                if (input[i].Length == 20 && !leftHalf.Contains("@") && !leftHalf.Contains("$") && !leftHalf.Contains("#") && !leftHalf.Contains("^")
                    && !rightHalf.Contains("@") && !rightHalf.Contains("$") && !rightHalf.Contains("#") && !rightHalf.Contains("^"))
                {
                    Console.WriteLine("ticket \"{0}\" - no match", input[i]);
                }
            }
        }
    }
}