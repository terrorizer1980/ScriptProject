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
function setMoveSpeed(_speed) {
    var playerYaw = Math.radian(mc.thePlayer.rotationYaw);
    mc.thePlayer.motionX = _speed * mc.thePlayer.moveForward * -Math.sin(playerYaw);
    mc.thePlayer.motionZ = _speed * mc.thePlayer.moveForward * Math.cos(playerYaw);
}

var Tick = 0;

script.registerModule({
    name: "HyCraftFly",
    description: "Fly Script For HyCraft",
    category: "Movement",
    tag: "NULL",
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
            default: 4.2,
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
    module.tag = module.settings.BoostTickMin.get().toFixed(1) + " - " + module.settings.BoostTickMax.get().toFixed(1) + " " + module.settings.Speed.get()
    mc.timer.timerSpeed = 0.1;
    mc.thePlayer.motionY = 0;
    Tick++
    if(Tick >= module.settings.BoostTickMin.get()) {
        if(Tick < module.settings.BoostTickMax.get()) {
            setMoveSpeed(module.settings.Speed.get());
        }
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
    mc.thePlayer.motionX = 0;
    mc.thePlayer.motionZ = 0;
});
});
