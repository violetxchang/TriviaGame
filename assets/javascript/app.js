var questionAnswers=[
    { 
    question: "who is MJ?",
    answers: ["1. He is a footbal player", "2. He is a rock star", "3. He is the GOAT", "4. He is a pilot"],
    rightAnswer: "He is the GOAT",
    animate:   "https://media3.giphy.com/media/pYvP6Bf0Uhtm0/200w.webp?cid=790b76115ce7298e785a396d7364905b&rid=200w.webp"
  },
  { 
    question: "who won the world series in 2016?",
    answers: ["1. Blackhawks", "2. Cubs", "3. Bears", "4. White Soxs"],
    rightAnswer: "Cubs",
    animate:   "https://giphy.com/gifs/mlb-dance-cubs-vol-7HsmAvlq6lDlm"
  }

  ]


  var correctAnswers=0;
  var inCorrectAnswers=0;
  var unAnswers=0;
  var index=0;



function showTrivia(){
  $("#showQuestion").html(questionAnswers[index].question);
  for(var i=0; i< questionAnswers[index].answers.length;i++){
    $("#showPossibleAnswers").append(questionAnswers[index].answers[i]+"<br><br>")
  }

}
showTrivia();

//  When the start button gets clicked, run the start function.
//make start button go away
//start timer at 180 seconds
//show questions
$("#startClock").on("click", function run() {
    console.log("you clicked me");

    // $("#countdownTimer").remove();

    var number = 180;
    var intervalId;
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
    }
    run();
})