# Problem 1 – Wormtest

The worms are having a contest – a Wormtest. In the Wormtest, every worm is given wormpoints depending on several statistics. Guess who’s going to calculate those statistics... Yup, that’s you!<br><br>
You will be given input data about a single wormtestant. You must calculate his wormpoints, depending on the given data.<br><br>
On the **first** line of input you will get the worm’s **length** in **meters (m)**, which will be an **integer**.<br><br>
On the **second** line of input you will get the worm’s **width**, in **centimeters (cm)**, which will be a **floating-point number**.<br><br>
You should **convert** the **length** in **centimeters** (**multiply** it by **100**). Then you should **divide** the **length** and the **width** and find the **remainder** of the **division**. <br><br>
If it is **zero** or **cannot be calculated**, you should **print** the **product** of **the length** and **the width (length * width), rounded** to the **second digit** after the **decimal point**.<br><br>
If the **remainder** is **NOT zero**, you should **print what percentage** is **the length of the width**. 
Print it **rounded** to the **second digit** after the **decimal point**. 
<br><br>
**Example: length = 1m ; width = 30cm. percentage = 333.33 %**

### Input

* On the **first** input line you will receive the worm’s **length** in **meters (m)**.<br><br>
* On the **second** input line you will receive the worm’s **width** in **centimeters (cm)**.

### Output

* As output you must print the product of the **length** and the **width** or how much **percent** is the **length** of the **width**.<br><br>
* **Both** output results should be **rounded** and **printed** to the **second digit** after the **decimal point**.

### Constrains

* The worm’s **length** will be a valid **integer** in **range [0, 1000]**.<br><br>
* The worm’s **width** will be a **floating-point number** in **range [0, 1000.00]**. 

### Examples

| Input | Output | Comments |
--------|--------|-----------
| 1000<br>200 | 20000000.00 | **length = 1000m. width = 200cm.**<br>**1000m * 100 = 100000cm.**<br>**100000 % 200 = 0**. The remainder is zero. So we print the **product** of the two numbers, **rounded** to **the second digit** after the **decimal point**. <br>|
| 40<br>600 | 666.67% | **40m * 100 = 4000cm.**<br>**4000 % 600 = 400**. The **remainder** is **400**. So we print how much **percent** the **length** is of the **width, rounded** to **the second digit** after the **decimal point**. **4000** is **666.67 percent** of **600**. |