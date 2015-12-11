function submitForm(form){
    var url = "/local/login";
    var formData = $(form).serializeArray();
    $.post(url, formData).done(function (data) {
        alert(data.Token);

        document.cookie="Access_Token="+data.Token;
    });
}
