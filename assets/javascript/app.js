
      var correctAnswers=0;
      var inCorrectAnswers=0;
      var unAnswers=0;
      var index=0;



//  When the start button gets clicked, run the start function.
//make start button go away
//start timer at 180 seconds
//show questions
$("#startClock").on("click", function run() {
    console.log("you clicked me");

    //list of variables
    var questionAnswers=[
        { 
        question: "How many paintings did Vincent Van Gogh sell in his lifetime?",
        answers: ["1", "3", "7"],
        rightAnswer: "1",
        animate:   "https://media3.giphy.com/media/pYvP6Bf0Uhtm0/200w.webp?cid=790b76115ce7298e785a396d7364905b&rid=200w.webp"
      },
      { 
        question: "Which architect was responsible for the glass pyramid at the Louvre?",
        answers: ["François Mansart", "Henri Labrouste", "Leoh M. Pei"],
        rightAnswer: "Leoh M. Pei",
        animate:   "https://giphy.com/gifs/mlb-dance-cubs-vol-7HsmAvlq6lDlm"
      },
      { 
        question: "Pop Art originated in which city?",
        answers: ["Amsterdam", "New York", "London"],
        rightAnswer: "London",
        animate:   "https://media3.giphy.com/media/pYvP6Bf0Uhtm0/200w.webp?cid=790b76115ce7298e785a396d7364905b&rid=200w.webp"
      },
      { 
        question: "Leonardo da Vinci invented which of these items?",
        answers: ["Wine Cork", "High Heels", "Kites"],
        rightAnswer: "High Heels",
        animate:   "https://media3.giphy.com/media/pYvP6Bf0Uhtm0/200w.webp?cid=790b76115ce7298e785a396d7364905b&rid=200w.webp"
      },
      { 
        question: 'Who once declared "Art is anything you can get away with"?',
        answers: ["Andy Warhol", "Jean Michel Basquiat", "Claude Monet"],
        rightAnswer: "1",
        animate:   "https://media3.giphy.com/media/pYvP6Bf0Uhtm0/200w.webp?cid=790b76115ce7298e785a396d7364905b&rid=200w.webp"
      }
    
      ]
    
      //list variables
    var number = 60;
    var intervalId;


    //press start, start timer for 60 seconds
    //when 60 seconds is up, stop timer, alert "Time's up!" hide trivia game, show results
    function run() {

        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        function decrement() {
            number--;
            $("#countdownTimer").html("<h2>" + number + " seconds left</h2>");
            if (number === 0) {
                stop();
                alert("Time's Up!");
            }
            function stop(){
                clearInterval(intervalId);
            }
        }

        //loop through each trivia question, make each answer into a radio button
        //if user input and answer are equal, user gets a point.
        function showTrivia(){
            $("#showQuestion").html(questionAnswers[index].question);
            for(var i=0; i< questionAnswers[index].answers.length;i++){
              $("#showPossibleAnswers").append("<input class='response' type='radio' name=" + i + " value=" + i + ">" + questionAnswers[index].answers[i] +"<br><br>")
}
          
          }
          showTrivia();
    }
    run();
})



