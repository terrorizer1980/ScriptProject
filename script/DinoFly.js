var scriptName = "DinoFly";
var scriptAuthor = "DinoFeng";
var scriptVersion = "1.0";
var scriptGithub = "https://github.com/DinoFengz/MCProject";
var script = registerScript({
    name: "DinoFly",
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
var PaperTick = 0;
var AirCollideTick = 0;
var NVTick = 0;
var MinemoraTick = 0;
var HypixelTick = 0;
var HycraftTick = 0;
function ChatP(_Chat) {
    Chat.print("§8[§e§lDinoFly§8] §f§l" + _Chat)
}
Math.radian = function(deg) {
    return deg * Math.PI / 180;
}
function setSpeed(_speed) {
    var playerYaw = Math.radian(mc.thePlayer.rotationYaw);
    mc.thePlayer.motionX = _speed * -Math.sin(playerYaw);
    mc.thePlayer.motionZ = _speed * Math.cos(playerYaw);
}
function setDiagSpeed(_speed) {
    var playerYaw = Math.radian(mc.thePlayer.rotationYaw + 90);
    mc.thePlayer.motionX = _speed * -Math.sin(playerYaw);
    mc.thePlayer.motionZ = _speed * Math.cos(playerYaw);
}
function setMoveSpeed(_speed) {
    if (mc.gameSettings.keyBindLeft.isKeyDown() || mc.gameSettings.keyBindRight.isKeyDown()) {
        setDiagSpeed(_speed*-mc.thePlayer.moveStrafing);
    } else {
        setSpeed(_speed * mc.thePlayer.moveForward);
    }
}

script.registerModule({
    name: "DinoFly",
    description: "More Fly mode for LiquidBounce",
    category: "Movement",
    tag: "NULL",
    settings: {
        Mode:Setting.list({
            name: "Mode",
            default: "Creative",
            values: ["Creative","Vanilla","PaperMC","AirSlow","Verus","NeruxVace","Minemora","Hypixel","HyCraft"]
        }),
        FakeDamage:Setting.boolean({
            name: "Damage",
            default: false
        }),
        VanillaSpeed:Setting.float({
            name: "Vanilla-Speed",
            default: 1,
            min: 1,
            max: 10
        }),
        VanillaVerticalSpeed:Setting.float({
            name: "Vanilla-VerticalSpeed",
            default: 1,
            min: 1,
            max: 10
        }),
        PaperSpeed:Setting.float({
            name: "PaperMC-Speed",
            default: 1,
            min: 1,
            max: 10
        }),
        FlagHopHeight:Setting.float({
            name: "FlagHop-Height",
            default: 2,
            min: 1,
            max: 10
        }),
        NeVTick:Setting.float({
            name: "NeruxVace-Tick",
            default: 3,
            min: 1,
            max: 10
        }),
        MinemoraTick:Setting.float({
            name: "Minemora-Tick",
            default: 5,
            min: 1, 
            max: 7
        }),
        MinemoraMotionDown:Setting.float({
            name: "Minemora-MotionDown",
            default: 0.085,
            min: 0,
            max: 1
        }),
        MinemoraMotionUp:Setting.float({
            name: "Minemora-MotionUp",
            default: 0.031,
            min: 0,
            max: 1
        }),
        HyCraftSpeed:Setting.float({
            name: "HyCraft-Speed",
            default: 10,
            min: 5,
            max: 10
        })
    }
}, 
    function (module) {
module.on("enable", function () {
    PaperTick = 0;
    AirCollideTick = 0;
    NVTick = 0;
    MinemoraTick = 0;
    HypixelTick = 0;
    HycraftTick = 0;
    Verus2times = 0;
    Verus2Timer.reset();
    if (module.settings.FakeDamage.get() == true && mc.thePlayer.onGround) {
        for (var i = 0; i <= 49; i++) {
            mc.thePlayer.sendQueue.addToSendQueue(new C04(mc.thePlayer.posX, mc.thePlayer.posY + 0.0650, mc.thePlayer.posZ, false));
            mc.thePlayer.sendQueue.addToSendQueue(new C04(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, i >= 49));
        }
    }
});   
module.on("packet", function (event) {
    var packet = event.getPacket();
    if(packet instanceof C03) {
        if(module.settings.Mode.get() == "Hypixel") {
            packet.onGround = 0;
        }
    }
});
module.on("jump", function (event) {
    if(module.settings.Mode.get() == "Hypixel") {
        event.cancelEvent();
    }
})
module.on("update", function () {
    module.tag=module.settings.Mode.get();
    if(module.settings.Mode.get() == "Creative") {
        mc.thePlayer.capabilities.allowFlying = true;
    }
    else if(module.settings.Mode.get() == "Vanilla") {
        mc.thePlayer.motionX = 0;
        mc.thePlayer.motionY = 0;
        mc.thePlayer.motionZ = 0;
        if (mc.gameSettings.keyBindForward.isKeyDown()) {
            var dir = Math.radian(mc.thePlayer.rotationYaw);
            mc.thePlayer.motionX += -Math.sin(dir) * module.settings.VanillaSpeed.get();
            mc.thePlayer.motionZ += Math.cos(dir) * module.settings.VanillaSpeed.get();
        };
        if (mc.gameSettings.keyBindRight.isKeyDown()) {
            var dir = Math.radian(mc.thePlayer.rotationYaw + 90);
            mc.thePlayer.motionX += -Math.sin(dir) * module.settings.VanillaSpeed.get();
            mc.thePlayer.motionZ += Math.cos(dir) * module.settings.VanillaSpeed.get();
        };
        if (mc.gameSettings.keyBindBack.isKeyDown()) {
            var dir = Math.radian(mc.thePlayer.rotationYaw + 180);
            mc.thePlayer.motionX += -Math.sin(dir) * module.settings.VanillaSpeed.get();
            mc.thePlayer.motionZ += Math.cos(dir) * module.settings.VanillaSpeed.get();
        };
        if (mc.gameSettings.keyBindLeft.isKeyDown()) {
            var dir = Math.radian(mc.thePlayer.rotationYaw + 270);
            mc.thePlayer.motionX += -Math.sin(dir) * module.settings.VanillaSpeed.get();
            mc.thePlayer.motionZ += Math.cos(dir) * module.settings.VanillaSpeed.get();
        };
        if (mc.gameSettings.keyBindJump.isKeyDown()) {
            mc.thePlayer.motionY += module.settings.VanillaVerticalSpeed.get();
        };
        if (mc.gameSettings.keyBindSneak.isKeyDown()) {
            mc.thePlayer.motionY -= module.settings.VanillaVerticalSpeed.get();
        }
    }
    else if(module.settings.Mode.get() == "PaperMC") {
        mc.thePlayer.motionX = 0;
        mc.thePlayer.motionY = -0.4;
        mc.thePlayer.motionZ = 0;
        if (mc.gameSettings.keyBindForward.isKeyDown()) {
            var dir = Math.radian(mc.thePlayer.rotationYaw);
            mc.thePlayer.motionX += -Math.sin(dir) * module.settings.PaperSpeed.get();
            mc.thePlayer.motionZ += Math.cos(dir) * module.settings.PaperSpeed.get();
        };
        if (mc.gameSettings.keyBindRight.isKeyDown()) {
            var dir = Math.radian(mc.thePlayer.rotationYaw + 90);
            mc.thePlayer.motionX += -Math.sin(dir) * module.settings.PaperSpeed.get();
            mc.thePlayer.motionZ += Math.cos(dir) * module.settings.PaperSpeed.get();
        };
        if (mc.gameSettings.keyBindBack.isKeyDown()) {
            var dir = Math.radian(mc.thePlayer.rotationYaw + 180);
            mc.thePlayer.motionX += -Math.sin(dir) * module.settings.PaperSpeed.get();
            mc.thePlayer.motionZ += Math.cos(dir) * module.settings.PaperSpeed.get();
        };
        if (mc.gameSettings.keyBindLeft.isKeyDown()) {
            var dir = Math.radian(mc.thePlayer.rotationYaw + 270);
            mc.thePlayer.motionX += -Math.sin(dir) * module.settings.PaperSpeed.get();
            mc.thePlayer.motionZ += Math.cos(dir) * module.settings.PaperSpeed.get();
        };
        if (mc.gameSettings.keyBindJump.isKeyDown() && PaperTick<25) {
            mc.thePlayer.motionY += module.settings.PaperSpeed.get();
            PaperTick++
        };
        if (mc.gameSettings.keyBindJump.isKeyDown() && PaperTick==26) {
            ChatP("Hold Down")            
        }
        if (mc.gameSettings.keyBindJump.isKeyDown() && PaperTick>24) {
            PaperTick++
        };
        if(PaperTick==80) {
            PaperTick = 0;
        }
        if (mc.gameSettings.keyBindSneak.isKeyDown()) {
            mc.thePlayer.motionY -= module.settings.PaperSpeed.get();
        }
    }
    else if(module.settings.Mode.get() == "AirSlow") {
        mc.thePlayer.motionX = 0;
        mc.thePlayer.motionY = 0;
        mc.thePlayer.motionZ = 0;
    }
    else if(module.settings.Mode.get() == "Verus") {
        if (mc.thePlayer.motionY < 0) {
            mc.thePlayer.motionY = 0;
            mc.thePlayer.onGround = 1;
        }
    }
    else if(module.settings.Mode.get() == "NeruxVace") {
        if(!mc.thePlayer.onGround) {
            NVTick++
        }
        //skid from fly mode lmfao
        if(NVTick>=module.settings.NeVTick.get() && !mc.thePlayer.onGround) {
            NVTick = 0;
            mc.thePlayer.motionY = 0.015
        }
    }
    else if(module.settings.Mode.get() == "Minemora") {
        if(mc.thePlayer.onGround) {
            mc.timer.timerSpeed = 1;
        }
        if(!mc.thePlayer.onGround) {
            mc.timer.timerSpeed = 0.7;
            mc.thePlayer.motionY = -module.settings.MinemoraMotionDown.get();
        }
        MinemoraTick++
        if(MinemoraTick==module.settings.MinemoraTick.get() && !mc.thePlayer.onGround) {
            mc.thePlayer.motionY = module.settings.MinemoraMotionUp.get();
            MinemoraTick = 0;
        }
    }
    else if(module.settings.Mode.get() == "Hypixel") {
        mc.thePlayer.motionY = 0;
        mc.thePlayer.onGround = true;
        if (mc.gameSettings.keyBindJump.pressed) {
            mc.thePlayer.motionY = 0.2;
        }
        if (mc.gameSettings.keyBindSneak.pressed) {
            mc.thePlayer.motionY = -0.2;
        }
        HypixelTick++
        if (HypixelTick==4) {
            mc.thePlayer.setPosition(mc.thePlayer.posX, mc.thePlayer.posY + 0.0007, mc.thePlayer.posZ);
            HypixelTick = 0;
        }
    }
    else if (module.settings.Mode.get() == "HyCraft") {
        mc.timer.timerSpeed = 0.1;
        mc.thePlayer.motionY = 0;
        HycraftTick++
        if(HycraftTick==4) {
            setMoveSpeed(module.settings.HyCraftSpeed.get());    
        }  
        if(module.settings.HyCraftSpeed.get() > 10) {
            ChatP("Autodisable for limited speed");
            module.setState(false)
        }
    }
});
module.on("disable", function () {
    if(module.settings.Mode.get() == "Creative") {
        mc.thePlayer.capabilities.allowFlying = false;
        mc.thePlayer.capabilities.isFlying = false;
    }
    if(module.settings.Mode.get() == "HyCraft") {
        mc.thePlayer.motionX = 0;
        mc.thePlayer.motionZ = 0;
    }
    mc.timer.timerSpeed = 1;
});
});