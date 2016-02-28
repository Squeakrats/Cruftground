import engine, {initialize, network} from "cruft/engine";
import SceneCreator from "./client/creators/scene.js";
import PlayerCreator from "./client/creators/player.js";
import {PEERJS_API_KEY} from "./shared/constants"

initialize({
	factory : {
		"Scene" : SceneCreator,
		"Player" : PlayerCreator
	},
	network : {
		name : "client",
		options : {
			key : PEERJS_API_KEY
		},
		peer : "server"
	},
	scene : "Scene",
})

