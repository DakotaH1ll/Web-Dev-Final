
  $(document).ready(function(){
      $('#logInButton').on('click',logIn)
  });


function logIn() {

  if ( $("#studentID").val() == "100523538" && $("#password").val() == "100523538"){
  console.log("Login Successful");
  window.location = "classes.html"; // Redirecting to other page.
  }
}
