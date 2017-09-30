var triviaTime = 15;
    var clockRunning= false;
    var numCorrect=0;
    var numIncorrect=0;
    var noAnswer=0;


//global object for trivia questions
var triviaQ = [

                {
                                question: "What animal is on House Baratheon's sigil?",
                                answers: ["Boar","Bear","Stag","Lion"],
                                correctAnswer: 2

                },

                {
                                question: "What are House Lannister's words?",
                                answers: ["Hear Me Roar!","A Lannister Always Pays His Debts","Ours Be the Glory","Righteous In Wrath"],
                                correctAnswer: 0

                },

                {
                                question: "Who says, 'When you play the game of thrones, you win or you die'?",
                                answers: ["Varys","Cersei Lannister","Tyrion Lannister","Petyr Baelish"],
                                correctAnswer: 1

                },

                {
                                question: "Who has Petyr Baelish loved since he was a child?",
                                answers: ["Sansa Stark","Lysa Arryn","Catelyn Stark","Cersei Lanister"],
                                correctAnswer: 2

                },

                {
                                question: "Who is Joffrey Baratheon's father?",
                                answers: ["Tyrion Lannister","Stannis Baratheon","Robert Baratheon","Jaime Lannister"],

                                correctAnswer: 3

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
      //$("#submit").show();
      if (triviaTime === 0) {
        stopGame();
        checkAnswer();
        displayResult();
        $("#Reset").on("click",function(){
                                                    reset();
                                                });
      }
}

function reset(){
    clockRunning=false;
    $("#Reset").remove();
    $("#startGame").show();
    $("#results").empty();
    triviaTime=15;
    numCorrect=0;
    numIncorrect=0;
    noAnswer=0;



}


function createQuiz(){
               

                    
                    for(i=0;i<triviaQ.length;i++){
                    var html = $('<div>').addClass("question game col-md-offset-5").appendTo('body');
                    $(html).append(triviaQ[i].question)
                    //console.log(triviaQ[i].question)
                    
                        for(j=0;j<triviaQ[i].answers.length;j++){
                        //console.log(triviaQ[i].answers.length)
                            
                        
                        var ans =$('<div><input type="radio" id=answerQ'+i+j+' name=answerQ'+i+'><label for=answerQ'+i+j+'>' +triviaQ[i].answers[j] +'</label></input></div>').addClass("answers game col-md-offset-5").appendTo('body')
                            //$(ans).append(triviaQ[i].answers[j]);
                           // console.log(triviaQ[i].answers[j]);
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

//console.log(numCorrect);
$('.question').each(function(i, obj) {
   var userAnswer =  $('label[for="' + $('input[name=answerQ'+i+']:checked').attr("id") + '"]').text();
  //$('input[name=answerQ'+i+']:checked').html().trim(); 
  // $('label[for="' + $('input[name=answerQ'+i+']:checked').attr("name") + '"]').html()
  //console.log("userAnswer"+userAnswer)
  //console.log("Correct Answer"+triviaQ[i].answers[triviaQ[i].correctAnswer])
   if (userAnswer===(triviaQ[i].answers[triviaQ[i].correctAnswer])){
   numCorrect++;
   // console.log("number of correct answer:"+numCorrect);
   // console.log("number of Incorrect answer:"+numIncorrect)
   // console.log("number of no answer:"+noAnswer)
   }
   else if (!userAnswer){
   noAnswer++;
  
   //    console.log("number of correct answer:"+numCorrect);
   // console.log("number of Incorrect answer:"+numIncorrect)
   //    console.log("number of no answer:"+noAnswer)
   }
   else{
    numIncorrect++;
  // console.log("number of correct answer:"+numCorrect);
  //  console.log("number of Incorrect answer:"+numIncorrect)
  //  console.log("number of unanswered questions:"+noAnswer)
   }
});



}

function displayResult(){
                $(".game").remove();
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
                                            
                                                
                        
                                $("#Submit").on("click", function(){
                                                
                                                checkAnswer();
                                        
                                                displayResult();
                                                $("#Reset").on("click",function(){
                                                    reset();
                                                });
                                                
                                });
                           
                                 });

});