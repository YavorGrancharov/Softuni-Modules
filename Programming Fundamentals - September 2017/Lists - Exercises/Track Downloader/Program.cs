using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Track_Downloader
{
    class Program
    {
        static void Main(string[] args)
        {
            List<string> blacklist = Console.ReadLine()
                .Split(new char[] { ' ' },
                StringSplitOptions.RemoveEmptyEntries)
                .ToList();

            List<string> empty = new List<string>();

            string filenames = Console.ReadLine();

            while (filenames != "end")
            {
                empty.Add(filenames);

                for (int i = 0; i < blacklist.Count; i++)
                {

                    if (filenames.Contains(blacklist[i]))
                    {
                        empty.Remove(filenames);
                        break;
                    }
                }
                filenames = Console.ReadLine();
            }
            empty.Sort();
            Console.WriteLine(string.Join("\r\n", empty));
        }
    }
}
