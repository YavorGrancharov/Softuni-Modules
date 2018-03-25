# Exercises: jQuery AJAX and the GitHub API

Problems for exercises and homework for the [&quot;JavaScript Applications&quot; course @ SoftUni](https://softuni.bg/courses/javascript-applications). Submit your solutions in the SoftUni judge system at [https://judge.softuni.bg/Contests/358/](https://judge.softuni.bg/Contests/358/).

## ⦁	Bus Stop

Write a JS program that retries arrival times for all buses by given bus stop ID when a button is clicked. Use the following HTML template to test your code:

| buses.html |
| --- |
| **&lt;!DOCTYPE html &gt;<br>&lt; html lang=&quot;en&quot;&gt;<br>&lt;head&gt;  <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;meta charset=&quot;UTF-8&quot;&gt;  <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;Bus Stop&lt;/ title &gt;  <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;style&gt;    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#stopName {      <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;font-size : 1.5 em ;      <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;font-weight : 400;      <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;padding : 0.25 em ;      <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;background-color : aquamarine ;    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}  <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/style&gt;  <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt; script  src=&quot;https://code.jquery.com/jquery-3.1.1.min.js&quot;&gt;&lt;/script&gt;<br>&lt;/head&gt;<br>&lt;body&gt;<br>&lt;div id=&quot;stopInfo&quot;  style=&quot;width:20 em&quot;&gt;  <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;label for=&quot;stopId&quot; &gt;Stop ID: &lt;/label&gt;    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input id= &quot;stopId&quot;type=&quot;text&quot; &gt;    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input id= &quot;submit&quot;type=&quot;button&quot;value=&quot;Check&quot;onclick=&quot; _getInfo_() &quot;&gt;&lt;/div&gt;  <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;div id=&quot;result&quot; &gt;    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div id=&quot;stopName&quot;&gt;&lt;/div&gt;    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ul id=&quot;buses&quot;&gt;&lt;/ul&gt;  <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br>&lt;/div&gt;<br>&lt;script&gt; <br>&nbsp;&nbsp;&nbsp;&nbsp;function _getInfo_() {    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_//_TODO ...   <br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>&lt;/script&gt;<br>&lt;/body&gt;<br>&lt;/html&gt;** |

When the button with ID **&#39;submit&#39;** is clicked, the name of the bus stop appears and the list bellow gets populated with all the buses that are expected and their time of arrival. Take the **value** of the input field with id **&#39;stopId&#39;**. Submit a **GET** request to **https://judgetests.firebaseio.com/businfo/** { **_stopId_** } **.json** (replace the highlighted part with the correct value) and parse the response. You will receive a JSON object in format:

**stopId: {**

  **name: stopName,**

  **buses: { busId: time, … }**

**}**

Place the name property as text inside the div with ID **&#39;stopName&#39;** and each bus as a list item with text:

**&quot;Bus**  **{busId}**  **arrives in**  **{time}&quot;**

Replace all highlighted parts with the relevant value from the response. If the request is not successful, or the information is not in the expected format, display **&quot;Error&quot;** as **stopName** and nothing in the list. The list should be cleared before every request is sent.

Submit only the **getInfo()** function.

### Examples

![](http://i67.tinypic.com/2h2mhhi.png)

When the button is clicked, the results are displayed in the corresponding elements:

![](http://i63.tinypic.com/10wjlsm.png)

If an error occurs, the stop name changes to Error:

![](http://i68.tinypic.com/2i7480p.png)

### Hints

The webhost will respond with valid data to IDs 1287, 1308, 1327 and 2334.

## ⦁	Bus Schedule

Write a JS program that tracks the progress of a bus on it&#39;s route and announces it inside an info box. The program should display which is the upcoming stop and once the bus arrives, to request from the server the name of the next one. Use the following HTML to test your solution:

| schedule.html |
| --- |
| **&lt;!DOCTYPE html&gt;<br>&lt;html  lang=&quot;en&quot;&gt;<br>&lt;head&gt;  <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;meta charset=&quot;UTF-8&quot;&gt;  <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;Bus Schedule&lt;/title&gt;  <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;style&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#schedule{ text-align : center ; width : 400 px ; }    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;input { width : 120 px ;}    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#info { background-color : aquamarine ; border :1 px solid black ; margin :0.25 em ; }    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;. info { font-size : 1.5 em ; padding : 0.25 em ; }  <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/style&gt;  <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt; script  src=&quot;https://code.jquery.com/jquery-3.1.1.min.js&quot;&gt;&lt;/script&gt;<br>&lt;/head&gt;<br>&lt;body&gt;<br>&lt;div id=&quot;schedule&quot;&gt;  <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;div  id=&quot;info&quot;&gt;&lt;span class=&quot;info&quot;&gt;Not Connected&lt;/span&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;  &lt;div  id=&quot;controls&quot;&gt;    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input id=&quot;depart&quot; value=&quot;Depart&quot; type=&quot;button&quot; onclick=&quot;result.depart() &quot;&gt;    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input id=&quot;arrive&quot; value=&quot;Arrive&quot; type=&quot;button&quot; onclick=&quot;result.arrive()&quot;disabled= &quot;true&quot;&gt;  <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br>&lt;/div&gt;<br>&lt;script&gt;  <br>&nbsp;&nbsp;&nbsp;&nbsp;function _solve_() {    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_//_ TODO ...      <br>&nbsp;&nbsp;&nbsp;&nbsp;return {      <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_depart_,      <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arrive   <br>&nbsp;&nbsp;&nbsp;&nbsp;};  <br>}  <br>let result= _solve_();<br>&lt;/script&gt;<br>&lt;/body&gt;<br>&lt;/html&gt;** |

The bus has two states – **moving** and **stopped**. When it is **stopped** , only the button &quot; **Depart**&quot; is **enabled** , while the info box shows the name of the **current** stop. When it is **moving** , only the button &quot; **Arrive**&quot; is **enabled** , while the info box shows the name of the **upcoming** stop. Initially, the info box shows &quot; **Not Connected**&quot; and the &quot; **Arrive**&quot; button is **disabled**. The ID of the first stop is &quot; **depot**&quot;.

When the &quot; **Depart**&quot; button is clicked, make a **GET** request to the server with the ID of the current stop to address **https://judgetests.firebaseio.com/schedule/**** {currentId} ****.json** (replace the highlighted part with the relevant value). As response, you will receive a JSON object in the following format:

**stopId {**

  **name: stopName,**

  **next: nextStopId**

**}**

Update the info box with information from the response, disable the &quot;Depart&quot; button and enable the &quot;Arrive&quot; button. The info box text should look like this (replace the highlighted part with the relevant value):

Next stop {stopName}

When the &quot; **Arrive**&quot; button is clicked, update the text, disable the &quot;Arrive&quot; button and enable the &quot;Depart&quot; button. The info box text should look like this (replace the highlighted part with the relevant value):

Arriving at {stopName}

Clicking the buttons in succession will cycle through the entire schedule. If invalid data is received, show &quot; **Error**&quot; inside the info box and **disable** both buttons.

Submit only the **solve()** function that returns an object, containing the two click event handlers for **depart()** and **arrive()**, as shown in the sample HTML.

### Examples

Initially, the info box show Not Connected and the arrive button is disabled.

![](http://i67.tinypic.com/2kln3r.png)

When Depart is clicked, a request is made with the first ID. The info box is updated with the new information and the buttons are changed:

![](http://i66.tinypic.com/2jg8hhw.png)

Clicking Arrive, changes the info box and swaps the buttons. This allows Depart to be clicked again, which makes a new request and updates the information:

![](http://i66.tinypic.com/j5a7g7.png)

![](http://i68.tinypic.com/2co4d90.png)

## ⦁	*Messenger

Write a JS program that records and displays messages. The user can post a message, supplying a name and content and retrieve all currently recorded messages. Use the following HTML to test your code:

| messenger.html |
| --- |
| **&lt;!DOCTYPE html&gt;<br>&lt; html  lang=&quot;en&quot; &gt;<br>&lt;head&gt;  <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;meta charset= &quot;UTF-8&quot;&gt;  <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;Messenger&lt;/title&gt;  <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;style&gt;    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;label { display : inline-block ; width : 5 em ; }    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#author , #content { width : 30 em ; }  <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/style&gt;  <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;script src=&quot;https://code.jquery.com/jquery-3.1.1.min.js&quot; &gt;&lt;/script&gt;<br>&lt;/head&gt;<br>&lt;body&gt;<br>&lt;div id=&quot;main&quot;&gt;  <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;textarea  id=&quot;messages&quot; cols=&quot;80&quot; rows=&quot;12&quot; disabled=&quot;true&quot;&gt;&lt;/textarea&gt;  <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;div  id=&quot;controls&quot; &gt;    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;label for=&quot;author&quot;&gt;Name: &lt;/label&gt;&lt;input  id=&quot;author&quot; type=&quot;text&quot; &gt;&lt;br&gt;    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;label  for=&quot;content&quot; &gt;Message: &lt;/label&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input id=&quot;content&quot;  type=&quot;text&quot; &gt;    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input id=&quot;submit&quot;  type=&quot;button&quot; value=&quot;Send&quot; &gt;    &lt;input  id=&quot;refresh&quot; type=&quot;button&quot;  value=&quot;Refresh&quot; &gt;  <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br>&lt;/div&gt;<br>&lt;script src=&quot;solution.js&quot; &gt;&lt;/script&gt;<br>&lt;script&gt;    <br>&nbsp;&nbsp;&nbsp;&nbsp;_attachEvents_();<br>&lt;/script&gt;<br>&lt;/body&gt;<br>&lt;/html&gt;** |

Submit the **attachEvents()** function that attaches event listeners to the two buttons and contains all program logic.

You will need to create the database yourself – use Firebase and set the access rules to be public, so that anyone can post a message and read what&#39;s been posted. Since Firebase objects are by default sorted alphabetically, you&#39;ll need to keep a timestamp property so they can be ordered by most recently posted instead. Use the following message structure:

**{**

  **author: authorName,**

  **content: msgText,**

  **timestamp: time**

**}**

The key associated with each message object is not important – when making a **POST** request with the message object as parameter, Firebase will automatically assign a random key. To get started, you can create a &quot; **messenger**&quot; entry in your Firebase and import the following JSON object:

| messenger.json |
| --- |
| **{  <br>&nbsp;&nbsp;&nbsp;&nbsp;&quot;-KWi2\_-QHxL1yov93j5i&quot; : {    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;author&quot; : &quot;Pesho&quot;,    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;content&quot; : &quot;hi guys&quot;,    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;timestamp&quot; : 1479315195400  <br>&nbsp;&nbsp;&nbsp;&nbsp;},  <br>&nbsp;&nbsp;&nbsp;&nbsp;&quot;-KWi2aENk0utP8BLnhi6&quot; : {    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;author&quot; : &quot;Gosho&quot;,    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;content&quot; : &quot;whats up&quot;,    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;timestamp&quot; : 1479315200447  <br>&nbsp;&nbsp;&nbsp;&nbsp;},  <br>&nbsp;&nbsp;&nbsp;&nbsp;&quot;-KWi3eFIUZbh8Z3OjZEB&quot; : {    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;author&quot; : &quot;Pesho&quot;,    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;content&quot; : &quot;not much, how about you?&quot;,    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;timestamp&quot; : 1479315479039  <br>&nbsp;&nbsp;&nbsp;&nbsp;},  <br>&nbsp;&nbsp;&nbsp;&nbsp;&quot;-KWiX5ixY39AqdD2hJzV&quot; : {    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;author&quot; : &quot;LJ&quot;,    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;content&quot; : &quot;LEEEEROOOY JEEEEENKIIINS&quot;,    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;timestamp&quot; : 1479323197569  <br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>}** |

### Examples

![](http://i66.tinypic.com/2cf759i.png)

![](http://i65.tinypic.com/2dgnzwo.png)

### Hints

To get a useable timestamp, you can use **Date.now()** – this will return the number of milliseconds since 1st of January 1970. The exact value is irrelevant, what&#39;s important is it will be greater for messages that are posted later. We can then sort them by this value.

To create a new entry in Firebase, type its name in the address box and click Go:

![](http://i63.tinypic.com/2lka2dc.png)

![](http://i68.tinypic.com/2lse9fr.png)

You can then import content with the button in the upper right corner:

![](http://i66.tinypic.com/9sxwzk.png)

![](http://i66.tinypic.com/35n0nyu.png)

Put the sample data inside a file with extension **.json** and select it from the popup.

![](http://i64.tinypic.com/2qk4715.png)

## ⦁	Phonebook

Write a JS program that can load, create and delete entries from a Phonebook. You will be given an HTML template to which you must bind the needed functionality.

### HTML Template

You are given the following HTML:

| phonebook.html |
| --- |
| **&lt;!DOCTYPE html&gt;<br>&lt;html lang=&quot;en&quot;&gt;<br>&lt;head&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;meta  charset=&quot;UTF-8&quot;&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;Phonebook&lt;/title&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;script src=&quot;https://code.jquery.com/jquery-3.1.1.min.js&quot; &gt;&lt;/script&gt;<br>&lt;/head&gt;<br>&lt;body&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Phonebook&lt;/h1&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;ul id=&quot;phonebook&quot; &gt;&lt;/ul&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;button id=&quot;btnLoad&quot; &gt;Load&lt;/ button&gt;<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;Create Contact&lt;/h2&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;Person: &lt;input type=&quot;text&quot; id=&quot;person&quot;/&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;br&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;Phone: &lt;input type=&quot;text&quot; id=&quot;phone&quot;/&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;br&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;button id=&quot;btnCreate&quot; &gt;Create&lt;/button&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;script src=&quot;phonebook.js&quot; &gt;&lt;/script&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;script&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_attachEvents_();<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/script&gt;<br>&lt;/body&gt;<br>&lt;/html&gt;** |

When the **[Load]** button is clicked a **GET** request should be made to the server to get all phonebook entries. Each entry received should be in a **li** inside the **ul** with **id=&quot;phonebook&quot;** in the following format with text **&quot;&lt;person&gt;: &lt;phone&gt; &quot;** and a **[Delete]** button attached. Pressing the **[Delete]** button should send a **DELETE** request to the server and delete the entry. The received response will be an object in the following format:
**{&lt;key&gt;:{person:&lt;person&gt;, phone:&lt;phone&gt;}, &lt;key2&gt;:{person:&lt;person2&gt;, phone:&lt;phone2&gt;,…}** where **&lt;key&gt;** is an unique key given by the server and **&lt;person&gt;** and **&lt;phone&gt;** are the actual values.

When the **[Create]** button is clicked a new **POST** request should be made to the server with the information from the Person and Phone textboxes, the Person and Phone textboxes should be cleared and the Phonebook should be automatically reloaded (like if the **[Load]** button was pressed).

The data send on a **POST** request should be a valid JSON object containing properties **person** and **phone.** Example format:
**{**

**&quot;person&quot;: &quot;&lt;person&gt;&quot;,**

**&quot;phone&quot;: &quot;&lt;phone&gt;&quot;
}**

The **url** to which your program should make requests is:

**&#39;https://phonebook-nakov.firebaseio.com/phonebook&#39;**

**GET** and **POST** requests should go to **https://phonebook-nakov.firebaseio.com/phonebook.json** , while **DELETE** requests should go to **https://phonebook-nakov.firebaseio.com/phonebook/&lt;key&gt;.json** , where **&lt;key&gt;** is the unique key of the entry (you can find out the **key** from the key property in the **GET** request)

**You may create your own app** in Firebase, the submitted code **will work** with any database from the same domain.

### Screenshots:

![](http://i63.tinypic.com/107kxz7.png)

![](http://i68.tinypic.com/30cbx35.png)

Submit in the Judge only the **attachEvents** function.

| phonebook.js |
| --- |
| **function** _attachEvents_() {<br>&nbsp;&nbsp;&nbsp;&nbsp;_//_ **TODO**<br>} |