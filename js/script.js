var app = new Vue(
    {   
        el: "#root",
        data: {
            autoplayClock: null,
            activeElement: 0,
            slides: [
                {
                    image: 'img/01.jpg',
                    title: 'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                },
                {
                    image: 'img/02.jpg',
                    title: 'Svizzera',
                    text: 'Lorem ipsum.',
                },
                {
                    image: 'img/03.jpg',
                    title: 'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                },
                {
                    image: 'img/04.jpg',
                    title: 'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
                },
                {
                    image: 'img/05.jpg',
                    title: 'Paradise',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
                }
            ],
        },
        methods: {
            showNext() {
                if(this.activeElement < this.slides.length - 1) {
                    this.activeElement++;
                } else {
                    this.activeElement = 0;
                }
            },
            showPrevious() {
                if(this.activeElement > 0) {
                    this.activeElement--;
                } else {
                    this.activeElement = this.slides.length - 1;
                }
            },
            activateSlide(index) {
                this.activeElement = index;
            },
            startAutoplay() {
                this.autoplayClock = setInterval(this.showNext, 3000);
            },
            stopCounter() {
                clearInterval(this.autoplayClock);
                this.autoplayClock = null;
            },
        },
        mounted() {
            this.startAutoplay();
        }
    }
);