import Actor from "cruft/core/Actor";
import Transform2D from "cruft/core/components/Transform2D";
import PlayerLogic from "../PlayerLogic";
import PlayerController from "../PlayerController";
import Sprite from "cruft/graphics/components/Sprite";

export default () => {
	var actor = new Actor();
		actor.addComponent(new Transform2D());
		actor.addComponent(new PlayerLogic());
		actor.addComponent(new PlayerController());
		actor.addComponent(new Sprite("image!assets/images/player.png", 100, 100));
	return actor;
}
