

  $(document).ready(function(){
    title = document.getElementById('classTitle');
    title.innerHTML = ("<b>Here Are Your Grades</b>")
    $('#calculate').on('click',calculate)


  });


function calculate() {
  var total = 0;
  //for (i = 0; i < rows; i++){
  total += (document.getElementById('11').value * 0.01)*(document.getElementById('12').value * 0.01);
  total += (document.getElementById('21').value * 0.01)*(document.getElementById('22').value * 0.01);
  total += (document.getElementById('31').value * 0.01)*(document.getElementById('32').value * 0.01);
  total += (document.getElementById('41').value * 0.01)*(document.getElementById('42').value * 0.01);
  total += (document.getElementById('51').value * 0.01)*(document.getElementById('52').value * 0.01);
  total += (document.getElementById('61').value * 0.01)*(document.getElementById('62').value * 0.01);
  total += (document.getElementById('71').value * 0.01)*(document.getElementById('72').value * 0.01);
  total += (document.getElementById('81').value * 0.01)*(document.getElementById('82').value * 0.01);
  total += (document.getElementById('91').value * 0.01)*(document.getElementById('92').value * 0.01);
  total += (document.getElementById('101').value * 0.01)*(document.getElementById('102').value * 0.01);

currGrade = document.getElementById('currgrade');
currGrade.innerHTML = ("<b>Your Current Grade Is: " + total*100 + "%</b>");
  }
