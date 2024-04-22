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

// gsap.from(".cont", {
//     duration: 2.5,
//     ease: "bounce.out",
//     y: -500
// });

Shery.imageEffect(".logimg", {
    style: 2,
    debug: true,
  });


gsap.from("#dust",{
    y: 20,
    duration:2.5,
    ease: "bounce.out",
})

Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: .2,
  });

  
  Shery.makeMagnet(".links" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: .3,
  });

let menubar = 0
document.querySelector(".links").addEventListener("click", ()=>{
    if(menubar===0){
        gsap.to(".page1-p2",{
            right:"0%"
        })
        menubar=1

    }
    else{
        gsap.to(".page1-p2",{
            right:"-50%"
        })
        menubar=0
    }
})







// ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————

class TextScramble {
    constructor(el) {
      this.el = el
      this.chars = '!<>-_\\/[]{}—=+*^?#________'
      this.update = this.update.bind(this)
    }
    setText(newText) {
      const oldText = this.el.innerText
      const length = Math.max(oldText.length, newText.length)
      const promise = new Promise((resolve) => this.resolve = resolve)
      this.queue = []
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || ''
        const to = newText[i] || ''
        const start = Math.floor(Math.random() * 40)
        const end = start + Math.floor(Math.random() * 40)
        this.queue.push({ from, to, start, end })
      }
      cancelAnimationFrame(this.frameRequest)
      this.frame = 0
      this.update()
      return promise
    }
    update() {
      let output = ''
      let complete = 0
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i]
        if (this.frame >= end) {
          complete++
          output += to
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar()
            this.queue[i].char = char
          }
          output += `<span class="dud">${char}</span>`
        } else {
          output += from
        }
      }
      this.el.innerHTML = output
      if (complete === this.queue.length) {
        this.resolve()
      } else {
        this.frameRequest = requestAnimationFrame(this.update)
        this.frame++
      }
    }
    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
  }
  
  // ——————————————————————————————————————————————————
  // Example
  // ——————————————————————————————————————————————————
  
  const phrases = [
    'Neo,',
    'sooner or later',
    'you\'re going to realize',
    'just as I did',
    'that there\'s a difference',
    'between knowing the path',
    'and walking the path'
  ]
  
  const el = document.querySelector('.text')
  const fx = new TextScramble(el)
  
  let counter = 0
  const next = () => {
    fx.setText(phrases[counter]).then(() => {
      setTimeout(next, 800)
    })
    counter = (counter + 1) % phrases.length
  }
  
  next()
  

  gsap.to(".page2-overlay", {
    
    scrollTrigger: {
        trigger: ".page2",
        scroller: "#main",
        start: "top 0%",
        end: "40% 20%",
        // markers: true,
        pin: true,
  
    }
})



gsap.to(".boxs", {
  x: "-50%",
  scrollTrigger: {
      trigger: ".page3",
      scroller: "#main",
      start: "top 0%",
      end: "top -100%",
      // markers: true,
      pin: true,
      scrub: 1
  }
})