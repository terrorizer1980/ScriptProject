//ScriptName
var scriptName = "Setting/Chat/AutoDisable Tutorial";
//ScripAuthor
var scriptAuthor = "DinoFeng";
//ScriptVersion
var scriptVersion = "1.0";
var script = registerScript({
    name: "ExampleScript",
    version: "1.0",
    authors: ["DinoFeng"]
});
script.registerModule({
    name: "Test",
    description: "your description here!",
    category: "Client",
    tag: "Your Tag Here",
    settings: {
        //Text Collector
        test:Setting.text({
            name: "text",
            default: "Hello World!"
        }),
        //Setting list
        test2:Setting.list({
            name: "testmode",
            default: "test1",
            values: ["test1","test2","test3"]
        }),
        //TrueOrFalse
        test3:Setting.boolean({
            name: "testboolean",
            default : true
        }),
        //Setting For Num!
        //also can use integer
        test4:Setting.float({
            name: "testfloat",
            default: 1,
            min: 0,
            max: 10
        })
    }
}, 
    function (module) {
module.on('enable', function() {
    //Send Public Chat Message Use:
    mc.thePlayer.sendChatMessage(module.settings.test.get());
    //Send Private Chat Message Use:
    Chat.print("Your Text Word Will Be :" + module.settings.test.get() + ".Your testmode mode will be:" + module.settings.test2.get() + ".Your settings boolean will be:" + module.settings.test3.get() + ".Your settings float will be :" + module.settings.test4.get());
});
module.on('update', function() {
    //AutoDisable
    module.setState(false);
});
});
