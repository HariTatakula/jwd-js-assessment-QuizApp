/* ***************************
  JWD JavaScript Assessment

  This code is unfinished. You will need to study it to figure out what it does. Then you will need to use this and
  your own code, to finish the app. 
  
  The tasks you need to do are below.

    TASKS TODO:
      1. Calculate the score as the total of the number of correct answers

      2. Add an Event listener for the submit button, which will display the score and highlight 
         the correct answers when the button is clicked. Use the code from lines 67 to 86 to help you.

      3. Add 2 more questions to the app (each question must have 4 options).

      4. Reload the page when the reset button is clicked (hint: search window.location)

      5. Add a countdown timer - when the time is up, end the quiz, display the score and highlight the correct answers
*************************** */

window.addEventListener('DOMContentLoaded', () => {
  const start = document.querySelector('#start');
  start.addEventListener('click', function (e) {
    document.querySelector('#quizBlock').style.display = 'block';
    start.style.display = 'none';
  });
  // quizArray QUESTIONS & ANSWERS
  // q = QUESTION, o = OPTIONS, a = CORRECT ANSWER
  // Basic ideas from https://code-boxx.com/simple-javascript-quiz/
  const quizArray = [
    {
      q: 'Which is the third planet from the sun?',
      o: ['Saturn', 'Earth', 'Pluto', 'Mars'],
      a: 1, // array index 1 - so Earth is the correct answer here
    },
    {
      q: 'Which is the largest ocean on Earth?',
      o: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
      a: 3,
    },
    {
      q: 'What is the capital of Australia?',
      o: ['Sydney', 'Canberra', 'Melbourne', 'Perth'],
      a: 1,
    },
    {
      q: 'What is the largest city of Australia?',
      o: ['Sydney', 'Canberra', 'Melbourne', 'Brisbane'],
      a: 3,
    },
    {
      q: 'What is the longest river of Australia?',
      o: ['Murrumbidgee', 'Murray', 'Lachlan', 'Barwon'],
      a: 1,
    }
  ];

  // function to Display the quiz questions and answers from the object
  const displayQuiz = () => {
    const quizWrap = document.querySelector('#quizWrap');
    let quizDisplay = '';
    quizArray.map((quizItem, index) => {
      quizDisplay += `<ul class="list-group">
                   Q - ${quizItem.q}
                    <li class="list-group-item mt-2" id="li_${index}_0"><input type="radio" name="radio${index}" id="radio_${index}_0"> ${quizItem.o[0]}</li>
                    <li class="list-group-item" id="li_${index}_1"><input type="radio" name="radio${index}" id="radio_${index}_1"> ${quizItem.o[1]}</li>
                    <li class="list-group-item"  id="li_${index}_2"><input type="radio" name="radio${index}" id="radio_${index}_2"> ${quizItem.o[2]}</li>
                    <li class="list-group-item"  id="li_${index}_3"><input type="radio" name="radio${index}" id="radio_${index}_3"> ${quizItem.o[3]}</li>
                    </ul>
                    <div>&nbsp;</div>`;
      quizWrap.innerHTML = quizDisplay;
    });
  };

  // Calculate the score

  const calculateScore = () => {
    let score = 0;

    // console.log('1 array length',quizArray.length)
    quizArray.map((quizItem, index) => {
      for (let i = 0; i < 4; i++) {

        //highlight the li if it is the correct answer
        let li = `li_${index}_${i}`;
        let r = `radio_${index}_${i}`;
        liElement = document.querySelector('#' + li);
        radioElement = document.querySelector('#' + r);
        if (radioElement.checked == true) {
          if (quizItem.a == i) {
            //change background color of li element here
            document.querySelector('#' + li).style.background = "green";
            // code for task 1 goes here
            score++;
          } else {
            document.querySelector('#' + li).style.background = "red";
          }
        }
      }
    });
    console.log('Final score:', score);
    // To display score
    //const quizBlock = document.getElementById('quizBlock');
    const scoreDiv = document.createElement("div");
    document.getElementById("quizBlock").appendChild(scoreDiv);

    scoreDiv.innerHTML = `<br><div class="container" id="quizBlock" style="display:grid">
                    <div class="card-body mb-2" style="background-color:white">
                    <p>The final score is ${score}</p>
                    </div>
                  </div>`
  };

  // Time counter
var count = 25;
var interval = setInterval(function(){
  document.getElementById('time').innerHTML=count;
  count--;
  if (count === 0){
    clearInterval(interval);
    document.getElementById('time').innerHTML='Time Up';

   // alert("You're out of time!");
  }
}, 1000);

  // call the displayQuiz function
  const btnSubmit = document.getElementById('btnSubmit')
  displayQuiz();
  btnSubmit.addEventListener('click', calculateScore);
});

  // Reset to start Quiz Again
const btnReset = document.querySelector('#btnReset')
btnReset.onclick = () => { 
  window.location.reload();
 }

