using System;
using System.Collections.Generic;
using System.Linq;

namespace Exercises
{
    class Exercises
    {
        public string Topic { get; set; }

        public string CourseName { get; set; }

        public string JudgeContestLink { get; set; }

        public List<string> Problems { get; set; }
    }

    class Program
    {
        static void Main(string[] args)
        {
            List<Exercises> exercises = new List<Exercises>();

            string input = Console.ReadLine();

            while (input != "go go go")
            {
                string[] tokens = input
                    .Split(new string [] { " -> " }, StringSplitOptions.RemoveEmptyEntries);

                string topic = tokens[0];
                string courseName = tokens[1];
                string judgeContestLink = tokens[2];
                List<string> problems = tokens[3]
                    .Split(new string[] { ", " }, StringSplitOptions.RemoveEmptyEntries)
                    .ToList();

                Exercises newExercises = new Exercises
                {
                    Topic = topic,
                    CourseName = courseName,
                    JudgeContestLink = judgeContestLink,
                    Problems = problems
                };

                exercises.Add(newExercises);

                input = Console.ReadLine();
            }

            foreach (Exercises exercise in exercises)
            {
                Console.WriteLine("Exercises: {0}", exercise.Topic);
                Console.WriteLine("Problems for exercises and homework for the \"{0}\" course @ SoftUni.", exercise.CourseName);
                Console.WriteLine("Check your solutions here: {0}", exercise.JudgeContestLink);

                int indexer = 1;
                foreach (var problem in exercise.Problems)
                {
                    Console.WriteLine("{0}. {1}", indexer, problem);
                    indexer++;
                }
            }
        }
    }
}
