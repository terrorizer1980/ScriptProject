var scriptName = "MoreAutoplay";
var scriptAuthor = "DinoFeng";
var scriptVersion = "2.0";
var scriptGithub = "https://github.com/DinoFengz/LiquidBounce";
var script = registerScript({
    name: "MoreAutoplay",
    version: "2.0",
    authors: ["DinoFeng"]
});
var S02PacketChat = Java.type("net.minecraft.network.play.server.S02PacketChat");
var minemora = 0;
var battleasya = 0;
script.registerModule({
    name: "MoreAutoplay",
    description: "More AutoPlay",
    category: "Misc",
    tag: "NULL",
    settings: {
        M:Setting.list({
            name: "Mode",
            default: "Minemora",
            values: ["Minemora","Battleasya"]
        }),
        ToggleMessage:Setting.boolean({
            name: "ToggleMessage",
            default: true
        })
    }

}, function (module) {
module.on("enable", function () {
    if(module.settings.ToggleMessage.get() == true) {
        chat.print("§0§m==================================================");
        chat.print("§8ScriptName §7: §e§l" + scriptName);
        chat.print("§8ScriptVersion §7: §e§l" + scriptVersion);
        chat.print("§8ScriptDescription §7: §e§l" + module.description);
        chat.print("§8ScriptCategory §7: §e§l" + module.category);
        chat.print("§8ScriptGithub §7: §e§l" + scriptGithub);
        chat.print("§0§m==================================================");
    };
    minemora = 1;
    battleasya = 1;
    });
module.on("packet", function (event) {
    var packet = event.getPacket();
    if (packet instanceof S02PacketChat) {
        //Limit tick count
        if(module.settings.M.get() == "Minemora") {
            minemora++
                if(minemora==100) {
                    minemora = 0;
                }
                if(minemora>10) {
                            if(packet.getChatComponent().getUnformattedText().contains("NUEVA PARTIDA")) {
                                mc.thePlayer.sendChatMessage("/join");
                                minemora = 0;
                            };
                            if(packet.getChatComponent().getUnformattedText().contains("Una nueva partida iniciada")) {
                                mc.thePlayer.sendChatMessage("/join");
                                minemora = 0;
                            };
                        }
        };
        if(module.settings.M.get() == "Battleasya") {
            battleasya++
            if(battleasya==100) {
                battleasya = 0;
            }
            if(battleasya>10) {
                if(packet.getChatComponent().getUnformattedText().contains("spectator gui")) {
                    mc.thePlayer.sendChatMessage("/sw leave");
                    mc.thePlayer.sendChatMessage("/sw autojoin");
                    battleasya = 0;
                            };
                if(packet.getChatComponent().getUnformattedText().contains("winning")) {
                    mc.thePlayer.sendChatMessage("/sw leave");
                    mc.thePlayer.sendChatMessage("/sw autojoin");
                    battleasya = 0;
                            };
            }
        }
    }
});
module.on("update", function () {
    module.tag=module.settings.M.get();
});
});
