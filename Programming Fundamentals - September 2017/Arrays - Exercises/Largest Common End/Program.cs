using System;
using System.Linq;

namespace Largest_Common_End
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] arr = Console.ReadLine().Split().ToArray();
            string[] arr2 = Console.ReadLine().Split().ToArray();

            int count = 0;
            if (arr.Length > arr2.Length)
            {
                Array.Reverse(arr);
                Array.Reverse(arr2);
                for (int i = 0; i < arr2.Length; i++)
                {
                    if (arr2[i] == arr[i])
                    {
                        count++;
                    }
                }
            }            
            else
            {
                for (int i = 0; i < arr.Length; i++)
                {
                    if (arr[i] == arr2[i])
                    {
                        count++;
                    }
                }
            }          
            Console.WriteLine(count);
        }
    }
}
