using System;
using System.Collections.Generic;
using System.Linq;

namespace Boxes
{
    class Box
    {
        public Point UpperLeft { get; set; }

        public Point UpperRight { get; set; }

        public Point BottomLeft { get; set; }

        public Point BottomRight { get; set; }

        public int Width { get; set; }

        public int Height { get; set; }

        public static int CalculatePerimeter(int width, int height)
        {
            int perimeter = (2 * width) + (2 * height);
            return perimeter;
        }

        public static int CalculateArea(int width, int height)
        {
            int area = width * height;
            return area;
        }
    }

    class Point
    {
        public int X { get; set; }

        public int Y { get; set; }

        public static int CalcDistance(Point poin1, Point poin2)
        {
            int x = (int)Math.Pow(poin1.X - poin2.X, 2);
            int y = (int)Math.Pow(poin1.Y - poin2.Y, 2);
            int distance = (int)Math.Sqrt(x + y);

            return distance;
        }
    }
    
    class Program
    {              
        static void Main(string[] args)
        {
            List<Box> boxes = new List<Box>();

            string input = Console.ReadLine();

            while (input != "end")
            {
                int[] tokens = input
                    .Split(new [] { ' ', ':', '|' }, 
                    StringSplitOptions.RemoveEmptyEntries)
                    .Select(int.Parse)
                    .ToArray();

                Point upperLeft = new Point
                {
                    X = tokens[0],
                    Y = tokens[1]
                };

                Point upperRight = new Point
                {
                    X = tokens[2],
                    Y = tokens[3]
                };

                Point bottomLeft = new Point
                {
                    X = tokens[4],
                    Y = tokens[5]
                };

                Point bottomRight = new Point
                {
                    X = tokens[6],
                    Y = tokens[7]
                };

                Box newBox = new Box
                {
                    UpperLeft = upperLeft,
                    UpperRight = upperRight,
                    BottomLeft = bottomLeft,
                    BottomRight = bottomRight
                };

                boxes.Add(newBox);

                input = Console.ReadLine();
            }

            foreach (var box in boxes)
            {
                int width = Point.CalcDistance(box.UpperLeft, box.UpperRight);
                int height = Point.CalcDistance(box.UpperLeft, box.BottomLeft);
                int perimeter = Box.CalculatePerimeter(width, height);
                int area = Box.CalculateArea(width, height);

                Console.WriteLine("Box: {0}, {1}", width, height);
                Console.WriteLine("Perimeter: {0}", perimeter);
                Console.WriteLine("Area: {0}", area);
            }
        }
    }
}
