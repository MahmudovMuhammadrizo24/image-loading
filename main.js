
const wrapper = document.querySelector(".wrapper");
const addImage = document.querySelector('.add-image');
const imgs = document.querySelectorAll('.photo');
document.querySelectorAll('.loader').forEach(loader => {
    for (let img of imgs) {
        img.style.display = 'none';
        setTimeout(() => {

            loader.style.opacity = '0';
            setTimeout(() => {
                img.style.display = "block";
                loader.style.display = 'none';

            }, 300);
            // img.style.display = "flex";
        }, 500);
    }
});

const min = 0;
const max = 100;

function generateRandomNumber() {
    return Math.random() * (max - min) + min;
}

addImage.addEventListener('click', () => {
    function autoScroll() {
        window.scrollBy(0, 10);
        requestAnimationFrame(autoScroll);
    }
    requestAnimationFrame(autoScroll);

    for (let i = 0; i < 8; i++) {
        let img = document.createElement('div');
        img.className = 'img';
        let newImage = document.createElement('img');
        newImage.classList = "photo";
        newImage.src = `https://picsum.photos/3840/2160?random=${generateRandomNumber()}`;
        newImage.alt = '';


        let loader = document.createElement('div');
        loader.className = 'loader';
        let ring = document.createElement('div');
        ring.className = 'ring';
        loader.appendChild(ring);
        img.appendChild(loader);

        wrapper.appendChild(img);

        newImage.addEventListener('load', () => {

            img.appendChild(newImage)
            setTimeout(() => {


                loader.style.display = 'none';
            }, 500);
        });
    }
});

