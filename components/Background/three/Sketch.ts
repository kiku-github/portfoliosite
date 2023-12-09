import Common from "./Common";
import Shape from "./Shape"

interface SketchProps {
    $canvas: HTMLCanvasElement;
}

export default class Sketch{
    private props: SketchProps;
    private shape: Shape;
    constructor(props: SketchProps){
        this.props = props;
        this.shape = new Shape();
        this.init();
    }
    init(){
        Common.init(this.props.$canvas);
        this.shape = new Shape();
        window.addEventListener("resize", this.resize.bind(this));
        this.loop();
    }
    resize(){
        Common.resize();
    }

    loop(){
        this.render();
        requestAnimationFrame(this.loop.bind(this));
    }

    render(){
        this.shape.update();
        Common.render();
    }
}