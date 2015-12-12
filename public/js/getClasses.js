//Change the class 
var classNameDisplayBlock = document.getElementById("classInformationDisplay");
var classes = []
function getclasses(){
    var url = "/class";
    $.get(url).done(function (data) {
        //alert(JSON.stringify(data));
        var length = data.Classes.length;
        for (var i = 0; i < length; i++) {
            var class_i = data.Classes.pop();
            classes.push(class_i);

            var newItem = document.getElementById("classType" + i % 4).cloneNode(true);
            newItem.setAttribute("id", "classType" + (4 + i));
            newItem.childNodes[1].childNodes[1].childNodes[1].childNodes[3].childNodes[1].innerHTML = class_i.title;
            newItem.childNodes[1].childNodes[1].childNodes[1].childNodes[3].childNodes[3].innerHTML = class_i.detail;

            classNameDisplayBlock.appendChild(newItem);
        };
        console.log(classes);

        classNameDisplayBlock.removeChild(document.getElementById("classType0"));
        classNameDisplayBlock.removeChild(document.getElementById("classType1"));
        classNameDisplayBlock.removeChild(document.getElementById("classType2"));
        classNameDisplayBlock.removeChild(document.getElementById("classType3"));

    }).fail(function(){
        alert("Wrong Username or Password !");
    });
}

getclasses();
