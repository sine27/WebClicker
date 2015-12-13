var classid = '';
var userType = '';

getClassInformation();
// get cookie : classid
function getCookie_Classid(cname, nullValue) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) {
            if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
        }
    }
    return nullValue;
}

// post request and save the cource detail to cookie!

function getClassInformation (classid) {
  classid = getCookie_Classid('classid', 'No such class');
  var url = "/allclass/" + classid;

  $.get(url).done(function (data) {
    //alert(JSON.stringify(data));

    document.getElementById('classheader').innerHTML = data.class.title + '<br><small><small>' + data.class.detail + '</small></small>';   

    if (getCookie_Classid('userid', 'No such user') == 'No such user') {
        var enrollblock = document.getElementById('xxxxxxx');
        enrollblock.removeChild(enrollblock.childNodes[4]);
        userType = "Students";
    } else if (getCookie_Classid('userid', 'No such user') == data.class.userid) {
      userType = 'Professor';
    } else {
      userType = "Students";
    }
    console.log(userType);
    view(userType);

  }).fail(function(){
      alert("Unknown error!");
      window.location = "./homepage.html";
  });
}

// show view for different userType
function view(userType) {

  console.log(userType);

  var deleteBlock;

  if(userType == "Professor") {
      deleteBlock = document.getElementsByClassName("col-lg-6 Students' views");   
  }
  else if (userType == "Students") {
      deleteBlock = document.getElementsByClassName("col-lg-6 Professor's views");

  }
  console.log(deleteBlock[0].style);

  for(var i = 0; i < 2; i++) {
      deleteBlock[i].style.display = "none";
  }

  var enrolledArray = [{
      StudentName: "Xiaoyuan Zhang",
      Email: "6441-Z",

      
      }, {
      StudentName: "Ted Cruz",
      Email: "5467-C",

      
      }, {
      StudentName: "Jeb Bush",
      Email: "2589-B",

      
      }, {
      StudentName: "Youzhihang Deng",
      
      Email: "3245-B",
      }
  ];
  //Show the students list
  var tableBlock = document.getElementById("Students_enrolled_table");

  //var newStudent = tableBlock.getElementsByTagName()
  //Add the students list
  for(var i = 0; i < enrolledArray.length; i++) {
      
      var newStudentItem = tableBlock.childNodes[3].childNodes[1].cloneNode(true);
      //newStudentItem.childNode[1].innerHTML = classArray[i].StudentName;
      newStudentItem.childNodes[1].innerHTML = enrolledArray[i].StudentName;
      newStudentItem.childNodes[3].innerHTML = enrolledArray[i].Email;
      tableBlock.childNodes[3].appendChild(newStudentItem);
      if(i % 2) {
          newStudentItem.setAttribute("style", "background-color:#f2dede")
      }
      //var newEnrolledStudents = tableBlock.
  }
  tableBlock.childNodes[3].removeChild(tableBlock.childNodes[3].childNodes[1]);
  //console.log(newStudentItem.childNodes[1].innerHTML);


  //Get the session list



  var sessionArray = [
  {
      SessionTitle:"CS 252 polling",
      Answer:"A",
      Activated:false
  }
  ,

  {
      SessionTitle:"CS 253 polling",
      Answer:"A",
      Activated:true
  }
  ];



  var ActivesessionBlock = document.getElementById("activate_session_list").getElementsByClassName("active session")[0];
  //console.log(ActivesessionBlock.childNodes[1].id);
  //console.log(ActivesessionBlock.getElementsByClassName("session_title_name"))

  for(var i = 0;i < sessionArray.length;i++) {
     var newSessionItem = ActivesessionBlock.childNodes[1].cloneNode(true);
     newSessionItem.id = sessionArray[i].SessionTitle;
     newSessionItem.childNodes[1].childNodes[1].value = sessionArray[i].SessionTitle;
     newSessionItem.childNodes[1].childNodes[3].innerHTML = sessionArray[i].SessionTitle;

      ActivesessionBlock.insertBefore(newSessionItem, ActivesessionBlock.childNodes[1]);


  }
  //console.log(ActivesessionBlock.lastChild.previousSibling);
  ActivesessionBlock.removeChild(ActivesessionBlock.lastChild.previousSibling);


  var viewActiveSession = document.getElementById("active_session_list").getElementsByClassName("active session")[0];

  for(var i = 0;i < sessionArray.length;i++) {
     var newSessionItem = viewActiveSession.childNodes[1].cloneNode(true);
     newSessionItem.id = sessionArray[i].SessionTitle;
     newSessionItem.childNodes[1].childNodes[1].value = sessionArray[i].SessionTitle;
     newSessionItem.childNodes[1].childNodes[3].innerHTML = sessionArray[i].SessionTitle;
     if(sessionArray[i].Activated) {
          viewActiveSession.childNodes[1].childNodes[1].childNodes[1].checked = true;
     }

      viewActiveSession.insertBefore(newSessionItem, viewActiveSession.childNodes[1]);


  }

  viewActiveSession.removeChild(viewActiveSession.lastChild.previousSibling);
}




