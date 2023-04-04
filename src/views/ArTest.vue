<template>
    <a-scene webxr="optionalFeatures: hit-test;" ar-hit-test="target: #minModell;">  
      <a-entity id="minModell" :gltf-model="modelPath" scale="0.01 0.01 0.01" position="0 0 -5" hit-test-visible></a-entity>
  
      <a-camera position="0 1.6 0" cursor="rayOrigin: mouse" hit-test></a-camera>
  
    </a-scene>
</template>
  
<script>
  export default {
    methods: {
      onHitTest(event) {
        if (event.detail.hitTest.type === "plane") {
        const position = event.detail.hitTest.point;
        const object = this.$refs.minModell.object3D;
        const objectHeight = object.geometry.boundingBox.max.y - object.geometry.boundingBox.min.y;
        object.position.set(position.x, position.y - objectHeight / 2, position.z);
        }
      }
    },
    data() {
      return {
        modelPath: "../../public/models/3,1m/gltf/3,1m.gltf",
      };
    },

  };
</script>
  