// // Global for twinkling stars
// let stars;

// // Create scene
// const scene = new THREE.Scene();
// scene.background = new THREE.Color(0x000000);

// // Camera
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.z = 80;

// // Renderer
// const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('solarCanvas') });
// renderer.setSize(window.innerWidth, window.innerHeight);

// // Lighting
// const ambientLight = new THREE.AmbientLight(0x333333);
// const pointLight = new THREE.PointLight(0xffffff, 2, 300);
// pointLight.position.set(0, 0, 0);
// scene.add(ambientLight, pointLight);

// // 🌟 Stars function
// function addStars() {
//   const starGeometry = new THREE.BufferGeometry();
//   const starMaterial = new THREE.PointsMaterial({
//     color: 0xffffff,
//     size: 1,
//     transparent: true,
//     opacity: 0.8
//   });

//   const starVertices = [];
//   for (let i = 0; i < 1000; i++) {
//     const x = (Math.random() - 0.5) * 2000;
//     const y = (Math.random() - 0.5) * 2000;
//     const z = (Math.random() - 0.5) * 2000;
//     starVertices.push(x, y, z);
//   }

//   starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
//   stars = new THREE.Points(starGeometry, starMaterial);
//   scene.add(stars);
// }

// addStars(); // Call star function

// // ☀️ Sun
// const sunGeo = new THREE.SphereGeometry(4, 32, 32); // Bigger sun
// const sunMat = new THREE.MeshBasicMaterial({ color: 0xffff00 });
// const sun = new THREE.Mesh(sunGeo, sunMat);
// scene.add(sun);

// // 🪐 Planets with orbit details
// const planets = [
//   { name: "Mercury", color: 0xaaaaaa, radius: 0.9, distance: 8, speed: 0.02 },
//   { name: "Venus", color: 0xffcc99, radius: 1.1, distance: 11, speed: 0.015 },
//   { name: "Earth", color: 0x3399ff, radius: 1.2, distance: 14, speed: 0.012 },
//   { name: "Mars", color: 0xff6633, radius: 1.0, distance: 17, speed: 0.01 },
//   { name: "Jupiter", color: 0xffcc66, radius: 2.0, distance: 21, speed: 0.008 },
//   { name: "Saturn", color: 0xffff99, radius: 1.7, distance: 26, speed: 0.006 },
//   { name: "Uranus", color: 0x66ffff, radius: 1.5, distance: 30, speed: 0.004 },
//   { name: "Neptune", color: 0x3366ff, radius: 1.5, distance: 35, speed: 0.003 }
// ];

// // Add planets to scene + controls
// planets.forEach(planet => {
//   const geometry = new THREE.SphereGeometry(planet.radius, 32, 32);
//   const material = new THREE.MeshStandardMaterial({ color: planet.color });
//   const mesh = new THREE.Mesh(geometry, material);
//   planet.mesh = mesh;
//   planet.angle = 0;
//   scene.add(mesh);

//   // Slider control
//   const label = document.createElement("label");
//   label.innerHTML = `${planet.name} Speed <input type="range" min="0.001" max="0.05" step="0.001" value="${planet.speed}" id="${planet.name}-speed">`;
//   document.getElementById("controls").appendChild(label);
// });

// // Update speed when sliders move
// planets.forEach(planet => {
//   const slider = document.getElementById(`${planet.name}-speed`);
//   slider.addEventListener("input", e => {
//     planet.speed = parseFloat(e.target.value);
//   });
// });

// // 🌠 Animation loop
// function animate() {
//   requestAnimationFrame(animate);

//   // Update planet positions
//   planets.forEach(planet => {
//     planet.angle += planet.speed;
//     planet.mesh.position.x = Math.cos(planet.angle) * planet.distance;
//     planet.mesh.position.z = Math.sin(planet.angle) * planet.distance;
//   });

//   // ✨ Twinkle stars
//   if (stars && stars.material) {
//     const t = Date.now() * 0.001;
//     stars.material.opacity = 0.6 + 0.4 * Math.sin(t);
//   }

//   renderer.render(scene, camera);
// }
// animate();

// // 🔄 Make canvas responsive
// window.addEventListener("resize", () => {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// });

// Scene setup
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 80;

const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('solarCanvas') });
renderer.setSize(window.innerWidth, window.innerHeight);

// Lights
const ambientLight = new THREE.AmbientLight(0x333333);
const pointLight = new THREE.PointLight(0xffffff, 2, 300);
pointLight.position.set(0, 0, 0);
scene.add(ambientLight, pointLight);

// Stars
const starGeometry = new THREE.BufferGeometry();
const starMaterial = new THREE.PointsMaterial({
  color: 0xffffff,
  size: 1.2,
  transparent: true
});
const starVertices = [];
for (let i = 0; i < 1000; i++) {
  const x = (Math.random() - 0.5) * 2000;
  const y = (Math.random() - 0.5) * 2000;
  const z = (Math.random() - 0.5) * 2000;
  starVertices.push(x, y, z);
}
starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
const stars = new THREE.Points(starGeometry, starMaterial);
scene.add(stars);

// Sun
const sunGeo = new THREE.SphereGeometry(4, 32, 32);
const sunMat = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const sun = new THREE.Mesh(sunGeo, sunMat);
scene.add(sun);

// Planets
const planets = [
  { name: "Mercury", color: 0xaaaaaa, radius: 0.9, distance: 8, speed: 0.02 },
  { name: "Venus", color: 0xffcc99, radius: 1.1, distance: 11, speed: 0.015 },
  { name: "Earth", color: 0x3399ff, radius: 1.2, distance: 14, speed: 0.012 },
  { name: "Mars", color: 0xff6633, radius: 1.0, distance: 17, speed: 0.01 },
  { name: "Jupiter", color: 0xffcc66, radius: 2.0, distance: 21, speed: 0.008 },
  { name: "Saturn", color: 0xffff99, radius: 1.7, distance: 26, speed: 0.006 },
  { name: "Uranus", color: 0x66ffff, radius: 1.5, distance: 30, speed: 0.004 },
  { name: "Neptune", color: 0x3366ff, radius: 1.5, distance: 35, speed: 0.003 }
];

// Create planets & sliders
planets.forEach(planet => {
  const geometry = new THREE.SphereGeometry(planet.radius, 32, 32);
  const material = new THREE.MeshStandardMaterial({ color: planet.color });
  const mesh = new THREE.Mesh(geometry, material);
  planet.mesh = mesh;
  planet.angle = 0;
  scene.add(mesh);

  const label = document.createElement("label");
  label.innerHTML = `${planet.name} Speed <input type="range" min="0.001" max="0.05" step="0.001" value="${planet.speed}" id="${planet.name}-speed">`;
  document.getElementById("controls").appendChild(label);
});

// Sliders interaction
planets.forEach(planet => {
  const slider = document.getElementById(`${planet.name}-speed`);
  slider.addEventListener("input", e => {
    planet.speed = parseFloat(e.target.value);
  });
});

// Tooltip setup
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
const tooltip = document.getElementById('tooltip');

window.addEventListener('mousemove', (event) => {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(planets.map(p => p.mesh));

  if (intersects.length > 0) {
    const planet = planets.find(p => p.mesh === intersects[0].object);
    tooltip.style.display = 'block';
    tooltip.style.left = `${event.clientX + 10}px`;
    tooltip.style.top = `${event.clientY + 10}px`;
    tooltip.textContent = planet.name;
  } else {
    tooltip.style.display = 'none';
  }
});

// Animate
function animate() {
  requestAnimationFrame(animate);

  // Twinkling stars
  stars.material.opacity = 0.6 + 0.4 * Math.sin(Date.now() * 0.002);
  stars.material.color.setHSL(Math.random(), 1, 0.9);

  // Planets orbit
  planets.forEach(planet => {
    planet.angle += planet.speed;
    planet.mesh.position.x = Math.cos(planet.angle) * planet.distance;
    planet.mesh.position.z = Math.sin(planet.angle) * planet.distance;
  });

  renderer.render(scene, camera);
}
animate();

// Responsive canvas
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
