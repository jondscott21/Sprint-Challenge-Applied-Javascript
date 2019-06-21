class Carousel {
    constructor(element) {
        this.element = element;
        this.allImage = element.querySelectorAll('img');
        console.log(this.allImage.length);
        this.natureImage = element.querySelector('img');
        this.imgIndex = parseInt(this.natureImage.dataset.imgIndex);
        console.log(this.imgIndex);
        this.leftButton = element.querySelector('.left-button')
        this.rightButton = element.querySelector('.right-button')
        console.log(element);
        console.log(this.natureImage);
        console.log(this.imgIndex);
        this.natureImage.style.display = 'flex';

        this.leftButton.addEventListener('click', () => this.rotateLeft())
        this.rightButton.addEventListener('click', () => this.rotateRight())
    }
    rotateLeft() {
        this.natureImage.style.display = 'none';
        this.imgIndex -= 1;
        console.log(this.imgIndex);
        if(this.imgIndex < 1) {
            this.imgIndex = this.allImage.length;
            console.log(this.element.querySelector(`img[data-img-index='${this.imgIndex}']`));
            this.natureImage = this.element.querySelector(`img[data-img-index='${this.imgIndex}']`);
            this.natureImage.style.display = 'flex';
        } else {
            this.natureImage = this.element.querySelector(`img[data-img-index='${this.imgIndex}']`);
            this.natureImage.style.display = 'flex';
        }
        
    }
    rotateRight () {
        this.natureImage.style.display = 'none';
        this.imgIndex += 1;
        console.log(this.imgIndex);
        if(this.imgIndex > this.allImage.length) {
            this.imgIndex = 1;
            console.log(this.element.querySelector(`img[data-img-index='${this.imgIndex}']`));
            this.natureImage = this.element.querySelector(`img[data-img-index='${this.imgIndex}']`);
            this.natureImage.style.display = 'flex';
        } else {
            this.natureImage = this.element.querySelector(`img[data-img-index='${this.imgIndex}']`);
            this.natureImage.style.display = 'flex';
        }
    }

}

let carousel = document.querySelector('.carousel');
new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
