document.addEventListener('DOMContentLoaded', function() {
    console.log('Website is fully loaded.');
});

function locooo() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });




    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}
locooo();

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const images = [
    'cycleimges/data_image_png;base… (2).png ',
    'cycleimges/data_image_png;base… (3).png ',
    'cycleimges/data_image_png;base… (4).png ',
    'cycleimges/data_image_png;base… (5).png ',
    'cycleimges/data_image_png;base… (6).png ',
    'cycleimges/data_image_png;base… (7).png ',
    'cycleimges/data_image_png;base… (8).png ',
    'cycleimges/data_image_png;base… (9).png ',
    'cycleimges/data_image_png;base… (10).png', 
    'cycleimges/data_image_png;base… (11).png', 
    'cycleimges/data_image_png;base… (12).png', 
    'cycleimges/data_image_png;base… (13).png', 
    'cycleimges/data_image_png;base… (14).png', 
    'cycleimges/data_image_png;base… (15).png', 
    'cycleimges/data_image_png;base… (16).png', 
    'cycleimges/data_image_png;base… (17).png', 
    'cycleimges/data_image_png;base… (18).png', 
    'cycleimges/data_image_png;base… (19).png', 
    'cycleimges/data_image_png;base… (20).png', 
    'cycleimges/data_image_png;base… (21).png', 
    'cycleimges/data_image_png;base… (22).png', 
    'cycleimges/data_image_png;base… (23).png', 
    'cycleimges/data_image_png;base… (24).png', 
    'cycleimges/data_image_png;base… (25).png', 
    'cycleimges/data_image_png;base… (26).png', 
    'cycleimges/data_image_png;base… (27).png', 
    'cycleimges/data_image_png;base… (28).png', 
    'cycleimges/data_image_png;base… (29).png', 
    'cycleimges/data_image_png;base… (30).png', 
    'cycleimges/data_image_png;base… (31).png', 
    'cycleimges/data_image_png;base… (32).png', 
    'cycleimges/data_image_png;base… (33).png', 
    'cycleimges/data_image_png;base… (34).png', 
    'cycleimges/data_image_png;base… (35).png', 
    'cycleimges/data_image_png;base… (36).png', 
    'cycleimges/data_image_png;base… (37).png', 
    'cycleimges/data_image_png;base… (38).png', 
    'cycleimges/data_image_png;base… (39).png', 
    'cycleimges/data_image_png;base… (40).png', 
    'cycleimges/data_image_png;base… (41).png', 
    'cycleimges/data_image_png;base… (42).png', 
    'cycleimges/data_image_png;base… (43).png', 
    'cycleimges/data_image_png;base… (44).png', 
    'cycleimges/data_image_png;base… (45).png', 
    'cycleimges/data_image_png;base… (46).png', 
    'cycleimges/data_image_png;base… (47).png', 
    'cycleimges/data_image_png;base… (48).png', 
    'cycleimges/data_image_png;base… (49).png', 
    'cycleimges/data_image_png;base… (50).png', 
    'cycleimges/data_image_png;base… (51).png', 
    'cycleimges/data_image_png;base… (52).png', 
    'cycleimges/data_image_png;base… (53).png', 
    'cycleimges/data_image_png;base… (54).png', 
    'cycleimges/data_image_png;base… (55).png', 
    'cycleimges/data_image_png;base… (56).png', 
    'cycleimges/data_image_png;base… (57).png', 
    'cycleimges/data_image_png;base… (58).png', 
    'cycleimges/data_image_png;base… (59).png', 
    'cycleimges/data_image_png;base… (60).png',
];
 // Array of image URLs
let currentIndex = 0;

// Load initial image
const img = new Image();
img.onload = function () {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
};
img.src = images[currentIndex];

// Handle mouse movement
document.getElementById('page1').addEventListener('mousemove', function (event) {
    const { clientX } = event;
    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const totalWidth = rect.width;
    const newIndex = Math.floor((x / totalWidth) * images.length);
    if (newIndex !== currentIndex && newIndex >= 0 && newIndex < images.length) {
        currentIndex = newIndex;
        img.src = images[currentIndex];
    }
});

Shery.makeMagnet("#dust" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

Shery.imageEffect(".c", {
    style: 1 /*OR 5 for different variant */,
    debug: true,
});

gsap.from(".cont", {
    duration: 2.5,
    ease: "bounce.out",
    y: -500
});

gsap.to(".boxs", {
    x: "-50%",
    scrollTrigger: {
        trigger: ".page2",
        scroller: "#main",
        start: "top 0%",
        end: "top -100%",
        // markers: true,
        pin: true,
        scrub: 1
    }
})

gsap.from("#dust",{
    y: 50,
    duration:2.5,
    ease: "bounce.out",
})

Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: .2,
  });

  
Shery.textAnimate(".mainhead" /* Element to target.*/, {
    //Parameters are optional.
    style:2,
    y: 10,
    x:10,
    delay: 4,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });

