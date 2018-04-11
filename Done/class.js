

  $(document).ready(function(){
    $('#calculate').on('click',calculate)


  });


function calculate() {

  var total = 0;
  //for (i = 0; i < rows; i++){
  total += ($('#11').val() * 0.01)*($('#12').val() * 0.01);
  total += ($('#21').val() * 0.01)*($('#22').val() * 0.01);
  total += ($('#31').val() * 0.01)*($('#32').val() * 0.01);
  total += ($('#41').val() * 0.01)*($('#42').val() * 0.01);
  total += ($('#51').val() * 0.01)*($('#52').val() * 0.01);
  total += ($('#61').val() * 0.01)*($('#62').val() * 0.01);
  total += ($('#71').val() * 0.01)*($('#72').val() * 0.01);
  total += ($('#81').val() * 0.01)*($('#82').val() * 0.01);
  total += ($('#91').val() * 0.01)*($('#92').val() * 0.01);
  total += ($('#101').val() * 0.01)*($('#102').val() * 0.01);

currGrade = document.getElementById('currgrade');
currGrade.innerHTML = ("<b>Your Current Grade Is: " + total*100 + "%</b>");
  }
