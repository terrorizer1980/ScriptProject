//ScriptName
var scriptName = "Motion/ModuleToggle/function Tutorial";
//ScripAuthor
var scriptAuthor = "DinoFeng";
//ScriptVersion
var scriptVersion = "1.0";
var script = registerScript({
    name: "ExampleScript2",
    version: "1.0",
    authors: ["DinoFeng"]
});
//A Prefix Broadcast Function
function Broadcast(test) {
    Chat.print("§7[§f§lExampleTutorial§7] §e§l" + test);
}
script.registerModule({
    name: "Test2",
    description: "your description here!",
    category: "Client",
    tag: "Your Tag Here",
    settings: {
        //MotionX
        motionx:Setting.float({
            name: "MotionX",
            default: 0.1,
            min: 0,
            max: 10
        }),
        //MotionY
        motiony:Setting.float({
            name: "MotionY",
            default: 0.1,
            min: 0,
            max: 10
        }),
        //MotionZ
        motionz:Setting.float({
            name: "MotionZ",
            default: 0.1,
            min: 0,
            max: 10
        }),
    }
}, 
    function (module) {
module.on('enable', function() {
    //Module Get Fly
    var Fly = moduleManager.getModule("Fly");
    //Fly Toggle
    Fly.setState(true);
    //Get Fly State
    Chat.print("Fly State : " + Fly.getState())
    //Fly Disable
    Fly.setState(false);
    //Broadcast Work
    Broadcast("test");
})
module.on('update', function() {
    //Always Motion
    mc.thePlayer.motionX = module.settings.motionx.get();
    mc.thePlayer.motionZ = module.settings.motiony.get();
    mc.thePlayer.motionY = module.settings.motionz.get();
});
});
