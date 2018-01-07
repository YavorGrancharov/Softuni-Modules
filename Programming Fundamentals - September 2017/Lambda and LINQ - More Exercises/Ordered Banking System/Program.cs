using System;
using System.Collections.Generic;
using System.Linq;

namespace Ordered_Banking_System
{
    class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, Dictionary<string, decimal>> data =
                new Dictionary<string, Dictionary<string, decimal>>();

            string input = Console.ReadLine();

            while (input != "end")
            {
                string[] inputTokens = input
                    .Split(new string[] { " -> " }, StringSplitOptions.RemoveEmptyEntries);

                string bank = inputTokens[0];
                string account = inputTokens[1];
                decimal balance = decimal.Parse(inputTokens[2]);

                if (!data.ContainsKey(bank))
                {
                    data.Add(bank, new Dictionary<string, decimal>());
                }
                if (!data[bank].ContainsKey(account))
                {
                    data[bank].Add(account, 0);
                }
                data[bank][account] += balance;

                input = Console.ReadLine();
            }

            var orderedData = data
                .OrderByDescending(bankData => bankData.Value.Values.Sum())
                .ThenByDescending(bankData => bankData.Value.Values.Max());

            foreach (var bankData in orderedData)
            {
                string bank = bankData.Key;
                Dictionary<string, decimal> accountsData = bankData.Value;

                var orderedAccountsData = accountsData.OrderByDescending(p => p.Value);

                foreach (var accountData in orderedAccountsData)
                {
                    string account = accountData.Key;
                    decimal balance = accountData.Value;
                    Console.WriteLine("{0} -> {1} ({2})", account, balance, bank);
                }
            }
        }
    }
}
