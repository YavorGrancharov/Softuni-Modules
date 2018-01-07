using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Tear_List_in_Half
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> list = Console.ReadLine()
                .Split(' ')
                .Select(int.Parse)
                .ToList();

            List<int> emptyUp = new List<int>();
            List<int> emptyBottom = new List<int>();

            for (int i = list.Count / 2; i < list.Count; i++)
            {
                emptyUp.Add(list[i]);
            }

            for (int i = 0; i < list.Count / 2; i++)
            {
                emptyBottom.Add(list[i]);
            }

            List<int> result = new List<int>();

            for (int i = 0; i < emptyUp.Count; i++)
            {
                result.Add(emptyUp[i] / 10);
                result.Add(emptyBottom[i]);
                result.Add(emptyUp[i] % 10);
            }
            Console.WriteLine(string.Join(" ", result));
        }
    }
}
