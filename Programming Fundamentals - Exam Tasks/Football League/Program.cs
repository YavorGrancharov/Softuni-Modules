using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

namespace _03.Football_League
{
    class Program
    {
        static void Main(string[] args)
        {
            string key = Console.ReadLine();

            key = Regex.Escape(key);

            string pattern = $@"{key}(?<teamA>.*?){key}.+?{key}(?<teamB>.*?){key}.+?(?<goalsTeamA>\d+):(?<goalsTeamB>\d+)";

            string input = Console.ReadLine();

            Dictionary<string, int> standings = new Dictionary<string, int>();
            Dictionary<string, int> goals = new Dictionary<string, int>();

            while (input != "final")
            {
                MatchCollection teamsScores = Regex.Matches(input, pattern);

                foreach (Match team in teamsScores)
                {
                    string teamA = new string(team.Groups["teamA"].Value.Reverse().ToArray()).ToUpper();
                    string teamB = new string(team.Groups["teamB"].Value.Reverse().ToArray()).ToUpper();
                    int goalsTeamA = int.Parse(team.Groups["goalsTeamA"].Value);
                    int goalsTeamB = int.Parse(team.Groups["goalsTeamB"].Value);

                    int scoresTeamA = 0;
                    int scoresTeamB = 0;

                    if (goalsTeamA > goalsTeamB)
                    {
                        scoresTeamA = 3;
                        scoresTeamB = 0;
                    }
                    else if (goalsTeamA < goalsTeamB)
                    {
                        scoresTeamB = 3;
                        scoresTeamA = 0;
                    }
                    else
                    {
                        scoresTeamA = 1;
                        scoresTeamB = 1;
                    }

                    if (!standings.ContainsKey(teamA))
                    {
                        standings.Add(teamA, 0);
                    }                  
                    if (!standings.ContainsKey(teamB))
                    {
                        standings.Add(teamB, 0);
                    }

                    standings[teamA] += scoresTeamA;
                    standings[teamB] += scoresTeamB;

                    if (!goals.ContainsKey(teamA))
                    {
                        goals.Add(teamA, 0);
                    }                    
                    if (!goals.ContainsKey(teamB))
                    {
                        goals.Add(teamB, 0);
                    }

                    goals[teamA] += goalsTeamA;
                    goals[teamB] += goalsTeamB;
                }
                input = Console.ReadLine();
            }
            int indexer = 1;
            Console.WriteLine("League standings:");
            foreach (var team in standings.OrderByDescending(x => x.Value).ThenBy(x => x.Key))
            {                
                Console.WriteLine("{0}. {1} {2}",indexer,team.Key,team.Value);
                indexer++;
            }
            Console.WriteLine("Top 3 scored goals:");
            foreach (var team in goals.OrderByDescending(x => x.Value).ThenBy(x => x.Key).Take(3))
            {
                Console.WriteLine("- {0} -> {1}",team.Key,team.Value);
            }
        }
    }
}