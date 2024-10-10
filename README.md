# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
    ```html
    {child name} will be making memories with {celebrity name}, a {celebrity sport} star, by {child wish}
    ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?
   The module that contains the event listeners for both the children and the celebrity is main.js. At the very bottom of main.js, there is a function which produces the required pop up event listener, once a child is clicked. The logic of the function is simple; the function retrieves the array of HTML elements - it is iterated by the variable "kid" - an event listener is added to each iterated "kid" variable whenever a "click" is introduced - a variable "kidWish" takes the value of data-wish once clicked - the child name and wish are then passed to the alert function - finally, it then passes those values into the browser as an alert, or pop up.
2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?
   Since every child needs to be paired with the celebrity of their choice, calling the function inside the loop means it is executed for each child separately with their celebrityID in the database. We are essentially making sure every child is correctly matched with the star they chose. If it were to be invoked outside of the for of loop it only match the celebrity to the first child in the array, since there is no loop to iterate the others over the array. 
3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?
   In CelebrityList, the celebrity data from the database module are translated into HTML format via an ordered list. The attribute data-sport is then given to main module by exporting CelebrityList. After which, you create the event listener for the celebrity list items and implement the data-sport attribute. Then when the user(s) click the celebrity, the listener retrieves the associated value of the data-sport attribute. It then displays that information with a window alert.
4. Can you describe, in detail, the algorithm that is in the `main` module?
   First, we introduce the other modules by importing them. Second, we select the main HTML elements with const mainContainer. Third, we generate the application HTML. Fourth, we need to insert the HTML into our DOM, using .innerHTML. Fifth, we set up event listeners. Sixth and finally, we create an alert for user clicks.