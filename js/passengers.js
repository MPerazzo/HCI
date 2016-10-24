$(document).ready(function(){
	
	$('select').material_select();
	
	$('.datepicker').pickadate({
	max:new Date('today'),
    min:new Date(1900,11,31), 
    selectMonths: true, 
    selectYears: 116,
    format: 'dd/mm/yyyy',
    onClose: function() {
      $(document.activeElement).blur();
    }
	});
});

function createPassengers() {
    
    var cant = 5;

    for (i=1 ; i<cant ; i++) {

        // passenger code

        var container = document.getElementById("passengercontainer");

        var row1 = document.createElement("row");
        row1.style.marginBottom="0px";

        var col1 = document.createElement("div");
        col1.className="col s12 m12 l12";

        var passenger = document.createElement("p");
        passenger.className= "passenger";
        var string1 = "Passenger" + " " + i.toString();
        var text1 = document.createTextNode(string1);

        // passenger append

        passenger.appendChild(text1);
        col1.appendChild(passenger);
        row1.appendChild(col1);
        container.appendChild(row1);

        // first input row

        var row2 = document.createElement("row");
        row2.style.marginBottom = "0px";

        var col2 = document.createElement("div");
        col2.className = "col s3 m3 l3";

        var input_field1 = document.createElement("div");
        input_field1.className= "input-field s3 m3 l3";

        var input1 = document.createElement("input");
        input1.placeholder = "Name";
        input1.id = "Name";
        input1.type = "text";

        var label1 = document.createElement("label");
        label1.htmlFor = "Name";


        //row append
        row2.appendChild(col2);
        col2.appendChild(input_field1);
        input_field1.appendChild(input1);
        input_field1.appendChild(label1);
        
        container.appendChild(row2);
        
    }
}