document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.bott');
    const colors = {
        Monday: 'purple',
        Tuesday: 'peachpuff',
        Wednesday: 'blue',
        Thursday: 'lightgreen',
        Friday: 'yellow',
        Saturday: 'orange',
        Sunday: 'red'
    };

    let activeBox = null;

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const day = button.textContent;
            const box = document.getElementById('box');
            const color = colors[day];

            animateBox(color);

            if (activeBox) {
                activeBox.classList.remove('box-up');
                activeBox.classList.add('box-down');
            }

            box.style.backgroundColor = color;
            box.classList.remove('box-down');
            box.classList.add('box-up');

            activeBox = box;
        });
    });

    function animateBox(color) {
        var box = document.getElementById('box');
        box.style.backgroundColor = color;
        box.style.opacity = 1;
        box.style.transition = 'top 2s ease, background-color 2s ease';
        box.style.top = '100px';
        box.style.bottom = '250px';

        setTimeout(function () {
            box.style.transition = 'none';
            box.style.top = '0px';
        }, 400);
    }
});