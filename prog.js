var settingsOpen = 0;

var perUpSel = 1;
var encSel = 0;
var techSel = 0;
var sciSel = 0;
var menuBtnClicked = 0;
var titleHide = 0;

var achOpen = 0;
/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("shop").style.width = "250px";
    if(perUpSel == 1){
        document.getElementById("permanentUpgradesMenu").style.width = "220px";
    }else{
        if(encSel == 1){
            document.getElementById("enchantmentsMenu").style.width = "220px";
        }else{
            if(techSel == 1){
                document.getElementById("technologyMenu").style.width = "220px";
            }else{
                if(sciSel == 1){
                    document.getElementById("researchMenu").style.width = "220px";
                }
            }
        }
    }
    document.getElementById("achievement").style.marginLeft = "250px";
    if(achOpen == 1){
        openAchievements();
    }
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("shop").style.width = "0";
    document.getElementById("permanentUpgradesMenu").style.width = "0";
    document.getElementById("enchantmentsMenu").style.width = "0";
    document.getElementById("technologyMenu").style.width = "0";
    document.getElementById("researchMenu").style.width = "0";

    document.getElementById("achievement").style.marginLeft = "0";
}

/* Set the width of the side navigation to 250px */
function openSett() {
    document.getElementById("settings_menu").style.height = "400px";
    document.getElementById("settings").style.marginBottom ="400px";
}

/* Set the width of the side navigation to 0 */
function closeSett() {
    document.getElementById("settings_menu").style.height = "0";
    document.getElementById("settings").style.marginBottom ="0";
}

function settBtn(){
    if(settingsOpen == 0){
        openSett();
        settingsOpen = settingsOpen+1;
    }else{
        if(settingsOpen == 1){
            closeSett();
            settingsOpen = 0;
        }
    }
}

function infoBtn(){
    alert("Info/FAQ \nWhen I save, why does the DPS look like it is going slower? \nThis is because of how the code runs. It isn't actually slower, take a look at the DPS in the stats, it's the same.\n\nDoes it save between sessions?\nYes! You can save, walk away, come back and load it back up.\n\nIs saving safe? \nIt should be. Just be a bit careful with that button. There is a lot of trickery behind the scenes, but it should work as intended if you just reset the game before loading (in the same session without closing the .");
}


function openStats() {
    document.getElementById("stats").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeStats() {
    document.getElementById("stats").style.width = "0";
}

function openAchievements(){
    if(achOpen == 0){
        document.getElementById("achievementsMenu").style.width = "275px";
        document.getElementById("achievementsMenuBtn").style.marginLeft = "250px";
        document.getElementById("achievement").style.marginLeft = "275px";
        
        document.getElementById("aTheBeginning").style.width = "250px";
        document.getElementById("aShiney").style.width = "250px";
        
        achOpen = 1;
    }else{
        document.getElementById("achievementsMenu").style.width = "0";
        document.getElementById("achievementsMenuBtn").style.marginLeft = "0";
        document.getElementById("achievement").style.marginLeft = "0";
    
        document.getElementById("aTheBeginning").style.width = "0";
        document.getElementById("aShiney").style.width = "0";
        achOpen = 0;
    }
}

function perUpSelected(){
  if(perUpSel == 0 || techSel == 1 || sciSel == 1){
      document.getElementById("permanentUpgradesMenu").style.width = "220px";
      document.getElementById("enchantmentsMenu").style.width = "0";
      document.getElementById("technologyMenu").style.width = "0";
      document.getElementById("researchMenu").style.width = "0";
      perUpSel = 1;
      encSel = 0;
      techSel = 0;
      sciSel = 0;
  }  
}

function encUpSelected(){
    if(perUpSel == 1 || techSel == 1 || sciSel == 1){
        document.getElementById("permanentUpgradesMenu").style.width = "0";
        document.getElementById("enchantmentsMenu").style.width = "220px";
        document.getElementById("technologyMenu").style.width = "0";
        document.getElementById("researchMenu").style.width = "0";
        perUpSel = 0;
        encSel = 1;
        techSel = 0;
        sciSel = 0;
    }
}

function techUpSelected(){
    if(perUpSel == 1 || encSel == 1 || sciSel == 1){
        document.getElementById("permanentUpgradesMenu").style.width = "0";
        document.getElementById("enchantmentsMenu").style.width = "0";
        document.getElementById("technologyMenu").style.width = "220px";
        document.getElementById("researchMenu").style.width = "0";
        perUpSel = 0;
        encSel = 0;
        techSel = 1;
        sciSel = 0;
    }
}

function sciUpSelected(){
    if(perUpSel == 1 || encSel == 1 || techSel == 1){
        document.getElementById("permanentUpgradesMenu").style.width = "0";
        document.getElementById("enchantmentsMenu").style.width = "0";
        document.getElementById("technologyMenu").style.width = "0";
        document.getElementById("researchMenu").style.width = "220px";
        perUpSel = 0;
        encSel = 0;
        techSel = 0;
        sciSel = 1;
    }
}


function bounceItem(name){
    document.getElementById(name).style.marginTop = "12px";
    setTimeout(function() {
    document.getElementById(name).style.marginTop = "10px";
    }, 100);
}

function reset(){
    location.reload();
}

function menuBtnClick(){
    if(menuBtnClicked == 0){
        document.getElementById("saveBtn").style.width = "32px";
        document.getElementById("loadBtn").style.width = "32px";
        document.getElementById("eraseBtn").style.width = "32px";
        menuBtnClicked = 1;
    }else{
        document.getElementById("saveBtn").style.width = "0";
        document.getElementById("loadBtn").style.width = "0";
        document.getElementById("eraseBtn").style.width = "0";
        menuBtnClicked = 0;
    }
}

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
          const window = remote.getCurrentWindow();
          var r = confirm("Are you sure you want to quit? \nAll unsaved progress will be lost.");
          if (r == true) {
            window.close();
          }
        }); 
      };
      
      document.onreadystatechange = function () {
        if (document.readyState == "complete") {
          init(); 
        }
      };
})();