var triviaTime = 30;
    var clockRunning= false;
    var numCorrect=0;
    var numIncorrect=0;
    var noAnswer=0;


//global object for trivia questions
var triviaQ = [

                {
                                question: "What is the national language of India?",
                                answers: ["English","Hindi","Tulu","Nepali"],
                                correctAnswer: 1

                },

                {
                                question: "The oldest parliament in the world belongs to what country?",
                                answers: ["Iceland","Netherlands","Scotland","Ireland"],
                                correctAnswer: 0

                },

                {
                                question: "In what year did Fidel Castro die?",
                                answers: ["2015","2014","2016","2017"],
                                correctAnswer: 2

                },

                {
                                question: "HTML and CSS are computer languages used to create what?",
                                answers: ["Bugs","Games","Toys","WebSites"],
                                correctAnswer: 3

                },

                {
                                question: "In our solar system which two planets rotate clockwise?",
                                answers: ["Mars and Saturn","Neptune and pluto","Venus & Uranus","None of the above"],

                                correctAnswer: 2

                }



]


function startGame() {
if (!clockRunning){
     
     triviaId = setInterval(decrement, 1000);
     clockRunning = true;
     }
     $("#startGame").hide();
     $("#triviaTime").show();

}

function stopGame(){
    clearInterval(triviaId);
}


function decrement() {
      triviaTime--;
      $("#triviaTime").html("<h2>" + "TimeRemaining:" +  triviaTime + "</h2>");
      $("#submit").show();
      if (triviaTime === 0) {
        stopGame();
      }
}

function reset(){
    clockRunning=false;
    $("#Reset").remove();
    $("#startGame").show();
    $("#results").empty();
    triviaTime=30;
    numCorrect=0;
    numIncorrect=0;
    noAnswer=0;


}


function createQuiz(){
               /* var q1 = triviaQ[0].question;
                console.log(q1);
                var q1 = $("#quiz").append(triviaQ[0].question);
                var q2 = triviaQ[1].question;
                console.log(q2);


console.log(triviaQ.length);

console.log(triviaQ[0].answers.length);
                //$("#quiz").append(triviaQ[1].question);

                   triviaQ.foreach(function(question,index){
                                question.foreach(function(answers,index){
                                                    $("#options").append($('<input type="radio" name="greetings" value="' + i + '" checked>' + answers + '</input><br />'));
                                                });
                    });*/

                    
                    for(i=0;i<triviaQ.length;i++){
                    var html = $('<div>').addClass("question game").appendTo('body');
                    $(html).append(triviaQ[i].question)
                    console.log(triviaQ[i].question)
                    
                        for(j=0;j<triviaQ[i].answers.length;j++){
                        console.log(triviaQ[i].answers.length)
                            //'<div class="answers">'+triviaQ[i].answers[j]+'</div>'
                        
                        var ans =$('<div><input type="radio" id=answerQ'+i+j+' name=answerQ'+i+'><label for=answerQ'+i+j+'>' +triviaQ[i].answers[j] +'</label></input></div>').addClass("answers game").appendTo('body')
                            //$(ans).append(triviaQ[i].answers[j]);
                            console.log(triviaQ[i].answers[j]);
                        }
                        
                    
                    }
                    var btn=$('<button>',{
                    id:'Submit',
                    class:'btn btn-primary btn-lg col-md-offset-5',
                    text:'SUBMIT'}
                    );
                    
                    $('body').append(btn);
                    
                    
                    
                    }

                      

function checkAnswer(){
//var userAnswer='';

console.log(numCorrect);
$('.question').each(function(i, obj) {
   var userAnswer =  $('label[for="' + $('input[name=answerQ'+i+']:checked').attr("id") + '"]').text();
  //$('input[name=answerQ'+i+']:checked').html().trim(); 
  // $('label[for="' + $('input[name=answerQ'+i+']:checked').attr("name") + '"]').html()
  console.log("userAnswer"+userAnswer)
  console.log("Correct Answer"+triviaQ[i].answers[triviaQ[i].correctAnswer])
   if (userAnswer===(triviaQ[i].answers[triviaQ[i].correctAnswer])){
   numCorrect++;
   console.log("number of correct answer:"+numCorrect);
   console.log("number of Incorrect answer:"+numIncorrect)
   console.log("number of no answer:"+noAnswer)
   }
   else if (!userAnswer){
   noAnswer++;
  
      console.log("number of correct answer:"+numCorrect);
   console.log("number of Incorrect answer:"+numIncorrect)
      console.log("number of no answer:"+noAnswer)
   }
   else{
    numIncorrect++;
  console.log("number of correct answer:"+numCorrect);
   console.log("number of Incorrect answer:"+numIncorrect)
   console.log("number of unanswered questions:"+noAnswer)
   }
});



}

function displayResult(){
$(".game").empty();
                $("#Submit").remove();
                triviaTime = 0;
                stopGame();
                $("#triviaTime").hide();
                
              $( "#results").append(
            "<div><h2>All Done!!!</h2></div>",
            "<div><h2>Correct Answers: " + numCorrect + "</h2></div>",
            "<div><h2>Incorrect Answers: " + numIncorrect + "</h2></div>",
            "<div><h2>Unanswered: " + noAnswer + "</h2></div>"
          );
              var btn=$('<button>',{
                    id:'Reset',
                    class:'btn btn-primary btn-lg col-md-offset-5',
                    text:'Reset'}
                    );
                    
                    $('body').append(btn);
        
 
}










$(document).ready(function(){

                //$("#submit").hide();

                                $("#startGame").on("click", function(){
                                                
                                                startGame();
                                                createQuiz();
                                                //$("#submit").show();
                                                
                               
                                $("#Submit").on("click", function(){
                                                
                                                checkAnswer();
                                                //$("#submit").show();
                                                displayResult();
                                                $("#Reset").on("click",function(){
                                                    reset();
                                                });
                                                
                                });
                                 });

});