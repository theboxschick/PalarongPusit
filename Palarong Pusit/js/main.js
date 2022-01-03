//loader
var loader = document.querySelector(".load")
var body = document.querySelector("body")

window.addEventListener("load", vanish);
function vanish() {
  loader.classList.add("disappear");
  body.classList.remove("loading");
}

//scroll
window.addEventListener('scroll',function(){
  const header = document.querySelector('header');
  header.classList.toggle("sticky",window.scrollY > 0);
});

//navigation
function toggleMenu () {
  const menuToggle= document.querySelector(".menuToggle");
  const navigation= document.querySelector(".navigation");
  menuToggle.classList.toggle('active');
  navigation.classList.toggle('active');
}

//video
function toggle(){
  var video = document.querySelector(".video")
  var vid = document.querySelector("video")
  var body = document.querySelector("body")

  body.classList.toggle("active");
  video.classList.toggle("active");
  vid.pause();
  vid.currentTime = 0;
}

//bg music
var audio = document.getElementById("audio");
var icon = document.getElementById("icon");

icon.onclick = function(){
    if(audio.paused){
            audio.play();
            icon.src = "others/pause.png";
    }
    else{
        audio.pause();
        icon.src = "others/play.png";
        }
}

//audio
var vid = document.getElementById("audio");
vid.volume = 0.01;

//counter
window.addEventListener('load',function(){
$(document).ready(function(){
  $('.counter').each(function()
    {
      $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
      },{
        duration: 10500,
        easing: 'swing',
        step: function (now){
          $(this).text(Math.ceil(now));
        }
      });
    });
  });
});

//gotopbtn
window.addEventListener('scroll', function(){
  var scroll = document.querySelector('.gotopbtn');
  scroll.classList.toggle('active', window.scrollY)
})

function scrollToTop(){
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

//music
window.addEventListener('scroll', function(){
  var scroll = document.querySelector('.music');
  scroll.classList.toggle('active', window.scrollY)
})
