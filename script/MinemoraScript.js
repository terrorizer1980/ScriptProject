var scriptName = "MinemoraScript";
var scriptAuthor = "DinoFeng";
var scriptVersion = "5.0";
var scriptGithub = "https://github.com/DinoFengz/MCProject";
var script = registerScript({
    name: "Minemora Script",
    version: "5.0",
    authors: ["DinoFeng"]
});

script.import("Minelibs/minefunction.js");
script.import("Minelibs/minemodule.js")

script.registerModule(MinemoraManagerModule, 
    function (module) {
module.on("enable", function () {
    if(module.settings.About.get() == true) {
        chat.print("§0§m==================================================");
        chat.print("§8ScriptName §7: §e§l" + scriptName);
        chat.print("§8ScriptVersion §7: §e§l" + scriptVersion);
        chat.print("§8ScriptDescription §7: §e§l" + module.description);
        chat.print("§8ScriptCategory §7: §e§l" + module.category);
        chat.print("§8ScriptGithub §7: §e§l" + scriptGithub);
        chat.print("§0§m==================================================");
        module.settings.About.set(false);
    };
    _1autoplay = 100;
    _1InvC = 1;
    _1FL = 0;
    _1True = 0;
    _1MinemoraDetector = 0;
    _1target = null;
    _1AntiVoid = 0;
    _1AntiVoidChat = 0;
    _1AntiVoidFalse = 0;
});
module.on("attack", function (event) {
    if(_1True==1) {
        if(event.getTargetEntity() instanceof EntityPlayer){
            _1target = event.getTargetEntity();
        }
    }
});
module.on("jump", function (event) {
    if(_1True==1) {}
})
module.on("update", function () {
    if(module.settings.Help.get() == true) {
        ChatF("Why your script not working?")
        ChatF(">Change your server ip to minemora.net / mc.minemora.net")
        module.settings.Help.set(false);
    };
    if(getIP() == "minemora.net" || getIP() == "mc.minemora.net" || getIP() == "mc.minemora.net.:25565") {
        if(_1True==0) { 
            var test = "MS";
            module.tag=test;
            ChatF("Minemora Server Detected!")
            _1True = 1;
            _1MinemoraDetector = 0;
        }
    }
    else {
        var test = "False Server";
        module.tag=test;
        if(_1MinemoraDetector==0) {
        ChatF("False Server Detected!")
        _1True = 0;
        _1MinemoraDetector = 1;
        }
    };
    if(_1True==1) { 
        if(module.settings.AntiVoid.get() == true) {
            if(inVoid()) {
                _1AntiVoid++
                if(_1AntiVoid>8 && _1AntiVoidFalse==0) {
                    mc.thePlayer.motionX = 0;
                    mc.thePlayer.motionY = 0;
                    mc.thePlayer.motionZ = 0;
                    _1AntiVoidChat++
                    if(_1AntiVoidChat==1) {
                        ChatF("Press Space+Sneak To Stop This Mode!");    
                    };
                    if(mc.gameSettings.keyBindJump.pressed && mc.gameSettings.keyBindSneak.pressed) {
                        _1AntiVoidFalse = 1;
                    }
                }
            }
            if(!inVoid()) {
                _1AntiVoid = 0;
                _1AntiVoidChat = 0;
                _1AntiVoidFalse = 0;
            }
        }
        if(module.settings.AutoL.get() == true) {
            if (_1target != null) {
                if (_1target.isDead) {
                    if(module.settings.AutoLMode.get() == "L") {
                        mc.thePlayer.sendChatMessage("/tell " + _1target.getName() + " L , Go to get LiquidBounce & FDPClient")
                        if(module.settings.Debug.get() == true) {
                        ChatF("Successfully Send L to " + _1target.getName())
                        Chat.print("§8Disable debug to stop showing this message future!")
                        };
                        _1target = null;                                    
                    };
                    if(module.settings.AutoLMode.get() == "Custom") {
                        mc.thePlayer.sendChatMessage("/tell " + _1target.getName() + " " + module.settings.CustomAutoL.get())
                        if(module.settings.Debug.get() == true) {
                            ChatF("Successfully Send " + module.settings.CustomAutoL.get() + " to " + target.getName())
                            Chat.print("§8Disable debug to stop showing this message future!")
                        };
                        _1target = null;
                    }
                }
            }
        };
        if(module.settings.FastLadder.get() == true) {
            if(mc.thePlayer.isOnLadder()) {
                if(module.settings.FastLadderMode.get() == "Space") {
                    if(mc.gameSettings.keyBindJump.pressed) {
                        mc.thePlayer.motionY = module.settings.FastLadderSpeed.get();
                        Timer(module.settings.FastLadderTimer.get());
                        _1FL = 1;
                    };
                    if(!mc.gameSettings.keyBindJump.pressed) {
                        Timer(1);
                    };
                };
                if(module.settings.FastLadderMode.get() == "Walk") {
                    if(mc.gameSettings.keyBindForward.pressed) {
                        mc.thePlayer.motionY = module.settings.FastLadderSpeed.get();
                        Timer(module.settings.FastLadderTimer.get());
                        _1FL = 1;
                    };
                    if(!mc.gameSettings.keyBindForward.pressed) {
                        Timer(1);
                    };
                };
                if(module.settings.FastLadderMode.get() == "Space+Walk") {
                    if(mc.gameSettings.keyBindForward.pressed && mc.gameSettings.keyBindJump.pressed) {
                        mc.thePlayer.motionY = module.settings.FastLadderSpeed.get();
                        Timer(module.settings.FastLadderTimer.get());
                        _1FL = 1;
                    };
                    if(!mc.gameSettings.keyBindJump.pressed) {
                        Timer(1);
                    };
                    if(!mc.gameSettings.keyBindForward.pressed) {
                        Timer(1);
                    }
                };
                if(module.settings.FastLadderMode.get() == "Space&Walk") {
                    if(mc.gameSettings.keyBindForward.pressed || mc.gameSettings.keyBindJump.pressed) {
                        mc.thePlayer.motionY = module.settings.FastLadderSpeed.get();
                        Timer(module.settings.FastLadderTimer.get());
                        _1FL = 1;
                    } 
                };
                if(module.settings.FastLadderMode.get() == "Always") {
                    mc.thePlayer.motionY = module.settings.FastLadderSpeed.get();
                    Timer(module.settings.FastLadderTimer.get());
                    _1FL = 1;
                }
            };
            if(_1FL==1 && !mc.thePlayer.isOnLadder()) {
                Timer(1);
                _1FL = 0;
            }
        };
        if(module.settings.ScaffoldInvClean.get() == true) {
            if(Scaffold.getState() == true && InventoryCleaner.getState() == true && _1InvC==1) {
                InventoryCleaner.setState(false);
                _1InvC = 0;
                if(module.settings.Debug.get() == true) { 
                ChatF("successfully disable InventoryCleaner!")
                Chat.print("§8Disable debug to stop showing this message future!")
                }
            };
            if(Scaffold.getState() == false && _1InvC==0) {
                InventoryCleaner.setState(true);
                _1InvC = 1;
                if(module.settings.Debug.get() == true) {
                    ChatF("Successfully set InventoryCleaner State to " + InventoryCleaner.getState() + "")
                    Chat.print("§8Disable debug to stop showing this message future!")
                }
            } 
        }
    }
});
module.on("packet", function (event) {
    var packet = event.getPacket();
    if(_1True==1) {
        if (packet instanceof S02PacketChat) {
            if(module.settings.AutoPlay.get() == true) {
                if(_1autoplay<100) {
                    _1autoplay++
                };
                if(_1autoplay>98) {
                    if(packet.getChatComponent().getUnformattedText().contains("NUEVA PARTIDA")) {
                        mc.thePlayer.sendChatMessage("/join");
                        _1autoplay = 0
                        if(module.settings.Debug.get() == true) {
                            ChatF("Successfully Send u to another game!")
                            Chat.print("§8Disable debug to stop showing this message future!")
                        }
                    };
                    if(packet.getChatComponent().getUnformattedText().contains("Una nueva partida iniciada")) {
                        mc.thePlayer.sendChatMessage("/join");
                        _1autoplay = 0
                        if(module.settings.Debug.get() == true) {
                            ChatF("Successfully Send u to another game!")
                            Chat.print("§8Disable debug to stop showing this message future!")
                        }
                    }
                }
            }
        }
    }
});
module.on("disable", function () {
    if(module.settings.FastLadder.get() == true) {
        Timer(1);
    }
});
});

script.registerModule(MinemoraSpeedModule, 
    function (module) {
module.on('enable', function() {
    _2MSpeed = 15;
    _2DTick = 0;
    _2FTick = 0;
    _2BTick = 1;
    _2True = 0;
    _2MinemoraDetector = 0;
    if(module.settings.Safewalk.get() == true) {
        var Saf = moduleManager.getModule("Safewalk");
        var Safe = Saf.getValue("airsafe");
        var Saz = Saf.getValue("onlypredictvoid");
        _2Safez = Safe.get();
        Saf.setState(true);
        Safe.set(true);
        Saz.set(true);
    }
});
module.on('update', function() {
    if(getIP() == "minemora.net" || getIP() == "mc.minemora.net" || getIP() == "mc.minemora.net.:25565") {
        if(_2True==0) { 
            var test = "MS";
            module.tag=test;
            _2True = 1;
            _2MinemoraDetector = 0;
        }
    }
    else {
        var test = "False Server";
        module.tag=test;
        if(_2MinemoraDetector==0) {
        ChatP("False Server Detected!")
        _2True = 0;
        _2MinemoraDetector = 1;
        }
    };
    if(_2True==1) {
        if(module.settings.BM.get() == "None" && mc.gameSettings.keyBindForward.pressed) {
            module.tag=module.settings.BM.get();
            if(mc.thePlayer.onGround) {
                mc.thePlayer.jump();
            }
        };
        if(module.settings.BM.get() == "Timer") {
            module.tag=module.settings.BM.get() + " " + _2MSpeed + " " + _2DTick;
            _2MSpeed++
            if(_2MSpeed<60 && mc.thePlayer.onGround && mc.gameSettings.keyBindForward.pressed) {
                if(_2MSpeed>=18){
                    mc.thePlayer.jump();
                }
            };
            if(_2MSpeed>=60) {
                if(_2MSpeed<61){
                    _2FTick = _2DTick+1;  
                    ChatP("§7Ready For §e§l" + _2FTick + " §7Boost!");
                    _2DTick++
                }
            };
            if(_2MSpeed<100) {
                if(_2MSpeed>=17) {
                    Timer(1);
                }
            };
            if(_2MSpeed>80 && mc.thePlayer.onGround && mc.gameSettings.keyBindForward.pressed) {
                _2MSpeed = 0;
                Timer(module.settings.MFTi.get());
                ChatP("§7§lBoost §f: §e§l" + _2DTick);
            }
        };
        if(module.settings.BM.get() == "TimerGround" && _2BTick==1) {
            module.tag=module.settings.BM.get() + " " + _2MSpeed + " " + _2DTick;
            _2MSpeed++
            if(_2DTick==5) {
                ChatP("§8Disable BoostMode");
                _2BTick = 0;
            };
            if(_2MSpeed>=60) {
                if(_2MSpeed<61){
                    _2FTick = _2DTick+1;  
                    ChatP("§7Ready For §e§l" + _2FTick + " §7Boost!");
                    _2DTick++
                }
            };
            if(_2MSpeed<100) {
                if(_2MSpeed>=20) {
                    Timer(1);
                }
            };
            if(_2MSpeed>80 && mc.thePlayer.onGround && mc.gameSettings.keyBindForward.pressed) {
                _2MSpeed = 0;
                Timer(module.settings.TGTi.get());
                ChatP("§7§lBoost §f: §e§l" + _2DTick);
            };
        };
        if(module.settings.BM.get() == "Speed" && _2BTick==1) {
            module.tag=module.settings.BM.get() + " " + _2MSpeed + " " + _2DTick 
            _2MSpeed++
            if(_2DTick==3) {
                ChatP("§8Disable BoostMode");
                _2BTick = 0;
            };
            if(_2MSpeed<60 && mc.thePlayer.onGround && mc.gameSettings.keyBindForward.pressed) {
                if(_2MSpeed>=15){
                    mc.thePlayer.jump();
                }
            };
            if(_2MSpeed>=60) {
                if(_2MSpeed<61){
                    _2FTick = _2DTick+1;  
                    ChatP("§7Ready For §e§l" + _2FTick + "§7 Boost!");
                    _2DTick++
                }
            };
            if(_2MSpeed>80 && mc.thePlayer.onGround && mc.gameSettings.keyBindForward.pressed) {
                _2MSpeed = 0;
                setMoveSpeed(module.settings.Speed.get());
                ChatP("§7§lBoost §f: §e§l" + _2DTick);
            }
        };
        if(_2BTick==0) {
            var Speed2 = "NoBoost";
            module.tag=Speed2;
            if(mc.thePlayer.onGround && mc.gameSettings.keyBindForward.pressed) {
                mc.thePlayer.jump();
            }
        }
    }
});
module.on('disable', function() {
    Timer(1);
    if(module.settings.Safewalk.get() == true) {
        var Saf = moduleManager.getModule("Safewalk");
        var Safe = Saf.getValue("airsafe");
        Saf.setState(false);
        Safe.set(_2Safez);
    }
});
});
script.registerModule(MinemoraGlideModule, 
    function (module) {
module.on("enable", function () {
    _3Tick = 0;
    _3MinemoraDetector = 1;
    _3True = 0;
})
module.on("update", function () {
    if(getIP() == "minemora.net" || getIP() == "mc.minemora.net" || getIP() == "mc.minemora.net.:25565") {
        if(_3True==0) { 
            var test = "MS";
            module.tag=test;
            _3True = 1;
            _3MinemoraDetector = 0;
        }
    }
    else {
        var test = "False Server";
        module.tag=test;
        if(_3MinemoraDetector==0) {
        ChatA("False Server Detected!")
        _3True = 0;
        _3MinemoraDetector = 1;
        }
    };    
    if(_3True==1) {
        Timer(0.7);
        if(!mc.thePlayer.onGround) {
            mc.thePlayer.motionY = -module.settings.MotionDown.get();
            if(module.settings.Debug.get() == true) {
                ChatA("§c§lTick-Down §7§l" + module.settings.MotionDown.get())
            };
            _3Tick++
            if(_3Tick==module.settings.Tick.get() && !mc.thePlayer.onGround) {
                mc.thePlayer.motionY = module.settings.MotionUp.get();
                if(module.settings.Debug.get() == true) {
                    ChatA("§a§lTick-Up §7§l" + module.settings.MotionUp.get())
                };
                _3Tick = 0;
            }
        }
    }
});
module.on("disable", function () {
    Timer(1);
});
});