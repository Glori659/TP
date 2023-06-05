function cambDeImg(imgChica){
    const imgenGrande = document.getElementById('imagenGrande');

    imagenGrande.src = imgChica.src;
}


const productContainer = document.querySelector('.product-container');
const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');

leftButton.addEventListener('click', () => {
  productContainer.scrollBy({ left: -220, behavior: 'smooth' });
});

rightButton.addEventListener('click', () => {
  productContainer.scrollBy({ left: 220, behavior: 'smooth' });
});
