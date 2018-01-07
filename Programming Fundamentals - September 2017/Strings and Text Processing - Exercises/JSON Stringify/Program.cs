using System;
using System.Collections.Generic;
using System.Linq;

namespace JSON_Stringify
{
    class Student
    {
        public string Name { get; set; }

        public int Age { get; set; }

        public List<int> Grades { get; set; }
    }
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();

            List<Student> students = new List<Student>();

            string concat = string.Empty;
            while (input != "stringify")
            {
                string[] tokens = input
                    .Split(new[] { ' ', ':', '-', '>', ','}, 
                    StringSplitOptions.RemoveEmptyEntries);

                string name = tokens[0];

                int age = int.Parse(tokens[1]);

                List<int> grades = tokens
                    .Skip(2)
                    .Select(int.Parse)
                    .ToList();

                Student newStudent = new Student
                {
                    Name = name,
                    Age = age,
                    Grades = grades
                };

                students.Add(newStudent);

                input = Console.ReadLine();
            }

            foreach (Student student in students)
            {
                concat += (string.Format("{{name:\"{0}\",age:{1},grades:[{2}]}},", 
                    student.Name, 
                    student.Age, 
                    string.Join(", ", student.Grades)));
            }
            Console.WriteLine("[{0}]", concat.TrimEnd(','));
        }
    }
}