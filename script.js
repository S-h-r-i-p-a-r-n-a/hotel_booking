// script.js


  const toggle = document.getElementById("navbarToggle");
  const menu = document.getElementById("navbarMenu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });



const sliderImages = [
    'https://images.unsplash.com/photo-1600137444380-ce5aea5c43c8?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1500&q=80',
    'https://images.unsplash.com/photo-1720231258189-a1ac753cfe03?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ];
  
  let currentImageIndex = 0;
  const sliderImgTag = document.getElementById('slider-image');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  
  function updateSlider() {
    sliderImgTag.src = sliderImages[currentImageIndex];
  }
  
  prevBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + sliderImages.length) % sliderImages.length;
    updateSlider();
  });
  
  nextBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % sliderImages.length;
    updateSlider();
  });
  
  window.addEventListener('load', () => {
    updateSlider();
  });
  