document.addEventListener('DOMContentLoaded', () => {
    const textElements = document.querySelectorAll('.description span');
    const texts = ['ТАРИФОВ', 'ГРАФИКА АРЕНДЫ', 'РАСХОДОВ', 'АНАЛИТИКИ'];
    let currentTextIndex = 0;
    let currentLetterIndex = 0;
    let isDeleting = false;

    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("close-popup");


    if (!sessionStorage.getItem("cookiePopupClosed")) {
        popup.style.display = "block";
    }

    closePopup.addEventListener("click", function () {
        popup.style.display = "none";
        sessionStorage.setItem("cookiePopupClosed", "true");
    });


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

window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    const windowWidth = window.innerWidth;

    const imagesRight = document.querySelectorAll('.image-anim-right');
    const imagesLeft = document.querySelectorAll('.image-anim-left');
    const blueButton = document.querySelector('.blue-button');

    if (windowWidth > 1076) {
        blueButton.classList.remove('image-anim-left')
        blueButton.classList.add('image-anim-right')

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
    } else if (windowWidth < 1076) {
        blueButton.classList.remove('image-anim-right')
        blueButton.classList.add('image-anim-left')
        if (scrollY > 50) {
            imagesRight.forEach((img) => {
                const speed = img.dataset.speed;
                img.style.transform = `translateX(${(scrollY - 65) * speed}px)`;
            });
            imagesLeft.forEach((img) => {
                const speed = img.dataset.speed;
                img.style.transform = `translateX(-${(scrollY - 65) * speed}px)`;
            });
        }
    }


});





