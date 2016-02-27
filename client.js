import engine, {initialize, initialized} from "cruft/engine";
import SceneCreator from "./client/creators/scene.js";
import PlayerCreator from "./client/creators/player.js";

initialize({
	factory : {
		"Scene" : SceneCreator,
		"Player" : PlayerCreator
	},
	scene : "Scene",
})

let main = () => {
	console.info("main()");
}

initialized.then(main);