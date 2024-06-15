gsap.registerPlugin(ScrollTrigger);

gsap.to(".mask-clouds-about", {
  scrollTrigger: {
    trigger: ".mask-clouds-about",
    start: "40% center",
    end: "80% center",
    scrub: true
  },
  height: "70vh",
  width: "90vw",
  borderRadius: "6em"
});

gsap.to(".about_image-wrapper", {
  scrollTrigger: {
    trigger: ".mask-clouds-about",
    start: "60% center",
    end: "100% center",
    scrub: true
  },
  x: "0%",
});

gsap.to(".about-right-wrapper", {
  scrollTrigger: {
    trigger: ".mask-clouds-about",
    start: "60% center",
    end: "100% center",
    scrub: true
  },
  opacity: "100%",
});


gsap.to(".hero_title", {
  scrollTrigger: {
    start: "2.5% top",
    end: "4.5% top",
    scrub: true,
  },
  opacity: 0,
  ease: "none"
});



document.addEventListener('DOMContentLoaded', function() {
  // Animation for the element with the class 'hero_title'
  gsap.fromTo('.hero_title', {
    scale: 0.7,
  }, {
    scale: 1,
    ease: "cubic-bezier(.006, 1.001, .064, .989)", // Apply cubic-bezier for scaling
    duration: 2, // Duration for scale to complete
  });
});
