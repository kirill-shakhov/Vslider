import { reactive } from "vue";
import { DataDefaultSlider, DefaultSliderOptions } from "./vSlider.types.ts";

const data = reactive<DataDefaultSlider>({
    currentIndex: 0,
    activeSlide: 0,
    slidesCount: 0, // Изначально устанавливаем slidesCount в 0, так как это значение будет пересчитано в onMounted
    slidesArray: [], // Изначально устанавливаем slidesArray в пустой массив
});

export function VSliderComposables(): DefaultSliderOptions {

    function moveToSLide(index: number) {
        data.currentIndex = index;
    }

    function move(amount: number) {
        if (!data.slidesCount) return;

        const slidesCount: number = data.slidesCount;

        const newIndex: number = data.activeSlide + amount;

        if (newIndex >= slidesCount) {
            data.activeSlide = 0;
        } else {
            data.activeSlide = newIndex;
        }


        if (newIndex < 0) {
            data.activeSlide = slidesCount - 1;

        }

        data.currentIndex = data.activeSlide;
    }

    // добавить статусы через enum
    //вынести некоторые функции в отдельные файлы
    // добавить интерфейсы
    // описать interface Props v-slider

    return {
        data,
        move,
        moveToSLide,
    };
}
