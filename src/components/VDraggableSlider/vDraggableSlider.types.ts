
import {DataSlider} from "../Vslider/vSlider.types.ts";

export interface DataDraggableSlider extends DataSlider{
    isDown: boolean,
    startX: number,
    scrollLeft: number,
    dist: number,
    maxDist: number,
    isMaxDist: boolean,
    isGrabbing: boolean
}

export interface DraggableSliderFunction {
    dataDraggableSlider: DataDraggableSlider,
    startDraggable: (event: MouseEvent) => void;
    moveDraggable: (event: MouseEvent) => void;
    endDraggable: () => void;
}