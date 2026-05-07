// main js
// Initialize a global counter
let evilCount = 0;
let normCount = 0; 
let totalCount = 0; 
let freakOutCount = 0; 

const messageElement = document.getElementById('message');

// Evil buttons
document.querySelectorAll('.evil-btn').forEach(button => {
    button.addEventListener('click', () => {
        evilCount++;
        totalCount++;
        console.log(`Evil clicks: ${evilCount}`);
        let evil = true; 
        messages(evil); 

        if (evilCount == 10) {
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
        let evil = false; 
        messages(evil); 

        console.log(`Normal clicks: ${normCount}`);
        document.getElementById("totalCountDisplay").innerHTML = totalCount;
        
    });
});
 
document.querySelectorAll('.freakOutPage').forEach(button=>{  
    button.addEventListener('click', () => {
        freakOutCount++; 
    
        messageElement.textContent = "Called";
        console.log(`Freak Out Clicks: ${freakOutCount}`);
    });
    
});

function messages(isEvil)
{
    if(isEvil)
    {
        if(evilCount == 1)
        {
            messageElement.textContent = "Intresting selection! Is it a gift?";
        }
        else if(evilCount == 2)
        {
            messageElement.textContent = "This isn't your normal style. Perusing for someone else?";
        }
        else if(evilCount == 3)
        {
            messageElement.textContent = "Let me know about who you're shopping for, I can help you make selections";
        }
        else if(evilCount == 4)
        {
            messageElement.textContent = "Is there some kind of party going on?";
        }
        else if(evilCount == 5)
        {
            messageElement.textContent = "This is a lot to buy for other people in one sitting";
        }
        else if(evilCount == 6)
        {
            messageElement.textContent = "I don't even know who you could be buying all this for";
        }
        else if(evilCount == 7)
        {
            messageElement.textContent = "You are acting very strange.";
        }
        else if(evilCount == 8)
        {
            messageElement.textContent = "This is not how Catherine acts.";
        }
        else if(evilCount == 9)
        {
            messageElement.textContent = "Who are you?";
        }
       
    }
    else 
    {
        if(evilCount <= 0 && evilCount <= 2)
        {
            if(normCount % 3 == 0)
            {
                messageElement.textContent = "Nice selection! Is that for you or Ellie?";
            }
            else if(normCount % 3 == 1)
            {
                messageElement.textContent = "Oh, that's perfect for you!";
            }
            else if(normCount % 3 == 2)
            {
                messageElement.textContent = "You know, it's funny, Lily has something just like that!";
            }
            
        }
        else if(evilCount <= 3 && evilCount <= 5)
        {
            if(normCount % 3 == 0)
            {
                messageElement.textContent = "This is very 'you'.";
            }
            else if(normCount % 3 == 1)
            {
                messageElement.textContent = "This is fun!";
            }
            else if(normCount % 3 == 2)
            {
                messageElement.textContent = "Oh, you would LOVE this.";
            }
        }
        else if(evilCount <= 6 && evilCount <= 8)
        {
            if(normCount % 3 == 0)
            {
                messageElement.textContent = "This is up your ally.";
            }
            else if(normCount % 3 == 1)
            {
                messageElement.textContent = "This is more like what you normally get.";
            }
            else if(normCount % 3 == 2)
            {
                messageElement.textContent = "You've been shopping a lot today.";
            }
        }
        else if(evilCount == 9)
        {
            if(normCount % 3 == 0)
            {
                messageElement.textContent = "That's what you'd usually like...I don't buy it. Are you trying to trick me?";
            }
            else if(normCount % 3 == 1)
            {
                messageElement.textContent = "Why would you buy so much random garbage then return to your preferences?";
            }
            else if(normCount % 3 == 2)
            {
                messageElement.textContent = "Such a sudden departure from your taste, there's clearly something going on.";
            }
        }
        
        
    }
    /*
    if(!isEvil && evilCount == 0 && normCount == 1)
    {
        messageElement.textContent = "Nice selection! Is that for you or Ellie?";
    }
    else if(!isEvil && evilCount == 1)
    {
        messageElement.textContent = "Nice selection! Is that for you or Ellie?";
    }
    else if(isEvil && evilCount == 1 && normCount == 1)
    {
        messageElement.textContent = "Nice selection! Is that for you or Ellie?";
    } */ 
}