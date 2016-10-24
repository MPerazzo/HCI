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

  var cantPages;

  function Pagination() {

    var cant_flights = 30;

    var flights_per_page = 10;

    cantPages = Math.ceil(cant_flights/flights_per_page);

    if (cantPages == 0)
      return;
    
    var page_ilustrator =  document.getElementById("pagesholder");

    for (i=1; i<=cantPages; i++) {

      var page_href = document.createElement("a");
      page_href.href = "#pag" + i.toString();

      var string = i.toString();
      var text = document.createTextNode(string);
      page_href.appendChild(text);

      var page =  document.createElement("li");
      page.className="waves-effect";
      page.appendChild(page_href);
      page.id = i.toString();

      if (i==1) {
        page.classList.add('active');
        lastActive = page;
      }

      

      page.onclick = function() {
                                  
                                  lastActive.classList.remove('active');
                                  
                                  var lastPageActive_string = "pag" + lastActive.id;

                                  var lastPageActive = document.getElementById(lastPageActive_string);

                                  lastPageActive.style.display = "none";

                                  var currentPage_string = "pag" + this.id;

                                  var currentPage = document.getElementById(currentPage_string);

                                  currentPage.style.display = "initial";

                                  this.classList.add('active');
                                  lastActive = this;

                               }

      page_ilustrator.appendChild(page);
    }

    for (i=2; i<=cantPages; i++) {
        string = "pag" + i.toString();
        var tohide = document.getElementById(string);
        tohide.style.display = "none";

      }

  }