// smooth scroll
    function smoothScrilling(target, duration){
        var target = document.querySelector(target);
        var targetPosition = target.getBoundingClientRect().top;
        var startingPosition = window.pageYOffset;
        var distance = targetPosition - startingPosition;
        var startTime = null;

        function animationScroll(currentTime){
            if(startTime === null) startTime = currentTime;
            var timeElapsed = currentTime - startTime;
            var running = ease(timeElapsed, startingPosition, distance, duration);
            window.scrollTo(0, running);
            if(timeElapsed < duration) requestAnimationFrame(animationScroll);
        }

        function ease(t, b, c, d){  // t - time, b - startPosition,c - distance,d - duration
            t /= d / 2;
            if(t < 1) return c / 2 * t * t * b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animationScroll);
    }

    var whotarget = document.querySelector('.who-target');
    var whocontact = document.querySelector('.who-contact');

    whotarget.addEventListener('click', function(){
        smoothScrilling('.who', 2000);
    })
    whocontact.addEventListener('click', function(){
        smoothScrilling('.contact', 2000);
    })


// navigation animate
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document. querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    //Animation nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    })
    //Animation links
    navLinks.forEach((link, index)=>{
        link.style.animation = 'navLinkFade 0.5s ease forwards {' + index +' / 7 + 2}s';
    });
}
navSlide();



