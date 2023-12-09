import * as THREE from "three";

interface Size {
    windowW: number | null;
    windowH: number | null;
}

interface Time {
    total: number | null;
    delta: number | null;
}

class Common{
    scene: THREE.Scene | null;
    camera: THREE.PerspectiveCamera | null;
    renderer: THREE.WebGLRenderer | null;
    size: Size;
    clock: THREE.Clock | null;
    time: Time;
    cameraPositionTarget: { value: THREE.Vector3 };
    constructor(){
        this.scene = null;
        this.camera = null;
        this.renderer = null;

        this.size = {
            windowW: null,
            windowH: null
        };

        this.clock = null;

        this.time = {
            total: null,
            delta: null
        };
        this.cameraPositionTarget = { value: new THREE.Vector3(0, 0, 0) };
    }

    init($canvas: HTMLCanvasElement){
        const nuxtApp: any = useNuxtApp()
        nuxtApp.$bus.$on("TRANSITION", this.onTransition.bind(this));

        this.setSize();

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(
            45,
            this.size.windowW! / this.size.windowH!,
            0.1,
            10000
        );
        this.camera.position.set(0, 0, 150);

        this.renderer = new THREE.WebGLRenderer({
            canvas: $canvas,
            antialias: true,
        });

        this.renderer.setClearColor(0xfafafa);
        this.renderer.setSize(this.size.windowW!, this.size.windowH!);

        this.clock = new THREE.Clock();
        this.clock.start();
    }

    setSize(){
        this.size = {
            windowW: window.innerWidth,
            windowH: window.innerHeight
        }
    }

    resize(){
        this.setSize();
        if (this.camera && this.size.windowW !== null && this.size.windowH !== null) {
            this.camera.aspect = this.size.windowW / this.size.windowH;
            this.camera.updateProjectionMatrix();
        }
        if (this.renderer && this.size.windowW !== null && this.size.windowH !== null) {
            this.renderer.setSize(this.size.windowW, this.size.windowH);
        }
    }

    render(){
        this.time.delta = this.clock?.getDelta() || 0;
        this.time.total = (this.time.total || 0) + this.time.delta;

        const easing = Math.min(1.0, 3.5 * this.time.delta)
        if (this.camera && this.camera.position && this.cameraPositionTarget.value) {
            this.camera.position.lerp(this.cameraPositionTarget.value, easing);
        }

        if (this.renderer && this.scene && this.camera) {
            this.renderer.render(this.scene, this.camera);
        }
    }

    onTransition(path: string){
        switch(path){
            case "index":
                this.cameraPositionTarget.value.set(0,0,150);
                break;

            case "about":
                this.cameraPositionTarget.value.set(0,-100,150);
                break;

            case "works":
                this.cameraPositionTarget.value.set(0,0,50);
                break;

            case "contact":
                this.cameraPositionTarget.value.set(0,100,150);
                break;

            default:
                this.cameraPositionTarget.value.set(0,0,150);
                break;

        }
    }
}

export default new Common();