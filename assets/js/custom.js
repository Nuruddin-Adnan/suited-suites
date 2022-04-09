// swiper
let swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    // effect: 'fade',
    // fadeEffect: {
    //     crossFade: false
    // },
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
{
    const element = document.querySelector('.blog-list ul');
    element.addEventListener('mouseenter', function(){
        swiper.disable();
    })
    element.addEventListener('mouseleave', function(){
        swiper.enable();
    })
}
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
    const screenSize = window.matchMedia("(max-width: 1199px)");

    if (screenSize.matches) {
        const face = document.querySelector('.smiley-face .face-small-screen');
        const scrollElement = document.querySelector('.blog-list ul');
        const scrollElementHeight = Math.round((scrollElement.getBoundingClientRect()).height);
        const scrollTop = Math.round(scrollElement.scrollTop);
        let convertToPercentage = Math.round(((scrollTop / scrollElementHeight) * 100));
        let rotateValue;
        if(convertToPercentage > 30){
            rotateValue = 30;
        }else {
            rotateValue = convertToPercentage;
        }
        face.style.transform = `rotate(${rotateValue}deg)`;
    }
    else{
        const element = document.querySelector('.smiley-face img')
        const moveX = event.clientX;
        const screenWith = screen.width;
        const convertTo60Percentage = Math.round(((moveX / screenWith) * 100) / 1.66666666666666);
        element.style.transform = `rotate(-${convertTo60Percentage}deg)`;
    }
}

// scroll to snap 
{
    // Create a scroll Function at tablet and lower screen;
    function scrollToSnap() {
        const screenSize = window.matchMedia("(max-width: 1199px)");
        if (screenSize.matches) {
            const element = document.querySelector('.blog-list ul');
            const listHeading = document.querySelector('.blog-list .heading');
            const listHeadingTitle = listHeading.children[0];
            const listHeadingDate = listHeading.children[1];

            const firstListHeight = Math.round((element.children[0].getBoundingClientRect()).height);
            element.children[0].style.marginTop = `-${firstListHeight}px`;

            // first list content show on load
            listHeadingTitle.innerHTML = element.children[0].children[0].children[0].innerHTML;
            listHeadingDate.innerHTML = element.children[0].children[0].children[1].innerHTML;

            // change on scroll
            function scrollFunction(){
                const listItems = element.children;
                const elementTop = Math.round((element.getBoundingClientRect()).top);

                [...listItems].forEach(listItem => {
                    const listObj = listItem.getBoundingClientRect();
                    const listTop = Math.round(listObj.top)
                    const listHeight = Math.round(listObj.height)

                    if(elementTop  > (listTop + listHeight)){
                        listHeadingTitle.innerHTML = listItem.children[0].children[0].innerHTML;
                        listHeadingDate.innerHTML = listItem.children[0].children[1].innerHTML;

                        // listHeadingTitle.classList.add('snap-animation');
                        // setTimeout(() => {
                        //     listHeadingTitle.classList.remove('snap-animation')
                        // }, 200)
                    }

                });
            }
            scrollFunction();
        } 
    }
    // Call the match function at run time:
    scrollToSnap();
}