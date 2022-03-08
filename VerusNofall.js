var scriptName = "VerusNofall";
var scriptAuthor = "DinoFeng";
var scriptVersion = "1.0";
var scriptGithub = "https://github.com/DinoFengz/ScriptProject";
var script = registerScript({
    name: "VerusNofall",
    version: "1.0",
    authors: ["DinoFeng"]
});
var C03 = Java.type("net.minecraft.network.play.client.C03PacketPlayer");
var test = 0;
var Tick = 0;

script.registerModule({
    name: "VerusNofall",
    description: "Better Nofall for verus",
    category: "Misc",
}, 
    function (module) {
module.on("enable", function () {
    test = 0;
    Tick = 0;
})
module.on("packet", function (event) {
    var packet = event.getPacket();
    if(packet instanceof C03) {
        if (mc.thePlayer.fallDistance - mc.thePlayer.motionY > 3.3 && mc.thePlayer.fallDistance > 3.5) {
            packet.onGround = 1;
        }
    }
});   
module.on("update", function () {
    if (mc.thePlayer.fallDistance - mc.thePlayer.motionY > 3.3 && mc.thePlayer.fallDistance > 3.5) {
        mc.thePlayer.motionY = -0.02
        mc.thePlayer.fallDistance = 0
        mc.thePlayer.motionX *= 0.6
        mc.thePlayer.motionZ *= 0.6
        needSpoof = true
    }
});
module.on("disable", function () {
    Tick = 0;
});
});
