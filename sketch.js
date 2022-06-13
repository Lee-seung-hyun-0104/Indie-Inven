
const introTotal = document.querySelectorAll(".hero .sub p , .intro .noun h3")

introTotal.forEach(tag =>{

    tag.style.opacity = "0";

})

document.addEventListener("scroll",function(){

    let delay = 0.2;

    introTotal.forEach(tag => {
        if(tag.getBoundingClientRect().top < window.innerHeight && tag.getBoundingClientRect().bottom > 0){
            tag.style.animation = `heroLanding 1s ${delay}s both`;
            delay += 0.3;
        }//else{
        //     tag.style.animation = "0";
        // }
    })
})

const movingTitle = document.querySelector(".news .movingTitle");

document.addEventListener("scroll", function(){
    let viewportMid = window.innerHeight/2;

    const titleTop = movingTitle.getBoundingClientRect().top;
    const titleMid = titleTop + movingTitle.getBoundingClientRect().height/2;

    let distance = viewportMid - titleMid;

    movingTitle.style.transform = `translateX(${-distance}px)`;
})

const articlerightTag = document.querySelectorAll(".news .articles .row.right .article");

document.addEventListener("scroll", function(){
    
    let distance = window.scrollY * 0.05

    articlerightTag.forEach(tag =>{
        tag.style.transform = `translateY(${-distance}px)`
    })
 
})

// const slider = document.querySelector(".classes")

// let isDown = false;
// let statrX;
// let scrollLeft;

// slider.addEventListener("mouseover", ()=>{
//     console.log("mouseover")
// })

// slider.addEventListener("mousedown", ()=>{
//     isDown = true;
// })
// slider.addEventListener("mouseleave", ()=>{
//     isDown = false;
// })
// slider.addEventListener("mouseup", ()=>{
//     isDown = false;
// })
// slider.addEventListener("mousemove", ()=>{
//     if(!isDown) return;
//     console.count(isDown)
//     console.log("doWork")
// })
