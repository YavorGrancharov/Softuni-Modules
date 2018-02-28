# Lab: Object Composition

Problems for exercises and homework for the [&quot;JavaScript Advanced&quot; course @ SoftUni](https://softuni.bg/courses/javascript-advanced). Submit your solutions in the SoftUni judge system at [https://judge.softuni.bg/Contests/334](https://judge.softuni.bg/Contests/334).

## Mocha Tests

Submit these problems with the **JavaScript code (Mocha unit tests strategy)**

## Order Rectangles

You will be passed a few pairs of **widths** and **heights** of rectangles, create **objects** to represent the rectangles. The objects should additionally have two functions **area** - that returns the area of the rectangle and **compareTo** - that compares the current rectangle with another and produces a number  signifying if the current rectangle is **smaller** (negative number), **equal** (0) or **larger** (positive number) than the other rectangle.

### Input

The input will come as an array of arrays - every nested array will contain exactly 2 numbers the **width** and the **height** of the rectangle.

### Output

The output must consist of an array of **rectangles** (objects) sorted by their **area** in **descending** order as a **first** criteria and by their **width** in **descending** order as a **second** criteria.

### Examples

| Input | Output |
| --- | --- |
| **[[10,5],[5,12]]** | **[{width:5, height:12, area:function(), compareTo:function(other)},{width:10, height:5, area:funciton(),compareTo:function(other)}]** |
| **[[10,5], [3,20], [5,12]]** | **[{width:5, height:12, area:function(), compareTo:function(other)},{width:3, height:20, area:funciton(),compareTo:function(other)},{width:10, height:5, area:funciton(),compareTo:function(other)}]]** |

## Fibonacci

You are given a number n, return an array containing the 1st to nth Fibonacci number.


### Input

The **input** will be a single number - **n**.

### Output

The **output** must be an array containing the **1** to **n**

 Fibonacci number in ascending order .
 
### Examples

| Input | Output |
| --- | --- |
| **5** | **[1, 1, 2, 3, 5]** |
| **15** | **[1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610]** |

## List Processor

Using a closure, create an inner object to process list commands. The commands supported should be the following:

- **add**** &lt;string&gt;** - adds the following string in an inner collection.
- **remove**** &lt;string&gt; **- removes all occurrences of the supplied** &lt;string&gt;** from the inner collection.
- **print** - prints all elements of the inner collection joined by **&quot;, &quot;**.

### Input

The **input** will come as an array of strings - each string represents a **command** to be executed from the command execution engine.

### Output

For every print command - you should print on the console the inner collection joined by **&quot;, &quot;**

### Examples

| Input | Output |
| --- | --- |
| [**&#39;add hello&#39;** , **&#39;add again&#39;** , **&#39;remove hello&#39;** , **&#39;add again&#39;** , **&#39;print&#39;**] | **again,again** |
| [**&#39;add pesho&#39;** , **&#39;add gosho&#39;** , **&#39;add pesho&#39;** , **&#39;remove pesho&#39;** , **&#39;print&#39;**] | **gosho** |

## Cars

Write a closure that can create and modify objects. All created objects should be **kept** and be accessible by **name**. You should support the following functionality:

- **create &lt;name&gt;** - creates an object with the supplied **&lt;name&gt;**
- **create &lt;name&gt; inherits &lt;parentName&gt;** - creates an object with the given **&lt;name&gt;** , that inherits from the parent object with the **&lt;parentName&gt;**
- **set &lt;name&gt; &lt;key&gt; &lt;value&gt;** - sets the property with key equal to **&lt;key&gt;** to **&lt;value&gt;** in the object with the supplied **&lt;name&gt;**.
- **print &lt;name&gt;** - prints the object with the supplied **&lt;name&gt;** in the format **&quot;&lt;key1&gt;:&lt;value1&gt;,&lt;key2&gt;:&lt;value2&gt;…&quot;** - the printing should also print all **inherited properties** from parent objects. Inherited properties should come after own properties.

### Input

The **input** will come as an array of strings - each string represents a **command** to be executed from your closure.

### Output

For every **print** command - you should print on the console all properties of the object in the above mentioned format.

### Constraints

- **All commands will always be valid, there will be no nonexistent or incorrect input.**

### Examples

| Input | Output |
| --- | --- |
| [**&#39;create c1&#39;** , **&#39;create c2 inherit c1&#39;** , **&#39;set c1 color red&#39;** , **&#39;set c2 model new&#39;** , **&#39;print c1&#39;** , **&#39;print c2&#39;**] | **color:red** **model:new, color:red** |

## DOM Tests

Submit these problems with the **JavaScript code (DOM unit tests strategy)**

## Sum

Create a function which returns an object that can modify the DOM. The returned object should support the following functionality:

- **init(selector1, selector2, resultSelector)** - initializes the object to work with the elements corresponding to the supplied selectors.
- **add()** - **adds** the numerical value of the element corresponding to **selector1** to the numerical value of the element corresponding to **selector2** and then writes the result in the element corresponding to **resultSelector**
- **subtract()** - **subtracts** the numerical value of the element corresponding to **selector2** from the numerical value of the element corresponding to **selector1** and then writes the result in the element corresponding to **resultSelector**

### Input

There will be no input your function must only provide an object.

### Output

Your function should return an object that meets the specified requirements.

### Constraints

- **All commands will always be valid, there will be no nonexistent or incorrect input.**
- **All selectors will point to single textbox elements.**

### HTML

You are given the following HTML for testing purposes:

| sum.html |
| --- |
| &lt;!DOCTYPE **html** &gt;<br>&lt; **html**  **lang=****&quot;en&quot;**&gt;<br>&lt; **head** &gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt; **meta**  **charset=****&quot;UTF-8&quot;**&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt; **title** &gt;Title&lt;/ **title** &gt;<br>&lt;/ **head** &gt;<br>&lt; **body** &gt;<br>&lt; **input**  **type=** **&quot;text&quot;** **id=** **&quot;num1&quot;** /&gt;<br>&lt; **input**  **type=** **&quot;text&quot;** **id=** **&quot;num2&quot;** /&gt;<br>&lt; **input**  **type=** **&quot;text&quot;** **id=** **&quot;result&quot;** <br> **readonly** /&gt;<br>&lt; **br** &gt;<br>&lt; **button**  **id=** **&quot;sumButton&quot;**&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;Sum&lt;/ **button** &gt;<br>&lt; **button**  **id=** **&quot;subtractButton&quot;**&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;Subtract&lt;/ **button** &gt;<br>&lt;/ **body** &gt;<br>&lt;/ **html** &gt; |