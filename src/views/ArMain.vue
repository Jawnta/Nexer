<script setup lang="ts"></script>
<template>
    <div id="myEmbeddedScene">
        <a-scene
            embedded
            cursor="rayOrigin: mouse"
            webxr="optionalFeatures:  hit-test;"
            ar-hit-test="target:#container;"
        >
            <a-assets>
                <!--                <a-asset-item-->
                <!--                    id="placePic"-->
                <!--                    src="/Assets/Textures/index.webp"-->
                <!--&lt;!&ndash;                ></a-asset-item>&ndash;&gt;-->
                <!--                <a-asset-item-->
                <!--                    id="6mContainer"-->
                <!--                    src="../../public/models/6m/gltf/6m.gltf"-->
                <!--                ></a-asset-item>-->
                <!--                <a-asset-item-->
                <!--                    id="3,3mContainer"-->
                <!--                    src="/Assets/container/3,3m/gltf/3,3m.gltf"-->
                <!--                ></a-asset-item>-->
<!--                <a-asset-item-->
<!--                    id="test"-->
<!--                    :src="modelPath"-->
<!--                ></a-asset-item>-->
            </a-assets>
            <a-entity
                id="container"
                :gltf-model="modelPath"
                position="0 0 -5"
                rotation="0 0 0"
                scale="0.005 0.005 0.005"
                mover
                animation="property: rotation; to: 0 360 0; easing: linear; dur:10000; loop:false"
            >
            </a-entity>
        </a-scene>
    </div>
</template>

<script lang="ts">
export default {
    data() {
        return {
            modelPath: "../../public/models/3,1m/gltf/3,1m.gltf",
        };
    },
};
</script>
<style scoped>
a-scene {
    height: 300px;
    width: 600px;
}
</style>
