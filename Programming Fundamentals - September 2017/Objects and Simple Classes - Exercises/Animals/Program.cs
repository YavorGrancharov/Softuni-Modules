using System;
using System.Collections.Generic;
using System.Linq;

namespace Animals
{
    class Dog
    {
        public string Name { get; set; }
        public int Age { get; set; }
        public int NumberOfLegs { get; set; }

        public void ProduceSound()
        {
            Console.WriteLine(
                "I'm a Distinguishedog, and I will now produce a distinguished sound! Bau Bau.");
        }
    }

    class Cat
    {
        public string Name { get; set; }
        public int Age { get; set; }
        public int IntelligenceQuotient { get; set; }

        public void ProduceSound()
        {
            Console.WriteLine(
                "I'm an Aristocat, and I will now produce an aristocratic sound! Myau Myau.");
        }
    }

    class Snake
    {
        public string Name { get; set; }
        public int Age { get; set; }
        public int CrueltyCoefficient { get; set; }

        public void ProduceSound()
        {
            Console.WriteLine(
                "I'm a Sophistisnake, and I will now produce a sophisticated sound! Honey, I'm home.");
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, Dog> dogData = new Dictionary<string, Dog>();
            Dictionary<string, Cat> catData = new Dictionary<string, Cat>();
            Dictionary<string, Snake> snakeData = new Dictionary<string, Snake>();

            string input = Console.ReadLine();

            while (input != "I'm your Huckleberry")
            {
                string[] tokens = input.Split(' ');
                if (tokens.Length > 2)
                {
                    string classAnimal = tokens[0];
                    string name = tokens[1];
                    int age = int.Parse(tokens[2]);
                    int parameter = int.Parse(tokens[3]);

                    if (classAnimal == "Dog")
                    {
                        Dog newDogData = new Dog
                        {
                            Name = name,
                            Age = age,
                            NumberOfLegs = parameter
                        };

                        dogData.Add(newDogData.Name, newDogData);
                    }
                    if (classAnimal == "Cat")
                    {
                        Cat newCatData = new Cat
                        {
                            Name = name,
                            Age = age,
                            IntelligenceQuotient = parameter
                        };

                        catData.Add(newCatData.Name, newCatData);
                    }
                    if (classAnimal == "Snake")
                    {
                        Snake newSnakeData = new Snake
                        {
                            Name = name,
                            Age = age,
                            CrueltyCoefficient = parameter
                        };

                        snakeData.Add(newSnakeData.Name, newSnakeData);
                    }
                }
                else
                {
                    if (tokens[0] == "talk")
                    {
                        string nameMatch = tokens[1];

                        if (dogData.ContainsKey(nameMatch))
                        {
                            dogData[nameMatch].ProduceSound();
                        }
                        else if (catData.ContainsKey(nameMatch))
                        {
                            catData[nameMatch].ProduceSound();
                        }
                        else if (snakeData.ContainsKey(nameMatch))
                        {
                            snakeData[nameMatch].ProduceSound();
                        }
                    }
                }
                input = Console.ReadLine();
            }

            foreach (var dog in dogData.Values)
            {
                Console.WriteLine("Dog: {0}, Age: {1}, Number Of Legs: {2}", 
                    dog.Name, dog.Age, dog.NumberOfLegs);
            }

            foreach (var cat in catData.Values)
            {
                Console.WriteLine("Cat: {0}, Age: {1}, IQ: {2}", 
                    cat.Name, cat.Age, cat.IntelligenceQuotient);
            }

            foreach (var snake in snakeData.Values)
            {
                Console.WriteLine("Snake: {0}, Age: {1}, Cruelty: {2}", 
                    snake.Name, snake.Age, snake.CrueltyCoefficient);
            }
        }
    }
}
