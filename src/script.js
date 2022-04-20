let questions = [{

"question": 'Welcher Buchstabe steht im Apphabet an erster stelle',
"answer_1": 'A',
"answer_2": 'B',
"answer_3": 'C',
"answer_4": 'D',
"right_answer": 1
},

{

    "question": 'Welches Wort fängt mit H an und endet auf D?',
    "answer_1": 'Higer',
    "answer_2": 'Hamster',
    "answer_3": 'Hamburg',
    "answer_4": 'Hund',
    "right_answer": 4
    },

    {

        "question": 'Welche Farbe ist hell?',
        "answer_1": 'dunkel grün',
        "answer_2": 'dunkel rot',
        "answer_3": 'hell blau',
        "answer_4": 'dunkel gelb',
        "right_answer": 3
        },

        {

            "question": 'Wie viele Beine haben Enten',
            "answer_1": '4',
            "answer_2": '2',
            "answer_3": '9',
            "answer_4": '100',
            "right_answer": 2
            },

            {

                "question": 'vervollständige den Satz Rapunzel lass dein',
                "answer_1": 'Schwein herrunter',
                "answer_2": 'deinen Fernseher reparieren',
                "answer_3": 'lass dein Haar herunter',
                "answer_4": 'Vogel piepsen',
                "right_answer": 3
                },

                {

                    "question": 'Aus welchem Fleisch sind Chicken-Wings',
                    "answer_1": 'Hühnerfleisch',
                    "answer_2": 'Bärenfleisch',
                    "answer_3": 'Rindfleisch',
                    "answer_4": 'Ahornsirup',
                    "right_answer": 1
                    },

                    {

                        "question": 'Welcher Film gibt es wirklich',
                        "answer_1": 'schwimmen der Löwen',
                        "answer_2": 'findet Olaf',
                        "answer_3": 'Zoomania',
                        "answer_4": 'Thunfisch AG',
                        "right_answer": 3
                        },
            
]

let currentQuestion = 0;

function init(){

document.getElementById('amountQuestions').innerHTML = ` ${currentQuestion + 1} von ${questions.length} Fragen`
showQuestions();

}

function showQuestions(){
    if(currentQuestion >= questions.length){
        document.getElementById('i').parentNode.classList.remove('container');
        
    }else{
    let question = questions[currentQuestion];

    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
  
    }
    
}

function answer(selection){
    let question = questions[currentQuestion];
    console.log('Selected answer is',  selection)
    let selectedQuestionNumber = selection.slice(-1) //läd den letzten Buchstaben/Zahl
    // aus dem strig/text raus und packt ihn in eine variable//

    let IdOfrightAnswer = `answer_${question['right_answer']}`;

    if(selectedQuestionNumber == question['right_answer']){
        console.log('richtige Antwort');
        document.getElementById(selection).parentNode.classList.add('bg-success');//parentNode greift auf den
         //übergeordneten div von dem ausgewähltem zu
         document.getElementById('next-button').disabled = false;
    }
    else{
        console.log('falsche Antwort');
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(IdOfrightAnswer).parentNode.classList.add('bg-success');
        document.getElementById('next-button').disabled = false;
        }
    }

    function nextQuestion(){
       
        let question = questions[currentQuestion];
        let IdOfrightAnswer = `answer_${question['right_answer']}`;
        currentQuestion++; //z.B von 0 auf 1
        
        resetAnswerButton();
    
        init();

        document.getElementById('next-button').disabled = true;
    
        }
    

    function resetAnswerButton(){
        document.getElementById('answer_1').parentNode.classList.remove('bg-success');
        document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
        document.getElementById('answer_2').parentNode.classList.remove('bg-success');
        document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
        document.getElementById('answer_3').parentNode.classList.remove('bg-success');
        document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
        document.getElementById('answer_4').parentNode.classList.remove('bg-success');
        document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    }
