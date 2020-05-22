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

    <input id="confirm" type="checkbox" />
    <button id="submit" class="hidden">Submit</button>

    const removeHidden = document.querySelector(#confirm);

    removeHidden.

/* 2. Given the following HTML, when the user clicks the button, display an alert box saying
 whether or not the value in the text box is a number.*/
 
    <input id="r-input" type="text" /> 
    <button id="check"> Check </button>


/*3. Given the following HTML, when the page loads, remove the “hidden” class on the 
“container” div.*/

    <div class="center">
    <div id="container" class="hidden">Hello!</div>
    </div>

// Stretch Requirements:

// 1. Given the following HTML:
//     a. When box1 is clicked, set the background color of box2 to blue.
//     b. When box2 is clicked, set the background color of box 1 to yellow.
//     c. When the mouse pointer exits either box1 or box2, clear both of their colors.

        <div id="box1">BOX 1</div> 
        <div id="box2">BOX 2</div>

// 2. Given the following HTML, update the corresponding span tag whenever a text box has 
// its value changed.

        <span id="firstname_preview"> </span> 
        <span id="lastname_preview"> </span>
        <span id="zip_preview"> </span>

        <input type="textbox" id="firstname" /> 
        <input type="textbox" id="lastname" /> 
        <input type="textbox" id="zip" />
