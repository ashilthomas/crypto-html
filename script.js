let loopTl = gsap.timeline({repeat:-1,yoyo:true})
loopTl.to("#crImg",{y:"-5rem",duration:1.5 ,ease: "none"})

// gsap.from("#box", { scrollTrigger: '#box' , toggleActions: "play pause restart none",opacity:0,duration: 2, y: 200, ease: "back"});
gsap.from(".hero-text",{opacity:0,y:"6rem",duration:1})
gsap.from("#crImg",{opacity:0,scale:0.8,duration:1,onComplete:loopTl.play()})
gsap.fromTo("#box", 
    {
        y: 100,  // Start 200px below (off-screen)
        opacity: 0  // Start fully invisible
    }, 
    {
        y: 0,  // End at its original position (onscreen)
        opacity: 1,  // End fully visible
        duration: 1.5,
        ease: "power3.out",  // Smooth easing for the animation
        scrollTrigger: {
            trigger: ".service-section",  // Element that triggers the animation
            start: "top 75%",  // Start the animation when the box's top reaches 75% of the viewport
            end: "bottom 5%",    // End the animation when the box's top reaches 25% of the viewport
            toggleActions: "play reverse play reverse", // Play when entering, reverse when leaving
     
             // Markers to debug the scroll position (can be removed later)
        }
    }
);
gsap.from(".team-card", {
    scrollTrigger: {
        trigger: ".our-team",  // Element that triggers the animation
    },
    y:"6rem" ,                // Scale animation
    stagger: { each: 0.5 },   // Delay each ".team-card" element by 0.5s
    duration: 1 ,
    opacity: 0,             // Duration of 1 second for each animation
});
gsap.from(".accordion-item", {
    scrollTrigger: {
        trigger: ".filter-main",  // Element that triggers the animation
    },
    y:"6rem" ,                // Scale animation
    stagger: { each: 0.5 },   // Delay each ".team-card" element by 0.5s
    duration: 1 ,
    opacity: 0,             // Duration of 1 second for each animation
});

gsap.from(".about-box-lft",{
    scrollTrigger: {
        trigger: ".about-section",  // Element that triggers the animation
    },
    x:"-8rem" ,                // Scale animation
    stagger: { each: 0.5 },   // Delay each ".team-card" element by 0.5s
    duration: 1 ,
    opacity: 0,  
})
gsap.from(".about-box-right",{
    scrollTrigger: {
        trigger: ".about-section",  // Element that triggers the animation
    },
    x:"8rem" ,                // Scale animation
    stagger: { each: 0.5 },   // Delay each ".team-card" element by 0.5s
    duration: 1 ,
    opacity: 0,  
})
gsap.from(".contact-left",{
    scrollTrigger: {
        trigger: ".contact-section",  // Element that triggers the animation
    },
    x:"-8rem" ,                // Scale animation
    stagger: { each: 0.5 },   // Delay each ".team-card" element by 0.5s
    duration: 1 ,
    opacity: 0,  
})
gsap.from(".contact-right",{
    scrollTrigger: {
        trigger: ".contact-section",  // Element that triggers the animation
    },
    x:"8rem" ,                // Scale animation
    stagger: { each: 0.5 },   // Delay each ".team-card" element by 0.5s
    duration: 1 ,
    opacity: 0,  
})

gsap.to(".arrow", {
    x: "-1rem",              // Move 20px to the right
    duration: 0.5,      // Duration of the movement
    repeat: -1,         // Repeat indefinitely
    yoyo: true,         // Go back to the original position
    ease: "power1.inOut" // Smooth easing in and out
});


const buttons = document.querySelectorAll('.filter-button');
const sections = document.querySelectorAll('.accordion-item');

// Initial setup: Show all sections
function showAllSections() {
  sections.forEach(section => section.classList.add('active'));
}
showAllSections();

// Filter functionality
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons and sections
    buttons.forEach(btn => btn.classList.remove('active'));
    sections.forEach(section => section.classList.remove('active'));

    // Add active class to the clicked button
    button.classList.add('active');

    // Get filter category from the button
    const filter = button.getAttribute('data-filter');

    // Show sections based on filter
    if (filter === 'all') {
      showAllSections();
    } else {
      sections.forEach(section => {
        if (section.getAttribute('data-filter') === filter) {
          section.classList.add('active');
        }
      });
    }
  });
});