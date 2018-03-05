# Lab: Unit Testing and Error Handling

Problems for in-class lab for the [&quot;JavaScript Advanced&quot; course @ SoftUni](https://softuni.bg/courses/javascript-advanced). Submit your solutions in the SoftUni judge system at [https://judge.softuni.bg/Contests/307/](https://judge.softuni.bg/Contests/307/).

# Error Handling

## ⦁	Sub Sum

Write a JS function to sum a **range** of numeric elements from array. The function takes three parameters – the first is an **array** , the second is **start index** and the third is an **end index**. Both indexes are **inclusive**. Assume array elements may not be of type Number and cast everything. Implement the following error handling:

- if the **first element** is not an array, return **NaN**
- if the **start index** is less than zero, assume it is zero
- if the **end index** is outside the bounds of the array, assume it points to the last index of the array

### Input / Output

Your function must take three **parameters**. As output, **return** the resulting **sum** as instructed.

### Examples

| Sample Input | Sample Output |
| --- | --- |
| **subsum([10, 20, 30, 40, 50, 60], 3, 300)** | **150** |
| **subsum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1)** | **3.3** |
| **subsum([10, &#39;twenty&#39;, 30, 40], 0, 2)** | **NaN** |
| **subsum([], 1, 2)** | **0** |
| **subsum(&#39;text&#39;, 0, 2)** |** NaN** |

## ⦁	Playing Cards

Create a JS **factory function** that returns a **Card** object to hold a card&#39;s **face** and **suit** , both set trough the constructor. **Throw** an error if the card is initialized with invalid **face** or **suit** or if an attempt is made to change the **face** or **suit** of an existing instance to an invalid value.

- Valid card faces are: 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
- Valid card suits are: S (♠), H (♥), D (♦), C (♣)

Both face and suit are expected as an uppercase string. The class also needs to have a **toString()** method that prints the card&#39;s face and suit as a string. Use the following UTF code literals to represent the suits:

- \u2660 – Spades (♠)
- \u2665 – Hearts (♥)
- \u2666 – Diamonds (♦)
- \u2663 – Clubs (♣)

### Input / Output

The factory function must take two string parameters. The **toString()** method of the returned object must return a string.

Submit the factory function.

### Examples

| Sample Input | Sample Output |
| --- | --- |
| **console.log(&#39;&#39; + makeCard(&#39;A&#39;, &#39;S&#39;));** | **A♠** |
| **console.log(&#39;&#39; + makeCard(&#39;10&#39;, &#39;H&#39;));** | **10♥** |
| **console.log(&#39;&#39; + makeCard(&#39;1&#39;, &#39;C&#39;));** | **Error** |

## ⦁	Deck of Cards

Write a JS function that takes a deck of cards as a string array and prints them as a sequence of cards (space separated). Print &quot;Invalid card: [card]&quot; when an invalid card definition is passed as input. Use the solution from the previous task to generate the cards.

### Input / Output

The function must take an array of strings as parameter. As output, print on the console the list of cards as strings, separated by space.

Submit a function that contains the **makeCard** factory function and other logic.

| deck.js |
| --- |
| **function printDeckOfCards(cards) {<br>  &nbsp;&nbsp;&nbsp;&nbsp;function makeCard {<br>    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_// TODO use function definition from previous task_  }   _// TODO process input_<br>}** |

### Examples

| Sample Input | Sample Output |
| --- | --- |
| **printDeckOfCards([&#39;AS&#39;, &#39;10D&#39;, &#39;KH&#39;, &#39;2C&#39;]);** | **A♠ 10♦ K♥ 2♣** |
| **printDeckOfCards([&#39;5S&#39;, &#39;3D&#39;, &#39;QD&#39;, &#39;1C&#39;]);** | **Invalid card: 1C** |

# Unit Testing

The Unit Tests with Sinon and Mocha strategy gives you access to the following libraries to help you test your code - Mocha, Sinon, Chai, Sinon-Chai and jQuery.

You are required to **only submit the unit tests** for the object/function you are testing. The strategy provides access to Chai&#39;s **expect** , **assert** and **should** methods and jQuery.

### Example Submission

![](http://i67.tinypic.com/2m5h5oh.png)

![](http://i67.tinypic.com/211vslv.png)

## ⦁	Sum of Numbers

Write Mocha tests to check the functionality of the following JS code:

| rgb-to-hex.js |
| --- |
| **function** _sum_(arr) {<br>&nbsp;&nbsp;&nbsp;**let** sum = 0;<br>&nbsp;&nbsp;&nbsp;**for** (num **of** arr)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sum += Number(num);<br>&nbsp;&nbsp;&nbsp;**return** sum;<br>} |

Your tests will be supplied a function named **&#39;sum&#39;**. It needs to meet the following requirements:

- Takes and **array** of **numbers** as argument
- **Returns** the **sum** of the values of all elements inside the array

## ⦁	Check for Symmetry

Write Mocha tests to check the functionality of the following JS code:

| rgb-to-hex.js |
| --- |
| **function** _isSymmetric_(arr) {<br>&nbsp;&nbsp;&nbsp;**if** (!Array.isArray(arr))<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**return false** ; _// Non-arrays are non-symmetric<br>&nbsp;&nbsp;&nbsp;_ **let** reversed = arr.slice(0).reverse(); _// Clone and reverse<br>&nbsp;&nbsp;&nbsp;_ **let** equal = (JSON.stringify(arr) == JSON.stringify(reversed));<br>&nbsp;&nbsp;&nbsp;&nbsp;**return** equal;<br>} |

Your tests will be supplied a function named **&#39;isSymmetric&#39;**. It needs to meet the following requirements:

- Takes and **array** as argument
- **Returns false for any input that isn&#39;t of the** correct type**
- **Returns true if the input array is symmetric** (first half is the same as the second half mirrored)
- Otherwise, returns **false**

## ⦁	RGB to Hex

Write Mocha tests to check the functionality of the following JS code:

| rgb-to-hex.js |
| --- |
| **function** _rgbToHexColor_(red, green, blue) {<br>&nbsp;&nbsp;&nbsp;**if** (!Number.isInteger(red) \|\| (red &lt; 0) \|\| (red &gt; 255))<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**return** undefined; // Red value is invalid<br>&nbsp;&nbsp;&nbsp;**if** (!Number.isInteger(green) \|\| (green &lt; 0) \|\| (green &gt; 255))<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**return** undefined; // Green value is invalid<br>&nbsp;&nbsp;&nbsp;**if** (!Number.isInteger(blue) \|\| (blue &lt; 0) \|\| (blue &gt; 255))<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**return** undefined; // Blue value is invalid<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**return**  **&quot;#&quot;** +<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;( **&quot;0&quot;** + red.toString(16).toUpperCase()).slice(-2) +<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;( **&quot;0&quot;** + green.toString(16).toUpperCase()).slice(-2) +<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;( **&quot;0&quot;** + blue.toString(16).toUpperCase()).slice(-2);<br>} |

Your tests will be supplied a function named **&#39;rgbToHexColor&#39;** , which takes three arguments. It needs to meet the following requirements:

- Takes three **integer numbers** , representing the red, green and blue values of an RGB color, each **within range [0…255]**
- **Returns** the same color in hexadecimal format as a **string** (e.g. &#39;#FF9EAA&#39;)
- **Returns****&#39;undefined&#39; **if** any **of the input parameters are of** invalid type **or not in the expected** range**

## ⦁	Add / Subtract

Write Mocha tests to check the functionality of the following JS code:

| rgb-to-hex.js |
| --- |
| **function** _createCalculator_() {<br>&nbsp;&nbsp;&nbsp;**let** value = 0;<br>&nbsp;&nbsp;&nbsp;**return** {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;add: **function** (num) { value += Number(num); },<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;subtract: **function** (num) { value -= Number(num); },<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;get: **function** () { **return** value; }<br>&nbsp;&nbsp;&nbsp;}<br>} |

Your tests will be supplied a function named **&#39;createCalculator&#39;**. It needs to meet the following requirements:

- **Returns** a **module** (object), containing the functions **add** , **subtract** and **get** as **properties**
- Keeps an **internal sum** which **can&#39;t be modified** from the outside
- The functions **add** and **subtract** take a parameter that can be parsed as a number (either a number or a string containing a number) that is added or subtracted from the **internal sum**
- The function **get**** returns **the value of the** internal sum**