var scriptName = "MineAutoPlay";
var scriptAuthor = "DinoFeng";
var scriptVersion = "1.0";
var latestupdate = "24/2/2022";
var script = registerScript({
    name: "MineAutoPlay",
    version: "1.0",
    authors: ["DinoFeng"]
});
script.registerModule({
    name: "MineAutoPlay",
    description: "MineAutoPlay",
    category: "Misc",
}, 
    function (module) {
module.on('enable', function() {
    mc.thePlayer.sendChatMessage("/join");
});
module.on('update', function() {
    module.setState(false);
});
});
