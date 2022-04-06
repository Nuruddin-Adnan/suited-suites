// swiper
let swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    // effect: 'fade',
    speed: 800,
    mousewheel: {
        enabled: true,
        forceToAxis: true,
        releaseOnEdges: true,
    },
    mousewheelControl: true,
    slidesPerView: 1,
    noSwiping: true,
    navigation: {
        nextEl: ".swiper-button-next",
    },
});


// swiper enable or disable on child scroll start
// {
//     const element = document.querySelector('.blog-list ul');
//     element.addEventListener('mouseenter', function(){
//         swiper.disable();
//     })
//     element.addEventListener('mouseleave', function(){
//         swiper.enable();
//     })
// }
// swiper enable or disable on child scroll end


// form submit 
const form = document.querySelector('.newsletter-form');
const newsletterFormContent = document.querySelector('.newsletter-form-content');
const newsletterSuccess = document.querySelector('.newsletter-success');

form.addEventListener('submit', function(e){
    e.preventDefault();
    newsletterFormContent.classList.add('d-none');
    newsletterSuccess.classList.remove('d-none');
})


// image show on hover
const links = document.querySelectorAll(".post-description a");
const bgAll = document.querySelectorAll(".bg");
const showClass = "bg-show";

for (const link of links) {
    for(const bg of bgAll){
        const img = new Image();
        img.src = link.dataset.bg;
      
        link.addEventListener("mouseenter", function() {
          bg.style.backgroundImage = `url(${this.dataset.bg})`;
          document.body.classList.add(showClass);
        });
      
        link.addEventListener("mouseleave", () => {
          document.body.classList.remove(showClass);
        });
    } 
}


// faceMove 
function faceMove(event){
    const element = document.querySelector('.smiley-face img')
    const moveX = event.clientX;
    const screenWith = screen.width;
    const convertTo60Percentage = Math.round(((moveX / screenWith) * 100) / 1.66666666666666);
    element.style.transform = `rotate(-${convertTo60Percentage}deg)`;
}