
function save(){
    var r = confirm("Are you sure you want to save?");
    if (r == true) {
        localStorage.setItem("diamonds", JSON.stringify(diamonds));
        localStorage.setItem("totDia", JSON.stringify(totDia));
        localStorage.setItem("totDiaClicked", JSON.stringify(totDiaClicked));
        localStorage.setItem("dps", JSON.stringify(dps));

        localStorage.setItem("woodenPickPurchased", JSON.stringify(woodenPickPurchased));
        localStorage.setItem("stonePickPurchased", JSON.stringify(stonePickPurchased));
        localStorage.setItem("ironPickPurchased", JSON.stringify(ironPickPurchased));
        localStorage.setItem("diamondPickPurchased", JSON.stringify(diamondPickPurchased));
        localStorage.setItem("eff", JSON.stringify(eff));
        localStorage.setItem("fortune1Purchased", JSON.stringify(fortune1Purchased));
        localStorage.setItem("fortune2Purchased", JSON.stringify(fortune2Purchased));
        localStorage.setItem("fortune3Purchased", JSON.stringify(fortune3Purchased));
        localStorage.setItem("fortuneMod", JSON.stringify(fortuneMod));

        localStorage.setItem("automatedDrillPurchased", JSON.stringify(automatedDrillPurchased));
        localStorage.setItem("oreProcessingPurchased", JSON.stringify(oreProcessingPurchased));
        localStorage.setItem("researchUnlockPurchased", JSON.stringify(researchUnlockPurchased));
        localStorage.setItem("SciAdvOreResearched", JSON.stringify(SciAdvOreResearched));
        
        
        localStorage.setItem("achievement_theBeginning", JSON.stringify(achievement_theBeginning));
        alert("Game saved.");
     }
}

function load(){
    if(localStorage.getItem("diamonds")){
        var r = confirm("Are you sure you want to load a save?");
        if (r == true) {
            diamonds = JSON.parse(localStorage.getItem("diamonds"));
            totDia = JSON.parse(localStorage.getItem("totDia"));
            totDiaClicked = JSON.parse(localStorage.getItem("totDiaClicked"));
            dps = JSON.parse(localStorage.getItem("dps"));
            
            woodenPickPurchased = JSON.parse(localStorage.getItem("woodenPickPurchased"));
            stonePickPurchased = JSON.parse(localStorage.getItem("stonePickPurchased"));
            ironPickPurchased = JSON.parse(localStorage.getItem("ironPickPurchased"));
            diamondPickPurchased = JSON.parse(localStorage.getItem("diamondPickPurchased"));
            eff = JSON.parse(localStorage.getItem("eff"));
            fortune1Purchased = JSON.parse(localStorage.getItem("fortune1Purchased")); 
            fortune2Purchased = JSON.parse(localStorage.getItem("fortune2Purchased"));
            fortune3Purchased = JSON.parse(localStorage.getItem("fortune3Purchased"));
            fortuneMod = JSON.parse(localStorage.getItem("fortuneMod"));
            
            automatedDrillPurchased = JSON.parse(localStorage.getItem("automatedDrillPurchased"));
            oreProcessingPurchased = JSON.parse(localStorage.getItem("oreProcessingPurchased"));
            researchUnlockPurchased = JSON.parse(localStorage.getItem("researchUnlockPurchased"));
            SciAdvOreResearched = JSON.parse(localStorage.getItem("SciAdvOreResearched"));
            
            achievement_theBeginning = JSON.parse(localStorage.getItem("achievement_theBeginning"));
            
            
            for (i = automatedDrillPurchased; i>0; i--){
                setTimeout(function(){
                    automatedDrillRun();     
                }, 50);
            }
            
            for (i = oreProcessingPurchased; i>0; i--){
                setTimeout(function(){
                    oreProcessingRun();     
                }, 50);
            }
        }
    }else{
        alert("No saved game!");
    }

}

function deleteSave(){
    if(localStorage.getItem("diamonds")){
        var r = confirm("Are you sure you want to delete your save?");
        if (r == true) {
            localStorage.removeItem("diamonds");
            localStorage.removeItem("totDia");
            localStorage.removeItem("totDiaClicked");
            localStorage.removeItem("dps");
            
            localStorage.removeItem("woodenPickPurchased");
            localStorage.removeItem("stonePickPurchased");
            localStorage.removeItem("ironPickPurchased");
            localStorage.removeItem("diamondPickPurchased");
            localStorage.removeItem("eff");
            localStorage.removeItem("fortune1Purchased");
            localStorage.removeItem("fortune2Purchased");
            localStorage.removeItem("fortune3Purchased");
            localStorage.removeItem("fortuneMod");
            
            localStorage.removeItem("automatedDrillPurchased");
            localStorage.removeItem("oreProcessingPurchased");
            localStorage.removeItem("researchUnlockPurchased");
            localStorage.removeItem("SciAdvOreResearched");
            
            
            localStorage.removeItem("achievement_theBeginning");
            alert("Deleted save.");
        }
    }else{
        alert("No save to delete.");
    }
}