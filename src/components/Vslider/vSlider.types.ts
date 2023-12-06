type SlidesCount = number;

export interface  DataSlider {
    slidesCount?: SlidesCount;
}

export interface DataDefaultSlider extends DataSlider {
    currentIndex: number;
    activeSlide: number;
    slidesArray: Element[];
}