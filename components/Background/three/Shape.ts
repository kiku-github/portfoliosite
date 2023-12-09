import * as THREE from "three";
import Common from "./Common";

export default class Shape {
    pointSizeTarget: number = 15.0;
    pointScaleTarget: number = 1.0;
    time: number = 0;
    mesh: THREE.Mesh = new THREE.Mesh();
    shift: number = 0;
    squares: THREE.Mesh[] = [];
    constructor() {
        this.init();
    }

    init() {
        const nuxtApp: any = useNuxtApp();
        nuxtApp.$bus.$on("TRANSFORM", this.onTransform.bind(this));

        const geometry = new THREE.TorusGeometry(5, 0.1, 4, 4);
        const material = new THREE.MeshBasicMaterial({
            color: 0xb7cdeb,
        });
        const largegeometry = new THREE.TorusGeometry(60, 2, 4, 4);
        const largematerial = new THREE.MeshBasicMaterial({
            color: 0xb7cdeb,
        });

        const scene = Common.scene || new THREE.Scene();
        
        const largeSquare = new THREE.Mesh(largegeometry, largematerial);
        largeSquare.position.set(0, 0, 0);
        scene.add(largeSquare);

        this.mesh = largeSquare;

        const radius = 150;
        const count = 80;
        for (let i = 0; i < count; i++) {
            const theta = Math.random() * Math.PI * 2;
            const r = Math.sqrt(Math.random()) * radius;
            const x = r * Math.cos(theta);
            const y = r * Math.sin(theta);
            const z = (Math.random() - 0.5) * radius * 2;
            const square = new THREE.Mesh(geometry, material);
            square.position.set(x, y, z);
            square.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
            scene.add(square);
            this.squares.push(square);
        }

        this.animate();
    }

    update() {
        if (Common.time && Common.time.delta !== null) {
            this.mesh.rotation.z += Common.time.delta * 0.015;
            this.mesh.rotation.y = 0;
        }
        this.shift = Math.sin(this.time) * 2;
        this.mesh.position.y = this.shift;
        this.time += 0.01;

        if (this.shift < 0) this.shift = 0;
    }

    animate() {
        for (let i = 0; i < this.squares.length; i++) {
            const square = this.squares[i];
            square.rotation.x += 0.003;
            square.rotation.y += 0.003;
            square.rotation.z += 0.003;
        }
        requestAnimationFrame(this.animate.bind(this));

        this.update();

        if (Common.renderer && Common.scene && Common.camera) {
            Common.renderer.render(Common.scene, Common.camera);
        }
    }

    onTransform(isEnabled: boolean) {
        if (isEnabled) {
            this.pointSizeTarget = 20.0;
            this.pointScaleTarget = 5.0;
        } else {
            this.pointSizeTarget = 15.0;
            this.pointScaleTarget = 1.0;
        }
    }
}
