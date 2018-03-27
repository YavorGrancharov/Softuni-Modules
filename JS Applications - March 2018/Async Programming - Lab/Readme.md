# Exercises: Async Programming and Promises

Problems for exercises and homework for the [&quot;JavaScript Applications&quot; course @ SoftUni](https://softuni.bg/courses/javascript-applications). Submit your solutions in the SoftUni judge system at [https://judge.softuni.bg/Contests/360/](https://judge.softuni.bg/Contests/360/).

## ⦁	Github Commits

Write a JS program that loads all commit messages and their authors from a github repository using a given HTML.

### HTML Template

You are given the following HTML:

| commits.html |
| --- |
| **&lt;!DOCTYPE html&gt;<br>&lt;html  lang=&quot;en&quot;&gt;<br>&lt;head&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;meta  charset=&quot;UTF-8&quot;&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;Github Commits&lt;/title&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;script  src=&quot;https://code.jquery.com/jquery-3.1.1.min.js&quot; &gt;&lt;/script&gt;<br>&lt;/head&gt;<br>&lt;body&gt;<br>GitHub username:<br>&lt;input  type=&quot;text&quot; id=&quot;username&quot; value=&quot;nakov&quot;/&gt; &lt;br&gt;<br>Repo: &lt;input  type=&quot;text&quot; id=&quot;repo&quot;value=&quot;nakov.io.cin&quot;/&gt;<br>&lt;button  onclick=&quot;loadCommits_()&quot; &gt;Load <br>Commits&lt;/button&gt;<br>&lt;ul  id=&quot;commits&quot; &gt;&lt;/ul&gt;<br>&lt;script&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;function loadCommits_() {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// AJAX call …<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>&lt;/script&gt;<br>&lt;/body&gt;<br>&lt;/html&gt;** |

The **loadCommits** function should get the **username** and **repository** from the HTML textboxes with ids **&quot;username&quot;** and **&quot;repo&quot;** and make a **GET** request to the Github API:
**&quot;https://api.github.com/repos/&lt;username&gt;/&lt;repository&gt;/commits&quot;**

Swap **&lt;username&gt;** and **&lt;repository&gt;** with the ones from the HTML:

- In case of success, for each entry, add a **list item** ( **li** ) in the **unordered list** ( **ul** ) with **id= &quot;commits&quot;** with text in the format:
**&quot;&lt;commit.author.name&gt;: &lt;commit.message&gt;&quot;**
- In case of error and a single **list item** ( **li** ) with text in the format:
**&quot;Error: &lt;error.status&gt; (&lt;error.statusText&gt;)&quot;**

### Screenshots:

![](http://i66.tinypic.com/2rge0t1.png)

![](http://i68.tinypic.com/1pyqgj.png)

Submit in the Judge only the **loadCommits** function.

## ⦁	Blog

Write a JS program for reading blog content. It needs to make requests to the server and display all blog posts and their comments. Use the following HTML to test your solution:

| blog.html |
| --- |
| **&lt;!DOCTYPE html&gt;<br>&lt;html&gt;&lt;head&gt;  <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;meta charset=&quot;UTF-8&quot; &gt;  <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;Blog&lt;/title&gt;  <br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;script src=&quot;https://code.jquery.com/jquery-3.1.1.min.js&quot; &gt;&lt;/script&gt;<br>&lt;/head&gt;<br>&lt;body&gt;<br>&lt;h1&gt;All Posts&lt;/h1&gt;<br>&lt;button  id=&quot;btnLoadPosts&quot; &gt;Load Posts&lt;/button&gt;<br>&lt;select id=&quot;posts&quot;&gt;&lt;/select&gt;<br>&lt;button  id=&quot;btnViewPost&quot; &gt;View&lt;/button&gt;<br>&lt;h1 id=&quot;post-title&quot;&gt;Post Details&lt;/h1&gt;<br>&lt;ul  id=&quot;post-body&quot; &gt;&lt;/ul&gt;<br>&lt;h2&gt;Comments&lt;/h2&gt;<br>&lt;ul id=&quot;post-comments&quot;&gt;&lt;/ul&gt;<br>&lt;script  src=&quot;solution.js&quot; &gt;&lt;/script&gt;<br>&lt;script&gt;  <br>&nbsp;&nbsp;&nbsp;&nbsp;attachEvents();<br>&lt;/script&gt;<br>&lt;/body&gt;<br>&lt;/html&gt;** |

Submit only the **attachEvents()** function that attaches events to the buttons and contains all program logic. You will need to create a **Kinvey** database to test your code (instructions bellow).

The button with ID &quot; **btnLoadPosts**&quot; should make a **GET** request to &quot; **/posts**&quot;. The response from the server will be an **array** of objects with format:

**{ \_id: &quot;postId&quot;,**

  **title: &quot;postTitle&quot;,**

  **body: &quot;postContent&quot; }**

Create an **&lt;option&gt;** for each post using its **\_id** as value and **title** as text inside the node with ID &quot; **posts**&quot;.

![](http://i67.tinypic.com/10wik3d.png)

![](http://i65.tinypic.com/o02idy.png)

When the button with ID &quot; **btnViewPost**&quot; is clicked should make a **GET** request to &quot; **/posts/** {postId}**&quot; to obtain just the selected post (from the dropdown menu with ID &quot;posts&quot;) and another request to &quot;/comments/?query={&quot;post\_id&quot;:&quot; {postId}&quot;}**&quot; to obtain all comments (replace highlighted parts with the relevant value). The first request will return a single object as described above, while the second will return an array of objects with format:

**{ \_id: &quot;commentId&quot;,**

  **text: &quot;commentCOntent&quot;,**

  **post\_id: &quot;postId&quot;}**

Display the post title inside &quot;#post-title&quot; and the post content inside &quot;#post-body&quot;. Display each comment as a &lt;li&gt; inside &quot;#post-comments&quot; and don&#39;t forget to clear its contents beforehand.

![](http://i68.tinypic.com/1z39sih.png) ![](http://i68.tinypic.com/w0q1d1.png)

### Hints

To create a Kinvey database with the required content, you need to register an account and create a new backend app.

![](http://i65.tinypic.com/14ea0z9.png)

![](http://i65.tinypic.com/23sgqav.png)

Create a user and a password. You will need these, along with your **app ID** to authenticate with the server from your JS program.

![](http://i64.tinypic.com/53k3s6.png)

Use the following POST request trough Postman to create blog posts:

![](http://i64.tinypic.com/90dcgo.png)

Note the **empty line** between the header and the content, the request won&#39;t work without it. Replace the highlighted parts with the relevant info. The authorization string is your **username** and **password** appended together with a **colon** between them as string, hashed with the **btoa()** function (built into the browser). The resulting post will have an **\_id** automatically assigned by Kinvey. You will then use this ID when creating comments for each blog post.

![](http://i68.tinypic.com/sg78ud.png)

After the posts and comments are created, your database should look like this:

![](http://i68.tinypic.com/2e0l4jb.png)

![](http://i66.tinypic.com/wires7.png)