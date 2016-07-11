class CubeWithCustomizedTexture {
    constructor(x,y,z, position, initTexturePath) {
        // this.scale = scale;
        // this.position = position;

        this.geometry = new THREE.CubeGeometry(x, y, z);
        this.material = new THREE.MeshPhongMaterial({map: THREE.ImageUtils.loadTexture(initTexturePath)})

        this.geometry.faceVertexUvs[0] = [];
        this.updateTextureMapping(
            new THREE.Vector2(0, 0), new THREE.Vector2(1, 0), new THREE.Vector2(1, 1), new THREE.Vector2(0, 1),
            new THREE.Vector2(0, 0), new THREE.Vector2(1, 0), new THREE.Vector2(1, 1), new THREE.Vector2(0, 1),
            new THREE.Vector2(0, 0), new THREE.Vector2(1, 0), new THREE.Vector2(1, 1), new THREE.Vector2(0, 1),
            new THREE.Vector2(0, 0), new THREE.Vector2(1, 0), new THREE.Vector2(1, 1), new THREE.Vector2(0, 1),
            new THREE.Vector2(0, 0), new THREE.Vector2(1, 0), new THREE.Vector2(1, 1), new THREE.Vector2(0, 1),
            new THREE.Vector2(0, 0), new THREE.Vector2(1, 0), new THREE.Vector2(1, 1), new THREE.Vector2(0, 1)
            );

        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.position.x = position.x;
    }
    updateTexturePath(newTeturePath) {
        this.texturePath = newTeturePath;
    }
    updateTextureMapping(
    front_vertex_0, front_vertex_1, front_vertex_2, front_vertex_3,
    back_vertex_0,  back_vertex_1,  back_vertex_2,  back_vertex_3,
    left_vertex_0,  left_vertex_1,  left_vertex_2,  left_vertex_3,
    right_vertex_0, right_vertex_1, right_vertex_2, right_vertex_3,
    top_vertex_0,   top_vertex_1,   top_vertex_2,   top_vertex_3,
    bottom_vertex_0,bottom_vertex_1,bottom_vertex_2,bottom_vertex_3) {
        this.geometry.faceVertexUvs[0][0] = [ front_vertex_0, front_vertex_1, front_vertex_3 ];
        this.geometry.faceVertexUvs[0][1] = [ front_vertex_1, front_vertex_2, front_vertex_3 ];

        this.geometry.faceVertexUvs[0][2] = [ back_vertex_0, back_vertex_1, back_vertex_3 ];
        this.geometry.faceVertexUvs[0][3] = [ back_vertex_1, back_vertex_2, back_vertex_3 ];

        this.geometry.faceVertexUvs[0][4] = [ left_vertex_0, left_vertex_1, left_vertex_3 ];
        this.geometry.faceVertexUvs[0][5] = [ left_vertex_1, left_vertex_2, left_vertex_3 ];

        this.geometry.faceVertexUvs[0][6] = [ right_vertex_0, right_vertex_1, right_vertex_3 ];
        this.geometry.faceVertexUvs[0][7] = [ right_vertex_1, right_vertex_2, right_vertex_3 ];

        this.geometry.faceVertexUvs[0][8] = [ top_vertex_0, top_vertex_1, top_vertex_3 ];
        this.geometry.faceVertexUvs[0][9] = [ top_vertex_1, top_vertex_2, top_vertex_3 ];

        this.geometry.faceVertexUvs[0][10] = [ bottom_vertex_0, bottom_vertex_1, bottom_vertex_3 ];
        this.geometry.faceVertexUvs[0][11] = [ bottom_vertex_1, bottom_vertex_2, bottom_vertex_3 ];
    }
}

// class McCharacter {
//     constructor(scale, position, initSkinPath) {
//         this.scale = scale;
//         this.position = position;
//         this.skinPath = initSkinPath;
//     }
// }




// function update_skin(manager_for_loading, url_of_skin){

// }

// function creat_mc_character(scale){
// 	//Head ==============================================
// 	var geometryHead = new THREE.CubeGeometry(5,5,5);
// 	var materialHead = new THREE.MeshPhongMaterial



// 	var geometry = new THREE.CubeGeometry( 10, 10, 10);
// 	console.log("creat_mc_character fire");

//     var material = new THREE.MeshPhongMaterial( { map: THREE.ImageUtils.loadTexture('assets/texture-atlas.jpg') } );

//     var bricks = [new THREE.Vector2(0, .666), new THREE.Vector2(.5, .666), new THREE.Vector2(.5, 1), new THREE.Vector2(0, 1)];
//     var clouds = [new THREE.Vector2(.5, .666), new THREE.Vector2(1, .666), new THREE.Vector2(1, 1), new THREE.Vector2(.5, 1)];
//     var crate = [new THREE.Vector2(0, .333), new THREE.Vector2(.5, .333), new THREE.Vector2(.5, .666), new THREE.Vector2(0, .666)];
//     var stone = [new THREE.Vector2(.5, .333), new THREE.Vector2(1, .333), new THREE.Vector2(1, .666), new THREE.Vector2(.5, .666)];
//     var water = [new THREE.Vector2(0, 0), new THREE.Vector2(.5, 0), new THREE.Vector2(.5, .333), new THREE.Vector2(0, .333)];
//     var wood = [new THREE.Vector2(.5, 0), new THREE.Vector2(1, 0), new THREE.Vector2(1, .333), new THREE.Vector2(.5, .333)];

//     geometry.faceVertexUvs[0] = [];

//         geometry.faceVertexUvs[0][0] = [ bricks[0], bricks[1], bricks[3] ];
//         geometry.faceVertexUvs[0][1] = [ bricks[1], bricks[2], bricks[3] ];

//         geometry.faceVertexUvs[0][2] = [ clouds[0], clouds[1], clouds[3] ];
//         geometry.faceVertexUvs[0][3] = [ clouds[1], clouds[2], clouds[3] ];

//         geometry.faceVertexUvs[0][4] = [ crate[0], crate[1], crate[3] ];
//         geometry.faceVertexUvs[0][5] = [ crate[1], crate[2], crate[3] ];

//         geometry.faceVertexUvs[0][6] = [ stone[0], stone[1], stone[3] ];
//         geometry.faceVertexUvs[0][7] = [ stone[1], stone[2], stone[3] ];

//         geometry.faceVertexUvs[0][8] = [ water[0], water[1], water[3] ];
//         geometry.faceVertexUvs[0][9] = [ water[1], water[2], water[3] ];

//         geometry.faceVertexUvs[0][10] = [ wood[0], wood[1], wood[3] ];
//         geometry.faceVertexUvs[0][11] = [ wood[1], wood[2], wood[3] ];

//     mesh = new THREE.Mesh(geometry,  material);
//     // mesh.position.z = 0;
//     scene.add( mesh );
// }