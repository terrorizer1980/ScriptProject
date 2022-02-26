var scriptName = "MineGlide";
var scriptAuthor = "DinoFeng";
var scriptVersion = "4.0";
var scriptGithub = "https://github.com/DinoFengz/LiquidBounce";
var script = registerScript({
    name: "Mine Glide",
    version: "4.0",
    authors: ["DinoFeng"]
});
var A = 0;
var L1;
var L2;
var s_a = Setting.list({
            name: "ClientMode",
            default: "LiquidBounce",
            values:["LiquidBounce","FDPClient"]
        })

var s_b = Setting.boolean({
            name: "ToggleMessage",
            default: true
        })

var s_c = Setting.float({
            name: "Max",
            default: 20,
            min: 0,
            max: 30
        })
function Timer(_Timer) {
    mc.timer.timerSpeed = _Timer;
}
script.registerModule({
    name: "MineGlide",
    description: "Glide On Minemora!",
    category: "Movement",
    settings: {
        CM: s_a,
        ToggleMessage: s_b,
        Max: s_c
    }
}, 
    function (module) {
module.on('enable', function() {
    Timer(5);
    if(module.settings.CM.get() == "FDPClient") {
        var F = moduleManager.getModule("Fly");
        var FM = F.getValue("Mode");
        var FNT = F.getValue("neruxvace-ticks");
        F.setState(true);
        L1 = FM.get();
        FM.set("NeruxVace");
        FNT.set(3);
    }
    if(module.settings.CM.get() == "LiquidBounce") {
        var F = moduleManager.getModule("Glide");
        var FM = F.getValue("Mode");
        var FNT = F.getValue("neruxvace-ticks");
        F.setState(true);
        L2 = FM.get();
        FM.set("NeruxVace");
        FNT.set(3);
    }
    if(module.settings.ToggleMessage.get() == true) {
        chat.print("§0§m==================================================");
        chat.print("§8ScriptName §7: §e§l" + scriptName);
        chat.print("§8ScriptVersion §7: §e§l" + scriptVersion);
        chat.print("§8ScriptDescription §7: §e§l" + module.description);
        chat.print("§8ScriptCategory §7: §e§l" + module.category);
        chat.print("§8ScriptGithub §7: §e§l" + scriptGithub);
        chat.print("§0§m==================================================");
    };
    A = 0;
});
module.on('update', function() {
    A++
    if(A==module.settings.Max.get()) {
        A = 0;
        module.setState(false);
    }
})
module.on('disable', function() {
    Timer(5);
    if(module.settings.CM.get() == "FDPClient") {
        var F = moduleManager.getModule("Fly");
        var FM = F.getValue("Mode");
        FM.set(L1);
        F.setState(false);
    }
    if(module.settings.CM.get() == "LiquidBounce") {
        var F = moduleManager.getModule("Glide");
        var FM = F.getValue("Mode");
        FM.set(L2);
        F.setState(false);
    }
});
});
