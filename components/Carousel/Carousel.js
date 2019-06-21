class Carousel {
    constructor(carousel){
        this.element = carousel;
        this.leftButton = this.element.querySelector(".left-button");
        this.rightButton = this.element.querySelector(".right-button");
        this.image = this.element.querySelectorAll("img");
        this.leftButton.addEventListener('click',()=>{
            alert ('Someone is sliding!')
        });
        this.rightButton.addEventListener('click',(event)=>{
            event.target.style.display = "flex"
        });
        this.image.classList.add("img-active");


    }
}

let carousel = document.querySelector(".carousel");




/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
