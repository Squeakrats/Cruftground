import engine, {cache, initialize, network} from "cruft/engine";
import SceneCreator from "./client/creators/scene.js";
import PlayerCreator from "./client/creators/player.js";
import {PEERJS_API_KEY} from "./shared/constants";
import ObjLoader from "cruft/net/loaders/ObjLoader";

initialize({
	factory : {
		"Scene" : SceneCreator,
		"Player" : PlayerCreator
	},
	cache : {
		"obj" : new ObjLoader()
	},
	scene : "Scene"
});
