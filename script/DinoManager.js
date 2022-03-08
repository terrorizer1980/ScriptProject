var scriptName = "DinoScript";
var scriptAuthor = "DinoFeng";
var scriptVersion = "1.0";
var scriptGithub = "https://github.com/DinoFengz/MCProject";
var script = registerScript({
    name: "DinoScript",
    version: "1.0",
    authors: ["DinoFeng"]
});
var C02 = Java.type("net.minecraft.network.play.client.C02PacketUseEntity");
var C02A = Java.type("net.minecraft.network.play.client.C02PacketUseEntity.Action");
var C16 = Java.type("net.minecraft.network.play.client.C16PacketClientStatus");
var C0F = Java.type("net.minecraft.network.play.client.C0FPacketConfirmTransaction");
var C06 = Java.type("net.minecraft.network.play.client.C03PacketPlayer.C06PacketPlayerPosLook");
var C05 = Java.type('net.minecraft.network.play.client.C03PacketPlayer.C05PacketPlayerLook')
var C03 = Java.type("net.minecraft.network.play.client.C03PacketPlayer");
var C04 = Java.type("net.minecraft.network.play.client.C03PacketPlayer.C04PacketPlayerPosition");
var C08 = Java.type("net.minecraft.network.play.client.C08PacketPlayerBlockPlacement");
var C09 = Java.type('net.minecraft.network.play.client.C09PacketHeldItemChange');
var S02 = Java.type("net.minecraft.network.play.server.S02PacketChat");
var S12 = Java.type('net.minecraft.network.play.server.S12PacketEntityVelocity');
var C07 = Java.type("net.minecraft.network.play.client.C07PacketPlayerDigging");
var BlockPos = Java.type('net.minecraft.util.BlockPos');
var thePlayer = Java.type("net.ccbluex.liquidbounce.utils.MovementUtils");
var Block = Java.type('net.minecraft.block.Block');
var Blocks = Java.type('net.minecraft.init.Blocks');
var S08 = Java.type('net.minecraft.network.play.server.S08PacketPlayerPosLook');
var RotationUtils = Java.type('net.ccbluex.liquidbounce.utils.RotationUtils');
var Rotation = Java.type('net.ccbluex.liquidbounce.utils.Rotation');
var ItemBucket = Java.type("net.minecraft.item.ItemBucket");
var GuiChest = Java.type("net.minecraft.client.gui.inventory.GuiChest");
var Blocks = Java.type("net.minecraft.init.Blocks");
var EntityBoat = Java.type("net.minecraft.entity.item.EntityBoat");
var TestGetIP;
var TickTag;
var HurtTick;
var Fly = moduleManager.getModule("Fly");

function getIP() {
 if (mc.getCurrentServerData() != null) {
    return (mc.getCurrentServerData().serverIP.toLowerCase());
  }
  else if(mc.getCurrentServerData() == null) {
    return("SinglePlayer")
  }
};

function inVoid() {
    if (mc.thePlayer.posY < -1.8) {
        return true;
    } else {
        return mc.theWorld.getCollidingBoundingBoxes(mc.thePlayer, mc.thePlayer.getEntityBoundingBox().offset(0, -(mc.thePlayer.posY / 2), 0).expand(0, (mc.thePlayer.posY / 2), 0)).isEmpty();
    }
};

function ChatP(_Chat) {
    Chat.print("§8[§e§lDinoManager§8] §f§l" + _Chat)
}
Math.radian = function(deg) {
    return deg * Math.PI / 180;
}

script.registerModule({
    name: "DinoManager",
    description: "Fix & optimize modules for LiquidBounce / FDPClient",
    category: "Misc",
    tag: "NULL",
    settings: {
        X:Setting.boolean({
            name:"Info: ",
            default: true
        }),
        Username:Setting.text({
            name: "Username",
            default: "-"
        }),
        Pos:Setting.text({
            name: "Pos",
            default: "-"
        }),
        Server:Setting.text({
            name: "ServerIP",
            default: "-"
        }),
        XX:Setting.boolean({
            name: " ",
            default: false
        }),
        XXX:Setting.boolean({
            name: "Generals: ",
            default: true
        }),
        Help:Setting.boolean({
            name: "Help",
            default: true
        }),
        AutoSetup:Setting.boolean({
            name: "FirstSetup",
            default: true
        }),
        DisableModule:Setting.boolean({
            name: "DisableDinoManager",
            default: false
        }),
        XXXX:Setting.boolean({
            name: " ",
            default: false
        }),
        XXXXX:Setting.boolean({
            name: "Tools: ",
            default: true
        }),
        ModuleTag:Setting.list({
            name: "ModuleTag",
            default: "Author",
            values: ["Server","Author","Username","None"]
        }),
        FlyModify:Setting.boolean({
            name: "FlyModify",
            default: false
        }),
        SurvivalFly:Setting.boolean({
            name: "SurvivalFly",
            default: false
        }),
        DisablerSetup:Setting.boolean({
            name: "DisablerSetup",
            default: false
        }),
        DSetupMode:Setting.list({
            name: "DisablerSetupMode",
            default: "Vulcan",
            values: ["Vulcan","Battleasya"]
        }),
        CombatDetector:Setting.boolean({
            name: "CombatDetector",
            default: true
        })
    }
}, 
    function (module) {
module.on("enable", function () {
    TickTag = 0;
    HurtTick = 0;
    if(module.settings.AutoSetup.get() == true) {
        commandManager.executeCommand(".autodisable DinoManager none");
        module.settings.AutoSetup.set(false);
    }
});   
module.on("attack", function () {
    if(module.settings.CombatDetector.get() == true) {
        ChatP("Attack Detected")
    }
})
module.on("update", function () {
    module.settings.XXXX.set(true);
    module.settings.XXX.set(true);
    module.settings.XX.set(true);
    if(module.settings.X.get() == false) {
        module.settings.Username.set("-");
        module.settings.Pos.set("-");
        module.settings.Server.set("-");
    };
    if(module.settings.X.get() == true) {
        module.settings.Username.set(mc.thePlayer.getName());
        module.settings.Pos.set(Math.round(mc.thePlayer.posX)+", "+Math.round(mc.thePlayer.posY)+", "+Math.round(mc.thePlayer.posZ));
        module.settings.Server.set(getIP());
    };
    if(module.settings.Help.get() == true) {
        chat.print("§0§m==================================================");
        chat.print("§8ScriptName §7: §e§l" + scriptName);
        chat.print("§8ScriptVersion §7: §e§l" + scriptVersion);
        chat.print("§8ScriptDescription §7: §e§l" + module.description);
        chat.print("§8ScriptCategory §7: §e§l" + module.category);
        chat.print("§8ScriptGithub §7: §e§l" + scriptGithub);
        chat.print("§0§m==================================================");
        module.settings.Help.set(false);        
    };
    if(module.settings.DisableModule.get() == true) {
        module.settings.Username.set("-");
        module.settings.Pos.set("-");
        module.settings.Server.set("-");
        module.settings.DisableModule.set(false);
        module.setState(false);
    };
    if(module.settings.XXXXX.get() == true) {
        if(module.settings.ModuleTag.get() == "Author") {
            TickTag++
            if(TickTag==5) {
                module.tag = "By DinoFeng";
            } 
            else if(TickTag==10) {
                module.tag = "y DinoFeng ";
            }
            else if(TickTag==15) {
                module.tag = " DinoFeng B";
            }
            else if(TickTag==20) {
                module.tag = "DinoFeng By";
            }
            else if(TickTag==25) {
                module.tag = "inoFeng By ";
            }
            else if(TickTag==30) {
                module.tag = "noFeng By D";
            }
            else if(TickTag==35) {
                module.tag = "oFeng By Di";
            }
            else if(TickTag==40) {
                module.tag = "Feng By Din";
            }
            else if(TickTag==45) {
                module.tag = "eng By Dino";
            }
            else if(TickTag==50) {
                module.tag = "ng By DinoF";
            }
            else if(TickTag==55) {
                module.tag = "g By DinoFe";
            }
            else if(TickTag==60) {
                module.tag = " By DinoFen";
            }
            else if(TickTag==65) {
                module.tag = "By DinoFeng";
                TickTag = 0;
            }
        };
        if(module.settings.ModuleTag.get() == "Server") {
            module.tag=getIP();
        };
        if(module.settings.ModuleTag.get() == "Username") {
            module.tag=mc.thePlayer.getName();
        };
        if(module.settings.ModuleTag.get() == "None") {
            module.tag = null;
        }
    };
    if(module.settings.FlyModify.get() == true) {
        if(Fly.getState() == true) {
            mc.thePlayer.capabilities.isFlying = true;
        }
        if(Fly.getState() == false && mc.thePlayer.capabilities.allowFlying == false) {
            mc.thePlayer.capabilities.isFlying = false;
        }
    };
    if(module.settings.SurvivalFly.get() == true) {
        mc.thePlayer.capabilities.allowFlying = true;
    };
    if(module.settings.DisablerSetup.get() == true) {
        if(module.settings.DSetupMode.get() == "Vulcan") {
            var Disabler = moduleManager.getModule("Disabler")
            var Disabler2 = Disabler.getValue("Mode");
            var Disabler3 = Disabler.getValue("fakelagposition");
            var Disabler4 = Disabler.getValue("fakelagattack");
            var Disabler5 = Disabler.getValue("fakelagblock");
            Disabler.setState(true);
            Disabler2.set("fakelag");
            Disabler3.set(true);
            Disabler4.set(false);
            Disabler5.set(false);
        };
        if(module.settings.DSetupMode.get() == "Battleasya") {
            var Disabler = moduleManager.getModule("Disabler")
            var Disabler2 = Disabler.getValue("Mode");
            var Disabler3 = Disabler.getValue("fakelagposition");
            var Disabler4 = Disabler.getValue("fakelagattack");
            var Disabler5 = Disabler.getValue("fakelagblock");
            Disabler.setState(true);
            Disabler2.set("fakelag");
            Disabler3.set(false);
            Disabler4.set(true);
            Disabler5.set(false);
        }
    };
    if(module.settings.CombatDetector.get() == true) {
        if(mc.thePlayer.hurtTime > 1 && HurtTick==0) {
            ChatP("Hurt Detected!")
            HurtTick = 1;
        };
        if(mc.thePlayer.hurtTime == 0 && HurtTick==1) {
            HurtTick = 0;
        };
    }
});
module.on("disable", function () {
    module.settings.Username.set("-");
    module.settings.Pos.set("-");
    module.settings.Server.set("-");
    mc.thePlayer.capabilities.isFlying = false;
    mc.thePlayer.capabilities.allowFlying = false;
});
});
