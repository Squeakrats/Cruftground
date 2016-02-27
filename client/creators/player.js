import Actor from "cruft/core/Actor";
import Transform2D from "cruft/components/Transform2D";
import PlayerLogic from "../PlayerLogic";
import PlayerController from "../PlayerController";
import Render from "cruft/components/Render";
import Sprite from "cruft/graphics/renderables/Sprite";

export default () => {
	var actor = new Actor();
		actor.addComponent(new Transform2D());
		actor.addComponent(new PlayerLogic());
		actor.addComponent(new PlayerController());

	var render = new Render();

	var sprite = new Sprite();
		sprite = new Sprite();
		sprite.url = "assets/images/player.png";
		sprite.width = 100;
		sprite.height = 100;

		render.renderable = sprite;
		actor.addComponent(render);

	return actor;
}

console.log("hello")