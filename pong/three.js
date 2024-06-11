import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
	75, window.innerWidth / window.innerHeight, 1, 420
);
const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const lightbulb = new THREE.PointLight(0xffffff);
lightbulb.position.set(0, 100, 0);
const lamp = new THREE.PointLightHelper(lightbulb);
const ambient_light = new THREE.AmbientLight(0xffffff);

const plane = new THREE.GridHelper(200, 50);

const ball_texture = new THREE.TextureLoader().load("green-texture.avif");
const base_material = new THREE.MeshStandardMaterial({ color: 0x42FF42 });
const icosa_geometry = new THREE.IcosahedronGeometry(8, 0);
// const icosaOne = new THREE.Mesh(icosa_geometry, base_material);
const icosaOne = new THREE.Mesh(icosa_geometry, new THREE.MeshBasicMaterial({ map: ball_texture }));

const wire_material = new THREE.MeshBasicMaterial({ color: 0x42FF42, wireframe: true });
const box_geometry = new THREE.BoxGeometry(32, 6, 6, 8, 2, 2);
const paddleOne = new THREE.Mesh(box_geometry, wire_material);
const paddleTwo = new THREE.Mesh(box_geometry, wire_material);
paddleOne.position.setX(-20);
paddleOne.position.setZ(-90);
paddleTwo.position.setX(40);
paddleTwo.position.setZ(90);

const avatar_texture = new THREE.TextureLoader().load("avatar.jpg");
const avatar = new THREE.Mesh(
	new THREE.BoxGeometry(6, 6, 6),
	new THREE.MeshBasicMaterial({ map: avatar_texture, })
	);
avatar.position.setZ(-100);
avatar.position.setY(20);
const avatar_box = new THREE.Mesh(
	new THREE.BoxGeometry(7, 7, 7),
	wire_material
);
avatar_box.position.setZ(-100);
avatar_box.position.setY(20);

scene.add(icosaOne);
scene.add(paddleOne, paddleTwo);
scene.add(avatar, avatar_box);
scene.add(ambient_light, lightbulb);
scene.add(lamp);
scene.add(plane);

camera.position.setX(-60);
camera.position.setY(80);
camera.position.setZ(60);
camera.rotateX(Math.PI);
camera.rotateY(Math.PI);
const cam_controls = new OrbitControls(camera, renderer.domElement);

function animate() {
	requestAnimationFrame(animate);

	icosaOne.rotation.x += 0.01;
	icosaOne.rotation.y += 0.02;
	icosaOne.rotation.z += 0.005;

	cam_controls.update();
	renderer.render(scene, camera);
}

animate();
