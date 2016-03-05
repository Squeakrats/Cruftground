import Component from "cruft/core/Component";
import {vec2} from "cruft/math/math"

export default class PlayerLogic extends Component {

	constructor(controller) {
		super();
		this.type = "PlayerLogic";

		this.movingLeft = false;
		this.movingRight = false;
		this.movingUp = false;
		this.movingDown = false;

		this.target = new vec2(1, 0);
		this.speed = .7;
		this.fire = false;
		this.actorTransform = null;
		this.controller = controller;

	}

	initialize() {
		this.actorTransform = this.actor.getComponent("transform");
	}

	update(now, deltaMs) {

		var controller = this.controller;
		var transform = this.actorTransform;
		var position = transform.position;
		var speed = this.speed;

		var displacement = new vec2( controller.getAxis("horizontal"), -controller.getAxis("vertical") );
		if(displacement.length() > .5){
			displacement
				.normalize()
				.scale(speed * deltaMs);

			transform.position = position.add(displacement);
		}

	}

	handleEvents(events) {
		if(events["SET_MOVING_UP"]!==undefined)   this.movingUp = events["SET_MOVING_UP"];
		if(events["SET_MOVING_DOWN"]!==undefined) this.movingDown = events["SET_MOVING_DOWN"];
		if(events["SET_MOVING_LEFT"]!==undefined) this.movingLeft = events["SET_MOVING_LEFT"];
		if(events["SET_MOVING_RIGHT"]!==undefined) this.movingRight = events["SET_MOVING_RIGHT"];
		if(events["FIRE"]) this.fire = true;
	}

	handleMouse(mouse) {
		this.target = mouse;
	}
}