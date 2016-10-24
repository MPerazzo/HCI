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

      roundTrip.onclick = function() {
         document.getElementById("return").style.display = 'block';  
      }

      var oneWay = document.getElementById("oneWay");
      oneWay.onclick = function() {
         document.getElementById("return").style.display = 'none';  
      }

	});

  