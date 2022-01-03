var counter = 5;

window.addEventListener('load',function(){
setInterval( function(){
    counter--;

    if( counter >= 0) {
        id = document.getElementById("count");
        id.innerHTML = counter;
    }
    if (counter === 0){
        const counterButton= document.querySelector(".btn");
        counterButton.classList.toggle('active');
    }
}, 1000);
});

