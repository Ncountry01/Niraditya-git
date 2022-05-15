$(document).ready(function() {
    var myElements = $("#one");
    $('#four').text("The Text from the one paragraph is : " + myElements[0].innerHTML);

      /**Finding Elements By Class name */
      var item = $(".intro");
      $("#two").text("The first paragraph with class= 'intro' is:" + item[0].innerHTML )
 
      var data = $("p.query");
      $("#three").text("Using query selectors " + data [0].innerHTML);
    

      var get = document.$("#five");
      get.text("Hello Indian Universe")
});



      