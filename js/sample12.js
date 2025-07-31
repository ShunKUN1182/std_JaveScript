const sliderWrap = document.querySelectorAll(".sliderWrap");
const sliderImg = document.querySelectorAll(".sliderWrap>ul>li");
const maxCount = sliderImg.length - 1;
let imageCount = 0;
const delay = 3000;

// console.log(sliderImg.length);

sliderImg[0].style.opacity = 1;


setInterval( () => {

    console.log(imageCount);
    
    for(let i = 0; i <= maxCount; i++){
        sliderImg[i].style.opacity = 0;
    }

    if (imageCount < maxCount) {
        imageCount++;
        
    }else{
        imageCount = 0;
    }
    
    sliderImg[imageCount].style.opacity = 1;
    // sliderImg[imageCount - 1].style.opacity = 0;

    // console.log(imageCount , "1st");

    // imageCount++;

    // if (imageCount > maxCount - 1) {
    //     imageCount = 0;
        // sliderImg[imageCount].style.opacity = 1;
    // }

    // console.log(imageCount , "2nd");
    
},delay);




// sliderImg[1].style.opacity = 0;
// setTimeout( () => {
//     console.log("hello");
    
// },3000)