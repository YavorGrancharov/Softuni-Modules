using System;
using System.Collections.Generic;
using System.Linq;

namespace Array_Histogram
{
    class Program
    {
        static void Main(string[] args)
        {
            List<string> words = new List<string>();
            List<int> count = new List<int>();
            string[] input = Console.ReadLine().Split(' ').ToArray();

            for (int i = 0; i < input.Length; i++)
            {
                if (!words.Contains(input[i]))
                {
                    words.Add(input[i]);
                    count.Add(1);
                }
                else
                {
                    int index = words.IndexOf(input[i]);
                    count[index]++;
                }
            }

            for (int i = 0; i < count.Count - 1; i++)
            {
                var s = i + 1;
                while (s > 0)
                {
                    if (count[i - 1] < count[i])
                    {
                        int tempCount = count[i];
                        count[i] = count[i - 1];
                        count[i - 1] = tempCount;

                        string tempWord = words[i];
                        words[i] = words[i - 1];
                        words[i - 1] = tempWord;
                    }
                    i--;
                }
            }

            for (int i = 0; i < words.Count; i++)
            {
                Console.WriteLine("{0} -> {1} times ({2:F2}%)", words[i], count[i], ((double)count[i] / (double)input.Length) * 100);
            }
        }
    }
}