// ===============================================
//                  JS_BOM_Uebungen
// ===============================================

// ==================
//      Level 1_1
// ==================

console.log("%c level 1_1", "color: blue; background-color: gold");

console.log("Start. Warten für 3 Sekunden...")

setTimeout(() => 
{
    console.log("Erledigt. Du hast 3 Sekunden verschwendet");
}, 3000);

let count = 10;
setTimeout(() => 
{
    let countDowm = setInterval (() => 
    {
        console.log(count--)
        if(count < 0)
        {
            clearInterval(countDowm);
        }
    }, 1000)
}, 3000);

// ==================
//      Level 1_2
// ==================
const zeit = document.body.querySelector('.zeit');
let contentValue = 99;

const reduce = () =>
{
    let reduceValue = setInterval(() => 
    {
        if (contentValue >= 0)
        {
            zeit.textContent = `${contentValue} %`
            contentValue--;
        }
        else if(contentValue < 0)
        {
            clearInterval(reduceValue);
        }
    }, 70) 
} 

// ==================
//      Level 1_3
// ==================

const messageContainer = document.body.querySelector('.message');
const messageContent = document.body.getElementsByTagName('p');
const counterContainer = document.body.querySelector('#count');

let counterValue = 9;

let countDown = setInterval(() => 
{
    if (counterValue === 0)
    {
        messageContainer.style.opacity = "0";
        clearInterval(countDown);
    }
    counterContainer.textContent = counterValue.toString().padStart(2, 0);
    counterValue--;
}, 1000);