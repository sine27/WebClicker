function submitRegister(form){
    var url = "/register";
    var formData = $(form).serializeArray();
    console.log(JSON.stringify(formData));

    alert(formData.username);
    $.post(url, formData).done(function (data) {
        document.cookie="Access_Token=" + data.Token;
        // get profile from server
        url = "/profile";
        $.post(url, formData).done(function (data) {
        	document.cookie = "userid=" + data.profile.userid ;
			document.cookie = "fullname=" + data.profile.fullname ;
			document.cookie = "email=" + data.profile.email ;
			document.cookie = "usertype=" + data.profile.usertype ;
			window.location.replace('/homepage.html');
        }).fail(function() {
        	console.log("Get profile failed");
        });
          
    }).fail(function(){
    	alert("Wrong Username or Password !");
    });
}

