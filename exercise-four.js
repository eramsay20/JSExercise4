/* Exercise Instructions:
Your client (Catalyte) has requested a JavaScript file that utilizes events in order to 
“improve” the user’s overall experience with their website.

● Use your IDE to complete these exercises.
● Save your work for this exercise in a .js file called exercise-four.js
● Do not use global variables. All variables must be function scoped.

Requirements:

1. Given the following HTML, remove the class "hidden" from the submit button when the 
user checks the "confirm" checkbox. If the user unchecks the box, add "hidden" back to 
the class.*/

    // <input id="confirm" type="checkbox" />
    // <button id="submit" class="hidden"> Submit </button>

        /*----------------------------------------------*/

        // const myButton = document.querySelector('button');
        // const myCheckbox = document.querySelector('input');

        // myCheckbox.addEventListener('click',() => { // function to toggle hidden submit button
        
        //         myButton.classList.toggle("hidden"); // removes the class "hidden" from button
        
        // });

        /*----------------------------------------------*/

    // ^^^ function to toggle hidden submit button ^^^ // 
   // for an alternate solution: https://teamtreehouse.com/library/styling-elements // 

/* 2. Given the following HTML, when the user clicks the button, display an alert box saying
 whether or not the value in the text box is a number.*/
 
    // <input id="r-input" type="text" /> 
    // <button id="check"> Check </button>

        /*----------------------------------------------*/
        // const myButton = document.querySelector('button');
        // const myInput = document.querySelector('input');

        // myButton.addEventListener('click',() => { 
        //     value = myInput.value;

        //     if (value === ''){
        //         alert(`Please enter a value in the text field`)
        //     }
        //     else if(!isNaN(value) === true) {
              
        //        alert(`The input value is a number!`);
        //     }
        //     else {
        //         alert(`The input value is not a number...`);
        //     }        
        // });
         /*----------------------------------------------*/

        // ^^^ function to determine whether string value is number or string ^^^ // 

/*3. Given the following HTML, when the page loads, remove the “hidden” class on the 
“container” div.*/

    // <div class="center">
    //     <div id="container" class="hidden">Hello!</div>
    // </div>

        /*----------------------------------------------*/
        // const containerDiv = document.querySelector('div.hidden');

        // document.onLoad = ( () => {
        //         containerDiv.className = "default";
        // });
        /*----------------------------------------------*/
        // ^^^ function to show hidden .div following page load ^^^ // 

// Stretch Requirements:

// 1. Given the following HTML:
//     a. When box1 is clicked, set the background color of box2 to blue.
//     b. When box2 is clicked, set the background color of box 1 to yellow.
//     c. When the mouse pointer exits either box1 or box2, clear both of their colors.

        // <div id="box1">BOX 1</div> 
        // <div id="box2">BOX 2</div>

// 2. Given the following HTML, update the corresponding span tag whenever a text box has 
// its value changed.

        // <span id="firstname_preview"> </span> 
        // <span id="lastname_preview"> </span>
        // <span id="zip_preview"> </span>

        // <input type="textbox" id="firstname" /> 
        // <input type="textbox" id="lastname" /> 
        // <input type="textbox" id="zip" />







        // RESOURCE LINKS: 
        // create new element in DOM: https://teamtreehouse.com/library/creating-new-dom-elements
        // append nodes/element to DOM: https://teamtreehouse.com/library/appending-nodes 
        // remove node/element from DOM: https://teamtreehouse.com/library/removing-nodes
        // delay execution of event/function: https://teamtreehouse.com/library/delaying-execution-with-settimeout  
        // event listener run through: https://teamtreehouse.com/library/listening-for-events-with-addeventlistener
        // event object (event.target): https://teamtreehouse.com/library/the-event-object-2