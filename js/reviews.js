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

  var reviewTemplate = function (review) {
  	return '<div class="container">'+
		'<div class="row"  >'+
		'	<div class="col s8 m8 l8  grey lighten-3 revCont" >'+
		'	<div class="col s3 m3 l3">'+
		'		<p>Airline:</p>'+
		'		<p>Flight number:</p>'+
		'		<p>general opinion:</p>'+
		'		<p>comment:</p>'+
		'	</div>'+
		'	<div class="col s5 m5 l5">'+
		'		<p>'+review.flight.airline.id+'</p>'+
		'		<p>'+review.flight.number+'</p>'+
		'		<p>'+review.rating.overall+'</p>'+
		'		<p>'+review.comments+'</p>'+
		'	</div>'+
		'	</div>'+
		'</div>'+
		'</div>'
	};


  var errorTemplate = function () {
    return '<div class="container">'+
    '<div class="row"  >'+
    ' <div class="col s8 m8 l8  grey lighten-3 revCont" >'+
    '<p style="color: #FF0000; font-size: 18px">No reviews were found for this airline / flight number</p>'
    ' </div>'+
    '</div>'+
    '</div>'
  };

  var noAirError = function () {
    return '<div class="container">'+
    '<div class="row"  >'+
    ' <div class="col s8 m8 l8  grey lighten-3 revCont" >'+
    '<p style="color: #FF0000; font-size: 18px">The airline you entered does not exist</p>'
    ' </div>'+
    '</div>'+
    '</div>'
  };

	var gerReviews = function (param, data) {
		var len = data.reviews.length;
		var container = $('#reviewsContainer');
    if(len > 0) {
  		for(i=0; i<len; i++) {
  			container.append(reviewTemplate(data.reviews[i]));
  		};
    } else {
      container.append(errorTemplate());
    }
 	 };

  $('#search-reviews').click(function(){
    var myNode = document.getElementById("reviewsContainer");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
    var airlineID = _.find(completeAirlines, function(o) { return o.name === $('#airline')[0].value; });
    if(airlineID) {
      airlineID = airlineID.id;
    	getJSON('http://hci.it.itba.edu.ar/v1/api/review.groovy?method=getairlinereviews&airline_id='+airlineID+'&flight_number='+$('#flightNumber')[0].value+'&page_size=10', gerReviews);
    } else {
      $('#reviewsContainer').append(noAirError());
    }



 });

});