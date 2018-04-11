  $(document).ready(function(){
       $('#class1').on('click',goToClass1)
       $('#class2').on('click',goToClass2)
       $('#class3').on('click',goToClass3)
       $('#class4').on('click',goToClass4)
       $('#class5').on('click',goToClass5)
       var classname = "Goodbye";
  });

  function goToClass1() {
    classname = document.getElementById('class1').innerText;
    window.location = "class.html"; // Redirecting to other page.
  }

  function goToClass2() {
    classname = document.getElementById('class2').innerText;
    window.location = "class.html"; // Redirecting to other page.
  }

  function goToClass3() {
    classname = document.getElementById('class3').innerText;
    window.location = "class.html"; // Redirecting to other page.
  }

  function goToClass4() {
    classname = document.getElementById('class4').innerText;
    window.location = "class.html"; // Redirecting to other page.
  }

  function goToClass5() {
    classname = document.getElementById('class5').innerText;
    window.location = "class.html"; // Redirecting to other page.
  }
