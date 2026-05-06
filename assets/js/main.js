// main js

let grid = document.querySelectorAll(".grid-container"); 
let divs = document.querySelectorAll(".grid-container div"); 
//let divs = document.querySelection(".grid-container div"); 

const myButton = document.getElementById('myButton'); // Select your button


let rotation = 0;
/*
document.addEventListener("click", function () {
    // let min = 10; 
    // let max = 40; 
    rotation += randomNumber(1, 200); 
    
    document.body.style.transform = `rotate(${rotation}deg)`; 
}) 
*/ 
//let elements = document.querySelectorAll("body *"); 
//console.log(elements.length); 
//let divs = document.querySelection(".grid-container div"); 
 

function randomize() {
    
    divs.forEach(function(div) {
        let scale = randomNumber(.5, 1.2);
        let translateX = randomNumber(0, 50);
        let translateY = randomNumber(0, 360);
        let rotate = randomNumber(0, 360);

        if(Math.random() > .5) {
            scale = 1; 
            translateX = randomNumber(0, 80);
            translateY = randomNumber(0, 80); 
        }

        div.style.transform = 
            `scale(${scale})
            translate(${translateX}%, ${translateY}%)
            rotate(${rotate}deg)`; 

        
    }); 

    console.log(divs.length, "randomize! "); 
 
} 
document.addEventListener("click", randomize);

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + 1) + min; 
}
// When the user clicks on <div>, open the popup

// Initialize a global counter
let evilCount = 0;
let normCount = 0; 
let totalCount = 0; 

// 1. Select all buttons with the specific class
const buttons = document.querySelectorAll('.evil-btn');

/*
const evilBtn = document.getElementById('btnEvil');
const normBtn = document.getElementById('btnNorm'); 

evilBtn.addEventListener(evilBtn => {
    
    evilBtn.addEventListener('click', () => {
        // Increment the total count
        evilCount++;
        totalCount++; 
        console.log(`Total clicks: ${evilCount}`);

        // 3. Check if we've reached 5 clicks
        if (evilCount >= 5) {
            // Redirect to the target page
            window.location.href = "aiFreakOut.html";
        }
    });
});
*/

// 2. Loop through each button to add a click listener
/*

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Increment the total count
        evilCount++;
        totalCount++; 
        console.log(`Total clicks: ${evilCount}`);

        // 3. Check if we've reached 5 clicks
        if (evilCount >= 5) {
            // Redirect to the target page
            window.location.href = "aiFreakOut.html";
        }
    });
}); */

// Evil buttons
document.querySelectorAll('.evil-btn').forEach(button => {
    button.addEventListener('click', () => {
        evilCount++;
        totalCount++;
        console.log(`Evil clicks: ${evilCount}`);

        if (evilCount >= 5) {
            window.location.href = "aiFreakOut.html";
        }
        document.getElementById("totalCountDisplay").innerHTML = totalCount;
    });
});

// Normal buttons
document.querySelectorAll('.norm-btn').forEach(button => {
    button.addEventListener('click', () => {
        normCount++;
        totalCount++;
        console.log(`Normal clicks: ${normCount}`);
        document.getElementById("totalCountDisplay").innerHTML = totalCount;
        
    });
});