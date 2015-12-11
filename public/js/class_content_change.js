//get the information from the database

var userName = "Xiaoyuan Zhang"

var userNameElement = document.getElementById("dropdown-userName");

userNameElement.innerHTML = userName;

var className = "CS252"

var userNameElement = document.getElementById("class");

userNameElement.innerHTML = className;

var studentlist = [ "Bill", "Peter", "Bob" ]

var node = document.createElement("LI");

for (i = 0; i < studentlist.length; i++) {
	var student = document.createTextNode(studentlist[i]);
	node.appendChild(student);
	document.getElementById("nav").appendChild(node);
}