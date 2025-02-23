document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    document.querySelector(".header").style.display = "flex";
  }, 3000); // Adjust timing to match your animation duration
});

let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
      // Current scroll position
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        // User is scrolling down
        document.body.classList.add('scrolling-down');
      } else {
        // User is scrolling up
        document.body.classList.remove('scrolling-down');
      }
      // Avoid negative scroll values
      lastScrollTop = Math.max(scrollTop, 0);
    });

document.addEventListener('DOMContentLoaded', () => {
    const player = new Plyr('#player', {
      // Customize Plyr options here if you like
    });
  });