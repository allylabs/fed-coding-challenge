$( document ).ready(function() {
  console.log('document ready!');

  //Closure to keep things out of global scope
  (function(){
    console.log('I ran');
    var json = [
      {
        "name": "URBank",
        "apy": 0.87,
        "earnings": 436.89
      },
      {
        "name": "Big Guy Financial",
        "apy": 0.75,
        "earnings": 376.41
      },
      {
        "name": "Dewey, Cheatam & Howe",
        "apy": 0.01,
        "earnings": 5.00
      },
      {
        "name": "First Onion",
        "apy": 0.01,
        "earnings": 5.00
      },
      {
        "name": "Bank of Everywhere",
        "apy": 0.01,
        "earnings": 5.00
      }
    ];
    console.log(json);

    json.forEach(function(e, i ,a ){
      var newRow = $('<tr></tr>');
      newRow.append('<th>'+ e.name +'</th>');
      newRow.append('<th>'+ e.apy + ' %' +'</th>');
      newRow.append('<th>'+ '$' + parseFloat(e.earnings).toFixed(2) +'</th>');

      console.log(newRow.html());
      $('#rate-table').append(newRow);

    });

    $('#rate-table').append('<tr><th></th><th></th><th>Based on $50,000 Deposit.</th></tr>')

  })();

});
