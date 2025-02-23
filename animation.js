// Slow stroke animation (8s for a smoother effect)
gsap.fromTo("#outlineText", {
    strokeDasharray: 300,
    strokeDashoffset: 300,
},
{
    strokeDashoffset: 0,
    duration: 8,
    ease: "power2.out"
}
);

// Separate fill animation (Starts instantly when stroke animation completes)
gsap.to("#fillMask", { 
attr: { y: "0" },
duration: 5,
ease: "power2.out"
});

gsap.to(".loading-page", { 
opacity: 0, 
display: "none", 
duration: 1.5,
delay: 2.5
});

// Ensure the thumbnail title fades in after the loading animation
gsap.from(".thumbnail-hero-title", {
opacity: 0,
y: 50,
duration: 1.5,
delay: 4, // Starts after loading page disappears
ease: "power2.out"
});

document.addEventListener("DOMContentLoaded", function () {
let title = document.querySelector(".thumbnail-hero-title");

// Wrap each line in spans for smooth animation
let lines = title.innerHTML.split("<br>").map(line =>
    `<span class="line"><span class="inner">${line}</span></span>`
).join("<br>");

title.innerHTML = lines; // Apply new structure

// GSAP Animation for smooth upwards reveal
gsap.fromTo(".inner", 
    { y: "100%", opacity: 0 }, // Start hidden below
    { y: "0%", opacity: 1, duration: 1.5, ease: "power2.out", stagger: 0.4, delay: 3 } // Smooth rise effect
);
});


// Ensure images start hidden without affecting layout
gsap.set(".image-box", { opacity: 0, y: 20 });

// Ensure images stay at their final positions
gsap.fromTo(".image-box", 
{ opacity: 0, y: 50 },  // Start hidden & slightly below
{ opacity: 1, y: 0, duration: 1.5, ease: "power2.out", stagger: 0.3, delay: 6 }
);

window.addEventListener('load', () => {
    // Fade in the vertical texts from the sides
    gsap.fromTo(
      ".vertical-text",
      { x: -30, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power2.out" }
    );

    // Fade in the background SVG
    gsap.fromTo(
      ".bg-svg",
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 0.06, duration: 1.2, delay: 0.4, ease: "power2.out" }
    );

    // Fade in the big heading
    gsap.fromTo(
      ".big-heading",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.7, ease: "power2.out" }
    );
  });

  const seeMore = document.getElementById("seeMore");
  seeMore.addEventListener("mouseenter", () => {
      gsap.to(".link-icon", { x: 5, duration: 0.3 });
  });
  seeMore.addEventListener("mouseleave", () => {
      gsap.to(".link-icon", { x: 0, duration: 0.3 });
  });