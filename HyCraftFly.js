var scriptName = "HyCraftFly";
var scriptAuthor = "DinoFeng";
var scriptVersion = "1.0";
var scriptGithub = "https://github.com/DinoFengz/ScriptProject";
var script = registerScript({
    name: "HyCraftFly",
    version: "1.0",
    authors: ["DinoFeng"]
});
var C03 = Java.type("net.minecraft.network.play.client.C03PacketPlayer");
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

var Tick = 0;

script.registerModule({
    name: "HyCraftFly",
    description: "Fly Script For HyCraft",
    category: "Movement",
    settings: {
        Speed:Setting.float({
            name: "Speed",
            default: 10,
            min: 1,
            max: 10
        }),
        BoostTickMin:Setting.float({
            name: "MinTick",
            default: 4,
            min: 1,
            max: 10
        }),
        BoostTickMax:Setting.float({
            name: "MaxTick",
            default: 5,
            min: 1,
            max: 10
        })
    }
}, 
    function (module) {
module.on("enable", function () {
    Tick = 0;
    mc.thePlayer.setPosition(mc.thePlayer.posX,mc.thePlayer.posY + 0.12,mc.thePlayer.posZ)
});
module.on("packet", function (event) {
    var packet = event.getPacket();
    if(packet instanceof C03) {
        packet.onGround = 1;
    }
});   
module.on("update", function () {
    mc.timer.timerSpeed = 0.1;
    mc.thePlayer.motionY = 0;
    Tick++
    if(Tick>module.settings.BoostTickMin.get() && Tick<module.settings.BoostTickMax.get()) {
        setMoveSpeed(module.settings.Speed.get());
    }
    if(Tick==10) {
        Chat.print("Anticheat everytime can ban you!")
    }
    if(Tick==15) {
        Chat.print("Anticheat almost can ban you now! (Fast Stop It)")
    }
});
module.on("disable", function () {
    Tick = 0;
    mc.timer.timerSpeed = 1;
});
});
