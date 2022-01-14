var SpeechRecognition=window.webkitSpeechRecognition //window.webkitSpeechRecognition is a webspeech api that converts speech to text//
var Recognition=new SpeechRecognition()
function start() {
document.getElementById("textbox").innerHTML=""
Recognition.start()
}

Recognition.onresult= function(event) {
    console.log(event)
    content = event.results[0][0].transcript
    document.getElementById("textbox").innerHTML = content
    console.log(content)
    if (content == "Take My Selfie") {
        console.log("Taking selfie")
        speak()
    }
    speak()
}

function speak() {
var synth = window.speechSynthesis;  //window.SpeechSynthesis is a webspeech api that converts text to speech//
speak_data = "Taking you selfie in five seconds";
var utterthis = new SpeechSynthesisUtterance(speak_data)
synth.speak(utterthis)
setTimeout(function(){
    take_snapshot();
 save();
}, 5000)
}

Webcam.set({
    width:360,
    height: 250,
    image_format: "jpeg",
jpeg_quality: 90
});

Webcam.attach('#camera') 
//var cam = document.getElementById("camera")
//console.log(cam)
//Webcam.attach(cam)
function take_snapshot() {
Webcam.snap(function(data_uri){
    document.getElementById("selfie").innerHTML='<img id="selfie_img" src="'+ data_uri + '" >';

});

}
function save() {
    link = document.getElementById("link");
    image = document.getElementById("selfie_img").src;
    link.href=image;
    link.click();
}