const slideImg = document.querySelector(".slide-images img");
const nextBtn = document.querySelector("#next-btn");
const prevBtn = document.querySelector("#prev-btn");
const slideBtmLinks = document.querySelectorAll(".slide-images .slide-btm-buttons li");

function changeActive(counter){
    for (const slideBtmLink of slideBtmLinks) {
        const circle = slideBtmLink.querySelector('a div');
        if (circle.classList.contains('active')) {
            circle.classList.remove('active');
        }
    }
    slideBtmLinks[counter - 1].querySelector('a div').classList.add('active');
}

let counter = 1;

nextBtn.addEventListener("click", () => {
    console.log("Hi");
    counter++;
    if (counter <= 4 ){
        slideImg.src = `./dist/images/sld-img${counter}.jpg`;
        changeActive(counter);
    } else if (counter == 5){
        counter = 1;
        changeActive(counter);
        slideImg.src = `./dist/images/sld-img${counter}.jpg`;
    } else {
        throw new console.error('Slide Error');
    }
});

prevBtn.addEventListener("click", () => {
    counter--;
    if (counter >= 1) {
        changeActive(counter);
        slideImg.src = `./dist/images/sld-img${counter}.jpg`;
    } else if (counter == 0) {
        counter = 4;
        changeActive(counter);
        slideImg.src = `./dist/images/sld-img${counter}.jpg`;
    } else{
        throw new console.error('Slide Error');
    }
});
