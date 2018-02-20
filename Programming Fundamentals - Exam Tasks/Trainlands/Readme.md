# Problem 4. Trainlands

So a train goes from A to B… Okay that’s too mainstream. Trainlands! Trainlands is a game of trains, in which trains develop themselves into gigantic trains for the competition. It got too trainy so let’s get to the main logic.

The **train** has a **name (string)**, and **wagons**. The **wagons** have a **name (string)** and **power (integer)**.<br>
The input comes in one of the following formats:<br><br>
**\{trainName\} -> \{wagonName\} -> \{wagonpower\}**<br><br>
**Creates** a **train** with the **given name** and **adds** a **wagon** to it with the **given name** and **power**. If the train **already exists**, it just **adds** the **given wagon** to it.<br><br>
**\{trainName\} -> \{otherTrainName\}**<br><br>
**Adds all** of the **wagons** from the **other train** to the **first train**, and **REMOVES** the **other train**. If the first train **does NOT exist**, create it, and then **add** the **wagons**. The other train will **ALWAYS** be **EXISTENT**.<br><br>
**\{trainName\} = \{otherTrainName\}**<br><br>
**Copies** the **other train’s wagons**, without affecting the other train. **Copying** means, that the **first train’s wagons become** the **same** as the **other train’s wagons**. If the first train **does NOT exist**, create it. The other train will **ALWAYS** be **EXISTENT**.<br><br>
When you get the command **“It’s Training Men!”** you should end the input sequence and print all of the trains and their wagons. The trains must be **ordered** by **total wagon power**, in **descending order**, and by **wagon count** in **ascending order** as **secondary criteria**. For each train you should print its wagons, **ordered** by **wagon power** in **descending order**.

### Input

* The input comes in the form of commands in one of the formats specified above.<br><br>
* The input ends when the command **“It’s Training Men!”** is entered.

### Output


* As output you must print all of the trains and their wagons ordered as specified above.<br><br>
* The format of printing is:<br><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Train: \{trainName\}<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;###\{wagon1Name\} - \{wagon1Power\}<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ###\{wagon2Name\} - \{wagon2Power\}<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.  .  .**

### Constrains

* The **names** of the **trains** and the **wagons** will be **strings**.<br><br>
* The **names** may contain **any ASCII character**, except “ ”, “**-**”, “**:**”, “**>**”, “**=**”.<br><br>
* The **wagon power** will be a valid **integer** in **range [0, 1.000.000]**.<br><br>
* There will be **NO invalid input**.<br><br>
* The **wagons** will always have **unique names** in the **scope** of their **train**.<br><br>
* Allowed time / memory: 100ms / 16 MB.

### Examples

| Input | Output |
--------|---------
| Kivil -> KAKA : 1387<br>Zone -> Gh : 4081Р<br>Kivil -> RAMZES666 : 4677<br>Desolator -> MiraclE~ : 8432<br>Zone -> Kivil<br>It's Training Men! | Train: Zone<br>###RAMZES666 - 4677<br>###Gh - 4081<br>###KAKA - 1387<br>Train: Desolator<br>###MiraclE~ - 8432<br> |
| Kepler -> MinD_ContRoL : 3782<br>Daun -> Fn : 6816<br>Miner -> Gh : 1198<br>Miner -> Sccc : 9030<br>Miner -> KAKA : 7409<br>Anna -> Miner<br>Daun = Anna<br>It's Training Men! | Train: Daun<br>###Sccc - 9030<br>###KAKA - 7409<br>###Gh - 1198<br>Train: Anna<br>###Sccc - 9030<br>###KAKA - 7409<br>###Gh - 1198<br>Train: Kepler<br>###MinD_ContRoL - 3782 |