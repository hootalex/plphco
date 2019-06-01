$( document ).ready(function() {

$("body").ready(rand);

$.fn.toggleText = function(t1, t2){
  if (this.text() == t1) this.text(t2);
  else                   this.text(t1);
  return this;
};

function rand(){
$( ".desktop img" ).each(function( index ) {
  var w = window.innerWidth-200;
  var h = window.innerHeight-200;
  $(this).css('top', Math.floor(Math.random() * h) + 0);
  $(this).css('left', Math.floor(Math.random() * w) + 0);
  $(this).css('width', Math.floor(Math.random() * 15) + 6+"vw");
$(this).css('z-index', Math.floor(Math.random() * 20) + 0);
});
}

$('*').click(rand);

$( "#about" ).click(function() {
  $(".info").toggleClass("show");
  $( ".desktop img, ul" ).toggleClass("imghide");
  $( "html, body" ).toggleClass("mauve");
  $(this).toggleText('x', 'About');

    $(".work").removeClass("show");
  $("#work").html('Work');
  $( "html, body" ).removeClass("yellow");
  $( ".desktop img" ).removeClass("workimg");
});

$( "#work" ).click(function() {
  $(".work").toggleClass("show");
  $(this).toggleText('x', 'Work');
  $( "html, body" ).toggleClass("yellow");
  $( ".desktop img" ).toggleClass("workimg");

  $( ".desktop img, ul" ).removeClass("imghide");
  $( "html, body" ).removeClass("mauve");
  $(".info").removeClass("show");
  $("#about").html('About');

  $("img").each(function(i, elem){

if ($(this).attr("src") == "http://google.com"){

$(this).attr("src", "http://yahoo.com");

}

});
});



});
