# Problem 4 – Worms World Party

Worms World Party is a game where teams of worms fight each other with various weapons. Your task is to register the teams and the participants with their score, and sort out the teams by the total amount of their score.<br><br>You will receive several input lines in the following format:<br><br>**\{wormName\} -> \{teamName\} -> \{wormScore\}**<br><br>**The wormName** and **teamName** will be **strings**, consisting of **alphanumeric characters** and **spaces**.<br>
The **wormScore** will be an **integer**.<br>
Your task is to **store** every **team** and its **worms** with their **score**.<br>
If the **given** worm **already exists** in one of the **teams**, you should **IGNORE** that line of input.<br><br>When you receive the command **“quit”** the input sequence ends. When that happens, you must order all teams and print them.<br><br>The teams must be **ordered by total score** of their worms, in **descending order**, and if 2 teams have the **same total score**, they must be ordered by average score **(totalScore / wormCount)** in **descending order**. For each team you must print its worms, **ordered** by **descending order** of their **score**.

### Input

* The input comes in the form of input lines in the format, specified above.<br><br>
* The input sequence ends when you receive the command **“quit”**.<br>
### Output

* As output you must print all the teams and their worms in the following order:<br>**"1. Team: \{team1Name\} - \{totalScore\}<br>&nbsp;&nbsp;&nbsp;###\{worm1Name\} : \{worm1Score\}<br>&nbsp;&nbsp;&nbsp;###\{worm2Name\} : \{worm2Score\}<br>&nbsp;&nbsp;&nbsp;. . .<br>&nbsp;&nbsp;&nbsp;2. Team: \{team2Name\} - \{totalScore\}<br>&nbsp;&nbsp;&nbsp;. . ."**

### Constrains

* The **wormName** and **teamName** will consist of **alphanumeric characters** and **spaces**.<br><br>
* The **wormScore** will be a valid integer in **range [0, 1.000.000.000]**.<br><br>
* There will be **NO invalid** input lines.

### Examples

| Inpuit | Output |
---------|-----------
| Donald -> TheBest -> 3<br>Jefrey -> Overlords -> 2<br>Johnathan -> Overlords -> 3<br>George -> Psychos -> 5<br>Alex -> TheBest -> 7<br>quit | 1. Team: TheBest - 10<br>###Alex : 7<br>###Donald : 3<br>2. Team: Psychos - 5<br>###George : 5<br>3. Team: Overlords - 5<br>###Johnathan : 3<br>###Jefrey : 2 |
| Tony Tony Chopper -> Straw Hats -> 10<br>Brook -> Straw Hats -> 5<br>Loffy -> Fake Hats -> 10<br>Brook -> Fake Hats -> 5<br>quit | 1. Team: Straw Hats - 15<br>###Tony Tony Chopper : 10<br>###Brook : 5<br>2. Team: Fake Hats - 10<br>###Loffy : 10 |



