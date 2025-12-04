const slidesData = [
    {
        type: 'message',
        text: "My dearest, seeing you turn 20 today feels so special. This is a huge milestone, and I'm so incredibly proud to be right here celebrating with you. You bring so much light, laughter, and amazing energy into my life and everyone around you. I hope this new chapter of your twenties is everything you dream it will be—filled with passion, unforgettable moments, and all the happiness you deserve. Thank you for being you. Happy Birthday, my beautiful girlfriend! I love you! ❤️🎂",
        image: null
    },
    {
        type: 'image',
        image: 'img/photo1.jpg',
        caption: 'Our first trip it was amazing,I really enjoyed it and i hope you do too! ❣'
    },
    {
        type: 'image',
        image: 'img/photo2.jpg',
        caption: 'go for a little walk with my boo✊'
    },
    {
        type: 'image',
        image: 'img/photo3.jpg',
        caption: 'Our Fav drink! 😉'
    },
    {
        type: 'image',
        image: 'img/photo4.jpg',
        caption: 'You got me there🤣'
    },
    {
        type: 'image',
        image: 'img/photo5.jpg',
        caption: 'Bracelets for us'
    },
   
    {
        type: 'image',
        image: 'img/photo6.jpg',
        caption: 'Let\'s now move on to another memory. Such a good show glad that i was included tonight 👨‍🎨👩‍🎨'
    },
    {
        type: 'image',
        image: 'img/photo7.jpg',
        caption: 'Another date with my dear with little boy🤭'
    },
    {
        type: 'image',
        image: 'img/photo8.jpg',
        caption: 'ລຳບາກເຫລືອເກີນ5555'
    },
    {
        type: 'image',
        image: 'img/photo9.jpg',
        caption: 'ມີຄົນມາhappybirthdayເຮົາດ້ວຍຍຍຍຍ'
    },
    {
        type: 'message',
        text: 'I wish all the best for you and your study there I i will be here supporting you even in the toughest time I will be there for you my love XOXO❣❣',
        image: null
    },
    {
        type: 'image',
        image: 'img/photo10.jpg',
        caption: 'ຄົນຈ໋ວຍ😜'
    },
    {
        type: 'image',
        image: 'img/photo11.jpg',
        caption: 'Another date-walk with you🤭'
    },
    {
        type: 'image',
        image: 'img/photo12.jpg',
        caption: 'Our movie night and Our journey 22/6/2025'
    },
   
    {
        type: 'image',
        image: 'img/photo13.jpg',
        caption: '<3'
    },
    {
        type: 'image',
        image: 'img/photo14.jpg',
        caption: 'Late night walk and food'
    },     
   
    {
        type: 'image',
        image: 'img/photo15.jpg',
        caption: 'A keychain for you and me <3'
    },
    {
        type: 'message',
        text: 'Before you, my life felt like a beautiful, unfinished melody. You came in, not as the final note, but as the perfect harmony that makes every single measure ring true. Watching you turn 20 is just another exquisite movement in our story. You are my home and my greatest inspiration.',
        image: null
    },
    {
        type: 'image',
        image: 'img/photo16.jpg',
        caption: 'Good food with goodgirl'
    },
    {
        type: 'image',
        image: 'img/photo17.jpg',
        caption: ' ສິຫນ້າຄົນຖືກຖ່າຍຄືນ🤭🤭🤭'
    },
    {
        type: 'image',
        image: 'img/photo18.jpg',
        caption: 'Last day in LPB😭'
    },
     {
        type: 'message',
        text: "To my incredible girlfriend on her 20th birthday: This is the start of your best decade yet, and I'm so excited to watch you shine even brighter. You are my best friend, my biggest adventure, and the love of my life. Thank you for making every moment special. Cheers to your twenties, and to forever with you! Happy Birthday, gorgeous!❤️🎂",
        image: null
    },
    {
        type: 'message',
        text: "I MISS YOUUU😭😭😭",
        image: null
    },
    {
        type: 'image',
        image: 'img/photo20.jpg',
        
    },

    {
        type: 'image',
        image: 'img/photo19.jpg',
        
    },

];

let slideIndex = 0;

function createSlideshow() {
    const slideshowContainer = document.querySelector('.slideshow-container');
    const dotsContainer = document.querySelector('.dots-container');

    slidesData.forEach((slide, index) => {
        const slideDiv = document.createElement('div');
        slideDiv.classList.add('mySlides', 'fade');

        if (slide.type === 'message') {
            const messageParagraph = document.createElement('p');
            messageParagraph.classList.add('caption');
            messageParagraph.innerHTML = slide.text;
            slideDiv.appendChild(messageParagraph);
        } else if (slide.type === 'image') {
            const img = document.createElement('img');
            img.src = slide.image;
            img.alt = `Memory ${index}`;
            slideDiv.appendChild(img);

            if (slide.caption) {
                const captionParagraph = document.createElement('p');
                captionParagraph.classList.add('caption');
                captionParagraph.innerHTML = slide.caption;
                slideDiv.appendChild(captionParagraph);
            }
        }
        slideshowContainer.appendChild(slideDiv);

        const dotSpan = document.createElement('span');
        dotSpan.classList.add('dot');
        dotSpan.onclick = () => currentSlide(index);
        dotsContainer.appendChild(dotSpan);
    });

    showSlides(slideIndex);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    if (n >= slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

document.addEventListener('DOMContentLoaded', createSlideshow);