using System;
using System.Collections.Generic;

namespace Serialize_String
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();
            var chars = string.Join(string.Empty, input).ToCharArray();

            Dictionary<char, List<int>> index = new Dictionary<char, List<int>>();

            for (int i = 0; i < chars.Length; i++)
            {
                if (!index.ContainsKey(chars[i]))
                {
                    index.Add(chars[i], new List<int>());
                }
                index[chars[i]].Add(i);
            }

            foreach (var pair in index)
            {
                Console.WriteLine("{0}:{1}", pair.Key, string.Join("/", pair.Value));
            }
        }
    }
}
