const thumbnailImages = document.querySelectorAll(".thumbnailWrap > p > img");
const modal = document.querySelector(".modalWrap");

console.log(modal);

thumbnailImages.forEach(e => {
    e.addEventListener("click" , (event)=>{
        // console.log("foo");
        // console.log(event.target);
        console.log(modal.classList.contains("modalClose"));
        
        if (modal.classList.contains("modalClose")) {
            modal.classList.add("modalOpan");
            modal.classList.remove("modalClose");
        }
    })
});

modal.addEventListener("click" , ()=>{
    // console.log("foo");
    
    if (modal.classList.contains("modalOpan")) {
        // console.log("foo");
        
        modal.classList.add("modalClose");
        modal.classList.remove("modalOpan");
    }

})