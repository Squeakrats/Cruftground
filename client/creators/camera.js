import Camera2D from "cruft/graphics/cameras/Camera2D";


export default (options) => {
	var actor = new Camera2D(options.width, options.height);
	return actor;
}
