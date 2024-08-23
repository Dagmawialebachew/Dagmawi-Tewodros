function openDocx() {
    var docUrl = 'https://docs.google.com/document/d/1G7T8jhqi6uJvUgy18EHXquNPkgAs9mpW/edit?usp=sharing&ouid=112830450550044639270&rtpof=true&sd=true';
    window.open(docUrl, '_blank');
}

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();



   btn.innerText = 'Sending...';

   const serviceID = 'service_ilt0bsa';
   const templateID = 'template_cswagx5';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.innerText = 'Send Email';
      alert('I will contact you sooner with your email!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
    
        gsap.registerPlugin(ScrollTrigger);

        gsap.from('.slide-in-right', {
            scrollTrigger: {
                trigger: 'slide-in-right',
                start: 'bottom 60%', // 
                toggleActions: 'play play none complete'
            },
            opacity: 0,
            x: 200,
            duration: 1.5,
        }    
    );
    gsap.from('.animate-on-scroll-1', {
        scrollTrigger: {
            trigger: '.animate-on-scroll-1',
            start: 'bottom 80%',
            toggleActions: 'play play none complete'
        },
        opacity: 0,
        y: 300,  // Vertical animation
        duration: 5,
    });
    gsap.from('.slide-in-left', {
        scrollTrigger: {
            trigger: '.slide-in-left',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        x: -200,   // Slide in from the left (negative x value)
        opacity: 0,
        duration: 1.5,  // Animation duration
    });

    gsap.from('.div-services div', {
        scrollTrigger: {
            trigger: '.div-services div', // Element that triggers the animation
            start: 'top 80%', // Animation starts when the top of the element is 80% from the top of the viewport
            toggleActions: 'play none none none', // Play the animation once, no reset, no reverse
        },
        x: 0,   
        opacity: 0, 
        duration: 0.5,  
        stagger: 0.3,  
    });
    gsap.from('.box', {
        scrollTrigger: {
            trigger: '.box', // Element that triggers the animation
            start: 'top 80%', // Animation starts when the top of the element is 80% from the top of the viewport
            toggleActions: 'play none none none', // Play the animation once, no reset, no reverse
        },
        x: 0,   
        opacity: 0, 
        duration: 0.5,  
        stagger: 0.3,  
    });
    gsap.from('#home p, #home h1, #home button', {
        scrollTrigger: {
            trigger: '#home',
            start: 'top 80%', 
            toggleActions: 'play none none none',
        },
        x: 0,
        opacity: 0,
        duration: 1.5,
        stagger: 0.5 
    });
    gsap.from('#project-managment', {
        scrollTrigger: {
            trigger: '#project-managment',
            start: 'top 80%', 
            toggleActions: 'play none none none',
        },
        y: -200,
        opacity: 0,
        duration: 1.5,
    });
    gsap.from('#form > div:nth-child(2)', {
        scrollTrigger: {
            trigger: '#contact-me',
            start: 'top 80%', 
            toggleActions: 'play none none none',
        },
        y: -200,
        opacity: 0,
        duration: 3,
        stagger: 0.3 
    });
    gsap.from('#pricing div', {
        scrollTrigger: {
            trigger: '#pricing div',
            start: 'top 80%', 
            toggleActions: 'play none none none',
        },
        scale:0.7,
        opacity: 0,
        duration: 3,
        stagger: 0.3 
    });
    gsap.utils.toArray('#My-projects p, #pricing  p:nth-of-type(1)').forEach(element1=> {
        gsap.from(element1, {
            scrollTrigger: {
                trigger: element1,
                start: 'top 80%', 
                toggleActions: 'play none none none',
            },
            opacity: 0,
            duration: 8,
        });
            
        })
    
    gsap.utils.toArray('section:not(#home, #about, #project-managment) h1').forEach(element => {
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,  
                start: 'top 80%', 
                toggleActions: 'play none none none',  
            },
            y: 100,
            opacity: 0,
            duration: 1.5,
            stagger: 0.2
        });
    });
 
    
    

   

let hoverElements = document.querySelectorAll('.div-services div')
hoverElements.forEach((hover) => 
     {
      hover.addEventListener('mouseenter', () => {
     gsap.to(hover, { scale: 1.05, duration: 0.3, ease: "power1.inOut"})
});
        hover.addEventListener('mouseleave', () => {
            gsap.to(hover, { scale: 1, duration: 0.4, ease: "power1.inOut" })

        })
    })

        function checkWidth() {
            const div = document.getElementById('cardDiv');
            if (window.innerWidth <= 988) {
                div.style.display = 'none'
            } else {
                div.style.display = 'flex'

            }
        } 

        window.addEventListener('resize', checkWidth);
  window.addEventListener('load', checkWidth);

menu = document.getElementById('menu')
menuDiv = document.getElementById('menu-div')
dropDown = document.getElementById('drop-down')
toggle = document.getElementById('toggle')
nav = document.getElementById('nav')
lazyMethod = document.getElementById('lazy')
lazyMethod.style.display = 'none'
function show() {
     menuDiv.classList.toggle ('active')
     const isToggled = menuDiv.classList.contains('active')
     dropDown.src = isToggled ? 'images/top.png' : 'images/menu.png'
}

function toggleFun() {
     nav.classList.toggle('nav-active');
     dropDown.style.display = 'none'
     lazyMethod.style.display = 'flex'
     const isVisible = nav.classList.contains('nav-active')
     toggle.src = isVisible ? 'images/slider.png': 'images/toggle.png'
    
}

 
   
        
    function restartAnimation() {
      const airplane = document.querySelector('.airplane');
      airplane.style.animation = 'none'; // Reset animation
      airplane.offsetHeight; // Trigger reflow to restart animation
      airplane.style.animation = 'fly 15s linear infinite'; // Reapply animation
    }


    setInterval(restartAnimation, 5000);


    document.addEventListener('DOMContentLoaded', function() {
      const video = document.getElementById('background-video');
      const project = document.getElementById('project-managment');
  
      // Ensure that both video and section elements are found
      if (!video || !project) {
          console.error('Required elements not found.');
          return;
      }
  
      function isElementInViewport(el) {
          const rect = el.getBoundingClientRect();
          return (
              rect.top >= 0 &&
              rect.left >= 0 &&
              rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
              rect.right <= (window.innerWidth || document.documentElement.clientWidth)
          );
      }
  
      function checkVideoPlayback() {
          if (isElementInViewport(project)) {
              video.style.display = 'block';
              if (video.paused) {
                  video.play();
              }
          } else {
              video.style.display = 'block';
             
          }
      }

  
      // Restart the video when it ends
      video.addEventListener('ended', function() {
          video.currentTime = 0;
          video.play();
      });
  
      // Initial check
      checkVideoPlayback();
  
      // Check on scroll and resize
      window.addEventListener('scroll', checkVideoPlayback);
      window.addEventListener('resize', checkVideoPlayback);
  });

  
  document.addEventListener("DOMContentLoaded", function() {
    function isElementInViewport(el) {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function animateProgress() {
        const rings = document.querySelectorAll('.progress-ring');
        rings.forEach(ring => {
            if (isElementInViewport(ring) && !ring.classList.contains('animated')) {
                ring.classList.add('animated');
                const percent = ring.getAttribute('data-percent');
                const circle = ring.querySelector('.progress');
                const text = ring.querySelector('.progress-text');
                const radius = circle.r.baseVal.value;
                const circumference = radius * 2 * Math.PI;
                const offset = circumference - (percent / 100) * circumference;

                circle.style.strokeDasharray = circumference;
                circle.style.strokeDashoffset = offset;

                let currentPercent = 0;
                const interval = setInterval(() => {
                    if (currentPercent <= percent) {
                        text.textContent = `${currentPercent}%`;
                        currentPercent++;
                    } else {
                        clearInterval(interval);
                    }
                }, 8); // Adjust speed as needed
            }
        });
    }

    window.addEventListener('scroll', animateProgress);
    window.addEventListener('resize', animateProgress);
    animateProgress(); // Initial call
});

