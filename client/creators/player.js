import Actor from "cruft/core/Actor";
import Transform2D from "cruft/components/Transform2D";
import PlayerLogic from "../PlayerLogic";
import PlayerController from "../PlayerController";
import Render from "cruft/components/Render";
import Sprite from "cruft/graphics/renderables/Sprite";

export default () => {

	var render = new Render();
		render.renderable = new Sprite("assets/images/player.png", 100, 100);


	var actor = new Actor();
		actor.addComponent(new Transform2D());
		actor.addComponent(new PlayerLogic());
		actor.addComponent(new PlayerController());
		actor.addComponent(render);

	return actor;
}
