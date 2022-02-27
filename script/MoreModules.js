var scriptName = "MoreModules";
var scriptAuthor = "DinoFeng";
var scriptVersion = "5.1";
var scriptGithub = "https://github.com/DinoFengz/LiquidBounce";
var script = registerScript({
    name: "MoreModules",
    version: "5.1",
    authors: ["DinoFeng"]
});
//function
function DChat(_Chat) {
    Chat.print("§8[§c§lModule§b§lDisabler§8] §fToggled §e§l" + _Chat + "§f!")
}
function TChat(_Chat) {
    Chat.print("§8[§c§lModule§b§lToggler§8] §fToggled §e§l" + _Chat + "§f!")
}

script.registerModule({
    name: "ModuleChecker",
    description: "Cool / Smooth ModuleChecker For LiquidBounceb73 / FDPClient!",
    category: "Client",
    tag: "NULL",
    settings: {
    Mode: Setting.list({
        name:"Mode",
        default: "FirstLaunch",
        values: ["Killaura","Scaffold","Fly","Step","HighJump","LongJump","Phase","Criticals","Cheststealer","InventoryCleaner","Custom","All"]
        }),
    ClientMode: Setting.list({
        name:"ClientMode",
        default: "LiquidBounceb73",
        values: ["FDPClient","LiquidBounceb73"]
        }),
    MN: Setting.text({
        name: "CustomName",
        default: "Fly"
    }),
    CM: Setting.text({
        name: "CustomModule-1",
        default: "Mode"
    }),
    CM2: Setting.text({
        name: "CustomModule-2",
        default: "motionreset"
    }),
    CM3: Setting.text({
        name: "CustomModule-3",
        default: "motionreset"
    }),
    CM4: Setting.text({
        name: "CustomModule-4",
        default: "motionreset"
    }),
    CM5: Setting.text({
        name: "CustomModule-5",
        default: "motionreset"
    }),
    AD: Setting.boolean({
        name: "AutoDisable",
        default: false
    })
    }
}, 
    function (module) {
module.on('enable', function () {
    if(module.settings.Mode.get() == "FirstLaunch") {
        chat.print("§0§m==================================================");
        chat.print("§8ScriptName §7: §e§l" + scriptName);
        chat.print("§8ScriptVersion §7: §e§l" + scriptVersion);
        chat.print("§8ScriptDescription §7: §e§l" + module.description);
        chat.print("§8ScriptCategory §7: §e§l" + module.category);
        chat.print("§8ScriptGithub §7: §e§l" + scriptGithub);
        chat.print("§0§m==================================================");
        mc.thePlayer.SendChatMessage("More Module For LiquidBounce In : " + scriptGithub);
    };
    if(module.settings.ClientMode.get() == "FDPClient") {
    if(module.settings.Mode.get() == "Fly") {
    var Fly = moduleManager.getModule("Fly");
    var FlyMode = Fly.getValue("Mode");
    var FlyMotionreset = Fly.getValue("Motionreset");
    var FlyMark = Fly.getValue("Mark");
    var FlyFakedamage = Fly.getValue("Fakedamage");
        chat.print("§0§m==========§r§f§lFly§r§0§m==========");
        chat.print("State : §e§l" + Fly.getState());
        chat.print("Mode : §e§l" + FlyMode.get());
        chat.print("MotionReset : §e§l" + FlyMotionreset.get());
        chat.print("Mark : §e§l" + FlyMark.get());
        chat.print("Fakedamage : §e§l" + FlyFakedamage.get());
    };
    if(module.settings.Mode.get() == "Killaura") {
    var Killaura = moduleManager.getModule("Killaura");
    var KillauraRange = Killaura.getValue("Range");
    var Killauradiscoverrange = Killaura.getValue("Discoverrange");
    var Killaurathroughwallsrange = Killaura.getValue("throughwallsrange");
    var Killauraswingrange = Killaura.getValue("Swingrange");
    var KillauraTargetmode = Killaura.getValue("Targetmode");
    var Killaurarotationmode = Killaura.getValue("Rotationmode");
    var Killauraautoblock = Killaura.getValue("Autoblock");
    var Killauramaxcps = Killaura.getValue("Maxcps");
    var Killauramincps = Killaura.getValue("Mincps");
        chat.print("§0§m==========§r§f§lKillaura§r§0§m==========");
        chat.print("State : §e§l" + Killaura.getState());
        chat.print("CPS : §e§l" + Killauramincps.get() + "§e§l ~ §e§l" + Killauramaxcps.get());
        chat.print("Range : §e§l" + KillauraRange.get());
        chat.print("Swingrange : §e§l" + Killauraswingrange.get());
        chat.print("Throughwallsrange : §e§l" + Killaurathroughwallsrange.get());
        chat.print("Discoverrange : §e§l" + Killauradiscoverrange.get());
        chat.print("Targetmode : §e§l" + KillauraTargetmode.get());
        chat.print("Rotationmode : §e§l" + Killaurarotationmode.get());
        chat.print("Autoblockmode : §e§l" + Killauraautoblock.get());
   };
    if(module.settings.Mode.get() == "Scaffold") {
    var Scaffold = moduleManager.getModule("Scaffold");
    var Scaffoldmaxdelay = Scaffold.getValue("Maxdelay");
    var Scaffoldmindelay = Scaffold.getValue("Mindelay");
    var Scaffoldautoblock = Scaffold.getValue("Autoblock");
    var Scaffoldtowermode = Scaffold.getValue("Towermode");
    var Scaffoldmodifier = Scaffold.getValue("Speedmodifier");
    var Scaffoldsafewalk = Scaffold.getValue("SafeWalk");
    var Scaffoldsprint = Scaffold.getValue("sprint");
    var Scaffoldtimer = Scaffold.getValue("Timer");
    var Scaffoldmark = Scaffold.getValue("Mark");
    var Scaffoldcounter = Scaffold.getValue("Counter");
        chat.print("§0§m==========§r§f§lScaffold§r§0§m==========");
        chat.print("State : §e§l" + Scaffold.getState());
        chat.print("Delay : §e§l" + Scaffoldmindelay.get() + " ~ " + Scaffoldmindelay.get());
        chat.print("Towermode : §e§l" + Scaffoldtowermode.get());
        chat.print("SpeedModifier : §e§l" + Scaffoldmodifier.get());
        chat.print("Sprint : §e§l" + Scaffoldsprint.get());
        chat.print("Mark : §e§l" + Scaffoldmark.get());
        chat.print("Counter : §e§l" + Scaffoldcounter.get());
        chat.print("Autoblock : §e§l" + Scaffoldautoblock.get());
        chat.print("Timer : §e§l" + Scaffoldtimer.get());
    };
    if(module.settings.Mode.get() == "InventoryCleaner") {
    var InventoryCleaner = moduleManager.getModule("InventoryCleaner");
    var InventoryCleanerMaxdelay = InventoryCleaner.getValue("Maxdelay");
    var InventoryCleanerMindelay = InventoryCleaner.getValue("Mindelay");
    var InventoryCleanerInvopen = InventoryCleaner.getValue("Invopen");
    var InventoryCleanerNomove = InventoryCleaner.getValue("nomove");
    var InventoryCleanerNocombat = InventoryCleaner.getValue("nocombat");
    var InventoryCleanerItemdelay = InventoryCleaner.getValue("itemdelay");
    var InventoryCleanerArmor = InventoryCleaner.getValue("Armor");
    var InventoryCleanerS1 = InventoryCleaner.getValue("sortslot-1");
    var InventoryCleanerS2 = InventoryCleaner.getValue("sortslot-2");
    var InventoryCleanerS3 = InventoryCleaner.getValue("sortslot-3");
    var InventoryCleanerS4 = InventoryCleaner.getValue("sortslot-4");
    var InventoryCleanerS5 = InventoryCleaner.getValue("sortslot-5");
    var InventoryCleanerS6 = InventoryCleaner.getValue("sortslot-6");
    var InventoryCleanerS7 = InventoryCleaner.getValue("sortslot-7");
    var InventoryCleanerS8 = InventoryCleaner.getValue("sortslot-8");
    var InventoryCleanerS9 = InventoryCleaner.getValue("sortslot-9");
        chat.print("§0§m==========§r§f§lInventoryCleaner§r§0§m==========");
        chat.print("State : §e§l" + InventoryCleaner.getState());
        chat.print("Delay : §e§l" + InventoryCleanerMindelay.get() + " ~ " + InventoryCleanerMaxdelay.get());
        chat.print("Itemdelay : §e§l" + InventoryCleanerItemdelay.get());
        chat.print("Invopen : §e§l" + InventoryCleanerInvopen.get());
        chat.print("Nomove : §e§l" + InventoryCleanerNomove.get());
        chat.print("Nocombat : §e§l" + InventoryCleanerNocombat.get());
        chat.print("Armor : §e§l" + InventoryCleanerArmor.get());
        chat.print("Sortslot : §e§l" + InventoryCleanerS1.get() + "," + InventoryCleanerS2.get() + "," + InventoryCleanerS3.get() + "," + InventoryCleanerS4.get() + "," + InventoryCleanerS5.get() + "," + InventoryCleanerS6.get() + "," + InventoryCleanerS7.get() + "," + InventoryCleanerS8.get() + "," + InventoryCleanerS9.get());
    };
    if(module.settings.Mode.get() == "Cheststealer") {
    var Cheststealer = moduleManager.getModule("Cheststealer");
    var CheststealerMaxdelay = Cheststealer.getValue("Maxdelay");
    var CheststealerMindelay = Cheststealer.getValue("Mindelay");
    var Cheststealercod = Cheststealer.getValue("ChestOpenDelay");
    var Cheststealeracmax = Cheststealer.getValue("Autoclosemaxdelay");
    var Cheststealeracmin = Cheststealer.getValue("Autoclosemindelay");
    var Cheststealerac = Cheststealer.getValue("Autoclose");
    var Cheststealertr = Cheststealer.getValue("takerandomized");
    var Cheststealers = Cheststealer.getValue("Silent");
    var Cheststealerst = Cheststealer.getValue("silenttitle");
        chat.print("§0§m==========§r§f§lCheststealer§r§0§m==========");
        chat.print("State : §e§l" + Cheststealer.getState());
        chat.print("Delay : §e§l" + CheststealerMindelay.get() + " ~ " + CheststealerMaxdelay.get());
        chat.print("ChestOpenDelay : §e§l" + Cheststealercod.get());
        chat.print("AutoCloseDelay : §e§l" + Cheststealeracmin.get() + " ~ " + Cheststealeracmax.get());
        chat.print("Autoclose : §e§l" + Cheststealerac.get());
        chat.print("Takerandomized : §e§l" + Cheststealertr.get());
        chat.print("Silent : §e§l" + Cheststealers.get());
        chat.print("Silenttitle : §e§l" + Cheststealerst.get());
    };
    if(module.settings.Mode.get() == "Step") {
    var Step = moduleManager.getModule("Step");
    var StepMode = Step.getValue("Mode");
    var StepHeight = Step.getValue("Height");
    var StepJM = Step.getValue("JumpMotion");
    var StepDelay = Step.getValue("Delay");
    var StepTimer = Step.getValue("Timer");
    var StepU = Step.getValue("Usedynamictimer");
        chat.print("§0§m==========§r§f§lStep§r§0§m==========");
        chat.print("State : §e§l" + Step.getState());
        chat.print("Mode : §e§l" + StepMode.get());
        chat.print("Height : §e§l" + StepHeight.get());
        chat.print("JumpMotion : §e§l" + StepJM.get());
        chat.print("Delay : §e§l" + StepDelay.get());
        chat.print("Timer : §e§l" + StepTimer.get());
        chat.print("Usedynamictimer : §e§l" + StepU.get());
    };
    if(module.settings.Mode.get() == "Phase") {
    var Phase = moduleManager.getModule("Phase");
    var PhaseMode = Step.getValue("Mode");
        chat.print("§0§m==========§r§f§lPhase§r§0§m==========");
        chat.print("State : §e§l" + Phase.getState());
        chat.print("Mode : §e§l" + PhaseMode.get());
    };
    if(module.settings.Mode.get() == "Criticals") {
    var Criticals = moduleManager.getModule("Criticals");
    var CriticalsMode = Criticals.getValue("Mode");
    var CriticalsMotionMode = Criticals.getValue("MotionMode");
    var CriticalsHoverMode = Criticals.getValue("HoverMode");
        chat.print("§0§m==========§r§f§lCritical§r§0§m==========");
        chat.print("State : §e§l" + Criticals.getState());
        chat.print("Mode : §e§l" + CriticalsMode.get());
        chat.print("MotionMode : §e§l" + CriticalsMotionMode.get());
        chat.print("HoverMode : §e§l" + CriticalsHoverMode.get());
    };
    if(module.settings.Mode.get() == "HighJump") {
    var HighJump = moduleManager.getModule("HighJump");
    var HighJumpMode = HighJump.getValue("Mode");
    var HighJumpHeight = HighJump.getValue("Height");
    var HighJumpSM = HighJump.getValue("Stablemotion");
        chat.print("§0§m==========§r§f§lHighJump§r§0§m==========");
        chat.print("State : §e§l" + HighJump.getState());
        chat.print("Mode : §e§l" + HighJumpMode.get());
        chat.print("Height : §e§l" + HighJumpHeight.get());
        chat.print("HighJumpSM : §e§l" + HighJumpSM.get());
    };
    if(module.settings.Mode.get() == "LongJump") {
    var LongJump = moduleManager.getModule("LongJump");
    var LongJumpMode = LongJump.getValue("Mode");
    var LongJumpAD = LongJump.getValue("AutoDisable");
    var LongJumpAJ = LongJump.getValue("AutoJump");
        chat.print("§0§m==========§r§f§lLongJump§r§0§m==========");
        chat.print("State : §e§l" + LongJump.getState());
        chat.print("Mode : §e§l" + LongJumpMode.get());
        chat.print("AutoDisable : §e§l" + LongJumpAD.get());
        chat.print("AutoJump : §e§l" + LongJumpAJ.get());
    };
    if(module.settings.Mode.get() == "All") {
    var Fly = moduleManager.getModule("Fly");
    var Killaura = moduleManager.getModule("Killaura");
    var Scaffold = moduleManager.getModule("Scaffold");
    var Cheststealer = moduleManager.getModule("Cheststealer");
    var InventoryCleaner = moduleManager.getModule("InventoryCleaner");
    var Step = moduleManager.getModule("Step");
    var Phase = moduleManager.getModule("Phase");
    var Criticals = moduleManager.getModule("Criticals");
    var HighJump = moduleManager.getModule("HighJump");
    var LongJump = moduleManager.getModule("LongJump");
    var Custom = moduleManager.getModule(module.settings.MN.get());
        chat.print("§0§m==========§r§f§lStatus§r§0§m==========");
        chat.print("Fly : §e§l" + Fly.getState());
        chat.print("Step : §e§l" + Step.getState());
        chat.print("HighJump : §e§l" + HighJump.getState());
        chat.print("LongJump : §e§l" + LongJump.getState());
        chat.print("Phase : §e§l" + Phase.getState());
        chat.print("Criticals : §e§l" + Criticals.getState());
        chat.print("Killaura :§e§l " + Killaura.getState());
        chat.print("Scaffold : §e§l" + Scaffold.getState());
        chat.print("Cheststealer : §e§l" + Cheststealer.getState());
        chat.print("InventoryCleaner : §e§l" + InventoryCleaner.getState());
        chat.print("§0§m==========§r§f§lCustomStatus§r§0§m==========");
        chat.print(module.settings.MN.get() + " : §e§l" + Custom.getState());
    };
    if(module.settings.Mode.get() == "Custom") {
    var CustomName = moduleManager.getModule(module.settings.MN.get());
    var CM1 = CustomName.getValue(module.settings.CM.get());
    var CM2 = CustomName.getValue(module.settings.CM2.get());
    var CM3 = CustomName.getValue(module.settings.CM3.get());
    var CM4 = CustomName.getValue(module.settings.CM4.get());
    var CM5 = CustomName.getValue(module.settings.CM5.get());
        chat.print("§0§m==========§r§f§l" + module.settings.MN.get() + "§r§0§m==========");
        chat.print(module.settings.MN.get() + " : §e§l" + CustomName.getState());
        chat.print(module.settings.CM.get() + " : §e§l" + CM1.get());
        chat.print(module.settings.CM2.get() + " : §e§l" + CM2.get());
        chat.print(module.settings.CM3.get() + " : §e§l" + CM3.get());
        chat.print(module.settings.CM4.get() + " : §e§l" + CM4.get());
        chat.print(module.settings.CM5.get() + " : §e§l" + CM5.get());
    };
    }
    if(module.settings.ClientMode.get() == "LiquidBounceb73") {
    if(module.settings.Mode.get() == "Fly") {
    var Fly = moduleManager.getModule("Fly");
    var FlyMode = Fly.getValue("Mode");
    var FlyMark = Fly.getValue("Mark");
        chat.print("§0§m==========§r§f§lFly§r§0§m==========");
        chat.print("State : §e§l" + Fly.getState());
        chat.print("Mode : §e§l" + FlyMode.get());
        chat.print("Mark : §e§l" + FlyMark.get());
    };
    if(module.settings.Mode.get() == "Killaura") {
    var Killaura = moduleManager.getModule("Killaura");
    var KillauraRange = Killaura.getValue("Range");
    var Killaurathroughwallsrange = Killaura.getValue("throughwallsrange");
    var KillauraTargetmode = Killaura.getValue("Targetmode");
    var Killauraautoblock = Killaura.getValue("Autoblock");
    var Killauramaxcps = Killaura.getValue("Maxcps");
    var Killauramincps = Killaura.getValue("Mincps");
        chat.print("§0§m==========§r§f§lKillaura§r§0§m==========");
        chat.print("State : §e§l" + Killaura.getState());
        chat.print("CPS : §e§l" + Killauramincps.get() + "§e§l ~ §e§l" + Killauramaxcps.get());
        chat.print("Range : §e§l" + KillauraRange.get());
        chat.print("Throughwallsrange : §e§l" + Killaurathroughwallsrange.get());
        chat.print("Targetmode : §e§l" + KillauraTargetmode.get());
        chat.print("Autoblockmode : §e§l" + Killauraautoblock.get());
   };
    if(module.settings.Mode.get() == "Scaffold") {
    var Scaffold = moduleManager.getModule("Scaffold");
    var Scaffoldmaxdelay = Scaffold.getValue("Maxdelay");
    var Scaffoldmindelay = Scaffold.getValue("Mindelay");
    var Scaffoldautoblock = Scaffold.getValue("Autoblock");
    var Scaffoldmode = Scaffold.getValue("mode");
    var Scaffoldmodifier = Scaffold.getValue("Speedmodifier");
    var Scaffoldsafewalk = Scaffold.getValue("SafeWalk");
    var Scaffoldsprint = Scaffold.getValue("sprint");
    var Scaffoldtimer = Scaffold.getValue("Timer");
    var Scaffoldmark = Scaffold.getValue("Mark");
    var Scaffoldcounter = Scaffold.getValue("Counter");
        chat.print("§0§m==========§r§f§lScaffold§r§0§m==========");
        chat.print("State : §e§l" + Scaffold.getState());
        chat.print("Delay : §e§l" + Scaffoldmindelay.get() + " ~ " + Scaffoldmindelay.get());
        chat.print("Mode : §e§l" + Scaffoldmode.get());
        chat.print("SpeedModifier : §e§l" + Scaffoldmodifier.get());
        chat.print("Sprint : §e§l" + Scaffoldsprint.get());
        chat.print("Mark : §e§l" + Scaffoldmark.get());
        chat.print("Counter : §e§l" + Scaffoldcounter.get());
        chat.print("Autoblock : §e§l" + Scaffoldautoblock.get());
        chat.print("Timer : §e§l" + Scaffoldtimer.get());
    };
    if(module.settings.Mode.get() == "InventoryCleaner") {
    var InventoryCleaner = moduleManager.getModule("InventoryCleaner");
    var InventoryCleanerMaxdelay = InventoryCleaner.getValue("Maxdelay");
    var InventoryCleanerMindelay = InventoryCleaner.getValue("Mindelay");
    var InventoryCleanerInvopen = InventoryCleaner.getValue("Invopen");
    var InventoryCleanerNomove = InventoryCleaner.getValue("nomove");
    var InventoryCleanerItemdelay = InventoryCleaner.getValue("itemdelay");
    var InventoryCleanerS1 = InventoryCleaner.getValue("sortslot-1");
    var InventoryCleanerS2 = InventoryCleaner.getValue("sortslot-2");
    var InventoryCleanerS3 = InventoryCleaner.getValue("sortslot-3");
    var InventoryCleanerS4 = InventoryCleaner.getValue("sortslot-4");
    var InventoryCleanerS5 = InventoryCleaner.getValue("sortslot-5");
    var InventoryCleanerS6 = InventoryCleaner.getValue("sortslot-6");
    var InventoryCleanerS7 = InventoryCleaner.getValue("sortslot-7");
    var InventoryCleanerS8 = InventoryCleaner.getValue("sortslot-8");
    var InventoryCleanerS9 = InventoryCleaner.getValue("sortslot-9");
        chat.print("§0§m==========§r§f§lInventoryCleaner§r§0§m==========");
        chat.print("State : §e§l" + InventoryCleaner.getState());
        chat.print("Delay : §e§l" + InventoryCleanerMindelay.get() + " ~ " + InventoryCleanerMaxdelay.get());
        chat.print("Itemdelay : §e§l" + InventoryCleanerItemdelay.get());
        chat.print("Invopen : §e§l" + InventoryCleanerInvopen.get());
        chat.print("Nomove : §e§l" + InventoryCleanerNomove.get());
        chat.print("Sortslot : §e§l" + InventoryCleanerS1.get() + "," + InventoryCleanerS2.get() + "," + InventoryCleanerS3.get() + "," + InventoryCleanerS4.get() + "," + InventoryCleanerS5.get() + "," + InventoryCleanerS6.get() + "," + InventoryCleanerS7.get() + "," + InventoryCleanerS8.get() + "," + InventoryCleanerS9.get());
    };
    if(module.settings.Mode.get() == "Cheststealer") {
    var Cheststealer = moduleManager.getModule("Cheststealer");
    var CheststealerMaxdelay = Cheststealer.getValue("Maxdelay");
    var CheststealerMindelay = Cheststealer.getValue("Mindelay");
    var Cheststealercod = Cheststealer.getValue("ChestOpenDelay");
    var Cheststealeracmax = Cheststealer.getValue("Autoclosemaxdelay");
    var Cheststealeracmin = Cheststealer.getValue("Autoclosemindelay");
    var Cheststealerac = Cheststealer.getValue("Autoclose");
    var Cheststealertr = Cheststealer.getValue("takerandomized");
        chat.print("§0§m==========§r§f§lCheststealer§r§0§m==========");
        chat.print("State : §e§l" + Cheststealer.getState());
        chat.print("Delay : §e§l" + CheststealerMindelay.get() + " ~ " + CheststealerMaxdelay.get());
        chat.print("ChestOpenDelay : §e§l" + Cheststealercod.get());
        chat.print("AutoCloseDelay : §e§l" + Cheststealeracmin.get() + " ~ " + Cheststealeracmax.get());
        chat.print("Autoclose : §e§l" + Cheststealerac.get());
        chat.print("Takerandomized : §e§l" + Cheststealertr.get());
    };
    if(module.settings.Mode.get() == "Step") {
    var Step = moduleManager.getModule("Step");
    var StepMode = Step.getValue("Mode");
    var StepHeight = Step.getValue("Height");
    var StepJM = Step.getValue("JumpHeight");
    var StepDelay = Step.getValue("Delay");
        chat.print("§0§m==========§r§f§lStep§r§0§m==========");
        chat.print("State : §e§l" + Step.getState());
        chat.print("Mode : §e§l" + StepMode.get());
        chat.print("Height : §e§l" + StepHeight.get());
        chat.print("JumpHeight : §e§l" + StepJM.get());
        chat.print("Delay : §e§l" + StepDelay.get());
    };
    if(module.settings.Mode.get() == "Phase") {
    var Phase = moduleManager.getModule("Phase");
    var PhaseMode = Step.getValue("Mode");
        chat.print("§0§m==========§r§f§lPhase§r§0§m==========");
        chat.print("State : §e§l" + Phase.getState());
        chat.print("Mode : §e§l" + PhaseMode.get());
    };
    if(module.settings.Mode.get() == "Criticals") {
    var Criticals = moduleManager.getModule("Criticals");
    var CriticalsMode = Criticals.getValue("Mode");
    var CriticalsPMode = Criticals.getValue("PacketMode");
        chat.print("§0§m==========§r§f§lCritical§r§0§m==========");
        chat.print("State : §e§l" + Criticals.getState());
        chat.print("Mode : §e§l" + CriticalsMode.get());
        chat.print("PacketMode : §e§l" + CriticalsPMode.get());
    };
    if(module.settings.Mode.get() == "HighJump") {
    var HighJump = moduleManager.getModule("HighJump");
    var HighJumpMode = HighJump.getValue("Mode");
    var HighJumpHeight = HighJump.getValue("Height");
        chat.print("§0§m==========§r§f§lHighJump§r§0§m==========");
        chat.print("State : §e§l" + HighJump.getState());
        chat.print("Mode : §e§l" + HighJumpMode.get());
        chat.print("Height : §e§l" + HighJumpHeight.get());
    };
    if(module.settings.Mode.get() == "LongJump") {
    var LongJump = moduleManager.getModule("LongJump");
    var LongJumpMode = LongJump.getValue("Mode");
    var LongJumpAJ = LongJump.getValue("AutoJump");
        chat.print("§0§m==========§r§f§lLongJump§r§0§m==========");
        chat.print("State : §e§l" + LongJump.getState());
        chat.print("Mode : §e§l" + LongJumpMode.get());
        chat.print("AutoJump : §e§l" + LongJumpAJ.get());
    };
    if(module.settings.Mode.get() == "All") {
    var Fly = moduleManager.getModule("Fly");
    var Killaura = moduleManager.getModule("Killaura");
    var Scaffold = moduleManager.getModule("Scaffold");
    var Cheststealer = moduleManager.getModule("Cheststealer");
    var InventoryCleaner = moduleManager.getModule("InventoryCleaner");
    var Step = moduleManager.getModule("Step");
    var Phase = moduleManager.getModule("Phase");
    var Criticals = moduleManager.getModule("Criticals");
    var HighJump = moduleManager.getModule("HighJump");
    var LongJump = moduleManager.getModule("LongJump");
    var Custom = moduleManager.getModule(module.settings.MN.get());
        chat.print("§0§m==========§r§f§lStatus§r§0§m==========");
        chat.print("Fly : §e§l" + Fly.getState());
        chat.print("Step : §e§l" + Step.getState());
        chat.print("HighJump : §e§l" + HighJump.getState());
        chat.print("LongJump : §e§l" + LongJump.getState());
        chat.print("Phase : §e§l" + Phase.getState());
        chat.print("Criticals : §e§l" + Criticals.getState());
        chat.print("Killaura :§e§l " + Killaura.getState());
        chat.print("Scaffold : §e§l" + Scaffold.getState());
        chat.print("Cheststealer : §e§l" + Cheststealer.getState());
        chat.print("InventoryCleaner : §e§l" + InventoryCleaner.getState());
        chat.print("§0§m==========§r§f§lCustomStatus§r§0§m==========");
        chat.print(module.settings.MN.get() + " : §e§l" + Custom.getState());
    };
    if(module.settings.Mode.get() == "Custom") {
    var CustomName = moduleManager.getModule(module.settings.MN.get());
    var CM1 = CustomName.getValue(module.settings.CM.get());
    var CM2 = CustomName.getValue(module.settings.CM2.get());
    var CM3 = CustomName.getValue(module.settings.CM3.get());
    var CM4 = CustomName.getValue(module.settings.CM4.get());
    var CM5 = CustomName.getValue(module.settings.CM5.get());
        chat.print("§0§m==========§r§f§l" + module.settings.MN.get() + "§r§0§m==========");
        chat.print(module.settings.MN.get() + " : §e§l" + CustomName.getState());
        chat.print(module.settings.CM.get() + " : §e§l" + CM1.get());
        chat.print(module.settings.CM2.get() + " : §e§l" + CM2.get());
        chat.print(module.settings.CM3.get() + " : §e§l" + CM3.get());
        chat.print(module.settings.CM4.get() + " : §e§l" + CM4.get());
        chat.print(module.settings.CM5.get() + " : §e§l" + CM5.get());
    };
    }
         });
module.on('update', function() {
    module.tag=module.settings.ClientMode.get() + " " + module.settings.Mode.get();
    if(module.settings.AD.get() == true) {
    module.setState(false);
        }
});
});
script.registerModule({
    name: "ModuleDisabler",
    description: "ModuleDisabler",
    category: "Client",
    tag: "null",
    settings: {
        MN:Setting.text({
            name: "ModulesName",
            default: "Fly"
        })
    }
}, 
    function (module) {
module.on('update', function() {
    module.tag=module.settings.MN.get();
    var ModulesName = moduleManager.getModule(module.settings.MN.get());
        if(ModulesName.getState() == true) {
        ModulesName.setState(false);
        DChat(module.settings.MN.get());
            };
});
});
script.registerModule({
    name: "ModuleToggler",
    description: "Keep Module Always On",
    category: "Client",
    settings: {
        MN:Setting.text({
            name: "ModulesName",
            default: "Fly"
        })
    }
}, 
    function (module) {
module.on('update', function() {
    module.tag=module.settings.MN.get();
    var ModulesName = moduleManager.getModule(module.settings.MN.get());
        if(ModulesName.getState() == false) {
        ModulesName.setState(true);
        TChat(module.settngs.MN.get());
            };
});
});
