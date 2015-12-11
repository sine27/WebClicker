var classes = [];

function getclasses(){
    var url = "/class";
    $.get(url).done(function (data) {
        console.log(JSON.stringify(data));
        for (var i = 0; i < 4; i++) {
            classes.push(data.Classes.pop());
        };
        document.getElementById('classlist').appendChild(makeUL(classes));

    }).fail(function(){
    	alert("Wrong Username or Password !");
    });
}

function makeUL(array) {
    // Create the list element:
    var list = document.createElement('ul');

    for(var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(array[i]));

        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
}


getclasses();
// Add the contents of options[0] to #foo:

