import { products } from "./data/products.js"

// function changeGallareImage(productImage){
//     document.getElementById('backgound-img-container').innerHTML = productImage
//   }

//   setInterval(changeGallareImage(), 3000)


//   products.forEach((product) => {
//     let productImage = product.image;
//     console.log(productImage);

//     const intervalId = setInterval(()=> {
//         document.getElementById('backgound-img-container').innerHTML = `<img src="${productImage}" alt="">`;
//     }, 3000);

//     clearInterval(intervalId);
// });

// products.forEach((product) => {
//     let productImage = product.image;
//     console.log(productImage);

//     const intervalId = setInterval(() => {
//         document.getElementById('background-img-container').innerHTML = `<img src="${productImage}" alt="">`;
//     }, 3000);

//     // Delay clearing the interval for 3 seconds
//     setTimeout(() => {
//         clearInterval(intervalId);
//     }, 3000);
// });


// let currentIndex = 0;
// const imageContainer = document.getElementById('backgound-img-container');

// function showImage() {
//     imageContainer.innerHTML = `<img src="${products[currentIndex].image}" alt="${products[currentIndex].name}">`;
//     currentIndex = (currentIndex + 1) % products.length;
// }

// setInterval(showImage, 3000);


  
//   let currentIndex = 0;
//   const imageContainer = document.getElementById('backgound-img-container');
  
//   function showImage() {
//     imageContainer.innerHTML = `<img src="${products[currentIndex].image}" alt="${products[currentIndex].name}">`;
//     currentIndex = (currentIndex + 1) % products.length;
//   }
  
//   setInterval(showImage, 3000);


// let currentIndex = 0;
// const imageContainer = document.getElementById('backgound-img-container');

// // Display the first image initially
// imageContainer.innerHTML = `<img src="${products[0].image}" alt="${products[0].name}">`;

// function showImage() {
//     const currentImage = imageContainer.querySelector('img');
//     currentImage.style.opacity = '0'; // Fade out the current image
//     imageContainer.innerHTML = `<img src="${products[currentIndex].image}" alt="${products[currentIndex].name}">`;
//     currentIndex = (currentIndex + 1) % products.length;
//   }
// setInterval(showImage, 4000);


let currentIndex = 0;
const imageContainer = document.getElementById('backgound-img-container');

// Display the first image initially
imageContainer.innerHTML = `<img src="${products[0].image}" alt="${products[0].name}">`;

setTimeout(() => {
  setInterval(showImage, 5000);
}, 1000);

function showImage() {
  const currentImage = imageContainer.querySelector('img');
  currentImage.style.opacity = '0'; // Fade out the current image

  setTimeout(() => {
    currentIndex = (currentIndex + 1) % products.length;
    currentImage.src = products[currentIndex].image;
    currentImage.alt = products[currentIndex].name;
    currentImage.style.opacity = '1'; // Fade in the new image
  }, 1000); // Adjust the delay as needed
}
