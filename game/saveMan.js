function save(){
    if(localStorage.getItem("activeSave") == 1){
        var r = confirm("Are you sure you want to save?");
        if (r == true) {
            localStorage.setItem("diamonds_1", JSON.stringify(diamonds));
            localStorage.setItem("totDia_1", JSON.stringify(totDia));
            localStorage.setItem("totDiaClicked_1", JSON.stringify(totDiaClicked));
            localStorage.setItem("dps_1", JSON.stringify(dps));

            localStorage.setItem("woodenPickPurchased_1", JSON.stringify(woodenPickPurchased));
            localStorage.setItem("stonePickPurchased_1", JSON.stringify(stonePickPurchased));
            localStorage.setItem("ironPickPurchased_1", JSON.stringify(ironPickPurchased));
            localStorage.setItem("diamondPickPurchased_1", JSON.stringify(diamondPickPurchased));
            localStorage.setItem("eff_1", JSON.stringify(eff));
            localStorage.setItem("fortune1Purchased_1", JSON.stringify(fortune1Purchased));
            localStorage.setItem("fortune2Purchased_1", JSON.stringify(fortune2Purchased));
            localStorage.setItem("fortune3Purchased_1", JSON.stringify(fortune3Purchased));
            localStorage.setItem("fortuneMod_1", JSON.stringify(fortuneMod));

            localStorage.setItem("automatedDrillPurchased_1", JSON.stringify(automatedDrillPurchased));
            localStorage.setItem("oreProcessingPurchased_1", JSON.stringify(oreProcessingPurchased));
            localStorage.setItem("researchUnlockPurchased_1", JSON.stringify(researchUnlockPurchased));
            localStorage.setItem("SciAdvOreResearched_1", JSON.stringify(SciAdvOreResearched));


            localStorage.setItem("achievement_theBeginning_1", JSON.stringify(achievement_theBeginning));
            localStorage.setItem("achievement_gettingAnUpgrade_1", JSON.stringify(achievement_gettingAnUpgrade));
            localStorage.setItem("achievement_shiney_1", JSON.stringify(achievement_shiney));
            localStorage.setItem("achievement_onePerSec_1", JSON.stringify(achievement_onePerSec));
            localStorage.setItem("achievement_1000_1", JSON.stringify(achievement_1000));
            
            
            localStorage.setItem("game1Saved", 1);
            alert("Game saved.");
        }
    }else{
        if(localStorage.getItem("activeSave") == 2){
            var r = confirm("Are you sure you want to save?");
            if (r == true) {
                localStorage.setItem("diamonds_2", JSON.stringify(diamonds));
                localStorage.setItem("totDia_2", JSON.stringify(totDia));
                localStorage.setItem("totDiaClicked_2", JSON.stringify(totDiaClicked));
                localStorage.setItem("dps_2", JSON.stringify(dps));

                localStorage.setItem("woodenPickPurchased_2", JSON.stringify(woodenPickPurchased));
                localStorage.setItem("stonePickPurchased_2", JSON.stringify(stonePickPurchased));
                localStorage.setItem("ironPickPurchased_2", JSON.stringify(ironPickPurchased));
                localStorage.setItem("diamondPickPurchased_2", JSON.stringify(diamondPickPurchased));
                localStorage.setItem("eff_2", JSON.stringify(eff));
                localStorage.setItem("fortune1Purchased_2", JSON.stringify(fortune1Purchased));
                localStorage.setItem("fortune2Purchased_2", JSON.stringify(fortune2Purchased));
                localStorage.setItem("fortune3Purchased_2", JSON.stringify(fortune3Purchased));
                localStorage.setItem("fortuneMod_2", JSON.stringify(fortuneMod));

                localStorage.setItem("automatedDrillPurchased_2", JSON.stringify(automatedDrillPurchased));
                localStorage.setItem("oreProcessingPurchased_2", JSON.stringify(oreProcessingPurchased));
                localStorage.setItem("researchUnlockPurchased_2", JSON.stringify(researchUnlockPurchased));
                localStorage.setItem("SciAdvOreResearched_2", JSON.stringify(SciAdvOreResearched));


                localStorage.setItem("achievement_theBeginning_2", JSON.stringify(achievement_theBeginning));
                localStorage.setItem("achievement_gettingAnUpgrade_2", JSON.stringify(achievement_gettingAnUpgrade));
                localStorage.setItem("achievement_shiney_2", JSON.stringify(achievement_shiney));
                localStorage.setItem("achievement_onePerSec_2", JSON.stringify(achievement_onePerSec));
                localStorage.setItem("achievement_1000_2", JSON.stringify(achievement_1000));
            
                localStorage.setItem("game2Saved", 1);
                alert("Game saved.");
                
            } 
        }else{
            if(localStorage.getItem("activeSave") == 3){
                var r = confirm("Are you sure you want to save?");
                if (r == true) {
                    localStorage.setItem("diamonds_3", JSON.stringify(diamonds));
                    localStorage.setItem("totDia_3", JSON.stringify(totDia));
                    localStorage.setItem("totDiaClicked_3", JSON.stringify(totDiaClicked));
                    localStorage.setItem("dps_3", JSON.stringify(dps));

                    localStorage.setItem("woodenPickPurchased_3", JSON.stringify(woodenPickPurchased));
                    localStorage.setItem("stonePickPurchased_3", JSON.stringify(stonePickPurchased));
                    localStorage.setItem("ironPickPurchased_3", JSON.stringify(ironPickPurchased));
                    localStorage.setItem("diamondPickPurchased_3", JSON.stringify(diamondPickPurchased));
                    localStorage.setItem("eff_3", JSON.stringify(eff));
                    localStorage.setItem("fortune1Purchased_3", JSON.stringify(fortune1Purchased));
                    localStorage.setItem("fortune2Purchased_3", JSON.stringify(fortune2Purchased));
                    localStorage.setItem("fortune3Purchased_3", JSON.stringify(fortune3Purchased));
                    localStorage.setItem("fortuneMod_3", JSON.stringify(fortuneMod));

                    localStorage.setItem("automatedDrillPurchased_3", JSON.stringify(automatedDrillPurchased));
                    localStorage.setItem("oreProcessingPurchased_3", JSON.stringify(oreProcessingPurchased));
                    localStorage.setItem("researchUnlockPurchased_3", JSON.stringify(researchUnlockPurchased));
                    localStorage.setItem("SciAdvOreResearched_3", JSON.stringify(SciAdvOreResearched));


                    localStorage.setItem("achievement_theBeginning_3", JSON.stringify(achievement_theBeginning));
                    localStorage.setItem("achievement_gettingAnUpgrade_3", JSON.stringify(achievement_gettingAnUpgrade));
                    localStorage.setItem("achievement_shiney_3", JSON.stringify(achievement_shiney));
                    localStorage.setItem("achievement_onePerSec_3", JSON.stringify(achievement_onePerSec));
                    localStorage.setItem("achievement_1000_3", JSON.stringify(achievement_1000));
            
                    localStorage.setItem("game3Saved", 1);
                    alert("Game saved.");
                } 
            }else{
                console.error("Error on load of save.");
                alert("Error: Current save outside allowable region!");
            }
        }
    }
}

function load(){
    if(localStorage.getItem("activeSave") == 1){
        diamonds = JSON.parse(localStorage.getItem("diamonds_1"));
        totDia = JSON.parse(localStorage.getItem("totDia_1"));
        totDiaClicked = JSON.parse(localStorage.getItem("totDiaClicked_1"));
        dps = JSON.parse(localStorage.getItem("dps_1"));

        woodenPickPurchased = JSON.parse(localStorage.getItem("woodenPickPurchased_1"));
        stonePickPurchased = JSON.parse(localStorage.getItem("stonePickPurchased_1"));
        ironPickPurchased = JSON.parse(localStorage.getItem("ironPickPurchased_1"));
        diamondPickPurchased = JSON.parse(localStorage.getItem("diamondPickPurchased_1"));
        eff = JSON.parse(localStorage.getItem("eff_1"));
        fortune1Purchased = JSON.parse(localStorage.getItem("fortune1Purchased_1")); 
        fortune2Purchased = JSON.parse(localStorage.getItem("fortune2Purchased_1"));
        fortune3Purchased = JSON.parse(localStorage.getItem("fortune3Purchased_1"));
        fortuneMod = JSON.parse(localStorage.getItem("fortuneMod_1"));

        automatedDrillPurchased = JSON.parse(localStorage.getItem("automatedDrillPurchased_1"));
        oreProcessingPurchased = JSON.parse(localStorage.getItem("oreProcessingPurchased_1"));
        researchUnlockPurchased = JSON.parse(localStorage.getItem("researchUnlockPurchased_1"));
        SciAdvOreResearched = JSON.parse(localStorage.getItem("SciAdvOreResearched_1"));

        achievement_theBeginning = JSON.parse(localStorage.getItem("achievement_theBeginning_1"));
        achievement_gettingAnUpgrade = JSON.parse(localStorage.getItem("achievement_gettingAnUpgrade_1"));
        achievement_shiney = JSON.parse(localStorage.getItem("achievement_shiney_1"));
        achievement_onePerSec = JSON.parse(localStorage.getItem("achievement_onePerSec_1"));
        achievement_1000 = JSON.parse(localStorage.getItem("achievement_1000_1"));

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
    }else{
        if(localStorage.getItem("activeSave") == 2){
            diamonds = JSON.parse(localStorage.getItem("diamonds_2"));
            totDia = JSON.parse(localStorage.getItem("totDia_2"));
            totDiaClicked = JSON.parse(localStorage.getItem("totDiaClicked_2"));
            dps = JSON.parse(localStorage.getItem("dps_2"));

            woodenPickPurchased = JSON.parse(localStorage.getItem("woodenPickPurchased_2"));
            stonePickPurchased = JSON.parse(localStorage.getItem("stonePickPurchased_2"));
            ironPickPurchased = JSON.parse(localStorage.getItem("ironPickPurchased_2"));
            diamondPickPurchased = JSON.parse(localStorage.getItem("diamondPickPurchased_2"));
            eff = JSON.parse(localStorage.getItem("eff_2"));
            fortune1Purchased = JSON.parse(localStorage.getItem("fortune1Purchased_2")); 
            fortune2Purchased = JSON.parse(localStorage.getItem("fortune2Purchased_2"));
            fortune3Purchased = JSON.parse(localStorage.getItem("fortune3Purchased_2"));
            fortuneMod = JSON.parse(localStorage.getItem("fortuneMod_2"));

            automatedDrillPurchased = JSON.parse(localStorage.getItem("automatedDrillPurchased_2"));
            oreProcessingPurchased = JSON.parse(localStorage.getItem("oreProcessingPurchased_2"));
            researchUnlockPurchased = JSON.parse(localStorage.getItem("researchUnlockPurchased_2"));
            SciAdvOreResearched = JSON.parse(localStorage.getItem("SciAdvOreResearched_2"));

            achievement_theBeginning = JSON.parse(localStorage.getItem("achievement_theBeginning_2"));
            achievement_gettingAnUpgrade = JSON.parse(localStorage.getItem("achievement_gettingAnUpgrade_2"));
            achievement_shiney = JSON.parse(localStorage.getItem("achievement_shiney_2"));
            achievement_onePerSec = JSON.parse(localStorage.getItem("achievement_onePerSec_2"));
            achievement_1000 = JSON.parse(localStorage.getItem("achievement_1000_2"));

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
        }else{
            if(localStorage.getItem("activeSave") == 3){
                diamonds = JSON.parse(localStorage.getItem("diamonds_3"));
                totDia = JSON.parse(localStorage.getItem("totDia_3"));
                totDiaClicked = JSON.parse(localStorage.getItem("totDiaClicked_3"));
                dps = JSON.parse(localStorage.getItem("dps_3"));

                woodenPickPurchased = JSON.parse(localStorage.getItem("woodenPickPurchased_3"));
                stonePickPurchased = JSON.parse(localStorage.getItem("stonePickPurchased_3"));
                ironPickPurchased = JSON.parse(localStorage.getItem("ironPickPurchased_3"));
                diamondPickPurchased = JSON.parse(localStorage.getItem("diamondPickPurchased_3"));
                eff = JSON.parse(localStorage.getItem("eff_3"));
                fortune1Purchased = JSON.parse(localStorage.getItem("fortune1Purchased_3")); 
                fortune2Purchased = JSON.parse(localStorage.getItem("fortune2Purchased_3"));
                fortune3Purchased = JSON.parse(localStorage.getItem("fortune3Purchased_3"));
                fortuneMod = JSON.parse(localStorage.getItem("fortuneMod_3"));

                automatedDrillPurchased = JSON.parse(localStorage.getItem("automatedDrillPurchased_3"));
                oreProcessingPurchased = JSON.parse(localStorage.getItem("oreProcessingPurchased_3"));
                researchUnlockPurchased = JSON.parse(localStorage.getItem("researchUnlockPurchased_3"));
                SciAdvOreResearched = JSON.parse(localStorage.getItem("SciAdvOreResearched_3"));

                achievement_theBeginning = JSON.parse(localStorage.getItem("achievement_theBeginning_3"));
                achievement_gettingAnUpgrade = JSON.parse(localStorage.getItem("achievement_gettingAnUpgrade_3"));
                achievement_shiney = JSON.parse(localStorage.getItem("achievement_shiney_3"));
                achievement_onePerSec = JSON.parse(localStorage.getItem("achievement_onePerSec_3"));
                achievement_1000 = JSON.parse(localStorage.getItem("achievement_1000_3"));

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
        }
    }
}

function deleteSave(){
    if(localStorage.getItem("activeSave") == 1){
        var r = confirm("Are you sure you want to delete your save?");
        if (r == true) {
            localStorage.removeItem("diamonds_1");
            localStorage.removeItem("totDia_1");
            localStorage.removeItem("totDiaClicked_1");
            localStorage.removeItem("dps_1");
            
            localStorage.removeItem("woodenPickPurchased_1");
            localStorage.removeItem("stonePickPurchased_1");
            localStorage.removeItem("ironPickPurchased_1");
            localStorage.removeItem("diamondPickPurchased_1");
            localStorage.removeItem("eff_1");
            localStorage.removeItem("fortune1Purchased_1");
            localStorage.removeItem("fortune2Purchased_1");
            localStorage.removeItem("fortune3Purchased_1");
            localStorage.removeItem("fortuneMod_1");
            
            localStorage.removeItem("automatedDrillPurchased_1");
            localStorage.removeItem("oreProcessingPurchased_1");
            localStorage.removeItem("researchUnlockPurchased_1");
            localStorage.removeItem("SciAdvOreResearched_1");
            
            
            localStorage.removeItem("achievement_theBeginning_1");
            localStorage.removeItem("achievement_gettingAnUpgrade_1");
            localStorage.removeItem("achievement_shiney_1");
            localStorage.removeItem("achievement_onePerSec_1");
            localStorage.removeItem("achievement_1000_1");
            
            localStorage.setItem("game1Saved", 0);
            alert("Deleted save.");
        }
    }else{
        if(localStorage.getItem("activeSave") == 2){
            var r = confirm("Are you sure you want to delete your save?");
            if (r == true) {
                localStorage.removeItem("diamonds_2");
                localStorage.removeItem("totDia_2");
                localStorage.removeItem("totDiaClicked_2");
                localStorage.removeItem("dps_2");

                localStorage.removeItem("woodenPickPurchased_2");
                localStorage.removeItem("stonePickPurchased_2");
                localStorage.removeItem("ironPickPurchased_2");
                localStorage.removeItem("diamondPickPurchased_2");
                localStorage.removeItem("eff_2");
                localStorage.removeItem("fortune1Purchased_2");
                localStorage.removeItem("fortune2Purchased_2");
                localStorage.removeItem("fortune3Purchased_2");
                localStorage.removeItem("fortuneMod_2");

                localStorage.removeItem("automatedDrillPurchased_2");
                localStorage.removeItem("oreProcessingPurchased_2");
                localStorage.removeItem("researchUnlockPurchased_2");
                localStorage.removeItem("SciAdvOreResearched_2");


                localStorage.removeItem("achievement_theBeginning_2");
                localStorage.removeItem("achievement_gettingAnUpgrade_2");
                localStorage.removeItem("achievement_shiney_2");
                localStorage.removeItem("achievement_onePerSec_2");
                localStorage.removeItem("achievement_1000_2");
            
            localStorage.setItem("game2Saved", 0);
                alert("Deleted save.");
            }
        }else{
            if(localStorage.getItem("activeSave") == 3){
                var r = confirm("Are you sure you want to delete your save?");
                if (r == true) {
                    localStorage.removeItem("diamonds_3");
                    localStorage.removeItem("totDia_3");
                    localStorage.removeItem("totDiaClicked_3");
                    localStorage.removeItem("dps_3");

                    localStorage.removeItem("woodenPickPurchased_3");
                    localStorage.removeItem("stonePickPurchased_3");
                    localStorage.removeItem("ironPickPurchased_3");
                    localStorage.removeItem("diamondPickPurchased_3");
                    localStorage.removeItem("eff_3");
                    localStorage.removeItem("fortune1Purchased_3");
                    localStorage.removeItem("fortune2Purchased_3");
                    localStorage.removeItem("fortune3Purchased_3");
                    localStorage.removeItem("fortuneMod_3");

                    localStorage.removeItem("automatedDrillPurchased_3");
                    localStorage.removeItem("oreProcessingPurchased_3");
                    localStorage.removeItem("researchUnlockPurchased_3");
                    localStorage.removeItem("SciAdvOreResearched_3");


                    localStorage.removeItem("achievement_theBeginning_3");
                    localStorage.removeItem("achievement_gettingAnUpgrade_3");
                    localStorage.removeItem("achievement_shiney_3");
                    localStorage.removeItem("achievement_onePerSec_3");
                    localStorage.removeItem("achievement_1000_3");
            
                    localStorage.setItem("game3Saved", 0);
                    alert("Deleted save.");
                }
            }
        }
    }
}

function checkLoad(){
    if(localStorage.getItem("loadOnStart") == 1){
        load();
    }else{
        setup();
    }
}