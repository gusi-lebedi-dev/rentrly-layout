

document.addEventListener('DOMContentLoaded', () => {
    const textElements = document.querySelectorAll('.description span');
    const texts = ['ТАРИФОВ', 'ГРАФИКА АРЕНДЫ', 'РАСХОДОВ', 'АНАЛИТИКИ'];
    let currentTextIndex = 0;
    let currentLetterIndex = 0;
    let isDeleting = false;

    function typeText() {
        const text = texts[currentTextIndex];
        const textElement = textElements[0];
        if (isDeleting) {
            textElement.textContent = text.substring(0, currentLetterIndex);
            if (currentLetterIndex > 0) {
                currentLetterIndex--;
                setTimeout(typeText, 85);
            } else {
                isDeleting = false;
                currentTextIndex = (currentTextIndex + 1) % texts.length;
                currentLetterIndex = 0;
                textElement.style.opacity = 0;
                setTimeout(typeText, 1000);
            }
        } else {
            textElement.textContent = text.substring(0, currentLetterIndex + 1);
            textElement.style.opacity = 1;
            if (currentLetterIndex < text.length - 1) {
                currentLetterIndex++;
                setTimeout(typeText, 125);
            } else {
                isDeleting = true;
                setTimeout(typeText, 3000);
            }
        }
    }

    typeText();
})

function openModal() {
    const form = document.querySelector('.form-request');
    form.classList.toggle('open')
}

window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const windowWidth = window.innerWidth;

    const imagesRight = document.querySelectorAll('.image-anim-right');
    const imagesLeft = document.querySelectorAll('.image-anim-left');

    if (windowWidth > 1076) {
        if (scrollY >= 300) {
            imagesRight.forEach((img) => {
                const speed = img.dataset.speed;
                img.style.transform = `translateX(${(scrollY - 300) * speed}px)`;
            });
            imagesLeft.forEach((img) => {
                const speed = img.dataset.speed;
                img.style.transform = `translateX(-${(scrollY - 300) * speed}px)`;
            });
        }
    }

});





