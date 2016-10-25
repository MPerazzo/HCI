$(document).ready(function(){

	
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

  var completeAirlines;

  var getAirlines = function (param, data) {
    var airlines = _.map(data.airlines,'name');
    completeAirlines = data.airlines;

    var airlines = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.whitespace,
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      // `states` is an array of state names defined in "The Basics"
      local: airlines
    });

    $('#bloodhound .typeahead').typeahead({
      hint: true,
      highlight: true,
      minLength: 1
    },
    {
      name: 'airlines',
      source: airlines
    });
  };
  getJSON('http://hci.it.itba.edu.ar/v1/api/misc.groovy?method=getairlines', getAirlines);

	var gerReviews = function (param, data) {
		debugger
 	 };

  $('#search-reviews').click(function(){
    var airlineID = _.find(completeAirlines, function(o) { return o.name === $('#airline')[0].value; }).id;
    if(airlineID) {
    	getJSON('http://hci.it.itba.edu.ar/v1/api/review.groovy?method=getairlinereviews&airline_id='+airlineID+'&flight_number='+$('#flightNumber')[0].value, gerReviews);
    } else {
    	//ERROR NO SE INGRESO BIEN LA AEROLINEA
    }



 });

});