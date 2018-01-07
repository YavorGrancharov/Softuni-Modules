using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Stateless
{
    class Program
    {
        static void Main(string[] args)
        {
            string state = Console.ReadLine();

            while (state != "collapse")
            {
                string fiction = Console.ReadLine();

                while (fiction.Length > 0)
                {
                    if (state.Contains(fiction))
                    {
                        state = state.Replace(fiction, "");
                    }
                    else
                    {
                        fiction = fiction.Remove(0, 1);

                        if (fiction.Length > 0)
                        {
                            fiction = fiction.Remove((fiction.Length - 1), 1);
                        }
                    }             
                }
                
                if (state.Length > 0)
                {
                    Console.WriteLine(state);
                }
                else
                {
                    Console.WriteLine("(void)");
                }               
                state = Console.ReadLine();
            }           
        }
    }
}
