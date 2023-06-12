// Подождите, пока документ полностью загрузится
document.addEventListener('DOMContentLoaded', function() {
    // Получите ссылку на <model-viewer> элемент
    const viewer = document.querySelector('model-viewer');

    // Слушайте событие размещения модели в режиме AR
    viewer.addEventListener('model-visibility', function(event) {
        // Проверьте, что модель видна в режиме AR
        if (event.detail.visible) {
            // Запустите анимацию модели
            viewer.play();
        } else {
            // При скрытии модели остановите анимацию (если нужно)
            viewer.pause();
        }
    });

    // Получите ссылку на кнопку для замены модели
    const replaceButton = document.getElementById('replace-button');

    // Слушайте событие клика на кнопке
    replaceButton.addEventListener('click', function() {
        // Измените источник модели
        viewer.src = 'box_1m.glb';
        // Остановите анимацию (если нужно)
        viewer.pause();
    });
});