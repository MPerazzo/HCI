$(document).ready(function(){
		$('select').material_select();
      $('.datepicker').pickadate({
        min:new Date('today'),
        max:new Date(2020,11,31), /* materialize datepicker max limit is 31/12/2020 based on how it works */
        selectMonths: true,
        selectYears: 5,
        format: 'dd/mm/yyyy',
        onClose: function() {
          $(document.activeElement).blur();
        }
     });

      var roundTrip = document.getElementById("roundTrip");
      roundTrip.checked = true;

      document.getElementById("roundTripIcon").style.display = 'block';
      document.getElementById("oneWayIcon").style.display= 'none';

      roundTrip.onclick = function() {
        document.getElementById("return").style.display = 'block';
        document.getElementById("roundTripIcon").style.display = 'block';
        document.getElementById("oneWayIcon").style.display= 'none';
      }

      var oneWay = document.getElementById("oneWay");
      oneWay.onclick = function() {
        document.getElementById("return").style.display = 'none';
        document.getElementById("roundTripIcon").style.display = 'none';
        document.getElementById("oneWayIcon").style.display= 'block';
      }

      var getJSON = function(url, cb) {
        var xhr = new XMLHttpRequest();
        xhr.open('get',url, true);
        xhr.responseType = 'json';
        xhr.onload = function() {
          var status = xhr.status;
          if(xhr.readyState == 4) {
            if(status == 200) {
              cb(null, xhr.response);
            } else {
              cb(status);
            }
          } else if(xhr.readyState > 0 && xhr.readyState < 4) {

          };
        };
        xhr.send();
      };



      var getCountries = function (param, data) {
        var airportNames = _.map(data.airports, 'description')
        var airports = data.airports;

        var airportNames = new Bloodhound({
          datumTokenizer: Bloodhound.tokenizers.whitespace,
          queryTokenizer: Bloodhound.tokenizers.whitespace,
          // `states` is an array of state names defined in "The Basics"
          local: airportNames
        });

        $('#bloodhound .typeahead').typeahead({
          hint: true,
          highlight: true,
          minLength: 1
        },
        {
          name: 'airportNames',
          source: airportNames
        });
      };
      getJSON('http://hci.it.itba.edu.ar/v1/api/geo.groovy?method=getairports', getCountries);


      $('#swap').click(function(){
        var aux = $('#airportFrom')[0].value;
        $('#airportFrom')[0].value = $('#airportTo')[0].value;
        $('#airportTo')[0].value = aux;

     });
	});
