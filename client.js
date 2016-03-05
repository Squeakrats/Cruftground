import engine, {instantiate, factory, cache, input} from "cruft/engine";
import * as creators from "./client/creators/creators";
import ObjLoader from "cruft/net/loaders/obj";
import GameView from "./client/GameView";
import {vec2} from "cruft/math/math"
import MouseKeyboard from "cruft/core/controllers/MouseKeyboard";
import Gamepad from "cruft/core/controllers/Gamepad";



//var controller = new MouseKeyboard();
var controller = new Gamepad(1)
input.addController(controller);


factory.register(creators);
engine.setScene(instantiate("Scene"));
engine.addView("default", new GameView(window.innerWidth, window.innerHeight));
engine.scene.addChild(engine.views.default.camera);
document.body.appendChild(engine.views.default.canvas);
engine.start(17);

var player = instantiate("Player", controller);
engine.scene.addChild(player);
