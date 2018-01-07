using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace Trainegram
{
    class Program
    {
        static void Main(string[] args)
        {
            string pattern = @"^(\<\[[^a-zA-Z0-9]*\][\.]{1})+([\.]{1}\[[a-zA-Z0-9]*\][\.]{1})*$";

            Regex regex = new Regex(pattern);

            string input = Console.ReadLine();

            while (input != "Traincode!")
            {
                Match train = regex.Match(input);

                if (train.Success)
                {
                    Console.WriteLine(train.Value.ToString());
                }
                input = Console.ReadLine();
            }
        }
    }
}
