using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Equal_Sequence_of_Elements_in_Array
{
    class Program
    {
        static void Main(string[] args)
        {
            var array = Console.ReadLine()
                .Split()
                .Select(int.Parse)
                .ToArray();

            var equal = string.Empty;

            for (int i = 0; i < array.Length; i++)
            {
                for (int j = i + 1; j < array.Length; j++)
                {
                    if (array[i] == array[j])
                    {
                        equal = "Yes";
                    }
                    else
                    {
                        equal = "No";
                    }
                }
            }
            Console.WriteLine(equal);
        }
    }
}
