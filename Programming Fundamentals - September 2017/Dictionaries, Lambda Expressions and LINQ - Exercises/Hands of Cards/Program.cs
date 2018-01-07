using System;
using System.Collections.Generic;
using System.Linq;

namespace Hands_of_Cards
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();

            Dictionary<string, List<string>> data = new Dictionary<string, List<string>>();

            while (input != "JOKER")
            {
                string[] playerCards = input
                    .Split(':').ToArray();

                string[] cards = playerCards[1]
                    .TrimStart(' ')
                    .Split(new char[] { ',', ' ' }, StringSplitOptions.RemoveEmptyEntries)
                    .ToArray();

                if (!data.ContainsKey(playerCards[0]))
                {
                    data.Add(playerCards[0], new List<string>());
                }
                data[playerCards[0]].AddRange(cards);
                 
                input = Console.ReadLine();
            }

            foreach (var record in data)
            {
                string name = record.Key;
                List<string> cards = record.Value.Distinct().ToList();

                int left = 0;
                int right = 0;
                int sum = 0;

                foreach (var card in cards)
                {
                    string power = card.Substring(0, card.Length - 1).Trim();
                    string type = card.Substring(card.Length - 1);

                    switch (power)
                    {
                        case "2": left = 2; break;
                        case "3": left = 3; break;
                        case "4": left = 4; break;
                        case "5": left = 5; break;
                        case "6": left = 6; break;
                        case "7": left = 7; break;
                        case "8": left = 8; break;
                        case "9": left = 9; break;
                        case "10": left = 10; break;
                        case "J": left = 11; break;
                        case "Q": left = 12; break;
                        case "K": left = 13; break;
                        case "A": left = 14; break;
                        default: left = 1; break;
                    }
                    switch (type)
                    {
                        case "S": right = 4; break;
                        case "H": right = 3; break;
                        case "D": right = 2; break;
                        case "C": right = 1; break;
                        default: right = 1; break;
                    }
                    sum += left * right;              
                }
                Console.WriteLine("{0}: {1}", name, sum);
            }
        }
    }
}