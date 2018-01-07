using System;
using System.Collections.Generic;
using System.Linq;

namespace Social_Media_Posts
{
    class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, Dictionary<string, int>> social = new Dictionary<string, Dictionary<string, int>>();
            Dictionary<string, Dictionary<string, List<string>>> comments = new Dictionary<string, Dictionary<string, List<string>>>();

            while (true)
            {
                string input = Console.ReadLine();
                if (input == "drop the media")
                {
                    break;
                }
                string[] tokens = input.Split(' ');
                string command = tokens[0];
                string postName = tokens[1];

                if (command == "post")
                {
                    if (!social.ContainsKey(postName))
                    {
                        social.Add(postName, new Dictionary<string, int>());
                        social[postName].Add("Likes:", 0);
                        social[postName].Add("Dislikes:", 0);
                    }
                }
                else if (command == "like")
                {
                    social[postName]["Likes:"]++;
                }
                else if (command == "dislike")
                {
                    social[postName]["Dislikes:"]++;
                }
                else if (command == "comment")
                {
                    string person = tokens[2];
                    if (!comments.ContainsKey(postName))
                    {
                        comments.Add(postName, new Dictionary<string, List<string>>());
                    }
                    comments[postName].Add(person, new List<string>());
                    for (int i = 3; i < tokens.Length; i++)
                    {
                        comments[postName][person].Add(tokens[i]);
                    }
                }
            }

            foreach (var item in social.Keys)
            {
                var likes = social[item];
                Console.Write("Post: {0}", item);
                foreach (var like in likes)
                {
                    Console.Write(" | {0} {1}", like.Key, like.Value);
                }
                Console.WriteLine();
                Console.WriteLine("Comments:");
                if (comments.ContainsKey(item))
                {
                    var comment = comments[item];
                    foreach (var commentator in comment)
                    {
                        Console.WriteLine("*  {0}: {1}", commentator.Key, string.Join(" ", commentator.Value));
                    }
                }
                else
                {
                    Console.WriteLine("None");
                }
            }
        }
    }
}
