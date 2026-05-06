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
let clickCount = 0;

// 1. Select all buttons with the specific class
const buttons = document.querySelectorAll('.redirect-btn');

// 2. Loop through each button to add a click listener
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Increment the total count
        clickCount++;
        console.log(`Total clicks: ${clickCount}`);

        // 3. Check if we've reached 5 clicks
        if (clickCount >= 5) {
            // Redirect to the target page
            window.location.href = "https://your-destination-url.com";
        }
    });
});
