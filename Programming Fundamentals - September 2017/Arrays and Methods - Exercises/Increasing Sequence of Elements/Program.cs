using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Increasing_Sequence_of_Elements
{
    class Program
    {
        static void Main(string[] args)
        {
            var array = Console.ReadLine().Split().ToArray();
            var newArray = Array.ConvertAll(array, int.Parse);

            var result = string.Empty;

            for (int i = 0; i < newArray.Length - 1; i++)
            {
                result = "Yes";

                if (newArray[i] > newArray[i + 1])
                {
                    result = "No";
                    break;
                }
            }
            Console.WriteLine(result);
        }
    }
}
