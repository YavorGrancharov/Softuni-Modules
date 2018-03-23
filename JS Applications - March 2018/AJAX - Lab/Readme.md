# Lab: AJAX &amp; jQuery AJAX

Problems for in-class lab for the [&quot;JavaScript Applications&quot; course @ SoftUni](https://softuni.bg/courses/javascript-applications). Submit your solutions in the SoftUni judge system at [https://judge.softuni.bg/Contests/Compete/Index/357](https://judge.softuni.bg/Contests/Compete/Index/357).

## ⦁	XHR (XmlHttpRequest)

Your task is to **write** a JS function that **loads** a github repository **asynchronously with AJAX**. You should **create** an instance of **XmlHttpRequest** an attach an **onreadystatechange** event to it. (An EventHandler that is called whenever the readyState attribute changes). In your event handler when the **readyState** attribute reaches a value of **4** (it is ready), replcae the text content of a **div** element with **id &quot;res&quot;** with the value of the **responseText** property of the request. **Do not format** the response in any way. Submit your **loadRepos** function.

[ More on XmlHttpRequest.open()](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open)

### Skeleton

| **xmlhttprequest-example.html** |
| --- |
| **&lt;!DOCTYPE html&gt;<br>&lt;html lang=&quot;en&quot;&gt;<br>&lt;head&gt;    <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;meta charset=&quot;UTF-8&quot;&gt;    <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;XmlHttpRequest Example&lt;/title&gt;    <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;script src=&quot;scripts/1.xhr.js&quot;&gt;&lt;/script&gt;<br>&lt;/head&gt;<br>&lt;body&gt;<br>&lt;button onclick=&quot;loadRepos()&quot;&gt;Load Repos&lt;/button&gt;<br>&lt;div id=&quot;res&quot;&gt;&lt;/div&gt;<br>&lt;script&gt;   <br>&nbsp;&nbsp;&nbsp;&nbsp;function loadRepos() {      <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_// TODO_   <br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>&lt;/script&gt;<br>&lt;/body&gt;<br>&lt;/html&gt;** |

### Examples

![](http://i63.tinypic.com/2uh4izk.png)

## ⦁	AJAX Load

Use **jQuery** to **write** a JS function that loads an online resource into a div with **id &quot;text&quot;.** Make a request to &quot; **text.html**&quot; and replace the target div&#39;s content with the returned **HTML**. Create the files **ajax-load.html** and **text.html** and place them in the same folder, so that your script can find the latter.

Submit your **loadTitle** function.

### Skeleton

| **ajax-load.html** |
| --- |
| **&lt;!DOCTYPE html&gt;<br>&lt;html lang=&quot;en&quot;&gt;<br>&lt;head&gt;    <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;meta charset=&quot;UTF-8&quot;&gt;    <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;AJAX Load Example&lt;/title&gt;    <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;script src=&quot;https://code.jquery.com/jquery-3.1.1.min.js&quot;&gt;&lt;/script&gt;<br>&lt;/head&gt;<br>&lt;body&gt;<br>&lt;div id=&quot;text&quot;&gt;    <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;AJAX jQuery.load()&lt;/h1&gt;    <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;button onclick=&quot;loadTitle()&quot;&gt;Load Title&lt;/button&gt;<br>&lt;/div&gt;<br>&lt;/body&gt;<br>&lt;/html&gt;** |

| **text.html** |
| --- |
| **&lt;h1&gt;Voilla!&lt;/h1&gt;<br>&lt;p&gt;I am a text loaded with AJAX request&lt;/p&gt;** |

| **ajax-load.js** |
| --- |
| **function loadTitle() {  <br>&nbsp;&nbsp;&nbsp;&nbsp;_// TODO_<br>}** |

### Examples

![](http://i68.tinypic.com/2u3wpat.png)
![](http://i64.tinypic.com/2iw1t3a.png)

## ⦁	Github Repos

Your task is to **write** a JS function that **executes** an **AJAX** request with **jQuery** and loads all user **github repositories** by a given username (taken from input field with **id &quot;**** username ****&quot;** ) into a **list** (each repository as a **list-item** ) with **id**&quot; **repos**&quot;. Use the properties **full\_name** and **html\_url** of the returned objects to create a link to each repo&#39;s GitHub page. If an **error** occurs (like 404 &quot;Not Found&quot;), **append** to the list a list-item with **text**&quot;Error&quot; instead. Clear the contents of the list before any new content is appended. See the **highlighted lines** of the skeleton for formatting details of each list item. Submit your **loadRepos** function.

### Skeleton

| **github-repos.html** |
| --- |
| **&lt;!DOCTYPE html&gt;<br>&lt;html lang=&quot;en&quot;&gt;<br>&lt;head&gt;    <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;meta charset=&quot;UTF-8&quot;&gt;    <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;GitHub Repos&lt;/title&gt;    <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;script src=&quot;https://code.jquery.com/jquery-3.1.1.min.js&quot;&gt;&lt;/script&gt;<br>&lt;/head&gt;<br>&lt;body&gt;<br>GitHub username:<br>&lt;input type=&quot;text&quot; id=&quot;username&quot; value=&quot;k1r1L&quot; /&gt;<br>&lt;button onclick=&quot;loadRepos()&quot;&gt;Load Repos&lt;/button&gt;<br>&lt;ul id=&quot;repos&quot;&gt;  <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;a href=&quot;_{repo.html\_url}_&quot;&gt;      <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_{repo.full\_name}_    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/a&gt;  <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/li&gt;<br>&lt;/ul&gt;<br>&lt;script&gt;    <br>&nbsp;&nbsp;&nbsp;&nbsp;function loadRepos() {        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_// AJAX call …_     <br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>&lt;/script&gt;<br>&lt;/body&gt;<br>&lt;/html&gt;** |

### Examples

![](http://i67.tinypic.com/2vblkyg.png)

## ⦁	Phonebook

Use **Firebase** and **jQuery** to create a simple phonebook app. The user should be able to see all contacts, **loaded** from the server, **create** a new contact and **delete** any of the contacts. Use the lecture presentation for detailed instructions on this task. Place your code in a file called &quot;phonebook.js&quot;, as shown in the skeleton. This task is not evaluated by the Judge, it is for practice only.

### Skeleton

| **github-repos.html** |
| --- |
| **&lt;!DOCTYPE html&gt;<br>&lt;html lang=&quot;en&quot;&gt;<br>&lt;head&gt;  <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;meta charset=&quot;UTF-8&quot;&gt;  <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;Phonebook&lt;/title&gt;<br>&lt;/head&gt;<br>&lt;body&gt;  <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Phonebook&lt;/h1&gt;  <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;ul id=&quot;phonebook&quot;&gt;&lt;/ul&gt;  <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;button id=&quot;btnLoad&quot;&gt;Load&lt;/button&gt;  <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;Create Contact&lt;/h2&gt;  <br>&nbsp;&nbsp;&nbsp;&nbsp;Person: &lt;input type=&quot;text&quot; id=&quot;person&quot; /&gt;  <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;br&gt;  <br>&nbsp;&nbsp;&nbsp;&nbsp;Phone: &lt;input type=&quot;text&quot; id=&quot;phone&quot; /&gt;  <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;br&gt;  <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;button id=&quot;btnCreate&quot;&gt;Create&lt;/button&gt;  <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;script src=&quot;phonebook.js&quot;&gt;&lt;/script&gt;<br>&lt;/body&gt;<br>&lt;/html&gt;** |

### Examples

![](http://i63.tinypic.com/2ldu80h.png)