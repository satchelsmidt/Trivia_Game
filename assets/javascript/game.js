
//First page has a title and a start button

//When start button is clicked, this begins the game
    // screen changes to timer (30 seconds)
    // Question
    // 4 clickable answers (buttons?) underneath

$(document).ready(function(){

    //Define Variables
    //Variables for keeping score
    var numCorrect = 0;
    var numWrong = 0;
    var numSkip = 0;

    //Question 1 Related
    var q1Text = $("<p>"+"What is the name of the world's greatest Skater?"+"</p>");

    var q1List = $("<li>")
    var q1_1 = $("<input type='radio' name='q1' value='Bob Dylan' id='q1_1'> Bob Dylan </input>")
    var q1_2 = $("<input type='radio' name='q1' value='Tony Stark' id='q1_2'> Tony Stark </input>")
    var q1_3 = $("<input type='radio' name='q1' value='Tony Hawk' id='q1_3'> Tony Hawk </input>")
    var q1_4 = $("<input type='radio' name='q1' value='Russell Brand' id='q1_4'> Russell Brand </input>")

    //Question 2 Related
    var q2Text = $("<p>"+"Who was the first person to summit Mt. Everest?"+"</p>");

    var q2List = $("<li>")
    var q2_1 = $("<input type='radio' name='q2' value='Edmund Hillary' id='q2_1'> Edmund Hillary </input>")
    var q2_2 = $("<input type='radio' name='q2' value='George Everest' id='q2_2'> George Everest </input>")
    var q2_3 = $("<input type='radio' name='q2' value='Jonathan Goldstein' id='q2_3'> Jonathan Goldstein </input>")
    var q2_4 = $("<input type='radio' name='q2' value='Tupac Shakur' id='q2_4'> Tupac Shakur </input>")

    //Set our number counter to 100.
    var number = 5;
    //Variable that will hold our interval ID when we execute the "run" function
    var intervalId;

    $("#startButton").on("click", function(){
        //Show timer number on screen
        $("#countdownTimer").html("<h2>" + number + "</h2>");

        //Empty Existing Start Content Screen
        $(".startContent").replaceWith("");

        //Begin timer function
        run();

        //Create Question 1 content
        $(q1List).append(q1_1);
        $(q1List).append(q1_2);
        $(q1List).append(q1_3);
        $(q1List).append(q1_4);
        $("#question1").append(q1Text);
        $("#question1").append(q1List);

        //Create Question 2 content
        $(q2List).append(q2_1);
        $(q2List).append(q2_2);
        $(q2List).append(q2_3);
        $(q2List).append(q2_4);
        $("#question2").append(q2Text);
        $("#question2").append(q2List);

    });

    function checkAnswersOne(){
        if(document.getElementById("q1_1").checked === true){
            console.log("fuck you ONE");
            numWrong = numWrong + 1;
        }
        else if(document.getElementById("q1_2").checked === true){
            console.log("fuck you TWO");
            numWrong = numWrong + 1;
        }
        else if(document.getElementById("q1_3").checked === true){
            console.log("fuck you THREE");
            numCorrect = numCorrect + 1;
        }
        else if(document.getElementById("q1_4").checked === true){
            console.log("fuck you FOUR");
            numWrong = numWrong + 1;
        }
        else{
            numSkip= numSkip + 1;
        }
    }

    //Function resets the interval value each time it is run. Sets the interval id variable to drop by 1 every second
    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }

    //Function that runs in 'run' function, drops number by 1 and reflects on html. 
    function decrement() {
        //  Decrease number by one.
        number--;

        //  Show the number in the #show-number tag.
        $("#countdownTimer").html("<h2>" + number + "</h2>");

        //  Once number hits zero...
        if (number === 0) {
            //Run the stop function.
            stop();
            checkAnswersOne();
            console.log(q1_1)

            //Alert the user that time is up.
            alert("Time Up!");
            
            //Clear questions from form
            $("#formContent").empty();

            //Show quiz results on form
            $("#results").append("Number Correct: " + numCorrect + "<br>");
            $("#results").append("Number Wrong: " + numWrong + "<br>");
            $("#results").append("Number Skipped: " + numSkip + "<br>");
           
        }
    }

    function stop() {
        //  Clears our intervalId
        //  We just pass the name of the interval to the clearInterval function.
            clearInterval(intervalId);
    }
});



//User has 30 seconds to pick an answer. Three possible outcomes on question screen:
    // correct answers -- moves to next screen with correct answer
    // wrong answers -- moves to next screen with words "incorrect answer", shows correct answer
    // time out -- moves to next screen with words "time out"
    //Despite outcome, game stays on page for like 5 seconds then auto moves to next question

    //At the end, screen shows number of correct, number of incorrect, number of unanswered
    //Option to start game over sends you back to first question w/ timer ticking down


