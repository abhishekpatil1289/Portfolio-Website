document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const scrollUpBtn = document.querySelector(".scroll-up-btn");
  const menuItems = document.querySelectorAll(".navbar .menu li a");
  const menuBtn = document.querySelector(".menu-btn");
  const carousel = document.querySelector(".carousel");

  // Scroll event listener for sticky navbar and scroll-up button
  window.addEventListener("scroll", function () {
    if (window.scrollY > 20) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }

    if (window.scrollY > 500) {
      scrollUpBtn.classList.add("show");
    } else {
      scrollUpBtn.classList.remove("show");
    }
  });

  // Click event listener for scroll-up button
  scrollUpBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Click event listener for smooth scroll on menu items
  menuItems.forEach(function (item) {
    item.addEventListener("click", function () {
      document.documentElement.style.scrollBehavior = "smooth";
    });
  });

  // Click event listener for toggle menu/navbar
  menuBtn.addEventListener("click", function () {
    const menu = document.querySelector(".navbar .menu");
    const menuIcon = menuBtn.querySelector("i");
    menu.classList.toggle("active");
    menuIcon.classList.toggle("active");
  });

  // Typing text animation (You need to include the Typed.js library)
  const options = {
    strings: ["Programmer", "Developer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  };

  const typed1 = new Typed(".typing", options);

  // Owl Carousel script (You need to include the Owl Carousel library)
  if (carousel) {
    new OwlCarousel(carousel, {
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        600: {
          items: 2,
          nav: false,
        },
        1000: {
          items: 3,
          nav: false,
        },
      },
    });
  }
});
