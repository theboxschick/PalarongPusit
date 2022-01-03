const downloadBtn = document.querySelector(".download-btn");
const countdown = document.querySelector(".countdown");
const pleaseWaitText = document.querySelector(".pleaseWait-text");
const manualDownloadText = document.querySelector(".manualDownload-text");
const manualDownloadLink = document.querySelector(".manualDownload-link");
const waiverBtn = document.querySelector(".waiver-btn");
const waiverForm = document.querySelector(".waiver-container2 .waiverform2");

var timeLeft = 5;

downloadBtn.addEventListener("click", () => {
   downloadBtn.style.display = "none";
   countdown.innerHTML = "Download will begin automatically in <span>" + timeLeft + "</span> seconds.";
   

   var downloadTimer = setInterval(function timeCount(){
    timeLeft -= 1;
    countdown.innerHTML = "Download will begin automatically in <span>" + timeLeft + "</span> seconds.";
   
    if(timeLeft <= 0){
        clearInterval(downloadTimer);
        pleaseWaitText.style.display ="block";
        let download_href = "PalarongPusit_Waiver.docx";
        window.location.href = download_href;
        manualDownloadLink.href = download_href;

        setTimeout(() => {
            pleaseWaitText.style.display ="none";
            manualDownloadText.style.display ="block"; 
            waiverBtn.style.display ="block";
            waiverForm.style.display ="block";
            }, 4000);
        }
    }, 1000);
});