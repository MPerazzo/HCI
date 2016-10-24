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

  var lastActive;


  function Pagination() {

    var cant_flights = 100;

    var flights_per_page = 10;

    var cantPages = Math.ceil(cant_flights/flights_per_page);

    if (cantPages == 0)
      return;

    // left-arrow

    // var left_arrow = document.createElement("i");
    // left_arrow.className = "material-icons";
    // <i class="material-icons">chevron_left</i>

    
    var page_ilustrator =  document.getElementById("pagesholder");

    for (i=1; i<cantPages; i++) {

      var page_href = document.createElement("a");
      page_href.href = "#pag" + i.toString();

      var string = i.toString();
      var text = document.createTextNode(string);
      page_href.appendChild(text);

      var page =  document.createElement("li");
      page.className="waves-effect";
      page.appendChild(page_href);

      if (i==1) {
        page.classList.add('active');
        lastActive = page;
      }

      page.onclick = function() {
                                  
                                  this.classList.add('active');
                                  lastActive.classList.remove('active');
                                  lastActive = this;

                                  this.classList.add('active');
                               }

      page_ilustrator.appendChild(page);
    }

  }