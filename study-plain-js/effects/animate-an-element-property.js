// Animate an element property

// How to do animations, such as fading, sliding, or just toggling visibility with JS and CSS3.

// Animations in JavaScript aren't difficult to accomplish. As an example, two functions that behave similar to jQuery's $.fadeIn() and $.fadeOut():

// fade an element from the current state to full opacity in "duration" ms
function fadeOut(el, duration) {
    var s = el.style, step = 25/(duration || 300);
    s.opacity = s.opacity || 1;
    (function fade() { (s.opacity -= step) < 0 ? s.display = "none" : setTimeout(fade, 25); })();
}

// fade out an element from the current state to full transparency in "duration" ms
// display is the display style the element is assigned after the animation is done
function fadeIn(el, duration, display) {
    var s = el.style, step = 25/(duration || 300);
    s.opacity = s.opacity || 0;
    s.display = display || "block";
    (function fade() { (s.opacity = parseFloat(s.opacity)+step) > 1 ? s.opacity = 1 : setTimeout(fade, 25); })();
}
// Those functions work nicely and you can use them to animate any numeric value in JavaScript. For example, use the height of an element to slide it up or down. For advanced animations, such as bouncing, easing, and rewinding, it's probably a good idea to make use of field proven plugins, like TinyAnimations, Velocity, or GSAP.

// However, using JavaScript for rather simple animations without special effects, is probably not the best choice. For things like fading, sliding, positioning, or simply hiding, it's often easier (and faster) to create classes with CSS3 transitions and add/remove those classes to elements as needed.

// Here's a working demo for slide toggling an element with the help of CSS3 transitions:


// In this example, we make use of our plainJS class helpers hasClass(), addClass(), and removeClass(). The essential JavaScript for accomplishing the task comprises just a tiny code snippet:

function toggle(el) {
    hasClass(el, 'is_hidden') ? removeClass(el, 'is_hidden') : addClass(el, 'is_hidden');
}
// CSS3 powered animations work in modern browsers, down to IE 10. IE 9 and below degrade gracefully by hiding/showing the element. It's not a simple replacement for jQuery's animate() function, but with a bit of fiddling around, one can accomplish astonishing tasks with very simple means. Tip: Paul Lewis wrote an excellent and comprehensive guide about advanced CSS3 transitions.