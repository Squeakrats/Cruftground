import Component from "cruft/core/Component"
import engine, {instantiate} from "cruft/engine";
//import Camera2D from "engine/graphics/Camera2D"
//import Interval from "engine/processes/Interval";
//import Actor from "engine/core/Actor";
//import memory from "engine/memory"

export default class GameLogic extends Component {
	constructor() {
		super();
	}

	initialize() {
		//console.log(engine.scene)
		
		//engine.scene.camera = new Camera2D(window.innerWidth, window.innerHeight);
		//engine.camera = 
		//scene.addChild(engine.camera);

		var player = instantiate("Player");
		engine.scene.addChild(player);



		/*


		var actor = player.get();
		scene.addChild(actor);

		this.playerLogic = actor.getComponent("PlayerLogic").toPointer();
		this.playerTransform = actor.getComponent("transform").toPointer();

		engine.on("PlayerController:events", (events) => {
			var logic = this.playerLogic.get();
			if(logic) {
				logic.handleEvents(events);
			}
		})

		engine.on("PlayerController:mouse", (events) => {
			var logic = this.playerLogic.get();
			if(logic) {
				logic.handleMouse(events);
			}
		})*/





	}
}