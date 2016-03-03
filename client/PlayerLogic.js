import Component from "cruft/core/Component";
import {vec2} from "cruft/math/math"

export default class PlayerLogic extends Component {

	constructor() {
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

	}

	initialize() {
		this.actorTransform = this.actor.getComponent("transform");
	}

	update(now, deltaMs) {

		var actor = this.actor;

		var transform = this.actorTransform;
		var position = transform.position;
		var speed = this.speed;
		//Input.axis("Horizontal") do somthing like that maybe? so we can do xbox controllers and stuff too. 
		if(this.movingLeft) {
			position.x -= speed * deltaMs
		}

		if(this.movingRight) {
			position.x += speed * deltaMs
		}

		if(this.movingUp) {
			position.y += speed * deltaMs
		}

		if(this.movingDown) {
			position.y -= speed * deltaMs
		}

		transform.position = position;

		var world = this.actor.getComponent("transform").getWorldPosition();
		transform.setDirection(vec2.sub(this.target, world));

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