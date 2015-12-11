function submitLogin(form){
    var url = "/local/login";
    var formData = $(form).serializeArray();
    $.post(url, formData).done(function (data) {
        document.cookie="Access_Token=" + data.Token;

        // get profile from server
        url = "/profile";
        $.get(url).done(function (data) {

        	alert(data);
        	document.cookie = "userid=" + data.profile.userid ;
			document.cookie = "fullname=" + data.profile.fullname ;
			document.cookie = "email=" + data.profile.email ;
			document.cookie = "usertype=" + data.profile.usertype ;
			alert(data.userid);
			window.location.replace('/homepage.html');
        }).fail(function() {
        	console.log("Get profile failed");
        });

    }).fail(function(){
    	alert("Wrong Username or Password !");
    });
}
