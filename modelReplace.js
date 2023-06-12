// Подождите, пока документ полностью загрузится
document.addEventListener('DOMContentLoaded', function() {
    // Получите ссылку на <model-viewer> элемент
    const viewer = document.querySelector('model-viewer');

    // Обработчик события загрузки модели
    viewer.addEventListener('model-visibility', function(event) {
        // Проверьте, что модель видна в режиме AR
        if (event.detail.visible) {
            // Получите ссылку на сцену AR
            const arScene = viewer.scene;

            // Создайте переменные для хранения начальных координат пальца
            let startX = 0;
            let startY = 0;

            // Слушайте событие касания экрана (touchstart)
            arScene.addEventListener('touchstart', function(event) {
                // Получите координаты касания пальца
                const touch = event.touches[0];
                startX = touch.clientX;
                startY = touch.clientY;
            });

            // Слушайте событие перемещения пальца (touchmove)
            arScene.addEventListener('touchmove', function(event) {
                // Получите текущие координаты пальца
                const touch = event.touches[0];
                const currentX = touch.clientX;
                const currentY = touch.clientY;

                // Вычислите смещение пальца по осям X и Y
                const offsetX = currentX - startX;
                const offsetY = currentY - startY;

                // Переместите модель на смещение пальца
                viewer.cameraOrbit += offsetX * 0.01;
                viewer.cameraTargetX += offsetY * 0.01;

                // Обновите начальные координаты пальца
                startX = currentX;
                startY = currentY;
            });
        }
    });

    // ... Другой код обработки событий и логика
});
