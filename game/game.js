var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

var c2 = document.getElementById("statsCan");
var stats = c2.getContext("2d");

var diamonds = 0;
var totDia = 0;
var totDiaClicked = 0;

var dps = 0;

var woodenPickPurchased = 0;
var stonePickPurchased = 0;
var ironPickPurchased = 0;
var diamondPickPurchased = 0;
var eff = 0;
var fortune1Purchased = 1;
var fortune2Purchased = 1;
var fortune3Purchased = 1;
var fortuneMod =  fortune1Purchased + fortune2Purchased + fortune3Purchased - 3;
var Mdiamonds = diamonds / 100000;
var kDiamonds = Math.round(diamonds);
var kTotDia = Math.round(totDia);
var MTotDia = totDia / 1000000;
var automatedDrillPurchased = 0;
var oreProcessingPurchased = 0;
var researchUnlockPurchased = 0;

var SciAdvOreResearched = 0;
var runSciAdvOre = 0;
var SciAdvOreRunning = 0;

var achievement_theBeginning = 0;
var achievement_gettingAnUpgrade = 0;
var achievement_shiney = 0;
var achievement_onePerSec = 0;
var achievement_1000 = 0;

var achievementsGot = 0;
var totalAchievements = 5;
var achievementPercentage = achievementsGot / totalAchievements * 100;

var music=new Audio("snd/wallpaper.mp3");
var mess = "";

function setup(){
    document.getElementById("stonePick").style.display = "none";
    document.getElementById("fortune2").style.display = "none";
    document.getElementById("ironPick").style.display = "none";
    document.getElementById("fortune3").style.display = "none";
    document.getElementById("oreProcessing").style.display = "none";
    document.getElementById("researchUnlock").style.display = "none";
    document.getElementById("diamondPick").style.display = "none";
    
    document.getElementById("technologies").style.display = "none";
    document.getElementById("research").style.display = "none";
    draw();
    music.play();
    document.getElementById("volume").value = 10;
}

function draw(){
    fortuneMod = fortune1Purchased + fortune2Purchased + fortune3Purchased - 3;
    Mdiamonds = diamonds / 1000000;
    kDiamonds = Math.round(diamonds);
    
    kTotDia = Math.round(totDia);
    MTotDia = totDia / 1000000;
    
    diamonds = Math.round(diamonds * 10) / 10;
    totDia = Math.round(totDia * 10) / 10;
    MTotDia = Math.round(MTotDia * 10) / 10;
    fortuneMod = Math.round(fortuneMod * 10) / 10;
    dps = Math.round(dps * 10) / 10;
    Mdiamonds = Math.round(Mdiamonds * 10) / 10;
    
    achievementPercentage = achievementsGot / totalAchievements * 100;
    
    ctx.clearRect(0, 0, 1000, 100);
    stats.clearRect(0, 0, 250, 400);
    ctx.font = "45px minecraftia";
    ctx.textAlign = "center";
    ctx.fillStyle = "white";
    if(diamonds == 1){
        ctx.fillText(diamonds, 250, 70);
        ctx.font = "30px minecraftia";
        ctx.fillText("diamond", 250, 90);
    }else{
        if(diamonds > 999999){
            ctx.font = "45px minecraftia";
            ctx.fillText(Mdiamonds + "M", 250, 70);
            ctx.font = "30px minecraftia";
            ctx.fillText("diamonds", 250, 90);
        }else{
            if(diamonds > 1000){
                ctx.font = "45px minecraftia";
                ctx.fillText(kDiamonds, 250, 70);
                ctx.font = "30px minecraftia";
                ctx.fillText("diamonds", 250, 90);
            }else{
                ctx.font = "45px minecraftia";
                ctx.fillText(diamonds, 250, 70);
                ctx.font = "30px minecraftia";
                ctx.fillText("diamonds", 250, 90);
            }

        }
    }
    ctx.textAlign = "center";
    ctx.font = "20px minecraftia";
    ctx.fillStyle = "yellow";
    ctx.fillText(mess, 250, 110);
    
    ctx.fillStyle = "white";
    stats.font = "40px minecraftia";
    stats.fillText("Stats", 65, 70);
    stats.font = "18px minecraftia";
    stats.fillText(eff + "% Efficiency", 10, 95);
    stats.fillText(fortuneMod + "x Fortune mod", 10, 125);
    
    if(totDia > 999){
        if(totDia > 999999){
            stats.fillText(MTotDia + "M total mined", 10, 160); 
        }else{
            stats.fillText(kTotDia + " total mined", 10, 160); 
        }
    }else{
        stats.fillText(totDia + " total mined", 10, 160);
    }

    stats.fillText(totDiaClicked + " times clicked", 10, 194);
    stats.fillText(dps + " dps", 10, 225);
    
    music.volume = document.getElementById("volume").value / 100;
    
    if(woodenPickPurchased == 1){
        document.getElementById("woodenPick").style.backgroundImage = "url('imgs/woodenpick-button-purchased.png')";
        document.getElementById("fortune1").style.backgroundImage = "url('imgs/fortune-1.png')";
        document.getElementById("stonePick").style.display = "block";
    }else{
        document.getElementById("fortune1").style.backgroundImage = "url('imgs/fortune-1-needsWood.png')";
    }
    
    if(stonePickPurchased == 1){
        document.getElementById("stonePick").style.backgroundImage = "url('imgs/stonePickaxe-purchased.png')";
        document.getElementById("ironPick").style.display = "block";
        document.getElementById("fortune2").style.backgroundImage = "url('imgs/fortune2.png')";
    }else{
        if(woodenPickPurchased == 1){
            document.getElementById("fortune2").style.backgroundImage = "url('imgs/fortune2-needsStone.png')";
        }

    }
    
    if(ironPickPurchased == 1){
        document.getElementById("ironPick").style.backgroundImage = "url('imgs/ironPickaxe-purchased.png')";        
        document.getElementById("fortune3").style.backgroundImage = "url('imgs/fortune3.png')";
        document.getElementById("technologies").style.display = "block";
    }
    
    if(fortune1Purchased > 1){
        document.getElementById("fortune2").style.display = "block";
    }
    
    if(fortune2Purchased > 1){
        document.getElementById("fortune3").style.display = "block";
        if(ironPickPurchased == 0){
            document.getElementById("fortune3").style.backgroundImage = "url('imgs/fortune3-needsIron.png')"
        }
    }
    
    if(automatedDrillPurchased > 0){
        document.getElementById("oreProcessing").style.display = "block";
    }
    
    if(oreProcessingPurchased > 0){
        document.getElementById("researchUnlock").style.display = "block";
    }
    
    if(dps > 0.9){
        document.getElementById("oreProcessing").style.backgroundImage = "url(imgs/oreProcessing.png)";
        if(achievement_onePerSec == 0){
            achievement("onePerSec");
            achievement_onePerSec = 1;
        }
    }
    
    if(dps > 5){
        document.getElementById("researchUnlock").style.backgroundImage = "url(imgs/researchUnlock.png)";
    }
    
    if(researchUnlockPurchased == 1){
        document.getElementById("researchUnlock").style.backgroundImage = "url(imgs/researchUnlock-purchased.png)"; 
        document.getElementById("research").style.display = "block";
    }
    
    if(SciAdvOreResearched == 1){
        document.getElementById("sci-advOre-content").style.backgroundImage = "url(imgs/sci-advOre-researched.png)";
        document.getElementById("diamondPick").style.display = "block";
        document.getElementById("permanentUpgradesMenu").style.height = "280px";
    }
    
    if(diamondPickPurchased == 1){
       document.getElementById("diamondPick").style.backgroundImage = "url('imgs/diamondPickaxe-purchased.png')";
    }
    
    if(diamonds > 1000){
        if(achievement_1000 == 0){
            achievement("1000");
            achievement_1000 = 1;
        }
    }
    document.getElementById("aA_num").innerHTML = achievementsGot + "/" + totalAchievements;
    document.getElementById("amountAchievements").innerHTML =" achievements got.";
    document.getElementById("aA_percent").innerHTML = achievementPercentage + "%";
    
    if(document.getElementById("shop").style.width == "250px"){
        document.getElementById("achievement").style.marginLeft = "250px";
    }
    
    setTimeout(function() {
        draw();
    }, 33);
}

function woodenPickBuy(){
    if(diamonds > 7.9){
        if(woodenPickPurchased == 0){
            document.getElementById("woodenPick").style.backgroundImage = "url('imgs/woodenpick-button-purchased.png')";
            woodenPickPurchased = woodenPickPurchased+1;
            diamonds = diamonds - 8;
            eff = eff+5;
            console.log("Purchased wooden pickaxe!");
            document.getElementById("stonePick").style.display = "block";
            message('Stone Pickaxe unlocked!');
            setTimeout(function(){
                message('Fortune I unlocked!');
            }, 3000);
        }else{
            console.log("Player tried to purchase woodenPick, but they already purchased it!");
        }
    }else{
        console.log("Not enough diamonds! > woodenPickBuy")
    }
}

function stonePickBuy(){
    if(diamonds > 19.9){
        if(stonePickPurchased == 0){
            document.getElementById("stonePick").style.backgroundImage = "url('imgs/stonePickaxe-purchased.png')";
            stonePickPurchased = stonePickPurchased+1;
            diamonds = diamonds - 20;
            eff = eff+15;
            console.log("Purchased stone pickaxe!");
            document.getElementById("ironPick").style.display = "block";
            achievement("gettingAnUpgrade");
            message('Iron Pickaxe unlocked!');
            setTimeout(function(){
                message('Fortune II unlocked!');
            }, 3000);
        }else{
            console.log("Player tried to purchase stonePick, but they already purchased it!");
        }
    }else{
        console.log("Not enough diamonds! > stonePickBuy")
    }
}

function ironPickBuy(){
    if(diamonds > 34.9){
        if(ironPickPurchased == 0){
            document.getElementById("ironPick").style.backgroundImage = "url('imgs/ironPickaxe-purchased.png')";
            ironPickPurchased = ironPickPurchased+1;
            diamonds = diamonds - 35;
            eff = eff+30;
            console.log("Purchased iron pickaxe!");
            document.getElementById("technologies").style.display = "block";
            message('Technologies unlocked!');
        }else{
            console.log("Player tried to purchase ironPick, but they already purchased it!");
        }
    }else{
        console.log("Not enough diamonds! > ironPickBuy")
    }
}

function diamondPickBuy(){
    if(diamonds > 49.9){
        if(diamondPickPurchased == 0){
            document.getElementById("diamondPick").style.backgroundImage = "url('imgs/diamondPickaxe-purchased.png')";
            diamondPickPurchased = diamondPickPurchased+1;
            diamonds = diamonds - 50;
            eff = eff+50;
            console.log("Purchased diamond pickaxe!");
        }else{
            console.log("Player tried to purchase diamondPick, but they already purchased it!");
        }
    }else{
        console.log("Not enough diamonds! > diamondPickBuy");
    }
}

function musicChange(){
    if(document.getElementById("musicSettingBox").checked == true){
        music.play();  
    }else{
        music.pause();
    }    
}

function fortune1Buy(){
    if(diamonds > 14.9){
        if(woodenPickPurchased == 1){
            if(fortune1Purchased == 1){
                message('Fortune II unlocked!');
                achievement("shiney");
                achievement_shiney = 1;
            }
            fortune1Purchased = fortune1Purchased + 0.2;
            console.log("Player purchased fortune1");
            diamonds = diamonds - 15;
            document.getElementById("fortune2").style.display = "block";
        }else{
            console.log("Wooden pickaxe not purchased! > fortune1")
        }

    }else{
        console.log("Player tried to purchase fortune1, but they didn't have enough diamonds.")
    }

}

function fortune2Buy(){
   if(diamonds > 44.9){
        if(stonePickPurchased == 1){
            if(fortune2Purchased == 1){
                message('Fortune III unlocked!');
            }
            fortune2Purchased = fortune2Purchased + 0.4;
            console.log("Player purchased fortune2");
            diamonds = diamonds - 45;
        }else{
            console.log("Stone pickaxe not purchased! > fortune2")
        }

    }else{
        console.log("Player tried to purchase fortune2, but they didn't have enough diamonds.")
    }

}

function fortune3Buy(){
   if(diamonds > 94.9){
        if(ironPickPurchased == 1){
            fortune3Purchased = fortune3Purchased + 0.6;
            console.log("Player purchased fortune3");
            diamonds = diamonds - 95;
        }else{
            console.log("Iron pickaxe not purchased! > fortune3")
        }

    }else{
        console.log("Player tried to purchase fortune3, but they didn't have enough diamonds.")
    }

}

function automatedDrillBuy(){
   if(diamonds > 179.9){
        if(ironPickPurchased == 1){
            console.log("Player purchased autoDrill");
            diamonds = diamonds - 180;
            automatedDrillPurchased = automatedDrillPurchased + 1;
            dps = dps + 0.1;
            automatedDrillRun();
        }else{
             console.log("Iron pickaxe not purchased! > autoDrill")
        }

    }else{
        console.log("Player tried to purchase autoDrill, but they didn't have enough diamonds.")
    }

}

function automatedDrillRun(){
    diamonds = diamonds + 0.1;
    setTimeout(function(){
        automatedDrillRun();
    }, 1000);
}

function oreProcessingBuy(){
   if(diamonds > 419.9){
        if(dps > 0.9){
            console.log("Player purchased oreProcessing");
            diamonds = diamonds - 420;
            oreProcessingPurchased = oreProcessingPurchased + 1;
            dps = dps + 0.5;
            oreProcessingRun();
        }else{
             console.log("Not enough DPS! > oreProcessing")
        }

    }else{
        console.log("Player tried to purchase oreProcessing, but they didn't have enough diamonds.")
    }

}

function oreProcessingRun(){
    diamonds = diamonds + 0.1;
    setTimeout(function(){
        oreProcessingRun();
    }, 200);
}

function researchUnlockBuy(){
   if(diamonds > 2499.9){
        if(dps > 5){
            if(researchUnlockPurchased == 0){
                console.log("Player purchased researchUnlock");
                diamonds = diamonds - 2500;
                researchUnlockPurchased = researchUnlockPurchased + 1;
                message('Research unlocked!');
            }else{
                console.log("Player already has researchUnlock! > researchUnlock")
            }
        }else{
             console.log("Not enough DPS! > researchUnlock")
        }

    }else{
        console.log("Player tried to purchase researchUnlock, but they didn't have enough diamonds.")
    }

}

function bounce(){
    document.getElementById("diamond").style.marginTop = "5px";
    setTimeout(function() {
        document.getElementById("diamond").style.marginTop = "0px";
    }, 100);
}

function diamond_click(){
    totDiaClicked = totDiaClicked+1;
    
    if(woodenPickPurchased == 1){
        if(stonePickPurchased == 1){
            if(ironPickPurchased == 1){
                diamonds = diamonds+1.3 * fortune1Purchased * fortune2Purchased * fortune3Purchased;
                totDia = totDia+1.3 * fortune1Purchased * fortune2Purchased * fortune3Purchased;
                bounce(); 
            }else{
                diamonds = diamonds+0.6 * fortune1Purchased * fortune2Purchased * fortune3Purchased;
                totDia = totDia+0.6 * fortune1Purchased * fortune2Purchased * fortune3Purchased;
                bounce(); 
            }
        }else{
            diamonds = diamonds+0.2 * fortune1Purchased * fortune2Purchased * fortune3Purchased;
            totDia = totDia+0.2 * fortune1Purchased * fortune2Purchased * fortune3Purchased;
            bounce();
        }
    }else{
        diamonds = diamonds+0.1 * fortune1Purchased * fortune2Purchased * fortune3Purchased;
        totDia = totDia+0.1 * fortune1Purchased * fortune2Purchased * fortune3Purchased;
        bounce();
        if(achievement_theBeginning == 0){
            achievement("theBeginning");
        }
    }
}

function sciAdvOreBuy(){
    if(SciAdvOreResearched == 0){
        if(diamonds > 9999.9){
            if(SciAdvOreRunning == 0){
            diamonds = diamonds - 10000;
            document.getElementById('sci-advOre-progressbar').style.width = '100%'; bounceItem('sci-advOre');
            runSciAdvOre = 1;
            sciAdvOreRun();
            sciAdvOreLogic(); 
            }else{
                console.log("sciAdvOre is already researching!")
            }

        }else{
        console.log("Player tried to purchase SciAdvOre, but they didn't have enough diamonds.")
        }
    }else{
        console.log("Player already researched this! > AdvOre")
    }

}

function sciAdvOreRun(){
    if(runSciAdvOre == 1){
        SciAdvOreRunning = 1;
        setTimeout(function(){
            diamonds = diamonds - 1;
            sciAdvOreRun();
        }, 100);
    }
}

function sciAdvOreLogic(){
    setTimeout(function(){
        runSciAdvOre = 0;
        SciAdvOreResearched = 1;
        SciAdvOreRunning = 0;
    }, 60000);
}

function message(messages){
    mess = messages;
    setTimeout(function(){
            mess = "";
    }, 3000);
}

function achievement(ach){
    if(ach == "theBeginning"){
        document.getElementById('achievementIco').style.backgroundImage = "url('imgs/achievements/"+ ach +"/ico.png')";
        document.getElementById('achievementText').style.backgroundImage = "url('imgs/achievements/"+ ach +"/text.png')";
        document.getElementById('achievementTitle').style.backgroundImage = "url('imgs/achievements/"+ ach +"/title.png')";
        achievement_theBeginning = 1;
    }else{
        if(ach == "gettingAnUpgrade"){
            document.getElementById('achievementIco').style.backgroundImage = "url('imgs/achievements/"+ ach +"/ico.png')";
            document.getElementById('achievementText').style.backgroundImage = "url('imgs/achievements/"+ ach +"/text.png')";
            document.getElementById('achievementTitle').style.backgroundImage = "url('imgs/achievements/"+ ach +"/title.png')";
            achievement_gettingAnUpgrade = 1;
        }else{
            if(ach == "shiney"){
                document.getElementById('achievementIco').style.backgroundImage = "url('imgs/achievements/"+ ach +"/ico.png')";
                document.getElementById('achievementText').style.backgroundImage = "url('imgs/achievements/"+ ach +"/text.png')";
                document.getElementById('achievementTitle').style.backgroundImage = "url('imgs/achievements/"+ ach +"/title.png')";
                achievement_shiney = 1;
            }else{
                if(ach == "onePerSec"){
                    document.getElementById('achievementIco').style.backgroundImage = "url('imgs/achievements/"+ ach +"/ico.png')";
                    document.getElementById('achievementText').style.backgroundImage = "url('imgs/achievements/"+ ach +"/text.png')";
                    document.getElementById('achievementTitle').style.backgroundImage = "url('imgs/achievements/"+ ach +"/title.png')";
                    achievement_onePerSec = 1;
                }else{
                    if(ach == "1000"){
                        document.getElementById('achievementIco').style.backgroundImage = "url('imgs/achievements/"+ ach +"/ico.png')";
                        document.getElementById('achievementText').style.backgroundImage = "url('imgs/achievements/"+ ach +"/text.png')";
                        document.getElementById('achievementTitle').style.backgroundImage = "url('imgs/achievements/"+ ach +"/title.png')";
                        achievement_1000 = 1;
                    }
                }
            }
        }
    }
    
    document.getElementById('achievement').style.width = '250px';
    
    achievementsGot = achievementsGot + 1;
    setTimeout(function(){
        document.getElementById('achievement').style.width = '0';
    }, 4000);
}

music.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);