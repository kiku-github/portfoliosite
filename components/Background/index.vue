<script>
import Sketch from "./three/Sketch";

export default {
    mounted() {
        if (!this.sketch) {
            this.sketch = new Sketch({ $canvas: this.$refs.canvas });
        }
        this.$bus.$emit("TRANSITION", this.$route.name);
    },
    watch: {
        "$route.name": function (_new, _old) {
            this.$bus.$emit("TRANSITION", _new);

            const sketches = document.getElementsByClassName("sketch");
            for (let i = 0; i < sketches.length; i++) {
                sketches[i].classList.remove("clear");
            }
        }
    },
}
</script>

<template>
    <section class="sketch">
        <canvas class="sketch__canvas" ref="canvas"></canvas>
    </section>
</template>

<style>
.sketch {
    width: 100vw;
    min-height: 100vh;
    position: fixed;
    top: 0;
    z-index: -10;
    transition: .3s ease-out;
}

.sketch.clear {
    filter: blur(0.0rem);
}
</style>