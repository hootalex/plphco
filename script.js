function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var sound = new Howl({
  src: ['https://cdn.glitch.com/027fcb2b-a763-4ba3-a720-c1af63dda48c%2Fgrandcentral.mp3?v=1606839806134'],
  loop: true,
  volume: 0.5
});


var featured = [
  
["This Website", "Website", "2020", "https://polyphony.nyc"], 

["Whirly Birdie", "Typeface/Website", "2020", "https://whirlybirdie.com"],
  
["Cooper IDS", "Posters/Identity", "2017", "https://fontsinuse.com/uses/18491/the-cooper-union-intra-disciplinary-seminar-f"],
  
["ids.cooper.org", "Website", "2017", "https://fontsinuse.com/uses/18490/the-cooper-union-intra-disciplinary-seminar-w"]

  
];

var colors = [
  "red",
  "green",
  "blue",
  "brown",
  "black",
  "yellow"
];

var stat = [
  "all aboard",
  "sleeping",
  "on time",
  "<span class='blink'>blinking</span>",
  "thinking",
  "eating",
  "early",
  "reading",
  ""
];

jQuery.each(featured, function(index, value) {
  $('.projects').append("<a href="+value[3]+">"+"<div class='col zo "+colors[Math.floor(Math.random() * colors.length)]+"'><div class='dep dd'></div><div class='title'>"+value[0]+"</div><div class='trk'></div><div class='line'>"+value[1]+"</div><div class='train'>"+value[2]+"</div><div class='status ds'></div></div>"+"</a>")
});

function handler1() {
  $("#sound").addClass("animate");
      $(this).one("click", handler2);
  sound.play();
}
function handler2() {
   $("#sound").removeClass("animate");
      $(this).one("click", handler1);
  sound.pause();


}
$("#sound").one("click", handler1);

function gettimes() {

var timecode = moment().format('h:mm:ss A');

$(".t").html(timecode)


$('.dd').each(function(index, value) {
  $(this).html(moment().add(11*index+1, 'minutes').format('LT'))
});
  
}

gettimes()

setInterval(gettimes,1000)


        function gettrack() {
          $(".td").each(function(i) {
            var elm = $(this);
            setTimeout(function() {
              elm.html(randomIntFromInterval(1, 67));
            }, i * 50500);
          });
        }

gettrack()



        function getstatus() {
          $(".ds").each(function(i) {
            var elm = $(this);
            setTimeout(function() {
              elm.html(stat[Math.floor(Math.random() * stat.length)]);
            }, i * 50);
          });
        }

        function removetransparency() {
          $(".col").each(function(i) {
            var elm = $(this);
            setTimeout(function() {
              elm.removeClass("zo");
            }, i * 50);
          });
        }

        function addtransparency() {
          $(".col").each(function(i) {
            var elm = $(this);
            setTimeout(function() {
              elm.addClass("zo");
            }, i * 5);
          });
        }

removetransparency()

getstatus()

setInterval(getstatus,10000)

//flicker
setInterval(addtransparency,50000)
setInterval(removetransparency,50000)