
  $(document).ready(function(){
      $('#logInButton').on('click',logIn)
  });


function logIn() {

  if ( $("#studentID").val() == "100523538" && $("#password").val() == "100523538"){
  window.location = "classes.html"; // Redirecting to other page.
} else {
  alert("Incorrect Password Or Username, Please Try Again")
}
}
