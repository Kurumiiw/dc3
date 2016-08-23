var music=new Audio("snd/menuthm.mp3");
var playClicked = 0;
var allowText = 0;
music.play();

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