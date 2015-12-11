# [WebClicker][webclicker]

It the a lab project for Purdue CS252

  - HTML app
  - Server (javascript, nodejs)
  - Database (mongo)

In this lab we implement a web application using HTML5 and cloud services. We implement an interactive application in the client using HTML5 and communicating to services in the cloud. For web services we user [Bluemix][df1] that is a  Cloud Foundry implementation. For the client side we be using HTML5.


### Version
0.0.1

### Tech

Dillinger uses a number of open source projects to work properly:

* [AngularJS] - HTML enhanced for web apps! (fail to use)
* [Twitter Bootstrap] - great UI boilerplate for modern web apps
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework [@tjholowaychuk]
* [jQuery] - duh
* [mongodb] - Fully managed MongoDB-as-a-Service

### Todos

- Enable create class only for instructor type
- Class page (load enrolled users, enable activate session)
- delete: drop class & cancel class(remove class(remove all enrolled relation))
- profile (score recorder)

---
### API
```
/register:

method: post
request body: email(required),password(required)
detail: this url is used to register for the user, and to get the Access_Token

/local/login:

method: post
request body: email(required),password(required)
detail: this url is used to get Access_Token from the server

/class:

method: get
request body: NULL
detail: this url is used get all Classes

method: post
request body: title(required),detail(required),classtime
detail: this url is used to post new class

/event/:eventid:

method: get
request body: NULL
detail: this url is used get class with token and class

method: post
request body: title,detail,classtime
detail: this url is used to edit class with token and classid

method: delete
request body: NULL
detail: this url is used to delete class with token and classid

/profile

method: get
request body: NULL
detail: get profile with token

method: post
request body: fullname, email, usertype(default : Strudent)
detail: edit profile with token
```

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [git-repo-url]: <https://github.com/sine27/WebClicker>
   [john gruber]: <http://daringfireball.net>
   [@thomasfuchs]: <http://twitter.com/thomasfuchs>
   [webclicker]: <http://webclicker.mybluemix.net>
   [df1]: <http://www.ibm.com/cloud-computing/bluemix/>
   
   
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [mongodb]: <https://mongolab.com/welcome/>
   