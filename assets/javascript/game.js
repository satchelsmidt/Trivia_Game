$(document).ready(function(){
    //Define Variables
    //Variables for keeping score
    var numCorrect = 0;
    var numWrong = 0;
    var numSkip = 0;

    //Question 1
    var q1Text = $("<p>"+"What is the name of the world's greatest Skater?"+"</p>");
    var q1List = $("<li>")
    var q1_1 = $("<input type='radio' name='q1' value='Bob Dylan' id='q1_1'> Bob Dylan </input>")
    var q1_2 = $("<input type='radio' name='q1' value='Tony Stark' id='q1_2'> Tony Stark </input>")
    var q1_3 = $("<input type='radio' name='q1' value='Tony Hawk' id='q1_3'> Tony Hawk </input>")
    var q1_4 = $("<input type='radio' name='q1' value='Russell Brand' id='q1_4'> Russell Brand </input>")

    //Question 2
    var q2Text = $("<p>"+"Who was the first person to summit Mt. Everest?"+"</p>");
    var q2List = $("<li>")
    var q2_1 = $("<input type='radio' name='q2' value='Edmund Hillary' id='q2_1'> Edmund Hillary </input>")
    var q2_2 = $("<input type='radio' name='q2' value='George Everest' id='q2_2'> George Everest </input>")
    var q2_3 = $("<input type='radio' name='q2' value='Jonathan Goldstein' id='q2_3'> Jonathan Goldstein </input>")
    var q2_4 = $("<input type='radio' name='q2' value='Tupac Shakur' id='q2_4'> Tupac Shakur </input>")

    //Question 3
    var q3Text = $("<p>"+"Which snowboarder has the most X-Games medals of all time?"+"</p>");
    var q3List = $("<li>")
    var q3_1 = $("<input type='radio' name='q3' value='Travis Rice' id='q3_1'> Travis Rice </input>")
    var q3_2 = $("<input type='radio' name='q3' value='Marlon Brando' id='q3_2'> Marlon Brando </input>")
    var q3_3 = $("<input type='radio' name='q3' value='Michael Phelps' id='q3_3'> Michael Phelps </input>")
    var q3_4 = $("<input type='radio' name='q3' value='Shaun White' id='q3_4'> Shaun White </input>")

    //Question 4 Related
    var q4Text = $("<p>"+"Who holds the record for most Olympic gold medals?"+"</p>");

    var q4List = $("<li>")
    var q4_1 = $("<input type='radio' name='q4' value='Michael Phelps' id='q4_1'> Michael Phelps </input>")
    var q4_2 = $("<input type='radio' name='q4' value='Dmitry Pavolov' id='q4_2'> Dmitry Pavolov </input>")
    var q4_3 = $("<input type='radio' name='q4' value='Robert Heinlein' id='q4_3'> Robert Heinlein </input>")
    var q4_4 = $("<input type='radio' name='q4' value='Ronald Reagan' id='q4_4'> Ronald Reagan </input>")

    //Question 5 Related
    var q5Text = $("<p>"+"What year was NASCAR founded?"+"</p>");

    var q5List = $("<li>")
    var q5_1 = $("<input type='radio' name='q5' value='1908' id='q5_1'> 1908 </input>")
    var q5_2 = $("<input type='radio' name='q5' value='1948' id='q5_2'> 1948 </input>")
    var q5_3 = $("<input type='radio' name='q5' value='1973' id='q5_3'> 1973 </input>")
    var q5_4 = $("<input type='radio' name='q5' value='2004' id='q5_4'> 2004 </input>")

    //Question 6 Related
    var q6Text = $("<p>"+"What country was the first World Surfing Championship held?"+"</p>");
    var q6List = $("<li>")
    var q6_1 = $("<input type='radio' name='q6' value='Hawaii, USA' id='q6_1'> Hawaii, USA </input>")
    var q6_2 = $("<input type='radio' name='q6' value='Peru' id='q6_2'> Peru </input>")
    var q6_3 = $("<input type='radio' name='q6' value='Australia' id='q6_3'> Australia </input>")
    var q6_4 = $("<input type='radio' name='q6' value='South Africa' id='q6_4'> South Africa </input>")
    
    //Set our number counter to 100.
    var number = 30;
    //Variable that will hold our interval ID when we execute the "run" function
    var intervalId;

    $("#startButton").on("click", function(){

        $("#introText").empty();

        //Show timer number on screen
        $("#countdownTimer").html("<h2>" + number + "</h2>");

        //Empty Existing Start Content Screen
        $(".startContent").replaceWith("");

        //Begin timer function
        run();

        $("#mainContent").css({
            "background":"lightblue", 
            "width":"525px",
            "height":"320px",
            "margin":"0 auto",
            "margin-bottom":"0px",
            "padding":"20px",
            "overflow":"auto"})

        // 

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

        //Create Question 3 content
        $(q3List).append(q3_1);
        $(q3List).append(q3_2);
        $(q3List).append(q3_3);
        $(q3List).append(q3_4);
        $("#question3").append(q3Text);
        $("#question3").append(q3List);

        //Create Question 4 content
        $(q4List).append(q4_1);
        $(q4List).append(q4_2);
        $(q4List).append(q4_3);
        $(q4List).append(q4_4);
        $("#question4").append(q4Text);
        $("#question4").append(q4List);

        //Create Question 5 content
        $(q5List).append(q5_1);
        $(q5List).append(q5_2);
        $(q5List).append(q5_3);
        $(q5List).append(q5_4);
        $("#question5").append(q5Text);
        $("#question5").append(q5List);

        //Create Question 6 content
        $(q6List).append(q6_1);
        $(q6List).append(q6_2);
        $(q6List).append(q6_3);
        $(q6List).append(q6_4);
        $("#question6").append(q6Text);
        $("#question6").append(q6List);

    });

    //Functions to check answers
    function checkAnswersOne(){
        if(document.getElementById("q1_1").checked === true){
            numWrong = numWrong + 1;
        }
        else if(document.getElementById("q1_2").checked === true){
            numWrong = numWrong + 1;
        }
        else if(document.getElementById("q1_3").checked === true){
            numCorrect = numCorrect + 1;
        }
        else if(document.getElementById("q1_4").checked === true){
            numWrong = numWrong + 1;
        }
        else{
            numSkip= numSkip + 1;
        }
    }

    function checkAnswersTwo(){
        if(document.getElementById("q2_1").checked === true){
            numCorrect = numCorrect + 1;
        }
        else if(document.getElementById("q2_2").checked === true){
            numWrong = numWrong + 1;
        }
        else if(document.getElementById("q2_3").checked === true){
            numWrong = numWrong + 1;
        }
        else if(document.getElementById("q2_4").checked === true){
            numWrong = numWrong + 1;
        }
        else{
            numSkip= numSkip + 1;
        }
    }

    function checkAnswersThree(){
        if(document.getElementById("q3_1").checked === true){
            numWrong = numWrong + 1;
        }
        else if(document.getElementById("q3_2").checked === true){
            numWrong = numWrong + 1;
        }
        else if(document.getElementById("q3_3").checked === true){
            numWrong = numWrong + 1;
        }
        else if(document.getElementById("q3_4").checked === true){
            numCorrect = numCorrect + 1;
        }
        else{
            numSkip= numSkip + 1;
        }
    }

    function checkAnswersFour(){
        if(document.getElementById("q4_1").checked === true){
            numCorrect = numCorrect + 1;
        }
        else if(document.getElementById("q4_2").checked === true){
            numWrong = numWrong + 1;
        }
        else if(document.getElementById("q4_3").checked === true){
            numWrong = numWrong + 1;
        }
        else if(document.getElementById("q4_4").checked === true){
            numWrong = numWrong + 1;
        }
        else{
            numSkip= numSkip + 1;
        }
    }

    function checkAnswersFive(){
        if(document.getElementById("q5_1").checked === true){
            numWrong = numWrong + 1;
        }
        else if(document.getElementById("q5_2").checked === true){
            numCorrect = numCorrect + 1;
        }
        else if(document.getElementById("q5_3").checked === true){
            numWrong = numWrong + 1;
        }
        else if(document.getElementById("q5_4").checked === true){
            numWrong = numWrong + 1;
        }
        else{
            numSkip= numSkip + 1;
        }
    }

    function checkAnswersSix(){
        if(document.getElementById("q6_1").checked === true){
            numWrong = numWrong + 1;
        }
        else if(document.getElementById("q6_2").checked === true){
            numWrong = numWrong + 1;
        }
        else if(document.getElementById("q6_3").checked === true){
            numCorrect = numCorrect + 1;
        }
        else if(document.getElementById("q6_4").checked === true){
            numWrong = numWrong + 1;
        }
        else{
            numSkip= numSkip + 1;
        }
    }

    //Function resets the interval value each time it is run. Sets the interval id variable to drop by 1 every second
    function run() {
        // clearInterval(intervalId);
        stop();
        intervalId = setInterval(decrement, 1000);
    }

    //Function that runs in 'run' function, drops number by 1 and reflects on html. 
    function decrement() {
        //  Decrease number by one.
        number--;

        //  Show the number in the #show-number tag.
        $("#countdownTimer").html("<h2>" + number + "</h2>");

        //  Once number hits zero...
        if (number <= 0) {
            //Run the stop function.
            stop();
            console.log("TEST 1")
            checkAnswersOne();
            console.log(q1_3)
            checkAnswersTwo()
            console.log(q2_1)
            checkAnswersThree()
            console.log(q3_4)
            checkAnswersFour()
            console.log(q3_1)
            checkAnswersFive()
            console.log(q3_2)
            checkAnswersSix()
            console.log(q3_3)
            console.log("TEST 2")


            //Alert the user that time is up.
            alert("Time Up!");
            
            //Clear questions from form
            $("#formContent").empty();

            //Show quiz results on form
            var resultsDiv = $("<div>");

            $(resultsDiv).append("Number Correct: " + numCorrect + "<br>" + "<br>");
            $(resultsDiv).append("Number Wrong: " + numWrong + "<br>" + "<br>");
            $(resultsDiv).append("Number Skipped: " + numSkip + "<br>" + "<br>");

            $(resultsDiv).css("margin-top", "80px");
            $(resultsDiv).css("font-size", "30px");
            $(resultsDiv).css("font-family", "'Anton', sans-serif");
            $("#formContent").append(resultsDiv);
       }
    }

    function stop() {
        //  Clears our intervalId
        //  We just pass the name of the interval to the clearInterval function.
            clearInterval(intervalId);
    }
});

