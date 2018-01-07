using System;
using System.Collections.Generic;
using System.Linq;

namespace Trainlands
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();

            Dictionary<string, Dictionary<string, int>> data =
                new Dictionary<string, Dictionary<string, int>>();

            string trainName = string.Empty;
            string wagonName = string.Empty;
            string delimiter = string.Empty;
            string existingTrain = string.Empty;
            int wagonPower = 0;

            while (input != "It's Training Men!")
            {
                string[] parts = input
                    .Split(new string[] { " -> ", " : " },
                    StringSplitOptions.RemoveEmptyEntries);

                if (parts.Length > 2)
                {
                    trainName = parts[0];
                    wagonName = parts[1];
                    wagonPower = int.Parse(parts[2]);

                    if (!data.ContainsKey(trainName))
                    {
                        data.Add(trainName, new Dictionary<string, int>());
                    }
                    data[trainName][wagonName] = wagonPower;
                }
                else
                {
                    string[] str = input.Split(' ');
                    trainName = str[0];
                    delimiter = str[1];
                    existingTrain = str[2];

                    if (delimiter == "->")
                    {
                        if (!data.ContainsKey(trainName))
                        {
                            data.Add(trainName, new Dictionary<string, int>());
                        }
                        foreach (var wagon in data[existingTrain])
                        {
                            data[trainName][wagon.Key] = wagon.Value;
                        }
                        data.Remove(existingTrain);
                    }
                    else if (delimiter == "=")
                    {
                        if (!data.ContainsKey(trainName))
                        {
                            data.Add(trainName, new Dictionary<string, int>());
                        }
                        var newData = data[existingTrain].ToDictionary(x => x.Key, x => x.Value);
                        data[trainName] = newData.ToDictionary(x => x.Key, x => x.Value);
                    }
                }

                input = Console.ReadLine();
            }

            foreach (var train in data
                .OrderByDescending(p => p.Value.Values.Sum())
                .ThenBy(p => p.Value.Count()))
            {
                Console.WriteLine($"Train: {train.Key}");
                Dictionary<string, int> wagons = train.Value;
                foreach (var wagon in wagons.OrderByDescending(x => x.Value))
                {
                    Console.WriteLine($"###{wagon.Key} - {wagon.Value}");
                }
            }
        }
    }
}