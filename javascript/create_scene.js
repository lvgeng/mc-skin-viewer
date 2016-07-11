

// function create_cube_with_customized_texture(texture_path, 
// 	front_vertex_1,	front_vertex_2,	front_vertex_3,	front_vertex_4,
// 	back_vertex_1,	back_vertex_2,	back_vertex_3,	back_vertex_4,	
// 	left_vertex_1,	left_vertex_2,	left_vertex_3,	left_vertex_4,	
// 	right_vertex_1,	right_vertex_2,	right_vertex_3,	right_vertex_4,	
// 	top_vertex_1,	top_vertex_2,	top_vertex_3,	top_vertex_4,	
// 	bottom_vertex_1,	bottom_vertex_2,	bottom_vertex_3,	bottom_vertex_4
// 	)



function create_manager_for_loading(){
	var manager_for_loading = new THREE.LoadingManager();
	manager_for_loading.onProgress = function ( item, loaded, total ) {
		console.log( item, loaded, total );
	};
	return manager_for_loading;
}

function create_scene_basic() {
	scene = new THREE.Scene();
	//light
	var light = new THREE.AmbientLight( 0xffffff);
	light.name = "ambientlight";
	scene.add( light );

	var directionalLight = new THREE.DirectionalLight( 0xffffff );
	directionalLight.position.set( 0, 0, 1 ).normalize();
	scene.add( directionalLight );
	var directionalLight = new THREE.DirectionalLight( 0xffffff );
	directionalLight.position.set( 0, 0, -1 ).normalize();
	scene.add( directionalLight );
	// Grid
	var line_material = new THREE.LineBasicMaterial( { color: 0x999999 } ),
	geometry = new THREE.Geometry(),
	floor = -20, step = 10;
	for ( var i = 0; i <= 20; i ++ ) {
		geometry.vertices.push( new THREE.Vector3( - 100, floor, i * step - 100 ) );
		geometry.vertices.push( new THREE.Vector3(   100, floor, i * step - 100 ) );

		geometry.vertices.push( new THREE.Vector3( i * step - 100, floor, -100 ) );
		geometry.vertices.push( new THREE.Vector3( i * step - 100, floor,  100 ) );
	}
	var line = new THREE.Line( geometry, line_material, THREE.LinePieces );
	scene.add( line );
	return scene;
}

function create_renderer(canvas_to_render){
	var renderer = new THREE.WebGLRenderer( { canvas: canvas_to_render, antialias: true } );

	renderer.setClearColor( 0xffffff );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( canvas_to_render.scrollWidth, canvas_to_render.scrollHeight, false);
	renderer.shadowMap.enable = true;
	renderer.shadowMapSoft = true;
	renderer.shadowMap.type = THREE.PCFSoftShadowMap;

	return renderer;
}

function create_camera(controls_for_camera){
	var camera = new THREE.PerspectiveCamera( 30, renderer.domElement.width / renderer.domElement.height , 1, 1000 );
	camera.position.z = 100;
	camera.position.y = 0;
	return camera;
}

function creat_controls_for_camera(camera, canvas_to_render){
	var controls = new THREE.OrbitControls(camera, renderer.domElement);
	controls.target = new THREE.Vector3(0,0,0);
	controls.enableZoom = true;
	controls.enablePan = false;
	controls.minPolarAngle = Math.PI/13*6; // radians
	controls.maxPolarAngle = Math.PI/13*7; // radians

	controls.autoRotate = false;
	controls.autoRotateSpeed = 2.0;

	controls.damping = 0.2;

	return controls;
}
