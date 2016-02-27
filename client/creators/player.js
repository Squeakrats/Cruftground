import Actor from "cruft/core/Actor";
import Transform2D from "cruft/components/Transform2D";
import PlayerLogic from "../PlayerLogic";
import PlayerController from "../PlayerController";

export default () => {
	var actor = new Actor();
		actor.addComponent(new Transform2D());
		actor.addComponent(new PlayerLogic());
		actor.addComponent(new PlayerController());
	return actor;
}

console.log("hello")