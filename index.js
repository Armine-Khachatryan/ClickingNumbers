let targetX1 = document.getElementById('target-x1');
let targetY1 = document.getElementById('target-y1');
let targetX2 = document.getElementById('target-x2');
let targetY2 = document.getElementById('target-y2');
const valuesX1=["I","M","R","I","M","R","I","M","R"];
const valuesY1=["9","9","9","13","13","13","17","17","17"];
const valuesX2=["M","R","V","M","R","V","M","R","V"];
const valuesY2=["14","13","13","17","17","17", "20","20","20"];

let buttons=Array.from(document.getElementsByClassName("class-btn-calc"));
buttons.map(button => {
    button.addEventListener('click',  function (e){
        e.preventDefault();
        [].forEach.call(buttons, el=> {
            console.log(el.getAttribute('active'))
            el.getAttribute('active') ? el.style.backgroundColor = "white" : false;
        });
        this.setAttribute('active',true)
        this.style.backgroundColor = "#0d6efd";
        console.log('clicked');
        console.log(targetX1)
        console.log(e.target)
        console.log(e.target.innerText)
        targetX1.value = valuesX1[e.target.innerText-1];
        targetY1.value = valuesY1[e.target.innerText-1];
        targetX2.value = valuesX2[e.target.innerText-1];
        targetY2.value = valuesY2[e.target.innerText-1];
        console.log(targetX1.innerHTML)
    })
})

//
// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener("click",  function (value) {
//         event.preventDefault();
//         const result = buttons.filter(item => item.style.backgroundColor === "white") ;
//         console.log(result)
//         this.style.backgroundColor = "#0d6efd";
//     })
// }



// for (let i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click",  function (value) {
//         // console.log(Event)
//         event.preventDefault();
//         console.log(event);
//         console.log(event.target);
//         console.log(event.target.value);
//         console.log(event.target.value[1]);
//         console.log(event.target.value[7]);
//         [].forEach.call(btns, el=> {
//             console.log(el.getAttribute('active'))
//                 el.getAttribute('active') ? el.style.backgroundColor = "white" : false;
//             }
//         );
//         this.setAttribute('active',true)
//         this.style.backgroundColor = "#0d6efd";
//     })
//     }

















// for (let i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click",  function (value) {
//         event.preventDefault();
//         btns.filter(item => item.style.backgroundColor === "white") : [];
//         console.log(result)
//         this.style.backgroundColor = "#0d6efd";
//     })
// }
//






