using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;

namespace Files
{
    class Program
    {
        static void Main(string[] args)
        {
            BigInteger n = BigInteger.Parse(Console.ReadLine());

            Dictionary<string, Dictionary<string, BigInteger>> data = 
                new Dictionary<string, Dictionary<string, BigInteger>>();

            for (BigInteger i = 0; i < n; i++)
            {
                string input = Console.ReadLine();
                string[] tokens = input
                    .Split(new char[] { '\\', ';', ' '}, StringSplitOptions.RemoveEmptyEntries);

                string root = tokens[0];
                string fileName = tokens[tokens.Length - 2];
                BigInteger size = BigInteger.Parse(tokens[tokens.Length - 1]);

                if (!data.ContainsKey(root))
                {
                    data.Add(root, new Dictionary<string, BigInteger>());
                }
                if (!data[root].ContainsKey(fileName))
                {
                    data[root].Add(fileName, size);
                }
                data[root][fileName] = size;
            }
            string search = Console.ReadLine();

            string[] tokensOut = search
                .Split(' ');

            string extension = tokensOut[0];
            string rootOut = tokensOut[2];

            bool equals = false;
            foreach (var entry in data)
            {
                string rootDirectory = entry.Key;
                Dictionary<string, BigInteger> fileAndSize = entry.Value;
                if (rootDirectory.Contains(rootOut))
                {
                    foreach (var file in fileAndSize.OrderByDescending(x => x.Value).ThenBy(x => x.Key))
                    {
                        if (file.Key.Split('.').Last().Contains(extension))
                        {
                            equals = true;
                            Console.WriteLine("{0} - {1} KB", file.Key, file.Value);
                        }
                    }
                }
            }
            if (equals == false)
            {
                Console.WriteLine("No");
            }
        }
    }
}
