(function($) {
  
  var camera, scene, renderer,
  geometry, material, mesh;

  init();
  animate();

  function init() {
    var width = $('#iphone').width(),
        height = 400;

    camera = new THREE.Camera( 75, width / height, 1, 10000 );
    camera.position.z = 550;

    scene = new THREE.Scene();

    var materials = [
      [ new THREE.MeshBasicMaterial( { color: 0xdddde4 } ) ],
      [ new THREE.MeshBasicMaterial( { color: 0xdddde4 } ) ],
      [ new THREE.MeshBasicMaterial( { color: 0xdddde4 } ) ],
      [ new THREE.MeshBasicMaterial( { color: 0xdddde4 } ) ],
      [ new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( '/images/iphone-front.png' ) } ) ],
      [ new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( '/images/iphone-rear.png' ) } ) ]
    ];

    cube = new THREE.CubeGeometry( 254, 493, 30, 1, 1, 1, materials );
    mesh = new THREE.Mesh( cube, new THREE.MeshFaceMaterial() );
    scene.addObject( mesh );

    renderer = new THREE.CanvasRenderer();
    renderer.setSize( width, height );

    $('#iphone').append( renderer.domElement );
  }

  function animate() {
    // Include examples/js/RequestAnimationFrame.js for cross-browser compatibility.
    requestAnimationFrame( animate );
    render();
  }

  function render() {
    //mesh.rotation.x += 0.001;
    mesh.rotation.y += 0.01;

    renderer.render( scene, camera );
  }

  
  
})(jQuery);
