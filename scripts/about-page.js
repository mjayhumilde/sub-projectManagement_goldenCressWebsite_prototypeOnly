// document.querySelector('.js-hamburger-menu').addEventListener('click', () => {
      //         const x = document.querySelector('.js-nav');
      //         const y = document.querySelector('.x-menu-image');
      //         const z = document.querySelector('.hamburger-img');
      //         if (x.style.display === 'block'){
      //             x.style.display = 'none';
      //         } else{
      //             x.style.display = 'block';
      //         }
      //     });

      const nav = document.querySelector(".js-nav");
      const menuButton = document.querySelector(".js-menu-btn");

      menuButton.addEventListener("click", () => {
        nav.classList.toggle("active");
      });

      // Select dom items
      const menuBtn = document.querySelector(".menu-btn");
      // Set the initial state of the menu
      let showMenu = false;

      menuBtn.addEventListener("click", toggleMenu);

      function toggleMenu() {
        if (!showMenu) {
          menuBtn.classList.add("close");
          // Reset the menu state
          showMenu = true;
        } else {
          menuBtn.classList.remove("close");
          // Reset the menu state
          showMenu = false;
        }
      }


const products = [
    {
        image: 'images/gallery-food-cutomer/gallery-1.webp'
    },
    {
        image: 'images/gallery-food-cutomer/gallery-food-1.jpg'
    },
    {
        image: 'images/gallery-food-cutomer/gallery-5.jpg'
    },
    {
        image: 'images/gallery-food-cutomer/gallery-food-3.jpg'
    },
    {
        image: 'images/gallery-food-cutomer/gallery-2.heic'
    },
    {
        image: 'images/gallery-food-cutomer/gallery-food-4.jpg'
    },
    {
        image: 'images/gallery-food-cutomer/gallery-4.jpg'
    },
    {
        image: 'images/gallery-food-cutomer/gallery-food-5.webp'
    },
    {
        image: 'images/gallery-food-cutomer/gallery-3.jpg'
    },
    {
        image: 'images/gallery-food-cutomer/gallery-food-6.webp'
    },
    {
        image: 'images/gallery-food-cutomer/gallery-food-7.webp'
    },
    {
        image: 'images/gallery-food-cutomer/gallery-food-2.jpg'
    },
    
]



function slideShowRender(products, imageContainer){
  let currentIndex = 0;
  
  // Display the first image initially
  imageContainer.innerHTML = `<img src="${products[0].image}" alt="">`;

  setTimeout(() => {
    setInterval(showImage, 5000);
  }, 1000);

  function showImage() {
    const currentImage = imageContainer.querySelector('img');
    currentImage.style.opacity = '0'; // Fade out the current image

    setTimeout(() => {
      currentIndex = (currentIndex + 1) % products.length;
      currentImage.src = products[currentIndex].image;
      currentImage.style.opacity = '1'; // Fade in the new image
    }, 1000); // Adjust the delay as needed
  }
}


const imageContainer = document.getElementById('backgound-img-container');
slideShowRender(products, imageContainer);



const ourTeam = [
  {
    image: 'images/our-teams/our-team-1.webp'
  },
  {
    image: 'images/our-teams/our-team-2.webp'
  },
  {
    image: 'images/our-teams/our-team-3.webp'
  },
  {
    image: 'images/our-teams/our-team-4.webp'
  },
  {
    image: 'images/our-teams/our-team-5.webp'
  }
]




function ourTeamRender(products, imageContainer){
  let currentIndex = 0;
  
  // Display the first image initially
  imageContainer.innerHTML = `<img src="${products[0].image}" alt="">`;

  setTimeout(() => {
    setInterval(showImage, 5000);
  }, 1000);

  function showImage() {
    const currentImage = imageContainer.querySelector('img');
    currentImage.style.opacity = '0'; // Fade out the current image

    setTimeout(() => {
      currentIndex = (currentIndex + 1) % products.length;
      currentImage.src = products[currentIndex].image;
      currentImage.style.opacity = '1'; // Fade in the new image
    }, 1000); // Adjust the delay as needed
  }
}

const ourteamImage = document.getElementById('our-team-image');
ourTeamRender(ourTeam, ourteamImage);