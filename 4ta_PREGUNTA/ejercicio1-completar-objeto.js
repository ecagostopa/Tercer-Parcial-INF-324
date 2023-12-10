// primer ejercicio con three.js
// crear una geometria teniendo en cuenta el orden de los vértices
var camera, scene, renderer;
var cameraControls;
var clock = new THREE.Clock();
var ambientLight, light;


function init() {
	var canvasWidth = window.innerWidth * 0.9;
	var canvasHeight = window.innerHeight * 0.9;

	// CAMERA

	camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 80000 );
	camera.position.set(12,2,-12);
	camera.lookAt(0,0,0);

	// LIGHTS

	light = new THREE.DirectionalLight( 0xFFFFFF, 0.7 );
	light.position.set( 1, 1, 1 );
	light.target.position.set(0, 0, 0);
	light.target.updateMatrixWorld()

	var ambientLight = new THREE.AmbientLight( 0x111111 );

	// RENDERER
	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( canvasWidth, canvasHeight );
	renderer.setClearColor( 0xAAAAAA, 1.0 );

	renderer.gammaInput = true;
	renderer.gammaOutput = true;

	// Add to DOM
	var container = document.getElementById('container');
	container.appendChild( renderer.domElement );

	// CONTROLS
	cameraControls = new THREE.OrbitControls( camera, renderer.domElement );
	cameraControls.target.set(0, 0, 0);

	// OBJECT0 1: ARBOL
		 var migeometria = new THREE.Geometry();
	for (var i = 0; i <= 4; i=i+2) {
		migeometria.vertices.push( new THREE.Vector3( i, 0, 0) );//0 4 8
		migeometria.vertices.push( new THREE.Vector3( i, 0, -4 ) );//1 5 9 
		migeometria.vertices.push( new THREE.Vector3( i, 4, -4) );//2 6 10
		migeometria.vertices.push( new THREE.Vector3( i, 4, 0 ) );//3 7 11
	}

	migeometria.vertices.push( new THREE.Vector3( 3, 2, -2 ) );//12
	migeometria.vertices.push( new THREE.Vector3( 6, 2, -2 ) );//13
	migeometria.vertices.push( new THREE.Vector3( 8, 2, -2 ) );//14


	migeometria.faces.push( new THREE.Face3( 0, 1, 2 ) ); 
	migeometria.faces.push( new THREE.Face3( 0, 2, 3 ) ); //Base1

	migeometria.faces.push( new THREE.Face3( 4, 5, 6 ) ); 
	migeometria.faces.push( new THREE.Face3( 4, 6, 7 ) ); //Base2

	migeometria.faces.push( new THREE.Face3( 8, 9, 10 ) ); 
	migeometria.faces.push( new THREE.Face3( 8, 10, 11 ) );//Base3

	migeometria.faces.push( new THREE.Face3( 0, 12, 3 ) );
	migeometria.faces.push( new THREE.Face3( 0, 12, 1 ) );
	migeometria.faces.push( new THREE.Face3( 2, 12, 3 ) );
	migeometria.faces.push( new THREE.Face3( 2, 12, 1 ) );//copa1

	migeometria.faces.push( new THREE.Face3( 4, 13, 7 ) );
	migeometria.faces.push( new THREE.Face3( 4, 13, 5 ) );
	migeometria.faces.push( new THREE.Face3( 6, 13, 7 ) );
	migeometria.faces.push( new THREE.Face3( 6, 13, 5 ) );//copa2

	migeometria.faces.push( new THREE.Face3( 8, 14, 9 ) );
	migeometria.faces.push( new THREE.Face3( 8, 14, 11 ) );
	migeometria.faces.push( new THREE.Face3( 10, 14, 9 ) );
	migeometria.faces.push( new THREE.Face3( 10, 14, 11 ) );//copa3

	// OBJECT0 2: TRONCO
	var migeometria1 = new THREE.Geometry();
	migeometria1.vertices.push( new THREE.Vector3( 0, 1, -1) );//0
	migeometria1.vertices.push( new THREE.Vector3( 0, 3, -1 ) );//1
	migeometria1.vertices.push( new THREE.Vector3( -1, 1, -1) );//2
	migeometria1.vertices.push( new THREE.Vector3( -1, 3, -1 ) );//3

	migeometria1.vertices.push( new THREE.Vector3( 0, 1, -3) );//4
	migeometria1.vertices.push( new THREE.Vector3( 0, 3, -3 ) );//5
	migeometria1.vertices.push( new THREE.Vector3( -1, 1, -3) );//6
	migeometria1.vertices.push( new THREE.Vector3( -1, 3, -3 ) );//7

	migeometria1.faces.push( new THREE.Face3( 0, 2, 3 ) ); //DETRAS
	migeometria1.faces.push( new THREE.Face3( 3, 1, 0 ) );

	migeometria1.faces.push( new THREE.Face3( 4, 6, 7 ) ); //FRONTAL
	migeometria1.faces.push( new THREE.Face3( 7, 5, 4 ) );

	migeometria1.faces.push( new THREE.Face3( 1, 3, 7 ) );//DERECHA
	migeometria1.faces.push( new THREE.Face3( 7, 5, 1 ) );

	migeometria1.faces.push( new THREE.Face3( 0, 4, 6 ) );//IZQUIERDA
	migeometria1.faces.push( new THREE.Face3( 6, 2, 0 ) );

	migeometria1.faces.push( new THREE.Face3( 6, 2, 3 ) );//ABAJO
	migeometria1.faces.push( new THREE.Face3( 3, 7, 6 ) );

	// OBJECT0 3: ESTRELLA
	var migeometria2 = new THREE.Geometry();
	migeometria2.vertices.push( new THREE.Vector3( 10, 2, -1) );//0
	migeometria2.vertices.push( new THREE.Vector3( 9, 3, -1 ) );//1
	migeometria2.vertices.push( new THREE.Vector3( 7, 3, -1 ) );//2
	migeometria2.vertices.push( new THREE.Vector3( 7, 1, -1 ) );//3
	migeometria2.vertices.push( new THREE.Vector3( 9, 1, -1 ) );//4
	migeometria2.vertices.push( new THREE.Vector3( 8, 2, -1 ) );//5

	migeometria2.vertices.push( new THREE.Vector3( 10, 2, -3) );//6
	migeometria2.vertices.push( new THREE.Vector3( 9, 3, -3 ) );//7
	migeometria2.vertices.push( new THREE.Vector3( 7, 3, -3 ) );//8
	migeometria2.vertices.push( new THREE.Vector3( 7, 1, -3 ) );//9
	migeometria2.vertices.push( new THREE.Vector3( 9, 1, -3 ) );//10
	migeometria2.vertices.push( new THREE.Vector3( 8, 2, -3 ) );//11

	migeometria2.vertices.push( new THREE.Vector3( 10, 1, -2 ) );//12
	migeometria2.vertices.push( new THREE.Vector3( 8, 1, -2 ) );//13

	migeometria2.vertices.push( new THREE.Vector3( 10, 3, -2 ) );//14
	migeometria2.vertices.push( new THREE.Vector3( 8, 3, -2 ) );//15


	migeometria2.faces.push( new THREE.Face3( 4, 1, 5 ) );
	migeometria2.faces.push( new THREE.Face3( 0, 5, 3 ) );
	migeometria2.faces.push( new THREE.Face3( 0, 2, 5 ) );//ATRAS

	migeometria2.faces.push( new THREE.Face3( 10, 7, 11 ) );
	migeometria2.faces.push( new THREE.Face3( 6, 11, 9 ) );
	migeometria2.faces.push( new THREE.Face3( 6, 8, 11 ) );//DELANTE

	migeometria2.faces.push( new THREE.Face3( 7, 1, 15 ) );
	migeometria2.faces.push( new THREE.Face3( 14, 15, 8 ) );
	migeometria2.faces.push( new THREE.Face3( 15, 14, 2 ) ); //DERECHA

	migeometria2.faces.push( new THREE.Face3( 4, 10, 13 ) );
	migeometria2.faces.push( new THREE.Face3( 12, 13, 3 ) );
	migeometria2.faces.push( new THREE.Face3( 13, 12, 9 ) );//IZQUIERDA

	// OBJECT0 3: ADORNOS 1
	var migeometria3 = new THREE.Geometry();
	for (var i = 0; i <= 4; i=i+2) {
		migeometria3.vertices.push( new THREE.Vector3( i, 3.5, -4) );//0 4 8
		migeometria3.vertices.push( new THREE.Vector3( i, 4, -4) );//1 5 9
		migeometria3.vertices.push( new THREE.Vector3( i-0.5, 4, -4) );//2 6 10
		migeometria3.vertices.push( new THREE.Vector3( i-0.5, 3.5, -4) );//3 7 11
	}

	for (var i = 0; i <= 4; i=i+2) {
		migeometria3.vertices.push( new THREE.Vector3( i, 3.5, -3.5) );//12 16 20
		migeometria3.vertices.push( new THREE.Vector3( i, 4, -3.5) );//13 17 21 
		migeometria3.vertices.push( new THREE.Vector3( i-0.5, 4, -3.5) );//14 18 22
		migeometria3.vertices.push( new THREE.Vector3( i-0.5, 3.5, -3.5) );//15 19 23
	}

	migeometria3.faces.push( new THREE.Face3( 0, 1, 2 ) );
	migeometria3.faces.push( new THREE.Face3( 2, 3, 0 ) );//FRONTAL
	migeometria3.faces.push( new THREE.Face3( 4, 5, 6 ) );
	migeometria3.faces.push( new THREE.Face3( 6, 7, 4 ) );//FRONTAL
	migeometria3.faces.push( new THREE.Face3( 8, 9, 10 ) );
	migeometria3.faces.push( new THREE.Face3( 10, 11, 8 ) );//FRONTAL


	migeometria3.faces.push( new THREE.Face3( 12, 13, 14 ) );
	migeometria3.faces.push( new THREE.Face3( 14, 15, 12 ) );//ATRAS
	migeometria3.faces.push( new THREE.Face3( 16, 17, 18 ) );
	migeometria3.faces.push( new THREE.Face3( 18, 19, 16 ) );//ATRAS
	migeometria3.faces.push( new THREE.Face3( 20, 21, 22 ) );
	migeometria3.faces.push( new THREE.Face3( 22, 23, 20 ) );//ATRAS

	migeometria3.faces.push( new THREE.Face3( 1, 13, 14 ) );
	migeometria3.faces.push( new THREE.Face3( 14, 2, 1 ) );//DERECHA
	migeometria3.faces.push( new THREE.Face3( 5, 17, 18 ) );
	migeometria3.faces.push( new THREE.Face3( 18, 6, 5 ) );//DERECHA
	migeometria3.faces.push( new THREE.Face3( 9, 21, 22 ) );
	migeometria3.faces.push( new THREE.Face3( 22, 10, 9 ) );//DERECHA

	migeometria3.faces.push( new THREE.Face3( 12, 13, 1 ) );
	migeometria3.faces.push( new THREE.Face3( 1, 0, 12 ) );//ARRIBA
	migeometria3.faces.push( new THREE.Face3( 16, 17, 5 ) );
	migeometria3.faces.push( new THREE.Face3( 5, 4, 16 ) );//ARRIBA
	migeometria3.faces.push( new THREE.Face3( 20, 21, 9 ) );
	migeometria3.faces.push( new THREE.Face3( 9, 8, 20 ) );//ARRIBA

	migeometria3.faces.push( new THREE.Face3( 15, 14, 2 ) );
	migeometria3.faces.push( new THREE.Face3( 2, 3, 15 ) );//ABAJO
	migeometria3.faces.push( new THREE.Face3( 19, 18, 6 ) );
	migeometria3.faces.push( new THREE.Face3( 6, 7, 19 ) );//ABAJO
	migeometria3.faces.push( new THREE.Face3( 23, 22, 10 ) );
	migeometria3.faces.push( new THREE.Face3( 10, 11, 23 ) );//ABAJO

	migeometria3.faces.push( new THREE.Face3( 12, 0, 3 ) );
	migeometria3.faces.push( new THREE.Face3( 3, 15, 12 ) );//IZQUIERDA
	migeometria3.faces.push( new THREE.Face3( 16, 4, 7 ) );
	migeometria3.faces.push( new THREE.Face3( 7, 19, 16 ) );//IZQUIERDA
	migeometria3.faces.push( new THREE.Face3( 20, 8, 11 ) );
	migeometria3.faces.push( new THREE.Face3( 11, 23, 20 ) );//IZQUIERDA

	// OBJECT0 3: ADORNOS 2
	var migeometria4 = new THREE.Geometry();
	for (var i = 0; i <= 4; i=i+2) {
		migeometria4.vertices.push( new THREE.Vector3( i, 0, -4) );//0 4 8
		migeometria4.vertices.push( new THREE.Vector3( i, 0.5, -4) );//1 5 9
		migeometria4.vertices.push( new THREE.Vector3( i-0.5, 0.5, -4) );//2 6 10
		migeometria4.vertices.push( new THREE.Vector3( i-0.5, 0, -4) );//3 7 11
	}

	for (var i = 0; i <= 4; i=i+2) {
		migeometria4.vertices.push( new THREE.Vector3( i, 0, -3.5) );//12 16 20
		migeometria4.vertices.push( new THREE.Vector3( i, 0.5, -3.5) );//13 17 21 
		migeometria4.vertices.push( new THREE.Vector3( i-0.5, 0.5, -3.5) );//14 18 22
		migeometria4.vertices.push( new THREE.Vector3( i-0.5, 0, -3.5) );//15 19 23
	}

	migeometria4.faces.push( new THREE.Face3( 0, 1, 2 ) );
	migeometria4.faces.push( new THREE.Face3( 2, 3, 0 ) );//FRONTAL
	migeometria4.faces.push( new THREE.Face3( 4, 5, 6 ) );
	migeometria4.faces.push( new THREE.Face3( 6, 7, 4 ) );//FRONTAL
	migeometria4.faces.push( new THREE.Face3( 8, 9, 10 ) );
	migeometria4.faces.push( new THREE.Face3( 10, 11, 8 ) );//FRONTAL


	migeometria4.faces.push( new THREE.Face3( 12, 13, 14 ) );
	migeometria4.faces.push( new THREE.Face3( 14, 15, 12 ) );//ATRAS
	migeometria4.faces.push( new THREE.Face3( 16, 17, 18 ) );
	migeometria4.faces.push( new THREE.Face3( 18, 19, 16 ) );//ATRAS
	migeometria4.faces.push( new THREE.Face3( 20, 21, 22 ) );
	migeometria4.faces.push( new THREE.Face3( 22, 23, 20 ) );//ATRAS

	migeometria4.faces.push( new THREE.Face3( 1, 13, 14 ) );
	migeometria4.faces.push( new THREE.Face3( 14, 2, 1 ) );//DERECHA
	migeometria4.faces.push( new THREE.Face3( 5, 17, 18 ) );
	migeometria4.faces.push( new THREE.Face3( 18, 6, 5 ) );//DERECHA
	migeometria4.faces.push( new THREE.Face3( 9, 21, 22 ) );
	migeometria4.faces.push( new THREE.Face3( 22, 10, 9 ) );//DERECHA

	migeometria4.faces.push( new THREE.Face3( 12, 13, 1 ) );
	migeometria4.faces.push( new THREE.Face3( 1, 0, 12 ) );//ARRIBA
	migeometria4.faces.push( new THREE.Face3( 16, 17, 5 ) );
	migeometria4.faces.push( new THREE.Face3( 5, 4, 16 ) );//ARRIBA
	migeometria4.faces.push( new THREE.Face3( 20, 21, 9 ) );
	migeometria4.faces.push( new THREE.Face3( 9, 8, 20 ) );//ARRIBA

	migeometria4.faces.push( new THREE.Face3( 15, 14, 2 ) );
	migeometria4.faces.push( new THREE.Face3( 2, 3, 15 ) );//ABAJO
	migeometria4.faces.push( new THREE.Face3( 19, 18, 6 ) );
	migeometria4.faces.push( new THREE.Face3( 6, 7, 19 ) );//ABAJO
	migeometria4.faces.push( new THREE.Face3( 23, 22, 10 ) );
	migeometria4.faces.push( new THREE.Face3( 10, 11, 23 ) );//ABAJO

	migeometria4.faces.push( new THREE.Face3( 12, 0, 3 ) );
	migeometria4.faces.push( new THREE.Face3( 3, 15, 12 ) );//IZQUIERDA
	migeometria4.faces.push( new THREE.Face3( 16, 4, 7 ) );
	migeometria4.faces.push( new THREE.Face3( 7, 19, 16 ) );//IZQUIERDA
	migeometria4.faces.push( new THREE.Face3( 20, 8, 11 ) );
	migeometria4.faces.push( new THREE.Face3( 11, 23, 20 ) );//IZQUIERDA

	// OBJECT0 3: ADORNOS 3
	var migeometria5 = new THREE.Geometry();
	for (var i = 0; i <= 4; i=i+2) {
		migeometria5.vertices.push( new THREE.Vector3( i, 0, -0.5) );//0 4 8
		migeometria5.vertices.push( new THREE.Vector3( i, 0.5, -0.5) );//1 5 9
		migeometria5.vertices.push( new THREE.Vector3( i-0.5, 0.5, -0.5) );//2 6 10
		migeometria5.vertices.push( new THREE.Vector3( i-0.5, 0, -0.5) );//3 7 11
	}

	for (var i = 0; i <= 4; i=i+2) {
		migeometria5.vertices.push( new THREE.Vector3( i, 0, 0) );//12 16 20
		migeometria5.vertices.push( new THREE.Vector3( i, 0.5, 0) );//13 17 21 
		migeometria5.vertices.push( new THREE.Vector3( i-0.5, 0.5, 0) );//14 18 22
		migeometria5.vertices.push( new THREE.Vector3( i-0.5, 0, 0) );//15 19 23
	}

	migeometria5.faces.push( new THREE.Face3( 0, 1, 2 ) );
	migeometria5.faces.push( new THREE.Face3( 2, 3, 0 ) );//FRONTAL
	migeometria5.faces.push( new THREE.Face3( 4, 5, 6 ) );
	migeometria5.faces.push( new THREE.Face3( 6, 7, 4 ) );//FRONTAL
	migeometria5.faces.push( new THREE.Face3( 8, 9, 10 ) );
	migeometria5.faces.push( new THREE.Face3( 10, 11, 8 ) );//FRONTAL


	migeometria5.faces.push( new THREE.Face3( 12, 13, 14 ) );
	migeometria5.faces.push( new THREE.Face3( 14, 15, 12 ) );//ATRAS
	migeometria5.faces.push( new THREE.Face3( 16, 17, 18 ) );
	migeometria5.faces.push( new THREE.Face3( 18, 19, 16 ) );//ATRAS
	migeometria5.faces.push( new THREE.Face3( 20, 21, 22 ) );
	migeometria5.faces.push( new THREE.Face3( 22, 23, 20 ) );//ATRAS

	migeometria5.faces.push( new THREE.Face3( 1, 13, 14 ) );
	migeometria5.faces.push( new THREE.Face3( 14, 2, 1 ) );//DERECHA
	migeometria5.faces.push( new THREE.Face3( 5, 17, 18 ) );
	migeometria5.faces.push( new THREE.Face3( 18, 6, 5 ) );//DERECHA
	migeometria5.faces.push( new THREE.Face3( 9, 21, 22 ) );
	migeometria5.faces.push( new THREE.Face3( 22, 10, 9 ) );//DERECHA

	migeometria5.faces.push( new THREE.Face3( 12, 13, 1 ) );
	migeometria5.faces.push( new THREE.Face3( 1, 0, 12 ) );//ARRIBA
	migeometria5.faces.push( new THREE.Face3( 16, 17, 5 ) );
	migeometria5.faces.push( new THREE.Face3( 5, 4, 16 ) );//ARRIBA
	migeometria5.faces.push( new THREE.Face3( 20, 21, 9 ) );
	migeometria5.faces.push( new THREE.Face3( 9, 8, 20 ) );//ARRIBA

	migeometria5.faces.push( new THREE.Face3( 15, 14, 2 ) );
	migeometria5.faces.push( new THREE.Face3( 2, 3, 15 ) );//ABAJO
	migeometria5.faces.push( new THREE.Face3( 19, 18, 6 ) );
	migeometria5.faces.push( new THREE.Face3( 6, 7, 19 ) );//ABAJO
	migeometria5.faces.push( new THREE.Face3( 23, 22, 10 ) );
	migeometria5.faces.push( new THREE.Face3( 10, 11, 23 ) );//ABAJO

	migeometria5.faces.push( new THREE.Face3( 12, 0, 3 ) );
	migeometria5.faces.push( new THREE.Face3( 3, 15, 12 ) );//IZQUIERDA
	migeometria5.faces.push( new THREE.Face3( 16, 4, 7 ) );
	migeometria5.faces.push( new THREE.Face3( 7, 19, 16 ) );//IZQUIERDA
	migeometria5.faces.push( new THREE.Face3( 20, 8, 11 ) );
	migeometria5.faces.push( new THREE.Face3( 11, 23, 20 ) );//IZQUIERDA

	// OBJECT0 3: ADORNOS 4
	var migeometria6 = new THREE.Geometry();
	for (var i = 0; i <= 4; i=i+2) {
		migeometria6.vertices.push( new THREE.Vector3( i, 3.5, -0.5) );//0 4 8
		migeometria6.vertices.push( new THREE.Vector3( i, 4, -0.5) );//1 5 9
		migeometria6.vertices.push( new THREE.Vector3( i-0.5, 4, -0.5) );//2 6 10
		migeometria6.vertices.push( new THREE.Vector3( i-0.5, 3.5, -0.5) );//3 7 11
	}

	for (var i = 0; i <= 4; i=i+2) {
		migeometria6.vertices.push( new THREE.Vector3( i, 3.5, 0) );//0 4 8
		migeometria6.vertices.push( new THREE.Vector3( i, 4, 0) );//1 5 9
		migeometria6.vertices.push( new THREE.Vector3( i-0.5, 4, 0) );//2 6 10
		migeometria6.vertices.push( new THREE.Vector3( i-0.5, 3.5, 0) );//3 7 11
	}

	migeometria6.faces.push( new THREE.Face3( 0, 1, 2 ) );
	migeometria6.faces.push( new THREE.Face3( 2, 3, 0 ) );//FRONTAL
	migeometria6.faces.push( new THREE.Face3( 4, 5, 6 ) );
	migeometria6.faces.push( new THREE.Face3( 6, 7, 4 ) );//FRONTAL
	migeometria6.faces.push( new THREE.Face3( 8, 9, 10 ) );
	migeometria6.faces.push( new THREE.Face3( 10, 11, 8 ) );//FRONTAL


	migeometria6.faces.push( new THREE.Face3( 12, 13, 14 ) );
	migeometria6.faces.push( new THREE.Face3( 14, 15, 12 ) );//ATRAS
	migeometria6.faces.push( new THREE.Face3( 16, 17, 18 ) );
	migeometria6.faces.push( new THREE.Face3( 18, 19, 16 ) );//ATRAS
	migeometria6.faces.push( new THREE.Face3( 20, 21, 22 ) );
	migeometria6.faces.push( new THREE.Face3( 22, 23, 20 ) );//ATRAS

	migeometria6.faces.push( new THREE.Face3( 1, 13, 14 ) );
	migeometria6.faces.push( new THREE.Face3( 14, 2, 1 ) );//DERECHA
	migeometria6.faces.push( new THREE.Face3( 5, 17, 18 ) );
	migeometria6.faces.push( new THREE.Face3( 18, 6, 5 ) );//DERECHA
	migeometria6.faces.push( new THREE.Face3( 9, 21, 22 ) );
	migeometria6.faces.push( new THREE.Face3( 22, 10, 9 ) );//DERECHA

	migeometria6.faces.push( new THREE.Face3( 12, 13, 1 ) );
	migeometria6.faces.push( new THREE.Face3( 1, 0, 12 ) );//ARRIBA
	migeometria6.faces.push( new THREE.Face3( 16, 17, 5 ) );
	migeometria6.faces.push( new THREE.Face3( 5, 4, 16 ) );//ARRIBA
	migeometria6.faces.push( new THREE.Face3( 20, 21, 9 ) );
	migeometria6.faces.push( new THREE.Face3( 9, 8, 20 ) );//ARRIBA

	migeometria6.faces.push( new THREE.Face3( 15, 14, 2 ) );
	migeometria6.faces.push( new THREE.Face3( 2, 3, 15 ) );//ABAJO
	migeometria6.faces.push( new THREE.Face3( 19, 18, 6 ) );
	migeometria6.faces.push( new THREE.Face3( 6, 7, 19 ) );//ABAJO
	migeometria6.faces.push( new THREE.Face3( 23, 22, 10 ) );
	migeometria6.faces.push( new THREE.Face3( 10, 11, 23 ) );//ABAJO

	migeometria6.faces.push( new THREE.Face3( 12, 0, 3 ) );
	migeometria6.faces.push( new THREE.Face3( 3, 15, 12 ) );//IZQUIERDA
	migeometria6.faces.push( new THREE.Face3( 16, 4, 7 ) );
	migeometria6.faces.push( new THREE.Face3( 7, 19, 16 ) );//IZQUIERDA
	migeometria6.faces.push( new THREE.Face3( 20, 8, 11 ) );
	migeometria6.faces.push( new THREE.Face3( 11, 23, 20 ) );//IZQUIERDA

	// OBJECT0 3: ADORNOS 5
	var migeometria7 = new THREE.Geometry();
	for (var i = 0; i <= 4; i=i+2) {
		migeometria7.vertices.push( new THREE.Vector3( i, 1.75, -4) );//0 4 8
		migeometria7.vertices.push( new THREE.Vector3( i, 2.25, -4) );//1 5 9
		migeometria7.vertices.push( new THREE.Vector3( i-0.5, 2.25, -4) );//2 6 10
		migeometria7.vertices.push( new THREE.Vector3( i-0.5, 1.75, -4) );//3 7 11
	}

	for (var i = 0; i <= 4; i=i+2) {
		migeometria7.vertices.push( new THREE.Vector3( i, 1.75, -3.5) );//0 4 8
		migeometria7.vertices.push( new THREE.Vector3( i, 2.25, -3.5) );//1 5 9
		migeometria7.vertices.push( new THREE.Vector3( i-0.5, 2.25, -3.5) );//2 6 10
		migeometria7.vertices.push( new THREE.Vector3( i-0.5, 1.75, -3.5) );//3 7 11
	}

	migeometria7.faces.push( new THREE.Face3( 0, 1, 2 ) );
	migeometria7.faces.push( new THREE.Face3( 2, 3, 0 ) );//FRONTAL
	migeometria7.faces.push( new THREE.Face3( 4, 5, 6 ) );
	migeometria7.faces.push( new THREE.Face3( 6, 7, 4 ) );//FRONTAL
	migeometria7.faces.push( new THREE.Face3( 8, 9, 10 ) );
	migeometria7.faces.push( new THREE.Face3( 10, 11, 8 ) );//FRONTAL

	migeometria7.faces.push( new THREE.Face3( 12, 13, 14 ) );
	migeometria7.faces.push( new THREE.Face3( 14, 15, 12 ) );//ATRAS
	migeometria7.faces.push( new THREE.Face3( 16, 17, 18 ) );
	migeometria7.faces.push( new THREE.Face3( 18, 19, 16 ) );//ATRAS
	migeometria7.faces.push( new THREE.Face3( 20, 21, 22 ) );
	migeometria7.faces.push( new THREE.Face3( 22, 23, 20 ) );//ATRAS

	migeometria7.faces.push( new THREE.Face3( 1, 13, 14 ) );
	migeometria7.faces.push( new THREE.Face3( 14, 2, 1 ) );//DERECHA
	migeometria7.faces.push( new THREE.Face3( 5, 17, 18 ) );
	migeometria7.faces.push( new THREE.Face3( 18, 6, 5 ) );//DERECHA
	migeometria7.faces.push( new THREE.Face3( 9, 21, 22 ) );
	migeometria7.faces.push( new THREE.Face3( 22, 10, 9 ) );//DERECHA

	migeometria7.faces.push( new THREE.Face3( 12, 13, 1 ) );
	migeometria7.faces.push( new THREE.Face3( 1, 0, 12 ) );//ARRIBA
	migeometria7.faces.push( new THREE.Face3( 16, 17, 5 ) );
	migeometria7.faces.push( new THREE.Face3( 5, 4, 16 ) );//ARRIBA
	migeometria7.faces.push( new THREE.Face3( 20, 21, 9 ) );
	migeometria7.faces.push( new THREE.Face3( 9, 8, 20 ) );//ARRIBA

	migeometria7.faces.push( new THREE.Face3( 15, 14, 2 ) );
	migeometria7.faces.push( new THREE.Face3( 2, 3, 15 ) );//ABAJO
	migeometria7.faces.push( new THREE.Face3( 19, 18, 6 ) );
	migeometria7.faces.push( new THREE.Face3( 6, 7, 19 ) );//ABAJO
	migeometria7.faces.push( new THREE.Face3( 23, 22, 10 ) );
	migeometria7.faces.push( new THREE.Face3( 10, 11, 23 ) );//ABAJO

	migeometria7.faces.push( new THREE.Face3( 12, 0, 3 ) );
	migeometria7.faces.push( new THREE.Face3( 3, 15, 12 ) );//IZQUIERDA
	migeometria7.faces.push( new THREE.Face3( 16, 4, 7 ) );
	migeometria7.faces.push( new THREE.Face3( 7, 19, 16 ) );//IZQUIERDA
	migeometria7.faces.push( new THREE.Face3( 20, 8, 11 ) );
	migeometria7.faces.push( new THREE.Face3( 11, 23, 20 ) );//IZQUIERDA

	// OBJECT0 3: ADORNOS 6
	var migeometria8 = new THREE.Geometry();
	for (var i = 0; i <= 4; i=i+2) {
		migeometria8.vertices.push( new THREE.Vector3( i, 1.75, -0.5) );//0 4 8
		migeometria8.vertices.push( new THREE.Vector3( i, 2.25, -0.5) );//1 5 9
		migeometria8.vertices.push( new THREE.Vector3( i-0.5, 2.25, -0.5) );//2 6 10
		migeometria8.vertices.push( new THREE.Vector3( i-0.5, 1.75, -0.5) );//3 7 11
	}

	for (var i = 0; i <= 4; i=i+2) {
		migeometria8.vertices.push( new THREE.Vector3( i, 1.75, 0) );//0 4 8
		migeometria8.vertices.push( new THREE.Vector3( i, 2.25, 0) );//1 5 9
		migeometria8.vertices.push( new THREE.Vector3( i-0.5, 2.25, 0) );//2 6 10
		migeometria8.vertices.push( new THREE.Vector3( i-0.5, 1.75, 0) );//3 7 11
	}

	migeometria8.faces.push( new THREE.Face3( 0, 1, 2 ) );
	migeometria8.faces.push( new THREE.Face3( 2, 3, 0 ) );//FRONTAL
	migeometria8.faces.push( new THREE.Face3( 4, 5, 6 ) );
	migeometria8.faces.push( new THREE.Face3( 6, 7, 4 ) );//FRONTAL
	migeometria8.faces.push( new THREE.Face3( 8, 9, 10 ) );
	migeometria8.faces.push( new THREE.Face3( 10, 11, 8 ) );//FRONTAL

	migeometria8.faces.push( new THREE.Face3( 12, 13, 14 ) );
	migeometria8.faces.push( new THREE.Face3( 14, 15, 12 ) );//ATRAS
	migeometria8.faces.push( new THREE.Face3( 16, 17, 18 ) );
	migeometria8.faces.push( new THREE.Face3( 18, 19, 16 ) );//ATRAS
	migeometria8.faces.push( new THREE.Face3( 20, 21, 22 ) );
	migeometria8.faces.push( new THREE.Face3( 22, 23, 20 ) );//ATRAS

	migeometria8.faces.push( new THREE.Face3( 1, 13, 14 ) );
	migeometria8.faces.push( new THREE.Face3( 14, 2, 1 ) );//DERECHA
	migeometria8.faces.push( new THREE.Face3( 5, 17, 18 ) );
	migeometria8.faces.push( new THREE.Face3( 18, 6, 5 ) );//DERECHA
	migeometria8.faces.push( new THREE.Face3( 9, 21, 22 ) );
	migeometria8.faces.push( new THREE.Face3( 22, 10, 9 ) );//DERECHA

	migeometria8.faces.push( new THREE.Face3( 12, 13, 1 ) );
	migeometria8.faces.push( new THREE.Face3( 1, 0, 12 ) );//ARRIBA
	migeometria8.faces.push( new THREE.Face3( 16, 17, 5 ) );
	migeometria8.faces.push( new THREE.Face3( 5, 4, 16 ) );//ARRIBA
	migeometria8.faces.push( new THREE.Face3( 20, 21, 9 ) );
	migeometria8.faces.push( new THREE.Face3( 9, 8, 20 ) );//ARRIBA

	migeometria8.faces.push( new THREE.Face3( 15, 14, 2 ) );
	migeometria8.faces.push( new THREE.Face3( 2, 3, 15 ) );//ABAJO
	migeometria8.faces.push( new THREE.Face3( 19, 18, 6 ) );
	migeometria8.faces.push( new THREE.Face3( 6, 7, 19 ) );//ABAJO
	migeometria8.faces.push( new THREE.Face3( 23, 22, 10 ) );
	migeometria8.faces.push( new THREE.Face3( 10, 11, 23 ) );//ABAJO

	migeometria8.faces.push( new THREE.Face3( 12, 0, 3 ) );
	migeometria8.faces.push( new THREE.Face3( 3, 15, 12 ) );//IZQUIERDA
	migeometria8.faces.push( new THREE.Face3( 16, 4, 7 ) );
	migeometria8.faces.push( new THREE.Face3( 7, 19, 16 ) );//IZQUIERDA
	migeometria8.faces.push( new THREE.Face3( 20, 8, 11 ) );
	migeometria8.faces.push( new THREE.Face3( 11, 23, 20 ) );//IZQUIERDA

	// OBJECT0 3: ADORNOS 7
	var migeometria9 = new THREE.Geometry();
	for (var i = 0; i <= 4; i=i+2) {
		migeometria9.vertices.push( new THREE.Vector3( i, 3.5, -2.25) );//0 4 8
		migeometria9.vertices.push( new THREE.Vector3( i, 4, -2.25) );//1 5 9
		migeometria9.vertices.push( new THREE.Vector3( i-0.5, 4, -2.25) );//2 6 10
		migeometria9.vertices.push( new THREE.Vector3( i-0.5, 3.5, -2.25) );//3 7 11
	}

	for (var i = 0; i <= 4; i=i+2) {
		migeometria9.vertices.push( new THREE.Vector3( i, 3.5, -1.75) );//0 4 8
		migeometria9.vertices.push( new THREE.Vector3( i, 4, -1.75) );//1 5 9
		migeometria9.vertices.push( new THREE.Vector3( i-0.5, 4, -1.75) );//2 6 10
		migeometria9.vertices.push( new THREE.Vector3( i-0.5, 3.5, -1.75) );//3 7 11
	}

	migeometria9.faces.push( new THREE.Face3( 0, 1, 2 ) );
	migeometria9.faces.push( new THREE.Face3( 2, 3, 0 ) );//FRONTAL
	migeometria9.faces.push( new THREE.Face3( 4, 5, 6 ) );
	migeometria9.faces.push( new THREE.Face3( 6, 7, 4 ) );//FRONTAL
	migeometria9.faces.push( new THREE.Face3( 8, 9, 10 ) );
	migeometria9.faces.push( new THREE.Face3( 10, 11, 8 ) );//FRONTAL

	migeometria9.faces.push( new THREE.Face3( 12, 13, 14 ) );
	migeometria9.faces.push( new THREE.Face3( 14, 15, 12 ) );//ATRAS
	migeometria9.faces.push( new THREE.Face3( 16, 17, 18 ) );
	migeometria9.faces.push( new THREE.Face3( 18, 19, 16 ) );//ATRAS
	migeometria9.faces.push( new THREE.Face3( 20, 21, 22 ) );
	migeometria9.faces.push( new THREE.Face3( 22, 23, 20 ) );//ATRAS

	migeometria9.faces.push( new THREE.Face3( 1, 13, 14 ) );
	migeometria9.faces.push( new THREE.Face3( 14, 2, 1 ) );//DERECHA
	migeometria9.faces.push( new THREE.Face3( 5, 17, 18 ) );
	migeometria9.faces.push( new THREE.Face3( 18, 6, 5 ) );//DERECHA
	migeometria9.faces.push( new THREE.Face3( 9, 21, 22 ) );
	migeometria9.faces.push( new THREE.Face3( 22, 10, 9 ) );//DERECHA

	migeometria9.faces.push( new THREE.Face3( 12, 13, 1 ) );
	migeometria9.faces.push( new THREE.Face3( 1, 0, 12 ) );//ARRIBA
	migeometria9.faces.push( new THREE.Face3( 16, 17, 5 ) );
	migeometria9.faces.push( new THREE.Face3( 5, 4, 16 ) );//ARRIBA
	migeometria9.faces.push( new THREE.Face3( 20, 21, 9 ) );
	migeometria9.faces.push( new THREE.Face3( 9, 8, 20 ) );//ARRIBA

	migeometria9.faces.push( new THREE.Face3( 15, 14, 2 ) );
	migeometria9.faces.push( new THREE.Face3( 2, 3, 15 ) );//ABAJO
	migeometria9.faces.push( new THREE.Face3( 19, 18, 6 ) );
	migeometria9.faces.push( new THREE.Face3( 6, 7, 19 ) );//ABAJO
	migeometria9.faces.push( new THREE.Face3( 23, 22, 10 ) );
	migeometria9.faces.push( new THREE.Face3( 10, 11, 23 ) );//ABAJO

	migeometria9.faces.push( new THREE.Face3( 12, 0, 3 ) );
	migeometria9.faces.push( new THREE.Face3( 3, 15, 12 ) );//IZQUIERDA
	migeometria9.faces.push( new THREE.Face3( 16, 4, 7 ) );
	migeometria9.faces.push( new THREE.Face3( 7, 19, 16 ) );//IZQUIERDA
	migeometria9.faces.push( new THREE.Face3( 20, 8, 11 ) );
	migeometria9.faces.push( new THREE.Face3( 11, 23, 20 ) );//IZQUIERDA

	// OBJECT0 3: ADORNOS 8
	var migeometria0 = new THREE.Geometry();
	for (var i = 0; i <= 4; i=i+2) {
		migeometria0.vertices.push( new THREE.Vector3( i, 0, -2.25) );//0 4 8
		migeometria0.vertices.push( new THREE.Vector3( i, 0.5, -2.25) );//1 5 9
		migeometria0.vertices.push( new THREE.Vector3( i-0.5, 0.5, -2.25) );//2 6 10
		migeometria0.vertices.push( new THREE.Vector3( i-0.5, 0, -2.25) );//3 7 11
	}

	for (var i = 0; i <= 4; i=i+2) {
		migeometria0.vertices.push( new THREE.Vector3( i, 0, -1.75) );//0 4 8
		migeometria0.vertices.push( new THREE.Vector3( i, 0.5, -1.75) );//1 5 9
		migeometria0.vertices.push( new THREE.Vector3( i-0.5, 0.5, -1.75) );//2 6 10
		migeometria0.vertices.push( new THREE.Vector3( i-0.5, 0, -1.75) );//3 7 11
	}

	migeometria0.faces.push( new THREE.Face3( 0, 1, 2 ) );
	migeometria0.faces.push( new THREE.Face3( 2, 3, 0 ) );//FRONTAL
	migeometria0.faces.push( new THREE.Face3( 4, 5, 6 ) );
	migeometria0.faces.push( new THREE.Face3( 6, 7, 4 ) );//FRONTAL
	migeometria0.faces.push( new THREE.Face3( 8, 9, 10 ) );
	migeometria0.faces.push( new THREE.Face3( 10, 11, 8 ) );//FRONTAL

	migeometria0.faces.push( new THREE.Face3( 12, 13, 14 ) );
	migeometria0.faces.push( new THREE.Face3( 14, 15, 12 ) );//ATRAS
	migeometria0.faces.push( new THREE.Face3( 16, 17, 18 ) );
	migeometria0.faces.push( new THREE.Face3( 18, 19, 16 ) );//ATRAS
	migeometria0.faces.push( new THREE.Face3( 20, 21, 22 ) );
	migeometria0.faces.push( new THREE.Face3( 22, 23, 20 ) );//ATRAS

	migeometria0.faces.push( new THREE.Face3( 1, 13, 14 ) );
	migeometria0.faces.push( new THREE.Face3( 14, 2, 1 ) );//DERECHA
	migeometria0.faces.push( new THREE.Face3( 5, 17, 18 ) );
	migeometria0.faces.push( new THREE.Face3( 18, 6, 5 ) );//DERECHA
	migeometria0.faces.push( new THREE.Face3( 9, 21, 22 ) );
	migeometria0.faces.push( new THREE.Face3( 22, 10, 9 ) );//DERECHA

	migeometria0.faces.push( new THREE.Face3( 12, 13, 1 ) );
	migeometria0.faces.push( new THREE.Face3( 1, 0, 12 ) );//ARRIBA
	migeometria0.faces.push( new THREE.Face3( 16, 17, 5 ) );
	migeometria0.faces.push( new THREE.Face3( 5, 4, 16 ) );//ARRIBA
	migeometria0.faces.push( new THREE.Face3( 20, 21, 9 ) );
	migeometria0.faces.push( new THREE.Face3( 9, 8, 20 ) );//ARRIBA

	migeometria0.faces.push( new THREE.Face3( 15, 14, 2 ) );
	migeometria0.faces.push( new THREE.Face3( 2, 3, 15 ) );//ABAJO
	migeometria0.faces.push( new THREE.Face3( 19, 18, 6 ) );
	migeometria0.faces.push( new THREE.Face3( 6, 7, 19 ) );//ABAJO
	migeometria0.faces.push( new THREE.Face3( 23, 22, 10 ) );
	migeometria0.faces.push( new THREE.Face3( 10, 11, 23 ) );//ABAJO

	migeometria0.faces.push( new THREE.Face3( 12, 0, 3 ) );
	migeometria0.faces.push( new THREE.Face3( 3, 15, 12 ) );//IZQUIERDA
	migeometria0.faces.push( new THREE.Face3( 16, 4, 7 ) );
	migeometria0.faces.push( new THREE.Face3( 7, 19, 16 ) );//IZQUIERDA
	migeometria0.faces.push( new THREE.Face3( 20, 8, 11 ) );
	migeometria0.faces.push( new THREE.Face3( 11, 23, 20 ) );//IZQUIERDA

    var material = new THREE.MeshBasicMaterial( { color:  0x0b6730} ); // Material de color VERDE
    var material1 = new THREE.MeshBasicMaterial( { color: 0x5b350a} ); // Material de color CAFE
    var material2 = new THREE.MeshBasicMaterial( { color: 0xf6f835} ); // Material de color AMARILLO
    var material3 = new THREE.MeshBasicMaterial( { color: 0xe21309} ); // Material de color ROJO
    var material4 = new THREE.MeshBasicMaterial( { color: 0xe21309} ); // Material de color ROJO
    var material5 = new THREE.MeshBasicMaterial( { color: 0xe21309} ); // Material de color ROJO
    var material6 = new THREE.MeshBasicMaterial( { color: 0xe21309} ); // Material de color ROJO
    var material7 = new THREE.MeshBasicMaterial( { color: 0xe21309} ); // Material de color ROJO
    var material8 = new THREE.MeshBasicMaterial( { color: 0xe21309} ); // Material de color ROJO
    var material9 = new THREE.MeshBasicMaterial( { color: 0xe21309} ); // Material de color ROJO
    var material0 = new THREE.MeshBasicMaterial( { color: 0xe21309} ); // Material de color ROJO
    
    var miobjeto = new THREE.Mesh (migeometria, material); // Crea el objeto ARBOL
	var miobjeto1 = new THREE.Mesh (migeometria1, material1);// Crea objeto TRONCO
	var miobjeto2 = new THREE.Mesh (migeometria2, material2);// Crea objeto ESTRELLA
	var miobjeto3 = new THREE.Mesh (migeometria3, material3);// Crea objeto ADORNOS1
	var miobjeto4 = new THREE.Mesh (migeometria4, material4);// Crea objeto ADORNOS2
	var miobjeto5 = new THREE.Mesh (migeometria5, material5);// Crea objeto ADORNOS3
	var miobjeto6 = new THREE.Mesh (migeometria6, material6);// Crea objeto ADORNOS4
	var miobjeto7 = new THREE.Mesh (migeometria7, material7);// Crea objeto ADORNOS5
	var miobjeto8 = new THREE.Mesh (migeometria8, material8);// Crea objeto ADORNOS6
	var miobjeto9 = new THREE.Mesh (migeometria9, material9);// Crea objeto ADORNOS7
	var miobjeto0 = new THREE.Mesh (migeometria0, material0);// Crea objeto ADORNOS8

	// SCENE: ARBOL, TRONCO, ESTRELLA, ADORNOS

	scene = new THREE.Scene();
	scene.add( light );
	scene.add( ambientLight );
	scene.add( miobjeto );
	scene.add( miobjeto1 );
	scene.add( miobjeto2 );
	scene.add( miobjeto3 );
	scene.add( miobjeto4 );
	scene.add( miobjeto5 );
	scene.add( miobjeto6 );
	scene.add( miobjeto7 );
	scene.add( miobjeto8 );
	scene.add( miobjeto9 );
	scene.add( miobjeto0 );
}

function animate() {
	window.requestAnimationFrame( animate );
	render();
}

function render() {
	var delta = clock.getDelta();
	cameraControls.update(delta);
	renderer.render( scene, camera );
}
try {
	init();
	animate();
} catch(e) {
	var errorReport = "Your program encountered an unrecoverable error, can not draw on canvas. Error was:<br/><br/>";
	$('#container').append(errorReport+e);
}
