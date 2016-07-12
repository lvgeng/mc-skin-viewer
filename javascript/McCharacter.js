class CubeWithCustomizedTexture {
    constructor(x,y,z, position, initTexturePath) {
        // this.scale = scale;
        // this.position = position;
        this.geometry = new THREE.CubeGeometry(x, y, z);
        THREE.ImageUtils.crossOrigin = 'anonymous';
        this.material = new THREE.MeshPhongMaterial( {map: THREE.ImageUtils.loadTexture(initTexturePath)} );

        // this.material = new THREE.MeshPhongMaterial( {map: document.getElementById("skin_preview").texture} );

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
        this.mesh.position.y = position.y;
        this.mesh.position.z = position.z;
    }

    updateTexturePath(newTeturePath) {
        this.texturePath = newTeturePath;
        this.mesh.material = new THREE.MeshPhongMaterial( {map: THREE.ImageUtils.loadTexture(this.texturePath)} );
        this.mesh.material.needsUpdate = true;
        console.log("path update");
    }
    updateTextureMapping(
    front_vertex_0, front_vertex_1, front_vertex_2, front_vertex_3,
    back_vertex_0,  back_vertex_1,  back_vertex_2,  back_vertex_3,
    left_vertex_0,  left_vertex_1,  left_vertex_2,  left_vertex_3,
    right_vertex_0, right_vertex_1, right_vertex_2, right_vertex_3,
    top_vertex_0,   top_vertex_1,   top_vertex_2,   top_vertex_3,
    bottom_vertex_0,bottom_vertex_1,bottom_vertex_2,bottom_vertex_3) {
        //Front
        this.geometry.faceVertexUvs[0][8] = [ front_vertex_3, front_vertex_0, front_vertex_2 ];
        this.geometry.faceVertexUvs[0][9] = [ front_vertex_0, front_vertex_1, front_vertex_2 ];
        //Left
        this.geometry.faceVertexUvs[0][0] = [ left_vertex_3, left_vertex_0, left_vertex_2 ];
        this.geometry.faceVertexUvs[0][1] = [ left_vertex_0, left_vertex_1, left_vertex_2 ];
        //Right
        this.geometry.faceVertexUvs[0][2] = [ right_vertex_3, right_vertex_0, right_vertex_2 ];
        this.geometry.faceVertexUvs[0][3] = [ right_vertex_0, right_vertex_1, right_vertex_2 ];
        //Top
        this.geometry.faceVertexUvs[0][4] = [ top_vertex_3, top_vertex_0, top_vertex_2 ];
        this.geometry.faceVertexUvs[0][5] = [ top_vertex_0, top_vertex_1, top_vertex_2 ];
        //bottom
        this.geometry.faceVertexUvs[0][6] = [ bottom_vertex_3, bottom_vertex_0, bottom_vertex_2 ];
        this.geometry.faceVertexUvs[0][7] = [ bottom_vertex_0, bottom_vertex_1, bottom_vertex_2 ];
        //Back
        this.geometry.faceVertexUvs[0][10] = [ back_vertex_3, back_vertex_0, back_vertex_2 ];
        this.geometry.faceVertexUvs[0][11] = [ back_vertex_0, back_vertex_1, back_vertex_2 ];
    }
}

class McCharacter {
    constructor(scene, scale, position, initSkinPath) {
        this.head = new CubeWithCustomizedTexture(scale, scale, scale,
            new THREE.Vector3(0 + position.x, 3.5*scale + position.y, + position.z),
            initSkinPath);
        this.head.updateTextureMapping(
        new THREE.Vector3(1/8,2/4), new THREE.Vector3(2/8,2/4), new THREE.Vector3(2/8,3/4), new THREE.Vector3(1/8,3/4),
        new THREE.Vector3(3/8,2/4), new THREE.Vector3(4/8,2/4), new THREE.Vector3(4/8,3/4), new THREE.Vector3(3/8,3/4),
        new THREE.Vector3(2/8,2/4), new THREE.Vector3(3/8,2/4), new THREE.Vector3(3/8,3/4), new THREE.Vector3(2/8,3/4),
        new THREE.Vector3(0/8,2/4), new THREE.Vector3(1/8,2/4), new THREE.Vector3(1/8,3/4), new THREE.Vector3(0/8,3/4),
        new THREE.Vector3(1/8,3/4), new THREE.Vector3(2/8,3/4), new THREE.Vector3(2/8,4/4), new THREE.Vector3(1/8,4/4),
        new THREE.Vector3(2/8,3/4), new THREE.Vector3(3/8,3/4), new THREE.Vector3(3/8,4/4), new THREE.Vector3(2/8,4/4)
        );
        scene.add(this.head.mesh);

        this.body = new CubeWithCustomizedTexture(scale, scale*1.5, scale/2,
            new THREE.Vector3(0 + position.x, 2.25*scale + position.y, + position.z),
            initSkinPath);
        this.body.updateTextureMapping(
        new THREE.Vector3(5/16,0/4), new THREE.Vector3(7/16,0/4), new THREE.Vector3(7/16,1.5/4), new THREE.Vector3(5/16,1.5/4),
        new THREE.Vector3(8/16,0/4), new THREE.Vector3(10/16,0/4), new THREE.Vector3(10/16,1.5/4), new THREE.Vector3(8/16,1.5/4),
        new THREE.Vector3(7/16,0/4), new THREE.Vector3(8/16,0/4), new THREE.Vector3(8/16,1.5/4), new THREE.Vector3(7/16,1.5/4),
        new THREE.Vector3(4/16,0/4), new THREE.Vector3(5/16,0/4), new THREE.Vector3(5/16,1.5/4), new THREE.Vector3(4/16,1.5/4),
        new THREE.Vector3(1/16,1.5/4), new THREE.Vector3(2/16,1.5/4), new THREE.Vector3(2/16,2/4), new THREE.Vector3(1/16,2/4),
        new THREE.Vector3(2/16,1.5/4), new THREE.Vector3(3/16,1.5/4), new THREE.Vector3(3/16,2/4), new THREE.Vector3(2/16,2/4)
        );
        scene.add(this.body.mesh);

        this.leftArm = new CubeWithCustomizedTexture(scale/2, scale*1.5, scale/2,
            new THREE.Vector3(0.75*scale + position.x, 2.25*scale + position.y, + position.z),
            initSkinPath);
        this.leftArm.updateTextureMapping(
        new THREE.Vector3(12/16,0/4), new THREE.Vector3(11/16,0/4), new THREE.Vector3(11/16,1.5/4), new THREE.Vector3(12/16,1.5/4),
        new THREE.Vector3(14/16,0/4), new THREE.Vector3(13/16,0/4), new THREE.Vector3(13/16,1.5/4), new THREE.Vector3(14/16,1.5/4),
        new THREE.Vector3(11/16,0/4), new THREE.Vector3(10/16,0/4), new THREE.Vector3(10/16,1.5/4), new THREE.Vector3(11/16,1.5/4),
        new THREE.Vector3(13/16,0/4), new THREE.Vector3(12/16,0/4), new THREE.Vector3(12/16,1.5/4), new THREE.Vector3(13/16,1.5/4),
        new THREE.Vector3(12/16,1.5/4), new THREE.Vector3(11/16,1.5/4), new THREE.Vector3(11/16,2/4), new THREE.Vector3(12/16,2/4),
        new THREE.Vector3(13/16,1.5/4), new THREE.Vector3(12/16,1.5/4), new THREE.Vector3(12/16,2/4), new THREE.Vector3(13/16,2/4)
        );
        scene.add(this.leftArm.mesh);

        this.rightArm = new CubeWithCustomizedTexture(scale/2, scale*1.5, scale/2,
            new THREE.Vector3(-0.75*scale + position.x, 2.25*scale + position.y, + position.z),
            initSkinPath);
        this.rightArm.updateTextureMapping(
        new THREE.Vector3(11/16,0/4), new THREE.Vector3(12/16,0/4), new THREE.Vector3(12/16,1.5/4), new THREE.Vector3(11/16,1.5/4),
        new THREE.Vector3(13/16,0/4), new THREE.Vector3(14/16,0/4), new THREE.Vector3(14/16,1.5/4), new THREE.Vector3(13/16,1.5/4),
        new THREE.Vector3(12/16,0/4), new THREE.Vector3(13/16,0/4), new THREE.Vector3(13/16,1.5/4), new THREE.Vector3(12/16,1.5/4),
        new THREE.Vector3(10/16,0/4), new THREE.Vector3(11/16,0/4), new THREE.Vector3(11/16,1.5/4), new THREE.Vector3(10/16,1.5/4),
        new THREE.Vector3(11/16,1.5/4), new THREE.Vector3(12/16,1.5/4), new THREE.Vector3(12/16,2/4), new THREE.Vector3(11/16,2/4),
        new THREE.Vector3(12/16,1.5/4), new THREE.Vector3(13/16,1.5/4), new THREE.Vector3(13/16,2/4), new THREE.Vector3(12/16,2/4)
        );
        scene.add(this.rightArm.mesh);

        this.leftLeg = new CubeWithCustomizedTexture(scale/2, scale*1.5, scale/2,
            new THREE.Vector3(0.25*scale + position.x, 0.75*scale + position.y, + position.z),
            initSkinPath);
        this.leftLeg.updateTextureMapping(
        new THREE.Vector3((12-10)/16,0/4), new THREE.Vector3((11-10)/16,0/4), new THREE.Vector3((11-10)/16,1.5/4), new THREE.Vector3((12-10)/16,1.5/4),
        new THREE.Vector3((14-10)/16,0/4), new THREE.Vector3((13-10)/16,0/4), new THREE.Vector3((13-10)/16,1.5/4), new THREE.Vector3((14-10)/16,1.5/4),
        new THREE.Vector3((11-10)/16,0/4), new THREE.Vector3((10-10)/16,0/4), new THREE.Vector3((10-10)/16,1.5/4), new THREE.Vector3((11-10)/16,1.5/4),
        new THREE.Vector3((13-10)/16,0/4), new THREE.Vector3((12-10)/16,0/4), new THREE.Vector3((12-10)/16,1.5/4), new THREE.Vector3((13-10)/16,1.5/4),
        new THREE.Vector3((12-10)/16,1.5/4), new THREE.Vector3((11-10)/16,1.5/4), new THREE.Vector3((11-10)/16,2/4), new THREE.Vector3((12-10)/16,2/4),
        new THREE.Vector3((13-10)/16,1.5/4), new THREE.Vector3((12-10)/16,1.5/4), new THREE.Vector3((12-10)/16,2/4), new THREE.Vector3((13-10)/16,2/4)
        );
        scene.add(this.leftLeg.mesh);

        this.rightLeg = new CubeWithCustomizedTexture(scale/2, scale*1.5, scale/2,
            new THREE.Vector3(-0.25*scale + position.x, 0.75*scale + position.y, + position.z),
            initSkinPath);
        this.rightLeg.updateTextureMapping(
        new THREE.Vector3((11-10)/16,0/4), new THREE.Vector3((12-10)/16,0/4), new THREE.Vector3((12-10)/16,1.5/4), new THREE.Vector3((11-10)/16,1.5/4),
        new THREE.Vector3((13-10)/16,0/4), new THREE.Vector3((14-10)/16,0/4), new THREE.Vector3((14-10)/16,1.5/4), new THREE.Vector3((13-10)/16,1.5/4),
        new THREE.Vector3((12-10)/16,0/4), new THREE.Vector3((13-10)/16,0/4), new THREE.Vector3((13-10)/16,1.5/4), new THREE.Vector3((12-10)/16,1.5/4),
        new THREE.Vector3((10-10)/16,0/4), new THREE.Vector3((11-10)/16,0/4), new THREE.Vector3((11-10)/16,1.5/4), new THREE.Vector3((10-10)/16,1.5/4),
        new THREE.Vector3((11-10)/16,1.5/4), new THREE.Vector3((12-10)/16,1.5/4), new THREE.Vector3((12-10)/16,2/4), new THREE.Vector3((11-10)/16,2/4),
        new THREE.Vector3((12-10)/16,1.5/4), new THREE.Vector3((13-10)/16,1.5/4), new THREE.Vector3((13-10)/16,2/4), new THREE.Vector3((12-10)/16,2/4)
        );
        scene.add(this.rightLeg.mesh);
    }
    update_skin(new_skin_path){
        this.head.updateTexturePath(new_skin_path);
        this.body.updateTexturePath(new_skin_path);
        this.leftLeg.updateTexturePath(new_skin_path);
        this.leftArm.updateTexturePath(new_skin_path);
        this.rightLeg.updateTexturePath(new_skin_path);
        this.rightArm.updateTexturePath(new_skin_path);
    }
}



