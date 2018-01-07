using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;

namespace Cubic_Messages
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();

            string validsms = @"^([0-9]+)([a-zA-Z]+)([^a-zA-Z]*)$";

            Regex validMessage = new Regex(validsms);

            while (input != "Over!")
            {
                int len = int.Parse(Console.ReadLine());

                if (!validMessage.IsMatch(input))
                {
                    input = Console.ReadLine();
                    continue;
                }

                Match match = validMessage.Match(input);
                string smsLen = match.Groups[2].Value;
                if (smsLen.Length != len)
                {
                    input = Console.ReadLine();
                    continue;
                }

                string group1 = match.Groups[1].Value;
                string group2 = match.Groups[3].Value;
                string nums = match.Groups[1].Value + match.Groups[3].Value;

                List<int> indexes = new List<int>();
                for (int i = 0; i < nums.Length; i++)
                {
                    int num = 0;
                    if (int.TryParse(nums[i].ToString(), out num))
                    {
                        indexes.Add(num);
                    }
                }

                StringBuilder result = new StringBuilder();
                foreach (int index in indexes)
                {
                    if (index < len && index >= 0)
                    {
                        result.Append(smsLen[index]);
                    }
                    else
                    {
                        result.Append(" ");
                    }
                }
                Console.WriteLine("{0} == {1}", smsLen, result.ToString());

                input = Console.ReadLine();
            }
        }
    }
}
