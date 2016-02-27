import Component from "cruft/core/Component"
import engine, {instantiate, memory} from "cruft/engine";
import Camera2D from "cruft/graphics/Camera2D"

export default class GameLogic extends Component {
	constructor() {
		super();
	}

	initialize() {
		engine.camera = new Camera2D(window.innerWidth, window.innerHeight); //@TODO I hate this class. 
		engine.scene.addChild(engine.camera); //domactor? hmm

		var player = instantiate("Player");
		engine.scene.addChild(player);


		//route commands through game (basically just so I can do this networking style later)
		var pptr = memory.ptr(player);
		var controller = player.getComponent("PlayerController"); 

		controller.on("events", (events) => {
			var player = pptr.get();
			if(player) player.getComponent("PlayerLogic").handleEvents(events); //dis is why I want caching of components not just actors. 
		});

		controller.on("mouse", (mouse) => {
			var player = pptr.get();
			if(player) player.getComponent("PlayerLogic").handleMouse(mouse); //dis is why I want caching of components not just actors. 
		});

	}
}