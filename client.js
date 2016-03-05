import engine, {instantiate, factory, cache} from "cruft/engine";
import * as creators from "./client/creators/creators";
import ObjLoader from "cruft/net/loaders/obj";
import GameView from "./client/GameView";


factory.register(creators);
engine.setScene(instantiate("Scene"));
engine.addView("default", new GameView(window.innerWidth, window.innerHeight));
engine.scene.addChild(engine.views.default.camera);

var player = instantiate("Player");
	/*
	player.getComponent("PlayerLogic").controller = new Keyboard({
		axes : {
			horizontal : { "a" : -1, "d" : 1},
			vertical : { "w" : 1, "s" : -1}
		},
		events : {
			mousedown
		}
	});*/

engine.scene.addChild(player);
document.body.appendChild(engine.views.default.canvas);
engine.start(17);

class Input {

}

console.log(new Input())