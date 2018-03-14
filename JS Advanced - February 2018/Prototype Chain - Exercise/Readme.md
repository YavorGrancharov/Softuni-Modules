# 1.Exercises: Classes, Inheritance, Unit Testing

Problems for exercises and homework for the [&quot;JavaScript Advanced&quot; course @ SoftUni](https://softuni.bg/courses/javascript-advanced). Submit your solutions in the SoftUni judge system at [https://judge.softuni.bg/Contests/341/](https://judge.softuni.bg/Contests/341/).

## ⦁	Balloons

You have been tasked to create several classes for balloons.

Implement a class **Balloon** , which is initialized with a **color** (String) and **gasWeight** (Number). These two arguments should be **public members**.

Implement another class **PartyBalloon** , which inherits the **Balloon** class and is initialized with **2 additional** **parameters **–** ribbonColor** (String)  and **ribbonLength** (Number).
The **PartyBalloon** class should have a **property ribbon**, which is an **object** with **color and **length – the ones given upon initialization. The ribbon property should have a getter**.

Implement another class **BirthdayBalloon** , which inherits the **PartyBalloon** class and is initialized with **1 extra** **parameter **–** text**(String). The **text** should be a property, and should have a **getter**.

### Screenshots

First, we need to create a function, which will hold our classes, since we will return more than one and the Judge needs to know how to work with them. We create a simple function and we add the first class, the base class for all Balloons to it.

![](http://i64.tinypic.com/2ly4kma.png)

Now that we have our base class, we can create the first child class – the **PartyBalloon** , which extends the base Balloon class.

Upon inheriting the **Balloon** class, the constructor of the **PartyBalloon** class will require the use of the super() method, to initialize the **Balloon** base constructor.

We also need to add the **ribbon object property** in the constructor of the PartyBalloon class. This one is for you to do.

![](http://i66.tinypic.com/2vwdbbs.png)

Now that we know how to basically inherit classes… Create the **BirthdayBalloon** class on your own. The **BirthdayBalloon** class should extend the **PartyBalloon** class, and should add an **extra property**. It is the same as the previous class.

Lastly, we need to return an object, containing all of our classes, so that the Judge can work with them.

![](http://i65.tinypic.com/nv8brt.png)

Submit in the judge a **function (NOT IIFE)**, which holds all classes, and returns them as an object.

## ⦁	People

Define several JS classes, that represent a company&#39;s employee records. Every employee has a **name** and **age** , a **salary** and a list of **tasks** , while every position has specific properties not present in the others. Place all common functionality in a **parent** **abstract** class. Follow the diagram bellow:

![](http://i64.tinypic.com/9vcmjo.png)

Every position has different tasks. In addition to all common properties, the manager position has a **dividend** he can collect along with his salary.

All employees have a **work** function that when called cycles trough the list responsibilities for that position and prints the current one. When all tasks have been printed, the list starts over from the beginning. Employees can also **collect salary** , which outputs the amount, plus any **bonuses**.

Your program needs to expose a module, containing the three classes **Junior** , **Senior** and **Manager**. The properties **name** and **age** are set trough the constructor, while the **salary** and a manager&#39;s **dividend** are initially set to zero and can be changed later. The list of **tasks** is filled by each position. The resulting objects also expose the functions **work()** and **collectSalary()**. When **work()** is called, one of the following lines is printed on the console, depending on the current task in the list:

**{employee name} is working on a simple task.**

**{employee name} is working on a complicated task.**

**{employee name} is taking time off work.**

**{employee name} is supervising junior workers.**

**{employee name} scheduled a meeting.**

**{employee name} is preparing a quarterly report.**

And when **collectSalary()** is called, print the following:

**{employee name} received {salary + bonuses} this month.**

### Input / Output

Any input will be passed as valid arguments, where applicable. Print any output that is required to the console as a string.

Submit your code as a revealing module, containing the three classes. Any definitions need to be named exactly as described above.

### Hints

We should begin by creating a parent class, that will hold all properties, shared among the different positions. Looking at the problem description, we see the following structure for out parent object:

| JavaScript |
| --- |
| **{  <br>&nbsp;&nbsp;&nbsp;&nbsp;age: Number,  <br>&nbsp;&nbsp;&nbsp;&nbsp;name: String,  <br>&nbsp;&nbsp;&nbsp;&nbsp;salary: Number,  <br>&nbsp;&nbsp;&nbsp;&nbsp;tasks: [],  <br>&nbsp;&nbsp;&nbsp;&nbsp;work: Function,  <br>&nbsp;&nbsp;&nbsp;&nbsp;collectSalary: Function<br>}** |

Data variables will be part of the object attached to its local context with **this** inside the **constructor**. Any properties that need to be initialized at instantiation time are defined as function parameters. Functions are defined inside the class body.

![](http://i64.tinypic.com/118k50w.png)

The problem description requires that the parent class is abstract. To achieve this, we have to add a condition in the constructor which prevents its direct instantiation. Using the **new.target** keyword we can check whether the object was created from the abstract constructor or through a child class.

![](http://i68.tinypic.com/2a6uhpk.png)

The **work()** function has to cycle trough the list of tasks and print the current one. The easiest way to do this is to shift the first element from the array and push it at the end.

![](http://i67.tinypic.com/jacqqt.png)

Printing the salary is pretty straightforward. However, since the manager has an additional bonus to his salary, it&#39;s best to get the whole sum with an internal function, that the manager can **override**.

![](http://i66.tinypic.com/2utj237.png)

Now any objects that inherit from Employee will have all of its properties as well as anything new that&#39;s defined in their declaration. To inherit (extend) a class, a new class is defined with the **extends** keyword after its name. They also have to call the parent constructor from their own constructor, so the prototype chain is established. For **Junior** and **Senior** , the only difference from the parent **Employee** is the elements inside the tasks array, since they can use the functions directly from the base class. Child classes will call the parent with any parameters that are needed and push their tasks directly to the array.

![](http://i65.tinypic.com/mjwmr7.png)

The **Manager** is not much different, with the exception that his constructor has to attach a **dividend** property that is initially set to zero. His definition also needs to override the **getSalary()** function we added to the base class earlier, so it includes the bonus.

![](http://i67.tinypic.com/ric1n9.png)

After we&#39;re done with the definitions of all object constructors, we need to wrap them in a revealing module for use by other parts of our program without polluting the global namespace, and to be submitted to the Judge:

![](http://i63.tinypic.com/28vuofb.png)

## ⦁	Posts

Your need to create several classes for **Posts**.

Implement a class **Post** , which is initialized with a **title** (String) and **content** (String). The 2 arguments should be **public members**.
The **Post** class should also have **toString()** function which returns the following result:

**&quot;Post: {postTitle}&quot;**<br>
**&quot;Content: {postContent}&quot;**

Implement another class which is called **SocialMediaPost** , which inherits the **Post** class.
The **SocialMediaPost** class should be initialized with **2 additional arguments** – **likes** (Number) and **dislikes** (Number).
The **SocialMediaPost** class should hold an **array of comments** (Strings), and a function **addComment(comment)**, which **adds comments** to **that** **array**.
The **SocialMediaPost** class should extend the **toString()** function of the **Post** class, and should return the following result:

**&quot;Post: {postTitle}&quot;<br>
&quot;Content: {postContent}&quot;<br>
&quot;Rating: {postLikes – postDislikes}&quot;<br>
&quot;Comments:&quot;<br>
&quot; \* {comment1}&quot;<br>
&quot; \* {comment2}&quot;<br>
. . .**<br>
In case **there are no comments** , return information only about the **title** , **content** and **rating** of the **post**.

Implement another class which is called **BlogPost** , which inherits the **Post** class.
The **BlogPost** class should be initialized with **1 additional arguments** – **views** (Number).
The **BlogPost** class should hold a function **view()**, which **increments** the **views** of the object with **1** , every time it is called. The function should **return the object** , so that **chaining is supported**.
The **BlogPost** class should extend the **toString()** function of the Post class, and should return the following result:

**&quot;Post: {postTitle}&quot;**<br>
**&quot;Content: {postContent}&quot;**<br>
**&quot;Views: {postViews}&quot;**<br>

### Example

| posts.js |
| --- |
| **let** post = **new** Post( **&quot;Post&quot;** , **&quot;Content&quot;** );<br><br>**console**.log(post.toString());<br><br>// Post: Post<br>// Content: Content_ **let** scm = **new** SocialMediaPost( <br>**&quot;TestTitle&quot;** , **&quot;TestContent&quot;** , 25, 30);<br><br>scm.addComment( **&quot;Good post&quot;** );<br>scm.addComment( **&quot;Very good post&quot;** );<br>scm.addComment( **&quot;Wow!&quot;** );<br><br>**console**.log(scm.toString())<br><br>// Post: TestTitle<br>// Content: TestContent<br>// Rating: -5<br>// Comments:<br>//  \* Good post<br>//  \* Very good post<br>//  \* Wow! |

Submit in the judge a **function (NOT IIFE)**, which holds all classes, and returns them as an object.

## ⦁	The Elemelons

If Watermelons exist, Firemelons, Earthmelons and Airmelons should also exist. Create **classes** for **The** **4 Elemelons**.

Create an **abstract class** for the Elemelons. Name it **Melon**.
The **Melon** class should be initialized with **weight** (Number), and **melonSort** (String). The 2 arguments should be **public members**.

Create classes **Watermelon** , **Firemelon** , **Earthmelon** , **Airmelon**. Each of them should **inherit** the **abstract class**** Melon and its functionality. Aside from the abstract functionality, **each** of the **Elemelons** should have property elementIndex**(Number), which is **equal to its** weight \* ***the string length** of its **melonSort**. The property should have only a **getter**.

All of the classes should hold a **toString()** function, which returns the following result for them:

**&quot;Element: {Water/Fire/Earth/Air}&quot;**<br>
**&quot;Sort: {elemelonSort}&quot;**<br>
**&quot;Element Index: {elemelonElementIndex}&quot;**<br>

Create one more class which is called **Melolemonmelon** , which inherits **one** of the **4 elemelons** , **regardless of which**.
The Melolemonmelon **has no element** , but it can **morph** into any of the others. Implement a function **morph()**, which **changes the current element** of the Melolemonmelon, **each time** it is called.
Upon initialization, the **initial element** is **Water**. From then it should go in the following order: **Fire, Earth, Air, Water, Fire…** and so on.
The **toString()** function should remain the same as its parent class.

To create an abstract class you must make sure that that class cannot be instantiated directly. Put the following code in the constructor of the Melon class, before all else.

| melon.js |
| --- |
| **class** Melon {<br>&nbsp;&nbsp;&nbsp;&nbsp;constructor(weight, melonSort) {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**if** ( **new**.target === Melon) {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**throw new**  **TypeError** ( **&quot;Abstract class cannot be instantiated directly&quot;** );<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_//_**TODO: initialize weight and melonSort properties<br>&nbsp;&nbsp;&nbsp;&nbsp;** }<br>} |

### Example

| scripts.js |
| --- |
| **let** test = **new** Melon(100, **&quot;Test&quot;** );<br>//Throws error<br><br>**let** watermelon = **new** Watermelon(12.5, **&quot;Kingsize&quot;** );<br>**console**.log(watermelon.toString());<br><br>// Element: Water<br>// Sort: Kingsize<br>// Element Index: 100   |

Submit in the judge a **function (NOT IIFE)**, which holds all classes, and returns them as an object.

## ⦁	*C# Console

Write **Mocha unit tests** to verify the functionality of a JavaScript implementation of the C# Console **class**. If you&#39;ve written some code in C#, you would know that you can format text using placeholders, an example would look like this:

**Console.WriteLine(&quot;The sum of {0} and {1} is {2}&quot;, 3, 4, 7);**

Here the first placeholder **{0}** is exchanged for the first parameter passed after the text template - **3**. The second placeholder **{1}** for the second parameter - **4** and so on.

You will be provied with a class **Console** which has similar functionality to the C# one. The **Console** should have a static method writeLine which supports the following:

- **writeLine(string)** - if only a single argument is passed and it is a string, the function should simply return it.
- **writeLine(object)** - if only a single parameter is passed and it is an object - return the **JSON** representation of the object.
- **writeLine(templateString, parameters)** - It should support the following:
  - If multiple arguments are passed, but the first is not a string - throw a **TypeError**.
  - If the number of **parameters** does not correspond to the number of placeholders in the template string - throw a **RangeError**.
  - If the placeholders have indexes not withing the **parameters** range(for instance we have a placeholder **{13}** and only 5 params) throw a **RangeError**.
  - if multiple arguments are passed and the first is a string, find all placeholders from the string and **exchange** them with the supplied **parameters**.

Any cases not mentioned above, do not need to be checked.

### Constraints

- All arguments in the **writeLine(templateString, parameters)** will be **strings**.
- There will never be two placeholders with the same number.

### JS Code

To ease you in the process, you are provided with an implementation which meets all of the specification requirements for the **Console** object:

| specialConsole.js |
| --- |
| **class**  **Console** {<br><br>&nbsp;&nbsp;&nbsp;&nbsp;**static get** _placeholder_() {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**return** /{\d+}/g;<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br><br>&nbsp;&nbsp;&nbsp;&nbsp;**static** _writeLine_() {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**let** message = arguments[0];<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**if** (arguments. **length** === 1) { <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**if** ( **typeof** (message) === **&#39;object&#39;** ) {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;message = **JSON**.stringify(message); <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**return** message;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**else if** ( **typeof** (message) === **&#39;string&#39;** ) { <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**return** message;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**else** {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**if** ( **typeof** (message) !== **&#39;string&#39;** ) { <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**throw new**  **TypeError** ( **&quot;No string format given!&quot;** );<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**else** { <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**let** tokens = message.match( **this**._placeholder_).sort( **function** (a, b) {  <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a = **Number** (a.substring(1, a. **length** - 1)); <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b = **Number** (b.substring(1, b. **length** - 1)); <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**return** a - b; <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}); <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**if** (tokens. **length**!== (arguments. **length** - 1)) {        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**throw new**  **RangeError** ( **&quot;Incorrect amount of parameters given!&quot;** ); <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>   <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**else** {    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**for** ( **let** i = 0; i &lt; tokens. **length** ; i++) {  <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**let** number = **Number** (tokens[i].substring(1, tokens[i]. **length** - 1)); <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**if** (number !== i) {           <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**throw new**  **RangeError** ( **&quot;Incorrect placeholders given!&quot;** ); <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**else** { <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;message = message.replace(tokens[i], arguments[i + 1]) <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**return** message;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;}<br>}; |

Your tests will be supplied a class named **&quot;Console&quot;** which contains the above-mentioned logic, all test cases you write should reference this variable. Submit in the judge your code containing Mocha tests testing the above functionality.

## ⦁	*Computer

You need to implement the class hierarchy for a computer business, here are the classes you should create and support:

- **Keyboard**  - concrete class that contains:
  - **manufacturer** - string property for the name of the manufacturer.
  - **responseTime** - number property for the response time of the Keyboard.
- **Monitor** - concrete class that contains:
  - **manufacturer** - string property for the name of the manufacturer.
  - **width** - number property for the width of the screen.
  - **height** - number property for the height of the screen.
- **Battery** - concrete class that contains:
  - **manufacturer** - string property for the name of the manufacturer.
  - **expectedLife** - number property for the expected years of life of the Battery.
- **Computer** - **abstract** class that contains:
  - **manufacturer** - string property for the name of the manufacturer.
  - **processorSpeed** - a number property containing the speed of the processor in GHz.
  - **ram** - a number property containing the RAM of the computer in Gigabytes.
  - **hardDiskSpace** - a number property containing the hard disk space in Terabytes.
- **Laptop** - concrete class **extending** the **Computer** class that contains:
  - **weight** - a number property containing the weight of the Laptop in Kilograms.
  - **color** - a string property containing the color of the Laptop.
  - **battery** - an instance of the **Battery** class containing the Laptop&#39;s battery. There should be a **getter** and a **setter** for the property and validation that the passed in argument is actually an instance of the Battery class.
- **Desktop** - concrete class **extending** the **Computer** class that contains:
  - **keyboard** - an instance of the **Keyboard** class containing the Desktop PC&#39;s Keyboard. There should be a **getter** and a **setter** for the property and validation that the passed in argument is actually an instance of the Keyboard class.
  - **monitor** - an instance of the **Monitor** class containing the Desktop PC&#39;s Monitor. There should be a **getter** and a **setter** for the property and validation that the passed in argument is actually an instance of the Monitor class.

Attempting to instantiate an abstract class should throw an **Error** , attempting to pass an object that is not of the expected instance (ex. an object that is not an instance of Battery to the laptop as a battery) should throw a **TypeError**.

### Example

| template.js |
| --- |
| **function** _createComputerHierarchy_() {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//_**TODO<br>**<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**return** {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Battery** ,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Keyboard** ,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Monitor** ,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Computer** ,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Laptop** ,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Desktop<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;** }<br>} |

You are asked to submit **ONLY the function** that returns an object containing the above mentioned classes.

### Bonus:

In order to achieve a better code reuse, it&#39;s a good idea to have a base abstract class containing common information - check the classes, what common characteristics do they share that can be grouped in a common base class.

## ⦁	**Mixins

Using the classes from the last task, write two mixins (functions which attach some functionality to passed in classes&#39; prototypes) to extend their functionality. You need to support the following mixins:

- **computerQualityMixin(classToExtend)**  - a function that attaches the following functions to the prototype of the passed in class.
  - **getQuality()** - returns a number equal to the computer&#39;s<br>**(processorSpeed + RAM + hardDiskSpace) / 3**.
  - **isFast()** - if **processorSpeed** &gt; (ram / 4)** returns **true**, otherwise **false**.
  - **isRoomy() -** if **hardDiskSpace  &gt; Math.floor(ram \* processorSpeed)** returns **true** , otherwise **false**.
- **styleMixin(classToExtend)** - a function that attaches the following functions to the prototype of the passed in class:
  - **isFullSet()** - if the computer&#39;s **manufacturer** , **keyboard&#39;s manufacturer** and **monitor&#39;s manufacturer** all have the same name returns **true** , otherwise **false**.
  - **isClassy()** - if the computer **battery&#39;s expectedLife** is **3 years or more** and the **computer&#39;s color** is either **&quot;Silver&quot;** or **&quot;Black&quot;** and the **computer&#39;s weight** is **less than 3 kilograms** returns **true** , otherwise returns **false**.

### Example

| template.js |
| --- |
| **function** _createMixins_() {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//_**TODO<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return** {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**computerQualityMixin** ,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**styleMixin<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;** }<br>} |

You are asked to submit **ONLY the function** that returns an object containing the above mentioned mixins.