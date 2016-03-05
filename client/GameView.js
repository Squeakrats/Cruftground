import View from "cruft/core/View";
import engine, {instantiate} from "cruft/engine";
import Renderer from "cruft/graphics/Renderer";
import SpriteRenderer from "cruft/graphics/renderers/SpriteRenderer";

export default class GameView extends View {
	
	constructor(width, height) {
		super();
		this.canvas = document.createElement("canvas");
		this.canvas.width = width;
		this.canvas.height = height;
		this.renderer = new Renderer({ canvas : this.canvas })
		this.renderer.register(new SpriteRenderer());
		this.camera = instantiate("Camera", {width : width, height : height});
	}

	update() {
		this.renderer.render(engine.scene, this.camera);
	}
}