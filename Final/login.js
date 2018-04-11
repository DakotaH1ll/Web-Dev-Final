$(document).ready(function(){
  var loggedIn=false;

  $("#addLink").click(function(){
    if(loggedIn ===true){
      window.location.href = "classes.html";
    }else{
      window.alert("Please log in First");
    }
  });

  $("#mapLink").click(function(){
    if(loggedIn ===true){
      window.location.href = "map.html";
    }else{
      window.alert("Please log in First");
    }
  });

  $("#weatherLink").click(function(){
    if(loggedIn ===true){
      window.location.href = "weather.html";
    }else{
      window.alert("Please log in First");
    }
  });

  $("#loginBtn").click(function(){
    $.get("Students.csv",function(data){
      var d = data.split("\n");
       $.each(d, function(i, d2){
         var s = d2.split(',');
         if(s[0] == $("#studentID").val() && s[1] == $("#password").val()){
           $("#studentID").hide();
           $("#password").hide();
           $('label[for="studentID"]').hide();
           $('label[for="password"]').text("Logged in: " + s[0]);
           $("#loginBtn").hide();
           $("#create").hide()
           loggedIn = true;
         }
       });
    });
  });
});
