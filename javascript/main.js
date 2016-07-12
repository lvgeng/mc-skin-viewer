if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

var container, stats;
var camera, controls_for_camera, scene, renderer, manager_for_loading, character;

// var selectbox_button_style, selectbox_back_bottom, selectbox_collar_style, selectbox_pocket_style;
var select_fabric;

// var loader;

init();
animate();

//===================================================================================================
function animate() {
	requestAnimationFrame(animate);
	controls_for_camera.update();
	render();
}

function init() {

	
	scene = create_scene_basic();
	// manager_for_loading = create_manager_for_loading();
	// character = new CubeWithCustomizedTexture(10,10,10, new THREE.Vector3(0,0,0), './assets/texture-atlas.jpg');
	// character = new CubeWithCustomizedTexture(10,10,10, new THREE.Vector3(0,0,0), 'https://hydra-media.cursecdn.com/minecraft.gamepedia.com/5/54/Skintemplate.png');
	var url = document.getElementById("skin_path_textbox").value;
	document.getElementById("skin_preview").src = url;


	character = new McCharacter(
		scene, 4, new THREE.Vector3(0,0,0), 
		// "https://hydra-media.cursecdn.com/minecraft.gamepedia.com/5/54/Skintemplate.png"
		document.getElementById("skin_path_textbox").value
		);
	button_skin_update_init(character);

	// renderer
	canvas_to_render = document.getElementById('canvas_for_three');
	renderer = create_renderer(canvas_to_render);
	camera = create_camera(controls_for_camera);
	controls_for_camera = creat_controls_for_camera(camera, canvas_to_render);
	controls_for_camera.addEventListener( 'change', render );

	window.addEventListener( 'resize', onWindowResize, false );


	animate();
}
//===========================================================================================

function onWindowResize() {
	renderer.setSize( canvas_to_render.scrollWidth, canvas_to_render.scrollHeight ,false);
	camera.aspect = renderer.domElement.width / renderer.domElement.height;
	camera.updateProjectionMatrix();

	render();
}

function render() {
	renderer.render( scene, camera );
}

