(function(){
    var video = document.getElementById('video');
    var vendorUrl = window.URL || window.webkitURL;
    navigator.getMedia = navigator.getUserMedia 
    || navigator.webkitGetUserMedia 
    || navigator.mozGetUserMedia
    || navigator.msGetUserMedia;
    //caputre video
    navigator.getMedia({
        video: true,
        audio: false
    },function(stream){
        video.srcObject = stream;
        video.play();
    },function(error){
        //an error occured
    });
})();