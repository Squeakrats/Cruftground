import Controller from "cruft/core/Controller.js";

export default class MouseKeyboard extends Controller {

	constructor() {

		this.isMouseDown = false;
		this.mouse = new vec2(0, 0);





		this.keyStates = {};

		

		addEventListener("keydown", (e) => {//ew
			this.keyStates[String.fromCharCode(e.which)] = true;
		})

		addEventListener("keyup", (e) => {
			this.keyStates[String.fromCharCode(e.which)] = false;
		})

		addEventListener("mousemove", (e) => {//temp camera logic in here. Need a refereance frame for things like. Camera.domToWorld() etc. 
			this.mouse.x = e.pageX; //(e.pageX - window.innerWidth/2);
			this.mouse.y = e.pageY; //(window.innerHeight - e.pageY - window.innerHeight/2);
		})

		addEventListener("mousedown", (e) => {//temp camera logic in here. Need a refereance frame for things like. Camera.domToWorld() etc. 
			this.isMouseDown = true;
		})

		addEventListener("mouseup", (e) => {//temp camera logic in here. Need a refereance frame for things like. Camera.domToWorld() etc. 
			this.isMouseDown = false;
		})
	}

	update() {

	}
}

/*

import Component from "cruft/core/Component";
import {vec2} from "cruft/math/math"
import engine from "cruft/engine"


//todo dont have controllers be components on actors
//need dedicated event loop in engine for that
export default class PlayerController extends Component {//todo only send difs >_>

	constructor() {
		super();
		this.type = "PlayerController";

		this.keyStates = {};
		this.last = {};
		this.fire = false;
		this.camera = null;

		this.mouse = new vec2(window.innerWidth/2, window.innerHeight/2);

		addEventListener("keydown", (e) => {//ew
			this.keyStates[String.fromCharCode(e.which)] = true;
		})

		addEventListener("keyup", (e) => {
			this.keyStates[String.fromCharCode(e.which)] = false;
		})

		addEventListener("mousemove", (e) => {//temp camera logic in here. Need a refereance frame for things like. Camera.domToWorld() etc. 
			this.mouse.x = e.pageX; //(e.pageX - window.innerWidth/2);
			this.mouse.y = e.pageY; //(window.innerHeight - e.pageY - window.innerHeight/2);
		})

		addEventListener("mousedown", (e) => {//temp camera logic in here. Need a refereance frame for things like. Camera.domToWorld() etc. 
			this.fire = true;
		})

	}

	//add a global like NetworkManager.emit("asdasdasdasddasd"); then bundle them all up and send em. 
	//for now just send them at the end of update. 
	update(now, deltaMs) {

		var events = {};

		var keyStates = this.keyStates;
		var last = this.last;
		for(var key in keyStates) {
			if(keyStates[key] !== last[key]) {
				if(key == "W") {
					events["SET_MOVING_UP"] = keyStates[key];
				}
				if(key == "A") {
					events["SET_MOVING_LEFT"] = keyStates[key];
				}
				if(key == "S") {
					events["SET_MOVING_DOWN"] = keyStates[key];
				}
				if(key == "D") {
					events["SET_MOVING_RIGHT"] = keyStates[key];
				}
			}
		}

		if(Object.keys(events).length) { 
			this.emit("events", events);
			this.last = JSON.parse(JSON.stringify(this.keyStates)); //stringifying is never the answer. 
		}

		//this.emit("mouse", this.camera.mouseToWorld(this.mouse) ) ;
		if(this.fire){
			this.fire = false;
			this.emit("events", {FIRE : true});
		}

		
	}
}

