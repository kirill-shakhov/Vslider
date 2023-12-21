import { onMounted, reactive } from "vue";

import { DataDraggableSlider, DraggableSliderOptions } from "vDraggableSlider.types.ts";
import { isElementInViewport } from "../../utils/isElementInViewport/isElementInViewport.ts";

enum SliderStatus {
    Initial = 'Initial',
    StartDragging = 'StartDragging',
    Dragging = 'Dragging',
    EndDragging = 'EndDragging'
}

const dataDraggableSlider = reactive<DataDraggableSlider>({
    isDown: false,
    startX: 0,
    scrollLeft: 0,
    dist: 0,
    maxDist: 0,
    isMaxDist: false,
    status: SliderStatus.Initial,
    slides: null,
    slide: null
})

// Правильно занести их в dataDraggableSlider

// Правильно занести их в dataDraggableSlider

export function VDraggableSliderComposables(): DraggableSliderOptions {

    onMounted(() => {
        dataDraggableSlider.slides = document.querySelectorAll('.v-slide_draggable');
        dataDraggableSlider.slide = dataDraggableSlider.slides[dataDraggableSlider.slides.length - 1];
    })


    function startDraggable(e):void {
        dataDraggableSlider.status = SliderStatus.StartDragging
        dataDraggableSlider.isDown = true;

        dataDraggableSlider.startX = e.pageX || e.touches[0].pageX - e.target.offsetLeft;
        dataDraggableSlider.scrollLeft = e.target.scrollLeft;
    }

    function moveDraggable(e):void {
        if (!dataDraggableSlider.isDown) return;

        dataDraggableSlider.status = SliderStatus.Dragging
        const x = e.pageX || e.touches[0].pageX - e.target.offsetLeft;
        const deltaX = x - dataDraggableSlider.startX;

        // Обновляем dist относительно предыдущего значения
        dataDraggableSlider.dist += deltaX;

        // Устанавливаем startX для следующего перемещения
        dataDraggableSlider.startX = x;

        if (isElementInViewport(dataDraggableSlider.slide) && !dataDraggableSlider.isMaxDist) {
            console.log('Элемент виден в текущей области видимости экрана');
            // Сохраняем начальное значение maxDist
            dataDraggableSlider.maxDist = dataDraggableSlider.dist;
            dataDraggableSlider.isMaxDist = true;
        }

        if (dataDraggableSlider.dist > dataDraggableSlider.maxDist) {
            dataDraggableSlider.maxDist = 0;
            dataDraggableSlider.isMaxDist = false;
        }

    }


    function smoothResetDist(targetDist: number, callback?: () => void) {
        const step = 10; // Регулируйте шаг анимации

        function animate() {
            if (dataDraggableSlider.dist > targetDist) {
                dataDraggableSlider.dist = Math.max(targetDist, dataDraggableSlider.dist - step);
            } else if (dataDraggableSlider.dist < targetDist) {
                dataDraggableSlider.dist = Math.min(targetDist, dataDraggableSlider.dist + step);
            }

            if (dataDraggableSlider.dist !== targetDist) {
                requestAnimationFrame(animate);
            } else {
                if (callback) callback();
            }
        }

        animate();
    }


    function endDraggable(): void {

        dataDraggableSlider.status = SliderStatus.EndDragging
        dataDraggableSlider.isDown = false;

        if (dataDraggableSlider.dist > 0) {
            smoothResetDist(0);
        }

        if (-(dataDraggableSlider.dist) > dataDraggableSlider.maxDist && dataDraggableSlider.maxDist !== 0) {
            smoothResetDist(dataDraggableSlider.maxDist);

            dataDraggableSlider.maxDist = 0;
            dataDraggableSlider.isMaxDist = false;
        }

    }

    // добавить статусы через enum
    //вынести некоторые функции в отдельные файлы
    // добавить интерфейсы
    // вынести draggble slider в отдельный ts файл
    // описать interface Props v-slider

    // общиий interface для двух слайдеров, после чего наследуемся для каждого interface слайдеров я


    return {
        dataDraggableSlider,
        startDraggable,
        moveDraggable,
        endDraggable
    } as DraggableSliderOptions
}
