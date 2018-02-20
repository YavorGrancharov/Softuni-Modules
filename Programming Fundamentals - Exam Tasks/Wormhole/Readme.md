# Problem 3 – Wormhole

Dr. Worm has advanced technologically to level where he can travel through wormholes. Wormholes are holes in reality, which allow you to travel to other dimensions. Dr. Worm however, does not know anything about the wormholes, so he just enters random holes in hopes of getting to his target point.<br><br>
You will be given a **sequence** of **integers** – the **wormholes**, on a **single input line, separated** by a **space**. The **integers** will either be **zeros (0)** or some **other integers**.<br><br>
You must start from the first one and reach the last one.<br>
If the **integer** you are **currently at** is a **zero**, you must **continue forward** to the **next element** of the sequence.<br>
If the **integer** you are **currently at** is **NOT zero**, it is a wormhole. You must **go** to the **element** which is **at index** – the wormhole’s **value**.<br><br>
**Every time** you **step** on a **wormhole**, you must **set** its **value** to __0__.<br><br>
Your task is to **calculate** exactly **how many steps** it would take you to **reach** the **end** of the **sequence**.<br><br>
The wormhole’s **teleportation** to the **target** index **does NOT count** as a **step**.<br><br>
**Example:** If we have the input **“0 0 0 2 0 0 5”** . . . the **steps** would look like this:<br><br>

![](http://i66.tinypic.com/2dawpe9.png)


### Input 

* The input will come in the form of a **single input line**, containing a **sequence** of **integers, separated** by a **single space**.

### Output

* As **output** you must print **how many steps** it took you, to **reach** the **end** of the **sequence**.

### Constrains

* The **count** of **elements** in the input will be in **range [0, 100]**.<br><br>
* The **integers** in the input will be in **range [0, N - 1]**, where __N__ is the **count** of **elements**.

### Examples

| Input | Output | Comments |
--------|--------|----------
| 0 0 0 2 0 0 5 | 9 | You start walking trough the elements. You make **4 steps** and you step on a **wormhole**. You **teleport** at **index (2)**, and you set the wormhole’s value to __0__. You make 4 more steps and you reach the next wormhole, which returns you to **index (5)**.<br>One last step and you have **reached** the **end** of the **sequence**.<br>The result is 9 steps. |
| 0 0 1 0 2 0 4 0 | 13 |
