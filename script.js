//header 
  function toggleMenu() {
    document.getElementById('nav-links').classList.toggle('show');
  }

  function toggleDropdown(event) {
    const dropdown = event.target.closest('.dropdown');
    if (window.innerWidth <= 768) {
      event.preventDefault();
      dropdown.classList.toggle('open');
    }
  }
 
//photos scrolling in products.html and furniture.html
 document.querySelectorAll('.photo-gallery-wrapper').forEach(wrapper => {
    const scrollContainer = wrapper.querySelector('.scrollContainer');
    const photos = scrollContainer.querySelectorAll('.photos');
    const dotsContainer = wrapper.querySelector('.dots-container');

    // Create dots
    photos.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => {
        scrollContainer.scrollTo({
          left: photos[index].offsetLeft,
          behavior: 'smooth'
        });
      });
      dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('.dot');

    function updateActiveDot(index) {
      dots.forEach(dot => dot.classList.remove('active'));
      if (dots[index]) dots[index].classList.add('active');
    }

    // Auto scroll logic
    let currentIndex = 0;
    const scrollInterval = 3000; // Time in ms

    function autoScroll() {
      currentIndex = (currentIndex + 1) % photos.length;
      scrollContainer.scrollTo({
        left: photos[currentIndex].offsetLeft,
        behavior: 'smooth'
      });
      updateActiveDot(currentIndex);
    }

    let autoScrollTimer = setInterval(autoScroll, scrollInterval);

    // Update dot on manual scroll
    scrollContainer.addEventListener('scroll', () => {
      const scrollLeft = scrollContainer.scrollLeft;
      let activeIndex = 0;
      photos.forEach((photo, index) => {
        if (scrollLeft >= photo.offsetLeft - photo.offsetWidth / 2) {
          activeIndex = index;
        }
      });
      currentIndex = activeIndex;
      updateActiveDot(activeIndex);
    });

    // Pause auto-scroll on user interaction
    scrollContainer.addEventListener('mouseover', () => clearInterval(autoScrollTimer));
    scrollContainer.addEventListener('mouseout', () => {
      autoScrollTimer = setInterval(autoScroll, scrollInterval);
    });
  });
  

// section reveling in home page
  function revealSections() {
    const reveals = document.querySelectorAll('.reveal');
    for (const section of reveals) {
      const windowHeight = window.innerHeight;
      const elementTop = section.getBoundingClientRect().top;
      const revealPoint = 150; // adjust if needed

      if (elementTop < windowHeight - revealPoint) {
        section.classList.add('active');
      } else {
        section.classList.remove('active'); // Optional: remove to reset
      }
    }
  }

  window.addEventListener('scroll', revealSections);
  window.addEventListener('load', revealSections); // Initial load check

// second para in index
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");

    function showSlides() {
      slides.forEach(slide => slide.classList.remove("show"));
      slideIndex = (slideIndex + 1) % slides.length;
      slides[slideIndex].classList.add("show");
    }

    setInterval(showSlides, 3000);
  
