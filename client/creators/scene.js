import Actor from "cruft/core/Actor";
import Transform2D from "cruft/core/components/Transform2D";
import GameLogic from "../GameLogic";

export default () => {
	var actor = new Actor();
		actor.addComponent(new Transform2D());
		actor.addComponent(new GameLogic());
	return actor;
}