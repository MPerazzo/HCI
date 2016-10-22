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
        selectMonths: true, 
        selectYears: 15

     });

      var roundTrip = document.getElementById("roundTrip");
      roundTrip.checked = true;

      roundTrip.onclick = function() {
         document.getElementById("return").style.display = 'block';  
      }

      var oneWay = document.getElementById("oneWay");
      oneWay.onclick = function() {
         document.getElementById("return").style.display = 'none';  
      }

      
	});