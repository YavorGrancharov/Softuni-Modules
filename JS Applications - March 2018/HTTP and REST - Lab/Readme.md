# Lab: Http &amp; REST

Problems for in-class lab for the [&quot;JavaScript Applications&quot; course @ SoftUni](https://softuni.bg/courses/javascript-applications). Submit your solutions in the SoftUni judge system at [https://judge.softuni.bg/Contests/Compete/Index/356](https://judge.softuni.bg/Contests/Compete/Index/356). During this exercises you will **not** write **JS** code. **Install**&quot; [Postman](https://www.getpostman.com/)&quot; REST Client to **ease** your task.

## 1. GitHub Repos for User &quot;testnakov&quot;

First task is to list user&#39;s all public repositories. You will send a &quot; **GET**&quot; request to receive all the

repositories after that all you have to do is **copy** the response in JSON format and **paste** it as a

solution in **judge**.

**REQUEST** : [https://api.github.com/users/testnakov/repos](https://api.github.com/users/testnakov/repos)

![](http://i65.tinypic.com/os751l.png)

**RESPONSE** :

![](http://i67.tinypic.com/x5bkvq.png)

## 2. GitHub: Labels Issue#1 (testnakov/test-nakov-repo)

Get the **first** issue from repository with **name**&quot;test-nakov-repo&quot;. Send a GET request to **https://api.github.com/repos/testnakov/test-nakov-repo/issues/:id** , where :id is the issue.

## 3. Github: Create Issue

This time we have to **create** an issue (data should be **send** to the server). Send a &quot; **POST**&quot; request to the server with the following JSON as **body** (send it as **application/json** ):

![](http://i64.tinypic.com/2s8oklt.png)

You need to use your GitHub **account credentials** to submit issues. Under the Authorization tab, select Basic and enter your username and password. Send the request to the URI from the previous task, but without the **:id**.

## 4. Firebase: All Books

Firebase is a cloud-based DB, **storage** and **app** platform (BaaS).

Register at: [https://console.firebase.google.com](https://console.firebase.google.com).

Create a &quot; **TestApp**&quot; and in the create the **following** structure:

![](http://i65.tinypic.com/2hdzn28.png)

First task is to &quot; **GET**&quot; all books. To consume the request with **POSTMAN** your **url** should be the **following** : https://{databaseId}.firebaseio.com/.json.

**DatabaseId** is unique for every application. You can **find** yours from here:

![](http://i64.tinypic.com/21apow.png)

We **should** also do one more configuration. Go to Database/Rules and set **.read** &amp; **.write** actions to &quot; **true**&quot;. This will allow us to **send** request with **POSTMAN**. Beware that now everyone can **manipulate** our database and even **delete** it. (this is for **testing** purposes only).

![](http://i63.tinypic.com/2lut5y0.png)

## 5. Firebase: Get Book #1

&quot; **GET**&quot; the Book with **id** : 1. Don&#39;t forget the **.json** extension at the end (otherwise you will receive the whole **html** ).

## 6. Firebase: Create Book

To **create** a book, we will have to send a &quot; **POST**&quot; request and the JSON body should be in the **following** format:

{

  &quot;title&quot;:&quot;New Title&quot;,

  &quot;author&quot;:&quot;New Author&quot;

}

## 7. Firebase: Patch Book #7

The HTTP command &quot; **PATCH**&quot; **modifies** an existing HTTP **resource** (it can also create the resource if it does **not** exist). The JSON body should be in the **following** format:

{

  &quot;year&quot;: 1981,

  &quot;author&quot;: &quot;Author Changed&quot;

}

## 8. Firebase: Change Book #7 Author

This time we have to execute a &quot; **PUT**&quot; command (the difference is that with &quot; **PUT&quot;** we can update a resource **partially** ). In our case we have to **change** the author&#39;s name to &quot; **New author was assigned**&quot;.

**REQUEST** : https://{databaseId}.firebaseio.com/Books/7/author/.json

The JSON body should be in the **following** format:

&quot; **New author was assigned**&quot;.

## 9. Kinvey: Handshake

Kinvey is a **Mobile Back-End** as a Service (mBaaS).

Create a **developer** account in **Kinvey** at: [https://console.kinvey.com/sign-up](https://console.kinvey.com/sign-up).

After registration **create** an app called &quot; **MyApp**&quot; and afterwards click &quot; **Development**&quot;.

![](http://i65.tinypic.com/347tk7n.png)

We receive an **appId** and **appSecret** that we will use later:

![](http://i64.tinypic.com/biw8kj.png)

Create a **new** user in the &quot;Users&quot; **section** with username: &quot; **guest**&quot; and password: &quot; **guest**&quot;.

![](http://i68.tinypic.com/2czq6nd.png)

To fulfill a **handshake,** we have to enter the following &quot; **GET**&quot; request in **POSTMAN** : [https://baas.kinvey.com/appdata/{appId}](https://baas.kinvey.com/appdata/%7bappId%7d). Enter your own **appId**.

## 10. Kinvey: All Posts

Create a **new data collection** called &quot; **posts**&quot; that has **two** columns: &quot; **title**&quot; and &quot; **body**&quot; and add 3 **rows** of information.

![](http://i64.tinypic.com/2508jnq.png)

After that **listing** all posts should be easy **with** the following request: [https://baas.kinvey.com/appdata/{appId}/posts](https://baas.kinvey.com/appdata/%7bappId%7d/posts)

## 11. Kinvey: Create New Post

Firstly, go to **Authorization** in **POSTMAN** and select &quot; **Basic Auth**&quot;. And enter **username** : &quot;guest&quot; and **password** : &quot;guest&quot;.

![](http://i64.tinypic.com/24oxeuc.png)

We already know the request method for **creating** a new resource. Now we should create a **new** post with a **title** : &quot;New Title&quot; and a **body** : &quot;New Post Body&quot;.

![](http://i66.tinypic.com/nzna4w.png)

## 12. Kinvey: Delete a Post

Now let us **delete** the **newly** created post.

**REQUEST &quot;DELETE&quot;:** [https://baas.kinvey.com/appdata/{appId}/posts/{postId}](https://baas.kinvey.com/appdata/%7bappId%7d/posts/%7bpostId%7d). The **postId** can be found from the JSON response of the **previous** task. The &quot; **DELETE**&quot; request should **generate** a response that tells us how **many** posts we have **deleted**.

## 13. Kinvey: Edit a Post

Edit a Post with a &quot; **PUT**&quot; request. **Change** the following columns: **title** : &quot;edited title&quot;, **body** : &quot;edited author&quot; and add an additional column: **hidden** : true.

## 14. Kinvey: Login

Change the **Authorization** to &quot; **No Auth**&quot;. **Logging** in is done with a &quot; **POST**&quot; request with the **following** url: [https://baas.kinvey.com/user/{appId} /login](https://baas.kinvey.com/user/%7bappId%7d%20/login).

 You should also send your **credentials** through the JSON **body** :

![](http://i63.tinypic.com/z50s7.png)

After a **successful** login you should **receive** the following response:

![](http://i65.tinypic.com/2zxuu5u.png)

Save the **authtoken** , because you will **need** it for the **final** task.

## 15. \*Bonus Kinvey: Logout

Lastly we have to **logout** from the application. To do so we have to send a &quot; **POST**&quot; request with the **following** url: [https://baas.kinvey.com/user/{appId}/\_logout](https://baas.kinvey.com/user/%7bappId%7d/_logout).

Remember that long **authorization** token ? Now we have to copy it and paste it in the **POSTMAN****&quot;Headers&quot;** section:

![](http://i63.tinypic.com/n62nap.png)

After you click &quot; **Send**&quot; the response body **should** be **empty**. Doing it **again** should trigger an **error**.