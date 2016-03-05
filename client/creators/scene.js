import Actor from "cruft/core/Actor";
import Transform2D from "cruft/core/components/Transform2D";

export default () => {
	var actor = new Actor();
		actor.addComponent(new Transform2D());
	return actor;
}