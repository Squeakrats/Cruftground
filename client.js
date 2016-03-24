


import Object3D from "cruft/graphics/Object3D"
import Camera from "cruft/graphics/objects/Camera"
import Mesh from "cruft/graphics/objects/Mesh"
import WebGLRenderer from "cruft/graphics/webgl/renderers/WebGLRenderer";
import CubeGeometry from "cruft/graphics/geometry/CubeGeometry";
import MeshBasicMaterial from "cruft/graphics/webgl/materials/MeshBasicMaterial"

import mat4 from "cruft/math/mat4"
import vec3 from "cruft/math/vec3"




var renderer = new WebGLRenderer({ width : 800, height : 600 });
	document.body.appendChild(renderer.canvas);

var scene = new Object3D();
var camera = new Camera(mat4.perspective(Math.PI/2, renderer.canvas.width / renderer.canvas.height, 1, 100));

var geom = new CubeGeometry(2, 2, 2);
	geom.computeFaceNormals();

var mat = new MeshBasicMaterial({ color : new vec3(0.0, 0.0, 1.0) });


var mesh = new Mesh(geom, mat);
	mesh.transform.position.z = -4;
	

	scene.addChild(camera);
	scene.addChild(mesh)


renderer.render(scene, camera)


setInterval(function() {
	mesh.transform.position.y = Math.sin(Date.now()/2000) * 2;
	mesh.transform.position.x = Math.cos(Date.now()/2000) * 2;
	renderer.render(scene, camera);
}, 17)
