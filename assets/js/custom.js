let swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    effect: 'fade',
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
// const bg = document.querySelector(".bg");
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
