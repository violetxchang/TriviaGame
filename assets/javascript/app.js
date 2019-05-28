//list of variables
var questionAnswers = [
    {
        question: "How many paintings did Vincent Van Gogh sell in his lifetime?",
        answers: ["1", "3", "7"],
        rightAnswer: "1",
    },
    {
        question: "Which architect was responsible for the glass pyramid at the Louvre?",
        answers: ["François Mansart", "Henri Labrouste", "Leoh M. Pei"],
        rightAnswer: "Leoh M. Pei",
    },
    {
        question: "Pop Art originated in which city?",
        answers: ["Amsterdam", "New York", "London"],
        rightAnswer: "London",
    },
    {
        question: "Leonardo da Vinci invented which of these items?",
        answers: ["Wine Cork", "High Heels", "Kites"],
        rightAnswer: "High Heels",
    },
    {
        question: 'Who once declared "Art is anything you can get away with"?',
        answers: ["Andy Warhol", "Jean Michel Basquiat", "Claude Monet"],
        rightAnswer: "Andy Warhol",
    }

]

//list variables
var number = 60;
var intervalId;


var correctAnswers = 0;
var inCorrectAnswers = 0;
var unAnswers = 0;
var index = 0;



$('#submitForm').hide();

//  When the start button gets clicked, run the start function.
//make start button go away
//start timer at 180 seconds
//show questions
$("#startClock").on("click", function run() {
    console.log("you clicked me");


    //press start, start timer for 60 seconds
    //when 60 seconds is up, stop timer, alert "Time's up!" hide trivia game, show results
    function run() {

        $('.instructions').hide();
        $('#startButton').hide();
        $('#results').hide();
        $('#submitForm').show();


        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        function decrement() {
            number--;
            $("#countdownTimer").html("<h2>" + number + " seconds left</h2>");
            if (number === 0) {
                stop();
            }


            //hide game, show results
            function stop() {
                clearInterval(intervalId);
                alert("Time's Up!");
                $('.instructions').hide();
                $('#startButton').hide();
                $('#results').show();
                $('#submitForm').hide();
                $('#questionDiv').hide();
                $('#countdownTimer').hide();
                $('.lead').hide();
                $("#results").html("Correct Answers: "+correctAnswers+"<br><br>Incorrect Answers: "+inCorrectAnswers+"<br><br>Unanswered: "+unAnswers);
            }
        }


//q1
        var newDiv = $("<div><br>");
        var showQuestions = $("<p>")
        showQuestions.html("<strong>" + questionAnswers[0].question + "</strong>")
        $("#questionDiv").append(showQuestions);

        newDiv = $("<div>");
        showPossibleAnswers = $("<div>")
        $("#questionDiv").append("<input class='response' type='radio' data-right=" + questionAnswers[0].rightAnswer + " name='answer1'>" + questionAnswers[0].answers[0] + "&nbsp;&nbsp;&nbsp;&nbsp;");
        $("#questionDiv").append("<input class='response' type='radio' name='answer1'>" + questionAnswers[0].answers[1] + "&nbsp;&nbsp;&nbsp;&nbsp;");
        $("#questionDiv").append("<input class='response' type='radio' name='answer1'>" + questionAnswers[0].answers[2] + "&nbsp;&nbsp;&nbsp;&nbsp;<br><br><br>");


//q2
        var newDiv = $("<div><br>");
        var showQuestions = $("<p>")
        showQuestions.html("<strong>" + questionAnswers[1].question)
        $("#questionDiv").append(showQuestions);

        newDiv = $("<div>");
        var showPossibleAnswers = $("<div>")
        $("#questionDiv").append("<input class='response' type='radio' name='answer2'>" + questionAnswers[1].answers[0] + "&nbsp;&nbsp;&nbsp;&nbsp;");
        $("#questionDiv").append("<input class='response' type='radio' name='answer2'>" + questionAnswers[1].answers[1] + "&nbsp;&nbsp;&nbsp;&nbsp;");
        $("#questionDiv").append("<input class='response' type='radio' name='answer2'>" + questionAnswers[1].answers[2] + "&nbsp;&nbsp;&nbsp;&nbsp;<br><br><br>");


//q3
        var newDiv = $("<div>");
        var showQuestions = $("<p>")
        showQuestions.html("<strong>" + questionAnswers[2].question)
        $("#questionDiv").append(showQuestions);

        newDiv = $("<div>");
        var showPossibleAnswers = $("<div>")
        $("#questionDiv").append("<input class='response' type='radio' name='answer3'>" + questionAnswers[2].answers[0] + "&nbsp;&nbsp;&nbsp;&nbsp;");
        $("#questionDiv").append("<input class='response' type='radio' name='answer3'>" + questionAnswers[2].answers[1] + "&nbsp;&nbsp;&nbsp;&nbsp;");
        $("#questionDiv").append("<input class='response' type='radio' name='answer3'>" + questionAnswers[2].answers[2] + "&nbsp;&nbsp;&nbsp;&nbsp;<br><br><br>");


//q4
        var newDiv = $("<div>");
        var showQuestions = $("<p>")
        showQuestions.html("<strong>" + questionAnswers[3].question)
        $("#questionDiv").append(showQuestions);

        newDiv = $("<div>");
        var showPossibleAnswers = $("<div>")
        $("#questionDiv").append("<input class='response' type='radio' name='answer4'>" + questionAnswers[3].answers[0] + "&nbsp;&nbsp;&nbsp;&nbsp;");
        $("#questionDiv").append("<input class='response' type='radio' name='answer4'>" + questionAnswers[3].answers[1] + "&nbsp;&nbsp;&nbsp;&nbsp;");
        $("#questionDiv").append("<input class='response' type='radio' name='answer4'>" + questionAnswers[3].answers[2] + "&nbsp;&nbsp;&nbsp;&nbsp;<br><br><br>");


//q5
        var newDiv = $("<div>");
        var showQuestions = $("<p>")
        showQuestions.html("<strong>" + questionAnswers[4].question)
        $("#questionDiv").append(showQuestions);

        newDiv = $("<div>");
        var showPossibleAnswers = $("<div>")
        $("#questionDiv").append("<input class='response' type='radio' name='answer5'>" + questionAnswers[4].answers[0] + "&nbsp;&nbsp;&nbsp;&nbsp;");
        $("#questionDiv").append("<input class='response' type='radio' name='answer5'>" + questionAnswers[4].answers[1] + "&nbsp;&nbsp;&nbsp;&nbsp;");
        $("#questionDiv").append("<input class='response' type='radio' name='answer5'>" + questionAnswers[4].answers[2] + "&nbsp;&nbsp;&nbsp;&nbsp;<br><br><br>");


        //loop through each trivia question, make each answer into a radio button
        //         function showTrivia(){
        //             $("#showQuestion").html(questionAnswers[index].question);
        //             for(var i=0; i< questionAnswers[index].answers.length;i++){
        //               $("#showPossibleAnswers").append("<br><input class='response' type='radio' name=" + i + " value=" + i + ">" + questionAnswers[index].answers[i] +"&nbsp;&nbsp;&nbsp;&nbsp;")

        //                       //if user input and answer are equal, user gets a point.

        // }

        //           }
        //           showTrivia();


    }
    run();
})
