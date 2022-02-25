var scriptName = "MineGlide";
var scriptAuthor = "DinoFeng";
var scriptVersion = "3.0";
var scriptGithub = "https://github.com/DinoFengz/LiquidBounce";
var latestupdate = "25/2/2022";
var script = registerScript({
    name: "Mine Glide",
    version: "3.0",
    authors: ["DinoFeng"]
});
var MTick = 0;
var MFTick = 0;
var ChatTick = 0;
var CTick = 0;
var BMGTick = 1;
var glideDelay = 0;
var FlyModeRegular;
script.registerModule({
    name: "MineGlide",
    description: "A Glide Script For FDPClient / LiquidBounce",
    category: "Movement",
    tag: "NULL",
    settings: {
        Mode:Setting.list({
            name: "Mode",
            default: "FirstStart",
            values:["Minemora","Minemora2","Minemora3","BoostMinemora"]
        }),
        MT:Setting.float({
            name: "Minemora-Tick",
            default: 3,
            min: 0,
            max: 10
        })
    }
}, 
    function (module) {
module.on('enable', function() {
    glideDelay = 0;
    BMGTick = 1;
    ChatTick = 0;
        if(module.settings.Mode.get() == "FirstStart") {
        chat.print("§0§m==================================================");
        chat.print("§8ScriptName §7: §e§l" + scriptName);
        chat.print("§8ScriptVersion §7: §e§l" + scriptVersion);
        chat.print("§8ScriptDescription §7: §e§l" + module.description);
        chat.print("§8ScriptCategory §7: §e§l" + module.category);
        chat.print("§8ScriptGithub §7: §e§l" + scriptGithub);
        chat.print("§0§m==================================================");
        }
        if(module.settings.Mode.get() == "Minemora") {
            MTick = 0;
            mc.timer.timerSpeed = 0.78;
        }
        if(module.settings.Mode.get() == "Minemora2") {
            mc.timer.timerSpeed = 0.5;
        }
        if(module.settings.Mode.get() == "Minemora3") {
            var Fly = moduleManager.getModule("Fly");
            var FlyMode = Fly.getValue("Mode");
            var FlyNV = Fly.getValue("neruxvace-ticks");
            FlyModeRegular = FlyMode.get();
            Fly.setState(true);
            FlyMode.set("NeruxVace");
            FlyNV.set(3);
            mc.timer.timerSpeed = 4;
            MFTick = 0;
        }   
        if(module.settings.Mode.get() == "BoostMinemora") {
            var Fly = moduleManager.getModule("Fly");
            var FlyMode = Fly.getValue("Mode");
            var FlyNV = Fly.getValue("neruxvace-ticks");
            FlyModeRegular = FlyMode.get();
            Fly.setState(true);
            FlyMode.set("NeruxVace");
            FlyNV.set(3);
            mc.timer.timerSpeed = 4;
            MFTick = 0;
        }   
});
module.on('update', function() {
    module.tag=module.settings.Mode.get();
    if(module.settings.Mode.get() == "Minemora") {
            if(!mc.thePlayer.onGround) {
                mc.thePlayer.motionY = -0.08;
                MTick++
                if(MTick >= module.settings.MT.get() && !mc.thePlayer.onGround) {
                    mc.thePlayer.motionY = 0.04;
                    MTick = 0;
                };
            };
    };
    if(module.settings.Mode.get() == "Minemora2") {
            if(!mc.thePlayer.onGround) {
                mc.thePlayer.motionY = -0.08;
                MTick++
                if(MTick >= 4 && !mc.thePlayer.onGround) {
                    mc.thePlayer.motionY = 0.076;
                    MTick = 0;
                }
            }
    }
    if(module.settings.Mode.get() == "Minemora3") {
        MFTick++
        if(MFTick==30) {
            module.setState(false);
        }
        }
    if(module.settings.Mode.get() == "BoostMinemora" && BMGTick==1) {
        MFTick++
        if(MFTick==20) {
            BMGTick = 0;
            var Fly = moduleManager.getModule("Fly");
            var FlyMode = Fly.getValue("Mode");
            Fly.setState(false);
            FlyMode.set(FlyModeRegular);
            mc.timer.timerSpeed = 0.7;
            chat.print("Change To Normal Mode");
        }
        }
    if(module.settings.Mode.get() == "BoostMinemora" && BMGTick==0) {
            mc.thePlayer.motionY = -0.0784      
            if (!mc.thePlayer.onGround) {
            glideDelay++
        }
        if (glideDelay >= 4 && !mc.thePlayer.onGround) {
            glideDelay = 0
            mc.thePlayer.motionY = 0.015
        }

    }
});
module.on('disable', function() {
    mc.timer.timerSpeed = 1;
    if(module.settings.Mode.get() == "Minemora3") {
            var Fly = moduleManager.getModule("Fly");
            var FlyMode = Fly.getValue("Mode");
            Fly.setState(false);
            FlyMode.set(FlyModeRegular);
        }
    if(module.settings.Mode.get() == "BoostMinemora") {
            var Fly = moduleManager.getModule("Fly");
            var FlyMode = Fly.getValue("Mode");
            Fly.setState(false);
            FlyMode.set(FlyModeRegular);
        }
});
});
