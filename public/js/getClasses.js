var classes = [];

function getclasses(){
    var url = "/class";
    $.get(url).done(function (data) {
        //alert(JSON.stringify(data));
        var length = data.Classes.length;
        for (var i = 1; i <= length; i++) {
            var class_i = data.Classes.pop();

            var classid = "class" + i + "name";
            document.getElementById(classid).innerHTML = class_i.title;

            var detailid = "class" + i + "detail";
            document.getElementById(detailid).innerHTML = class_i.detail;
        };

    }).fail(function(){
    	alert("Wrong Username or Password !");
    });
}

getclasses();
// Add the contents of options[0] to #foo:

