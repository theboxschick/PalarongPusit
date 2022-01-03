//loader
var loader = document.querySelector(".load")
var body = document.querySelector("body")
var load = document.querySelector(".loader")

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
