import { reactive } from "vue";

interface Data {
    currentIndex: number;
    activeSlide: number;
}

export function useVslider() {
    let data = reactive<Data>({
        currentIndex: 0,
        activeSlide: 0
    });

    function move(amount: number) {
        const slidesCount = 3;

        const newIndex = data.activeSlide + amount;

        console.log('Before condition:', data.activeSlide);
        if (newIndex >= slidesCount) {
            data.activeSlide = 0;
        } else if (newIndex < 0) {
            data.activeSlide = slidesCount - 1;
        } else {
            data.activeSlide = newIndex;
        }
        console.log('After condition:', data.activeSlide);

        // Обновляем currentIndex для изменения ключа в transition-group
        data.currentIndex = data.activeSlide;
    }

    return {
        data,
        move,
    };
}
