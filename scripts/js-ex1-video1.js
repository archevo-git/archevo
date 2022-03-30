/*--video-ex1--*/
var myVideo = document.getElementById("video1"); 
$('#video1').click(function () {
    var mediaVideo = $("#media-video").get(0);
    if (mediaVideo.paused) {
        mediaVideo.play();
    } else {
        mediaVideo.pause();
   }
 });


function playPause() { 
    myVideo.play
if (myVideo.pause) 
    myVideo.play();
else 
    myVideo.pause(); 
} 

function makeBig() { 
    myVideo.width = 300; 
} 

function makeSmall() { 
    myVideo.width = 150; 
} 

function makeNormal() { 
    myVideo.width = 250; 
}