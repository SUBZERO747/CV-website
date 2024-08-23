document.addEventListener("DOMContentLoaded", function() {
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };

    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);

    const items = document.querySelectorAll('.iHave');
    items.forEach(item => {
        observer.observe(item);

      
    });
});



let Xmark = document.querySelector('.click-to-show')
let theShow = document.querySelector('.cards1')


theShow.style.opacity = '0';
theShow.style.pointerEvents = 'none';
theShow.style.scale = '0.8';


Xmark.onclick =function() {
    if(theShow.style.opacity == '0') {
        theShow.style.opacity = '1'; 
        theShow.style.scale = '1';
        theShow.style.pointerEvents = 'auto';

}   else if(theShow.style.opacity = '1') {
        theShow.style.opacity = '0';
        theShow.style.pointerEvents = 'none';
        theShow.style.scale = '0.8';
}



let 
}
// document.addEventListener("DOMContentLoaded", function() {
//     const options = {
//         root: null,
//         rootMargin: "0px",
//         threshold: 0.1
//     };

//     const callback = (entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('visible');
//                 observer.unobserve(entry.target);
//             }
//         });
//     };

//     const observer = new IntersectionObserver(callback, options);

//     const heading = document.querySelector('.education-experience h1');
//     observer.observe(heading);
// });
