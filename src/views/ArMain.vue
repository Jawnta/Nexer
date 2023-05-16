<template>
    <canvas ref="canvas" id="canvas"></canvas>
    <div ref="overlay" id="overlay">
        <button ref="picture" class="gui-button" v-show="containerIsPlaced" style="bottom: 40px; left: 0; right: 0;">
            <img src="/src/assets/img/camera.png" style="width: 80px">
        </button>
        <a v-show="containerIsPlaced" ref="rotate_right"  class="arrow right"><svg width="60" height="60" viewBox="0 0 24 24" fill="#fffff" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.917 13H17.91C17.8392 13.4397 17.7174 13.8742 17.5445 14.2972C17.1106 15.3433 16.3892 16.2401 15.479 16.889L15.46 16.87C14.71 17.41 13.87 17.76 13 17.9V17.917C12.6748 17.9716 12.3407 18 12 18C11.6593 18 11.3252 17.9716 11 17.917V17.91C8.24875 17.445 6.13566 15.1218 6.00628 12.2769C6.00211 12.1851 6 12.0928 6 12C6 9.03 8.16 6.57 11 6.09V10L15.55 5.55L11 1V4.07C7.06 4.56 4 7.92 4 12C4 13.4006 4.35943 14.7164 4.99132 15.8603C6.35359 18.3283 8.98157 20 12 20C16.4183 20 20 16.4183 20 12H18C18 12.3407 17.9716 12.6748 17.917 13Z" fill="black"/>
        </svg></a>
        <a v-show="containerIsPlaced" ref="rotate_left"    class="arrow left"><svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 1V4.07C16.95 4.56 20 7.92 20 12C20 13.4074 19.6371 14.729 18.9995 15.8768C17.6347 18.3358 15.0117 20 12 20C7.58172 20 4 16.4183 4 12H6C6 12.3407 6.0284 12.6748 6.08296 13H6.09001C6.20601 13.7292 6.46621 14.4309 6.84783 15.0767C7.27491 15.7903 7.84606 16.4079 8.52109 16.8891L8.54001 16.87C9.29001 17.41 10.13 17.75 11 17.9V17.917C11.3252 17.9716 11.6593 18 12 18C12.3407 18 12.6748 17.9716 13 17.917V17.91C15.7069 17.4525 17.796 15.1963 17.9859 12.4141C17.9953 12.2773 18 12.1392 18 12C18 9.03 15.84 6.57 13 6.09V10L8.45001 5.55L13 1Z" fill="black"/>
        </svg></a>
        <button @click="backButton" class="gui-button" style="bottom: 40px; left: 50px;">
            <img src="/src/assets/img/backicon.png" style="width: 50px">
        </button>
    </div>
    <canvas ref="finalCanvas" id="finalCanvas" style="display:none;"></canvas>
    <!-- 
    This an implementation part of the ta bild functionality
    <video ref="cameraFeed" id="cameraFeed" style="display:none;" autoplay playsinline></video>
    <a ref="download"></a>
    -->
</template>
<script lang="ts">
import * as THREE from "three";
import { ARButton } from "three/addons/webxr/ARButton";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { usePayloadStore } from "@/store/orderStore";
import { defineComponent } from "vue";

export default defineComponent({
    mounted() {
        this.init();
        window.addEventListener("resize", this.onWindowResize);
    },
    beforeUnmounted() {
        try {
            this.renderer.setAnimationLoop(null);
        } catch (error) {
            console.log(error)
        }
        
        window.removeEventListener("resize", this.onWindowResize);
    },
    data() {
        return {
            payloadStore: usePayloadStore(),
            containerIsPlaced: false,
            /* hitTestInitialized: false,
            hitTestSource: null,
            localSpace: null, */
        };
    },
    methods: {
        init() {
            // Global variables for takePicture function
            // this.video = this.$refs.cameraFeed;
            // Create a THREE scene
            this.scene = new THREE.Scene();
            this.camera = new THREE.PerspectiveCamera(
                70,
                window.innerWidth / window.innerHeight,
                0.1,
                20
            );
            this.camera.position.z = 1;
            // Create a THREE WebGLRenderer
            this.canvas = this.$refs.canvas;

            this.gl = this.canvas.getContext('webgl', {xrCompatible: true});
            this.renderer = new THREE.WebGLRenderer({
                canvas: this.canvas,
                context: this.gl,
                antialias: true,
                alpha: true,
                xrCompatible: true,
                preserveDrawingBuffer: true
            });
            this.renderer.setPixelRatio(window.devicePixelRatio);
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.renderer.xr.enabled = true;
    
            // Create a THREE light object
            const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
            light.position.set(0.5, 1, 0.25);
            this.scene.add(light);
            
            // Load the model and reticle to the scene
            this.addReticleToScene();
            this.addModelToScene(); 
            // Create THREE controller to place the container
            this.controller = this.renderer.xr.getController(0);
            this.controller.addEventListener("select", this.onSelect);
            this.scene.add(this.controller);
            
            // Create a button to enter a AR session 
            this.overlay = this.$refs.overlay;
            this.button = ARButton.createButton(this.renderer, {
                requiredFeatures: ["hit-test"],
                optionalFeatures: [
                    "dom-overlay",
                    "dom-overlay-for-handheld-ar",
                ],
                domOverlay: {
                    root: this.overlay,
                },
            });
            this.button.style.display = 'none';
            this.button.textContent = '';

            this.overlay.appendChild(this.button);

            //Initiate the event listeners for the rotate and take picture buttons
            this.takePictureButton = this.$refs.picture;
            this.rotationButtonLeft = this.$refs.rotate_left;
            this.rotationButtonRight = this.$refs.rotate_right;

            this.rotationButtonLeft.addEventListener('beforexrselect', ev => ev.preventDefault());
            this.rotationButtonRight.addEventListener('beforexrselect', ev => ev.preventDefault());
            this.takePictureButton.addEventListener('beforexrselect', ev => ev.preventDefault());

            this.rotationButtonLeft.addEventListener('click', () => {
                this.rotate(0.4);
            });

            this.rotationButtonRight.addEventListener('click', () => {
                this.rotate(-0.4);
            });

            this.takePictureButton.addEventListener('click', async () => {
                try {
                    await this.startCamera();
                    setTimeout(() => {
                        this.takePicture();
                    }, 40); 
                } catch (error) {
                    console.error(error);
                }
            });

            setTimeout(() => this.autoStart(), 10);
        },
        async addModelToScene() {
            // Create the path to the chosen container
            const modelUrl =
                this.payloadStore.selectedContainer.value?.modelPath;
            // Load the Model
            const loader = new GLTFLoader();
            const gltf = await loader.loadAsync(modelUrl);
            this.model = gltf.scene;
            this.model.outputEncoding = THREE.sRGBEncoding;
            this.model.scale.multiplyScalar(this.payloadStore.selectedContainer.value?.scale);
            this.model.visible = false;
            this.scene.add(this.model);
        },
        addReticleToScene() {
            const geometry = new THREE.RingGeometry(0.15, 0.2, 32).rotateX(
                -Math.PI / 2
            );
            const material = new THREE.MeshBasicMaterial();
            this.reticle = new THREE.Mesh(geometry, material);
            this.reticle.matrixAutoUpdate = false;
            this.reticle.visible = false;
            this.scene.add(this.reticle);
        },
        onSelect() {
            if (this.reticle.visible && this.model) {
                this.model.visible = true;
    
                this.model.position.setFromMatrixPosition(this.reticle.matrix);
                this.model.quaternion.setFromRotationMatrix(this.reticle.matrix);
                this.model.position.x += 0.25;
                this.model.position.z -= 0.25;
                this.containerIsPlaced = true;
            }
        },
        onWindowResize() {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        },
        autoStart() {
            this.pressArButton();

            // Add back button
            this.button.style.display = 'none'; // hide normal button
            /* Start Animation loop */
            this.renderer.setAnimationLoop(this.animate);
        },
        backButton () {
            this.pressArButton();
        },
        pressArButton() {
            if ('ontouchstart' in window) {
                /* const clickEvent = ; */
                const clickEvent = new MouseEvent('click', {
                    view: window,
                    bubbles: true,
                    cancelable: true
                });
                this.button.dispatchEvent(clickEvent);
            } else {
                this.button.click();
            }
        },
        animate(time: any, frame: any) {
            if (!this.hitTestInitialized) {
                this.initializeHitTestSource();
            } else {
                const hitTestResults = frame.getHitTestResults(this.hitTestSource);

                if (hitTestResults.length > 0) {
                    const hit = hitTestResults[0];
                    const pose = hit.getPose(this.localSpace);
                    this.reticle.visible = true;
                    this.reticle.matrix.fromArray(pose.transform.matrix);
                } else {
                    this.reticle.visible = false;
                }
            }

            this.renderer.render(this.scene, this.camera);
        },
        async initializeHitTestSource() {
            const session = this.renderer.xr.getSession({
                mode: "immersive-ar",
                requiredFeatures: ["hit-test"]
            });

            if (!session) {return} // prevents errors when initializing AR

            const viewerSpace = await session.requestReferenceSpace("viewer");
            this.hitTestSource = await session.requestHitTestSource({
                space: viewerSpace,
            });
            this.localSpace = await session.requestReferenceSpace("local");
            this.hitTestInitialized = true;

            session.addEventListener("end", () => {
                // Back button is pressed ...
                this.hitTestInitialized = false;
                this.hitTestSource = null;
                // Turn off render
                this.renderer.setAnimationLoop(null);
                this.renderer.dispose();
                session.end();
                // remove canvas
                // Redirect the user to home
                this.$router.push({
                    name: "home",
                });
            });
        },
        async startCamera() {
            try {
				// Set the constraints for the getUserMedia function
				const constraints = {
					video: {
						facingMode: 'environment',
					}
				};
				// Get access to the back camera
				const stream = await navigator.mediaDevices.getUserMedia(constraints);

				// Attach the camera stream to the video element
				this.video.srcObject = stream;

            } catch (error) {
                console.error('Failed to get camera stream', error);
            }
        },
        takePicture() {

            alert("Feature will be available in the next release")
            /*
            This an implementation part of the ta bild functionality
            // Cache DOM element references
            const finalCanvas = this.$refs.finalCanvas;
            const downloadLink = this.$refs.download;

            finalCanvas.width = this.canvas.width;
            finalCanvas.height = this.canvas.height;

            const ctx = finalCanvas.getContext('2d');

            ctx.drawImage(this.video, 0, 0, this.canvas.width, this.canvas.height);
            ctx.drawImage(this.canvas, 0, 0, this.canvas.width, this.canvas.height);

            const finalDataURL = finalCanvas.toDataURL('image/jpeg');
            downloadLink.href = finalDataURL;
            downloadLink.download = 'snapshot.jpeg';
            downloadLink.click();
            */
        },
        rotate(direction: number) {
            //Checks if the model exists
            if (this.model && this.model.visible) {
                this.model.rotation.y += direction;
            }
        },
    },
});
</script>
<style scoped>
#canvas {
    position: absolute;
    width: 100vw;
    height: 100vh;
} 

.gui-button {
    position: absolute;
    background: none;
    border: none;
}

.arrow {
    cursor: pointer;
    position: absolute;
    z-index: 999;
    top: 50%;
    
}
.arrow.left {
    left: 15px;
    transform: translate3d(0, -50%, 0);
}
.arrow.right {
    right: 15px;
    transform: translate3d(0, -50%, 0);
}
path{
    fill: white;
}
.arrow:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-40%, -60%) rotate(45deg);
    width: 200%;
    height: 200%;
}

</style>