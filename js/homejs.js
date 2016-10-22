$(document).ready(function(){
		$('select').material_select();
      $('.autocomplete').autocomplete({
        data: {
           "Apple": null,
           "Microsoft": null,
           "Google": null
        }
     });
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

      
	});