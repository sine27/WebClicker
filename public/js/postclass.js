function postclass(form){
    var url = "/class";
    var formData = $(form).serializeArray();
    console.log(JSON.stringify(formData));
    $.post(url, formData).done(function (data) {
		window.location.replace('/homepage.html');
        alert("Post class Successful");

    }).fail(function(){
    	alert("Post class failed");
    });
}