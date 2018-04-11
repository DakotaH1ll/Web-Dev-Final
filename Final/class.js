

  $(document).ready(function(){
      $('#calculate').on('click',calculate)

  });


function calculate() {
  var table = document.getElementById('grades');
      for (var r = 0, n = table.rows.length; r < n; r++) {
          for (var c = 1, m = table.rows[r].cells.length; c < m; c++) {
              alert(table.rows[r].cells[c].value);
          }
      }
  }
