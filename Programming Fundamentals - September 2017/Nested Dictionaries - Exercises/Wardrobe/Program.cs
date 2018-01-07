using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Wardrobe
{
    class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, Dictionary<string, int>> wordrobe = new Dictionary<string, Dictionary<string, int>>(); 

            int n = int.Parse(Console.ReadLine());
            for (int i = 0; i < n; i++)
            {
                string[] input = Console.ReadLine().Split(new string[] { " -> " }, StringSplitOptions.RemoveEmptyEntries);

                string color = input[0];
                string[] item = input[1].Split(',');

                if (!wordrobe.ContainsKey(color))
                {
                    wordrobe.Add(color, new Dictionary<string, int>());
                }
                foreach (string cloth in item)
                {
                    Dictionary<string, int> dataBase = wordrobe[color];
                    if (!dataBase.ContainsKey(cloth))
                    {
                        dataBase.Add(cloth, 0);
                    }
                    dataBase[cloth]++;
                }
            }
            string[] search = Console.ReadLine().Split(' ');
            string searchColor = search[0];
            string searchCloth = search[1];

            foreach (KeyValuePair<string, Dictionary<string, int>> colorData in wordrobe)
            {
                string color = colorData.Key;
                Dictionary<string, int> clothsData = colorData.Value;
                Console.WriteLine("{0} clothes:", color);
                foreach (KeyValuePair<string, int> clothData in clothsData)
                {
                    string cloth = clothData.Key;
                    int count = clothData.Value;

                    Console.Write("* {0} - {1}", cloth, count);
                    if (color == searchColor && cloth == searchCloth)
                    {
                        Console.Write(" (found!)");
                    }
                    Console.WriteLine();
                }
            }
        }
    }
}
