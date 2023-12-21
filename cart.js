//Img click

const img1 = document.querySelector( '.img1' );
const img2 = document.querySelector( '.img2' );
const img3 = document.querySelector( '.img3' );
const img4 = document.querySelector( '.img4' );
const mainImg = document.querySelector( '.main-img' );
const mainImg1 = document.querySelector( '.main-img1' );
const mainImg2 = document.querySelector( '.main-img2' );
const mainImg3 = document.querySelector( '.main-img3' );
const mainImg4 = document.querySelector( '.main-img4' );



img1.addEventListener( 'click', function () {
    console.log('click')
    mainImg.remove();
    mainImg1.remove();
    mainImg1.classList.remove('hidden')
} );

img2.addEventListener( 'click', function () {
    console.log('click')
    mainImg.remove();
    mainImg1.remove();
    mainImg2.classList.remove('hidden')
} );

img3.addEventListener( 'click', function () {
    console.log('click')
    mainImg.remove();
    mainImg2.remove();
    mainImg3.classList.remove('hidden')
} );

img4.addEventListener( 'click', function () {
    console.log('click')
    mainImg.remove();
    mainImg3.remove();
    mainImg4.classList.remove('hidden')
} );