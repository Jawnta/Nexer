<script setup lang="ts"></script>
<template>
    <div>
        <button id="color-change-button" class="gui-button">Color</button>
    </div>
</template>

<script type="module">
import * as THREE from "three";
import { ARButton } from "three/examples/jsm/webxr/ARButton.js";

export default {
    mounted() {
        this.init();
        this.animate();
        console.log("test");
    },
    data() {
        return {
            camera: "",
            scene: "",
            renderer: "",
            mesh: "",
        };
    },
    methods: {
        init() {
            const container = document.createElement("div");
            document.body.appendChild(container);

            this.scene = new THREE.Scene();

            this.camera = new THREE.PerspectiveCamera(
                70,
                window.innerWidth / window.innerHeight,
                0.01,
                40
            );

            this.renderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true,
            });
            this.renderer.setPixelRatio(window.devicePixelRatio);
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            // This next line is important to enable the renderer for WebXR
            this.renderer.xr.enabled = true; // New!
            container.appendChild(this.renderer.domElement);

            const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
            light.position.set(0.5, 1, 0.25);
            this.scene.add(light);

            const geometry = new THREE.IcosahedronGeometry(0.1, 1);
            const material = new THREE.MeshPhongMaterial({
                color: new THREE.Color("rgb(226,35,213)"),
                shininess: 6,
                flatShading: true,
                transparent: 1,
                opacity: 0.8,
            });
            this.mesh = new THREE.Mesh(geometry, material);
            this.mesh.position.set(0, 0, -0.5);
            this.scene.add(this.mesh);

            // Add the AR button to the body of the DOM
            document.body.appendChild(ARButton.createButton(this.renderer));

            window.addEventListener(
                "resize",
                () => this.onWindowResize(),
                false
            );
        },
    },
    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(window.innerWidth, window.innerHeight);
    },
    animate() {
        this.renderer.setAnimationLoop(() => this.render());
    },
    render() {
        this.renderer.setAnimationLoop(() => this.render());
        return null;
    },
};
</script>
