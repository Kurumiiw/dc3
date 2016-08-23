var gameSave = "game" + localStorage.getItem("activeSave") + "Saved";
function save1(){
    localStorage.setItem("activeSave", 1);
    gameSave = "game" + localStorage.getItem("activeSave") + "Saved";
    startGame();
}

function save2(){
    localStorage.setItem("activeSave", 2);
    gameSave = "game" + localStorage.getItem("activeSave") + "Saved";
    startGame(); 
}

function save3(){
    localStorage.setItem("activeSave", 3);
    gameSave = "game" + localStorage.getItem("activeSave") + "Saved";
    startGame();
}

function startGame(){
    if(localStorage.getItem(gameSave) == 1){
        localStorage.setItem("loadOnStart", 1);
        document.location = "game/index.html";
    }else{
        localStorage.setItem("loadOnStart", 0);
        document.location = "game/index.html";
       }

}



function drawSaves(){
    gameSave = "game" + localStorage.getItem("activeSave") + "Saved";
    
    if(localStorage.getItem("game1Saved") == 1){
        if(allowText == 1){
            document.getElementById("game1Content").innerHTML = JSON.parse(localStorage.getItem("diamonds_1")) + "<br>diamonds<br>" + JSON.parse(localStorage.getItem("dps_1")) + " DPS";
            document.getElementById("game1Erase").style.display = "block";
        }else{
            document.getElementById("game1Content").innerHTML = "";
            document.getElementById("game1Erase").style.display = "none";
        }
    }else{
            document.getElementById("game1").style.backgroundImage = "url(imgs/noGame.png)";
            document.getElementById("game1Erase").style.display = "none";
            document.getElementById("game1Content").innerHTML = "";
    }

    if(localStorage.getItem("game2Saved") == 1){
        if(allowText == 1){
            document.getElementById("game2Content").innerHTML = JSON.parse(localStorage.getItem("diamonds_2")) + "<br>diamonds<br>" + JSON.parse(localStorage.getItem("dps_2")) + " DPS";
            document.getElementById("game2Erase").style.display = "block";
        }else{
            document.getElementById("game2Content").innerHTML = "";
            document.getElementById("game2Erase").style.display = "none";
        }
    }else{
        document.getElementById("game2").style.backgroundImage = "url(imgs/noGame.png)";
        document.getElementById("game2Erase").style.display = "none";
        document.getElementById("game2Content").innerHTML = "";
    }

    if(localStorage.getItem("game3Saved") == 1){
        if(allowText == 1){
            document.getElementById("game3Content").innerHTML = JSON.parse(localStorage.getItem("diamonds_3")) + "<br>diamonds<br>" + JSON.parse(localStorage.getItem("dps_3")) + " DPS";
            document.getElementById("game3Erase").style.display = "block";
        }else{
            document.getElementById("game3Content").innerHTML = "";
            document.getElementById("game3Erase").style.display = "none";
        }
    }else{
        document.getElementById("game3").style.backgroundImage = "url(imgs/noGame.png)";
        document.getElementById("game3Erase").style.display = "none";
        document.getElementById("game3Content").innerHTML = "";
    }
    
    setTimeout(function(){
        drawSaves();
    }, 33);
}

function erase1(){
    localStorage.setItem("activeSave", 1);
    deleteSave();
}

function erase2(){
    localStorage.setItem("activeSave", 2);
    deleteSave();
}

function erase3(){
    localStorage.setItem("activeSave", 3);
    deleteSave();
}