import Component from "cruft/core/Component";
import {vec2} from "cruft/lib/gl-matrix"

export default class PlayerLogic extends Component {

	constructor() {
		super();

		this.movingLeft = false;
		this.movingRight = false;
		this.movingUp = false;
		this.movingDown = false;

		this.target = [1, 0];
		this.speed = .7;
		this.fire = false;
		this.actorTransform = null;

	}

	initialize() {
		this.actorTransform = this.actor.getComponent("Transform2D");
	}

	update(now, deltaMs) {

		var actor = this.actor;

		var transform = this.actorTransform;
		var position = transform.position;
		var speed = this.speed;
		//Input.axis("Horizontal") do somthing like that maybe? so we can do xbox controllers and stuff too. 
		if(this.movingLeft) {
			position[0] -= speed * deltaMs
		}

		if(this.movingRight) {
			position[0] += speed * deltaMs
		}

		if(this.movingUp) {
			position[1] += speed * deltaMs
		}

		if(this.movingDown) {
			position[1] -= speed * deltaMs
		}

		transform.position = position;

		var world = this.actor.getComponent("Transform2D").getWorldPosition();
		var dif = vec2.create();

		vec2.sub(dif, this.target, position);
		transform.setDirection(dif); 


		if(this.fire) {
			this.fire = false;
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