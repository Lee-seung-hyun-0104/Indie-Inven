
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

const columnLeftTag = document.querySelectorAll(".gameIndex .index .column1 , .gameIndex .index .column3")

document.addEventListener("scroll", function(){
    
    columnLeftTag.forEach(tag =>{

    let viewportMid = window.innerHeight/2;

    const tagTop = tag.getBoundingClientRect().top;
    const tagMid = tagTop + tag.getBoundingClientRect().height/2;

    let distance = viewportMid - tagMid;

    tag.style.transform = `translateX(-100vw)`

    if(distance > -400){
        tag.style.transform = `translateX(0px)`
    }
    })
})

const columnRightTag = document.querySelector(".gameIndex .index .column2")

document.addEventListener("scroll", function(){
    
    let viewportMid = window.innerHeight/2;

    const tagTop = columnRightTag.getBoundingClientRect().top;
    const tagMid = tagTop + columnRightTag.getBoundingClientRect().height/2;

    let distance = viewportMid - tagMid;

    columnRightTag.style.transform = `translateX(+100vw)`

    if(distance > -400){
        columnRightTag.style.transform = `translateX(0px)`
    }

})

const slider = document.querySelector(".classes .index .slider")

let isDown = false;
let startX;
let scrollLeft;

//여기가 문제인거 같은데....
slider.addEventListener("mousedown", (e)=>{
    isDown = true;
    slider.classList.add(`active`);
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
})




slider.addEventListener("mouseleave", ()=>{
    isDown = false;
    slider.classList.remove(`active`);
})
slider.addEventListener("mouseup", ()=>{
    isDown = false;
    slider.classList.remove(`active`);
})
slider.addEventListener("mousemove", (e)=>{
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = x - startX;
    console.log(walk)
    slider.scrollLeft = scrollLeft - walk;
})




