using System;
using System.Collections.Generic;
using System.Linq;

namespace Most_Valued_Customer
{
    class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, double> productsPrice =
                new Dictionary<string, double>();

            Dictionary<string, List<string>> customerProducts =
                new Dictionary<string, List<string>>();

            string productsPreiceInput = Console.ReadLine();

            while (productsPreiceInput != "Shop is open")
            {
                string[] inputTokens = productsPreiceInput.Split(' ');
                string product = inputTokens[0];
                double price = double.Parse(inputTokens[1]);

                if (!productsPrice.ContainsKey(product))
                {
                    productsPrice[product] = price;
                }
                productsPreiceInput = Console.ReadLine();
            }
            productsPreiceInput = Console.ReadLine();

            while (productsPreiceInput != "Print")
            {
                if (productsPreiceInput == "Discount")
                {
                    productsPreiceInput = Console.ReadLine();
                }

                string[] inputTokens = productsPreiceInput
                    .Split(new string[] { ": ", ", " }, StringSplitOptions.RemoveEmptyEntries);

                string customer = inputTokens[0];

                string[] products = inputTokens[1]
                    .Split();

                if (!customerProducts.ContainsKey(customer))
                {
                    customerProducts.Add(customer, new List<string>());
                }

                for (int i = 0; i < products.Length; i++)
                {
                    customerProducts[customer].Add(products[i]);
                }
                productsPreiceInput = Console.ReadLine();
            }

            foreach (KeyValuePair<string, double> products in productsPrice.OrderByDescending(p => p.Value))
            {
                double sumPrice = 0;
                string product = products.Key;
                double price = products.Value;
                sumPrice += price;

                foreach (var customer in customerProducts)
                {
                    Console.WriteLine("{0} {1}", sumPrice, product);
                }
            }
        }
    }
}
