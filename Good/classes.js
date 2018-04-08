

  $(document).ready(function(){
      $('#logInButton').on('click',logIn)

  });


function logIn() {

  if ( $("#studentID").val() == "100523538" && $("#password").val() == "110295"){
  console.log("Login Successful");
  //window.location = "success.html"; // Redirecting to other page.
  }
}
