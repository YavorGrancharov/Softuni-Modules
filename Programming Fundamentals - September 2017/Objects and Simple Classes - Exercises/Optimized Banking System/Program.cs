using System;
using System.Collections.Generic;
using System.Linq;

namespace Optimized_Banking_System
{
    class BankAccount
    {
        public string Name { get; set; }

        public string Bank { get; set; }

        public decimal Balance { get;  set; }
    }
    class Program
    {
        static void Main(string[] args)
        {
            List<BankAccount> accounts = new List<BankAccount>();

            string input = Console.ReadLine();

            while (input != "end")
            {
                string[] tokens = input.Split(new string[] { " | " },
                    StringSplitOptions.RemoveEmptyEntries);

                string bank = tokens[0];
                string name = tokens[1];
                decimal balance = decimal.Parse(tokens[2]);

                BankAccount newBankAccount = new BankAccount
                {
                    Bank = bank,
                    Name = name,                    
                    Balance = balance
                };

                accounts.Add(newBankAccount);

                input = Console.ReadLine();
            }

            foreach (var account in accounts
                .OrderByDescending(accountBalance => accountBalance.Balance)
                .ThenBy(bankName => bankName.Bank.Length))
            {
                Console.WriteLine("{0} -> {1} ({2})", account.Name, account.Balance, account.Bank);
            }
        }
    }
}
