type SlidesCount = number;

export interface DataSlider {
    slidesCount?: SlidesCount;
}

export interface DataDefaultSlider extends DataSlider {
    currentIndex: number;
    activeSlide: number;
    slidesArray: Element[];
}

export interface DefaultSliderOptions {
    data: DataDefaultSlider,
    moveToSLide: (index: number) => void,
    move: (amount: number) => void
}