// import { Element } from "./createElement.js";

// const firstElem = new Element(document.querySelector('.container')
// ,{
//     class:"first",
//     attributes:{
//        style:'width:100%;background:black;padding:8px'
//     }
//  })
//  firstElem.render()


// const init = () => {
//     const table = document.getElementById("table");
//     let currentTooltip = null;

//     function createTooltip(target, text) {
//         const tooltip = document.createElement("div");
//       //   tooltip.className = "tooltip";
//         tooltip.innerText = text;
//         document.body.appendChild(tooltip);

//         const rect = target.getBoundingClientRect();
//         const scrollTop =
//             window.pageYOffset || document.documentElement.scrollTop;
//         const scrollLeft =
//             window.pageXOffset || document.documentElement.scrollLeft;

//         tooltip.style.position = "absolute";
//         tooltip.style.top = `${rect.top + scrollTop + target.offsetHeight}px`;
//         tooltip.style.left = `${rect.left + scrollLeft}px`;
//         tooltip.style.background = 'green'
//         tooltip.style.padding = "4px"

//         return tooltip;
//     }

//     table.addEventListener("click", function (e) {
//         const elemTarget = e.target.closest(".cut-inner");
//         if (!elemTarget) return;

//         if (currentTooltip && currentTooltip.target === elemTarget) {
//             document.body.removeChild(currentTooltip.tooltip);
//             currentTooltip = null;
//         } else {
//             if (currentTooltip) {
//                 document.body.removeChild(currentTooltip.tooltip);
//             }
//             const titleText = elemTarget.title;
//             const tooltip = createTooltip(elemTarget, titleText);
//             currentTooltip = { target: elemTarget, tooltip: tooltip };
//         }
//     });
// };

// init();

// const useSideBar = () => {
//     const btn = document.getElementById('togglerBar')
//     const sideBar = document.getElementById('sidebar')
//     let hidden = true

//     function toggleClass(){
//         hidden = !hidden
//         if(!hidden){
//             sideBar.classList.remove('left-[-350px]')
//             sideBar.classList.add('left-0')
//         }else {
//             sideBar.classList.remove('left-0')
//             sideBar.classList.add('left-[-350px]')
//         }
//     }
//     btn.addEventListener('click', toggleClass)
// }

// useSideBar()

// const images = ['../images/ellips.png','../images/rose.png','../images/star.png']

// const changeBg = () => {
//     const bg = document.querySelector('.bg')
//     for(let i = 0; i < images.length; i++){
//         setTimeout(() => {
//             bg.style.backgroundImage = `url(${images[i]})`
//         }, 1000 * (i + 1))
//     }
    
// }

// document.addEventListener('DOMContentLoaded', changeBg)


const el = document.querySelector('.elem div')
const toggler = document.querySelector('.toggler')

let isActive = false

toggler.addEventListener('click', () => {
    isActive = !isActive
    if(isActive){
        el.removeAttribute('class')
        el.classList.add('visible', 'sticky')
    }else{
        el.removeAttribute('class')
        el.classList.add('hidden', 'fixed')
    }
})



