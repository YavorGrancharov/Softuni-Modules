using System;
using System.Collections.Generic;
using System.Linq;

namespace Sort_Array_of_Strings
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] array = Console.ReadLine().Split(' ').ToArray();
            InsertSort(array);
            Console.WriteLine(string.Join(" ", array));
        }
        
        static void InsertSort(IComparable[] newArray)
        {
            int i, j;
            for (i = 1; i < newArray.Length; i++)
            {
                IComparable value = newArray[i];
                j = i - 1;
                while ((j >= 0) && (newArray[j].CompareTo(value) > 0))
                {
                    newArray[j + 1] = newArray[j];
                    j--;
                }
                newArray[j + 1] = value;
            }
        }
    }
}
