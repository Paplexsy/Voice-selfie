var SpeechRecognition=window.webkitSpeechRecognition;
var textbox=document.getElementById("textbox");
var recognition=new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();

}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    textbox.innerHTML=content
    if(content=="take my selfie"){
        console.log("takeing selfie");
    speak();
    

    }
}
function speak(){
    var synth=window.speechSynthesis;
    speak_data="taking your selfie in 5 seconds";
    var utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach(camera);
    setTimeout(function(){;
take_selfie();
save();
    },5000);
    }

Webcam.set({
  width:360,
  height:250,
  image_format:'jpeg',
  jpeg_quality:90
});
camera =document.getElementById("camera")
 
function take_selfie(){
    Webcam.snap(function(date_uri) {
        document.getElementById("result").innerHTML ='<img id="selfie_image" src="'+date_uri+'">';
    });
}
function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfie_image").src;
    link.href=image;
    link.click();
}