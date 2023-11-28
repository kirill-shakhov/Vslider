import { onMounted, reactive } from "vue";

interface Data {
    currentIndex: number;
    activeSlide: number;
    slidesCount: number;
    slidesArray: Element[];
}

const data = reactive<Data>({
    currentIndex: 0,
    activeSlide: 0,
    slidesCount: 0, // Изначально устанавливаем slidesCount в 0, так как это значение будет пересчитано в onMounted
    slidesArray: [], // Изначально устанавливаем slidesArray в пустой массив
});

export function useVslider() {

    function moveToSLide(index) {
        console.log(`index: ${index}`);
        data.currentIndex = index;
    }

    function move(amount: number) {
        const slidesCount = data.slidesCount;

        const newIndex = data.activeSlide + amount;

        if (newIndex >= slidesCount) {
            data.activeSlide = 0;
        } else if (newIndex < 0) {
            data.activeSlide = slidesCount - 1;
        } else {
            data.activeSlide = newIndex;
        }

        data.currentIndex = data.activeSlide;
    }

    return {
        data,
        move,
        moveToSLide
    };
}
