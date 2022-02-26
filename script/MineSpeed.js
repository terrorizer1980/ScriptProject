var scriptName = "MineSpeed";
var scriptAuthor = "DinoFeng";
var scriptVersion = "2.0";
var scriptGithub = "https://github.com/DinoFengz/LiquidBounce";
var script = registerScript({
    name: "Mine Speed",
    version: "2.0",
    authors: ["DinoFeng"]
});
var MSpeed = 0;
var DTick = 0;
var FTick = 0;
var BTick = 1;
Math.radians = function(degrees) {
    return degrees * Math.PI / 180;
};
function setSpeed(_speed) {
    var playerYaw = Math.radians(mc.thePlayer.rotationYaw);
    mc.thePlayer.motionX = _speed * -Math.sin(playerYaw);
    mc.thePlayer.motionZ = _speed * Math.cos(playerYaw);
};
function setDiagSpeed(_speed) {
    var playerYaw = Math.radians(mc.thePlayer.rotationYaw + 90);
    mc.thePlayer.motionX = _speed * -Math.sin(playerYaw);
    mc.thePlayer.motionZ = _speed * Math.cos(playerYaw);
};
function setMoveSpeed(_speed) {
    if (mc.gameSettings.keyBindLeft.isKeyDown() || mc.gameSettings.keyBindRight.isKeyDown()) {
        setDiagSpeed(_speed*-mc.thePlayer.moveStrafing);
    } else {
        setSpeed(_speed * mc.thePlayer.moveForward);
    }
};
function getSpeed() {
    return Math.sqrt(Math.pow(mc.thePlayer.motionX,2) + Math.pow(mc.thePlayer.motionZ,2))
};
function getRandom(max) {return Math.floor(Math.random() * Math.floor(max))};
script.registerModule({
    name: "MineSpeed",
    description: "Speed For Minemora",
    category: "Movement",
    tag: "NULL",
    settings: {
        BM:Setting.list({
            name: "BoostMode",
            default: "Timer",
            values: ["None","Timer","TimerGround","Speed"]
        }),
        MFTi:Setting.float({
            name: "Timer-Timer",
            default: 4,
            min: 1,
            max: 10
        }),
        TGTi:Setting.float({
            name: "TimerGround-Timer",
            default: 4,
            min: 1,
            max: 10
        }),
        Speed:Setting.float({
            name: "Speed-Speed",
            default: 2,
            min: 0,
            max: 10
        }),
        ADS:Setting.boolean({
            name: "About",
            default: true
        }),
        AD:Setting.boolean({
            name:"AutoAds",
            default: true
        })
    }
}, 
    function (module) {
module.on('enable', function() {
    MSpeed = 15;
    DTick = 0;
    FTick = 0;
    BTick = 1;
    if(module.settings.AD.get() == true) {
        mc.thePlayer.sendChatMessage("https://github.com/DinoFengz/LiquidBounce");
    }
    if(module.settings.ADS.get() == true) {
        chat.print("§0§m==================================================");
        chat.print("§8ScriptName §7: §e§l" + scriptName);
        chat.print("§8ScriptVersion §7: §e§l" + scriptVersion);
        chat.print("§8ScriptDescription §7: §e§l" + module.description);
        chat.print("§8ScriptCategory §7: §e§l" + module.category);
        chat.print("§8ScriptGithub §7: §e§l" + scriptGithub);
        chat.print("§0§m==================================================");
    }
});
module.on('update', function() {
    if(module.settings.BM.get() == "None") {
        module.tag=module.settings.BM.get();
        if(mc.thePlayer.onGround) {
            mc.thePlayer.jump();
        }
    }
    if(module.settings.BM.get() == "Timer") {
        module.tag=module.settings.BM.get() + " " + MSpeed + " " + DTick;
        MSpeed++
        if(MSpeed<60 && mc.thePlayer.onGround) {
            if(MSpeed>=18){
                mc.thePlayer.jump();
            };
        };
        if(MSpeed>=60) {
            if(MSpeed<61){
            FTick = DTick+1;  
              Chat.print("§7Ready For §e§l" + FTick + " §7Boost!");
              DTick++
            };
        };
        if(MSpeed<100) {
            if(MSpeed>=17) {
                    mc.timer.timerSpeed = 1;
            };
        };
        if(MSpeed>80 && mc.thePlayer.onGround) {
            MSpeed = 0;
            mc.timer.timerSpeed = module.settings.MFTi.get();
            Chat.print("§7§lBoost §f: §e§l" + DTick);
        };
    };
    if(module.settings.BM.get() == "TimerGround" && BTick==1) {
        module.tag=module.settings.BM.get() + " " + MSpeed + " " + DTick;
        MSpeed++
        if(DTick==5) {
            Chat.print("§8Disable BoostMode");
            BTick = 0;
        }
        if(MSpeed>=60) {
            if(MSpeed<61){
            FTick = DTick+1;  
              Chat.print("§7Ready For §e§l" + FTick + " §7Boost!");
              DTick++
                };
        };
        if(MSpeed<100) {
            if(MSpeed>=20) {
                    mc.timer.timerSpeed = 1;
                            };
            };
        if(MSpeed>80 && mc.thePlayer.onGround) {
            MSpeed = 0;
            mc.timer.timerSpeed = module.settings.TGTi.get();
            Chat.print("§7§lBoost §f: §e§l" + DTick);
        };
    };
    if(module.settings.BM.get() == "Speed" && BTick==1) {
        module.tag=module.settings.BM.get() + " " + MSpeed + " " + DTick 
        MSpeed++
        if(DTick==3) {
            Chat.print("§8Disable BoostMode");
            BTick = 0;
        };
        if(MSpeed<60 && mc.thePlayer.onGround) {
            if(MSpeed>=15){
                    mc.thePlayer.jump();
            };
        };
        if(MSpeed>=60) {
            if(MSpeed<61){
                FTick = DTick+1;  
                Chat.print("§7Ready For §e§l" + FTick + "§7 Boost!");
                DTick++
            };
        };
        if(MSpeed>80 && mc.thePlayer.onGround) {
            MSpeed = 0;
            setMoveSpeed(module.settings.Speed.get());
            chat.print("§7§lBoost §f: §e§l" + DTick);
        };
    };
    if(BTick==0) {
        var Speed2 = "NoBoost";
        module.tag=Speed2;
        if(mc.thePlayer.onGround) {
            mc.thePlayer.jump();
        };
    };
});
module.on('disable', function() {
    mc.timer.timerSpeed = 1;
});
});
