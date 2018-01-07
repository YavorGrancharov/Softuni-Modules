using System;
using System.Collections.Generic;
using System.Linq;

namespace Rabbit_Hole
{
    class Program
    {
        static void Main(string[] args)
        {
            List<string> input = Console.ReadLine().Split(' ').ToList();
            int energy = int.Parse(Console.ReadLine());
            int position = 0;
            bool bombed = false;
            while (energy > 0)
            {
                string[] element = input[position].Split('|');
                switch (element[0])
                {
                    case "Right":
                        position = (position + int.Parse(element[1])) % input.Count;
                        energy -= int.Parse(element[1]);
                        break;
                    case "Left":
                        energy -= int.Parse(element[1]);
                        position = Math.Abs(position - int.Parse(element[1])) % input.Count;
                        break;
                    case "Bomb":
                        int energyTaken = int.Parse(element[1]);
                        energy -= energyTaken;
                        input.RemoveAt(position);
                        position = 0;
                        bombed = true;
                        break;
                    case "RabbitHole":
                        Console.WriteLine("You have 5 years to save Kennedy!");
                        return;
                }

                if (energy <= 0)
                {
                    if (bombed)
                    {
                        Console.WriteLine("You are dead due to bomb explosion!");
                        break;
                    }
                    else
                    {
                        Console.WriteLine("You are tired. You can't continue the mission.");
                        break;
                    }
                }

                if (input[input.Count - 1] != "RabbitHole")
                {
                    input.RemoveAt(input.Count - 1);
                }
                input.Add("Bomb|" + energy);
            }
        }
    }
}
