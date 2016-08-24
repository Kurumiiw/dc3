var music=new Audio("snd/menuthm.mp3");
var playClicked = 0;
var settingsClicked = 0;
var allowText = 0;

var playing = 1;
music.play();
document.getElementById("settingsTitle").style.display = "none";
document.getElementById("music").style.display = "none";

music.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);

(function () {
      
      const remote = require('electron').remote; 
      
      function init() { 
        document.getElementById("t_minimize").addEventListener("click", function (e) {
          const window = remote.getCurrentWindow();
          window.minimize(); 
        });
        
        document.getElementById("t_window").addEventListener("click", function (e) {
          const window = remote.getCurrentWindow();
          if (!window.isMaximized()) {
            window.maximize();
          } else {
            window.unmaximize();
          }	 
        });
        
        document.getElementById("t_close").addEventListener("click", function (e) {
            window.close();
        }); 
      };
    
        document.getElementById("exitHov").addEventListener("click", function (e) {
            window.close();
        }); 
    
      document.onreadystatechange = function () {
        if (document.readyState == "complete") {
          init(); 
        }
      };
})();

function play(){
    if(playClicked == 0){
        if(settingsClicked == 0){
            document.getElementById("loadGame").style.width = "300px";
            document.getElementById("loadGame").style.height = "300px";


            document.getElementById("game1").style.width = "200px";
            document.getElementById("game1").style.height = "75px";

            document.getElementById("game2").style.width = "200px";
            document.getElementById("game2").style.height = "75px";

            document.getElementById("game3").style.width = "200px";
            document.getElementById("game3").style.height = "75px";
            playClicked = 1;
            allowText = 1;
        }
    }else{
        document.getElementById("loadGame").style.width = "0";
        document.getElementById("loadGame").style.height = "0";
        
        document.getElementById("game1").style.width = "0";
        document.getElementById("game1").style.height = "0";
        
        document.getElementById("game2").style.width = "0";
        document.getElementById("game2").style.height = "0";
        
        document.getElementById("game3").style.width = "0";
        document.getElementById("game3").style.height = "0";
        playClicked = 0;
        allowText = 0;
    }
}

function settings(){
    if(settingsClicked == 0){
        if(playClicked == 0){
            document.getElementById("settings").style.width = "300px";
            document.getElementById("settings").style.height = "300px";
            
            document.getElementById("settingsTitle").style.display = "block";
            document.getElementById("music").style.display = "block";
            settingsClicked = 1;
        } 
    }else{
        document.getElementById("settings").style.width = "0";
        document.getElementById("settings").style.height = "0";
        
        document.getElementById("settingsTitle").style.display = "none";
        document.getElementById("music").style.display = "none";
        settingsClicked = 0;
    }
}

function musicF(){
    if(playing == 1){
        document.getElementById("Msel").style.backgroundColor = "#696969";
        music.pause();
        playing = 0;
    }else{
        document.getElementById("Msel").style.backgroundColor = "#969696";
        music.play();
        playing = 1;
    }
}