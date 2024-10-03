let currentImageIndex = 0;

const images = [
    { url: './images/Без имени-1 1.png', name: 'CRYSTAL AGATE PHONE GRIP', price: '- 18.99$' },
    { url: './images/Без имени-1 1.png', name: 'CRYSTAL AGATE PHONE GRIP 2', price: '- 15$' },
    { url: './images/Без имени-1 1.png', name: 'CRYSTAL AGATE PHONE GRIP 3', price: '- 20$' },
    { url: './images/Без имени-1 1.png', name: 'CRYSTAL AGATE PHONE GRIP 4', price:'- 25$' },
    { url: './images/Без имени-1 1.png', name: 'CRYSTAL AGATE PHONE GRIP 5', price:'- 29$' },
    { url: './images/Без имени-1 1.png', name: 'CRYSTAL AGATE PHONE GRIP 6', price:'- 30$' },
    { url: './images/Без имени-1 1.png', name: 'CRYSTAL AGATE PHONE GRIP 7', price: '- 10$' }
];

function showImage(index) {
    if (index >= 0 && index < images.length) {
        currentImageIndex = index;

        // Update the image and its details
        document.getElementById("carouselImg").src = images[index].url;
        document.getElementById("imgTitle").textContent = images[index].name;
        document.getElementById("cardPrice").textContent = images[index].price;

        updateDots();
    }
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
}

function updateDots() {
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentImageIndex);
    });
}

// Initialize the first image to show
window.onload = function() {
   
    showImage(0);
};
