using System;
using System.Text;

namespace String_Encryption
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            int asDec = 0;
            int lPart = 0;
            int rPart = 0;
            char lRes = '\0';
            char rRes = '\0';

            StringBuilder concat = new StringBuilder();
            for (int i = 0; i < n; i++)
            {
                char ch = char.Parse(Console.ReadLine());

                asDec = Convert.ToInt32(ch);
                lPart = Convert.ToInt32(asDec.ToString().Substring(0, 1));
                rPart = asDec % 10;
                lRes = Convert.ToChar(asDec + rPart);
                rRes = Convert.ToChar(asDec - lPart);

                concat.Append(lRes);
                concat.Append(lPart);
                concat.Append(rPart);
                concat.Append(rRes);
            }
            Console.WriteLine(concat);
        }
    }
}
