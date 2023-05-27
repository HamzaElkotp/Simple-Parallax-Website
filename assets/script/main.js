let imagePlace = document.querySelector("#imagePlace");
let titlePlace = document.querySelector("#titlePlace");
let descriptionPlace = document.querySelector("#descriptionPlace");

let boxet = [...document.querySelectorAll(".boxet")];
boxet.forEach((ele)=>{
    ele.addEventListener('click',(e)=>{
        boxet.forEach((img) => {img.classList.remove("active")});
        imagePlace.src = ele.firstElementChild.src;
        titlePlace.textContent = ele.firstElementChild.getAttribute("tit");
        descriptionPlace.textContent = ele.firstElementChild.alt;
        ele.classList.add("active");
    })
})


let wrapper = document.querySelector("#wrapper");
let scrollCircle = document.querySelector("#scrollCircle")
let r = document.querySelector(':root');
wrapper.addEventListener('scroll',()=>{
    let max = wrapper.scrollTopMax;
    let current = wrapper.scrollTop;
    let percent = (current * 100 / max) * 60 / 100;
    r.style.setProperty('--height', `${percent}px`)
})



