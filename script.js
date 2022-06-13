const quizData = [
    {
        question:"A technician must determine if a web page user's visits are connecting to a suspicious website's IP address in the background. Which of the following tools would provide the information on TCP connections? ",
        a: 'netstat',
        b: 'tracert',
        d: 'arp',
        e: 'ipconfig',
        f: 'route',
        correct: a,        
    },

    {
        question:"Which of the following devices, if implemented, would result in decreased administration time of an 802.11 network running centralized authentication services ? (2 answers)",
        a: 'VPN Concentrator',
        b: 'Proxy Server',
        d: 'Wireless Controller',
        e: 'RADIUS server',
        f: 'Multilayer Switch',
        correct: (c && d)    
    },

    {
        question:"A technician is investigating a server performance issue. The technician has gathered the server utilization stats. Which of the following should the technician use to determine which of the stats aren't in the normal range?",
        a: 'baseline review',
        b: 'vulnerability scan',
        c: 'system life-cycle report',
        d: 'Archiving logs',
        correct: a,   
    },

    {
    question:"A network technician has created a network that consists of a router, a firewall, a switch , & several PCs. Which of the following physical network topologies was created?",
    a: 'Star',
    b: 'Mesh',
    c: 'Ring',
    d: 'Bus',
    correct: d,   
    },


    {
        question:"Users have been experiencing slow network response times, & management has asked the network tech to provide evidence of network improvement after optimizing the network, which of the following would be required?",
        a: 'IDF/MDF documentation',
        b: 'Change Management',
        c: 'Performance baseline',
        d: 'Physical diagram',
        correct: c,   
    }
];
const questionE1 = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0; 
let answer = undefined;
loadQuiz() ;


// I need a function to load each questions data - after the user submits their answer
function loadQuiz(){

    const currentQuizData = quizData[currentQuiz];
    questionE1.innerHTML = currentQuizData.question;            


    a_text.innerText = currentQuizData.a;  
    b_text.innerText = currentQuizData.b;      
    d_text.innerText = currentQuizData.d;     
}


// I need a function to
function getSelected() {
    const answers = document.querySelectorAll(".answer");
    answers.forEach((answer) => {
        console.log(answer.value);

    })

}



// By default when a new set of question data is loaded - the same radio button that was selected for the last answer will still be highlighted, we need a way to deselect the radio buttons so none are selected until the user does so. 

// I need to ensure a user cannot submit the question without attempting the question. 



// I need to give the submit button the capability to: load the next quiz, determine whether or not the user has reached the last question.
submitBtn.addEventListener("click", ()=> {
currentQuiz++  
getSelected(); 
// if (answer) {
//     if(answer === quizData[currentQuiz])
// } 


// if(currentQuiz < quizData.length ) {
//     loadQuiz()
// } else {
//     // Display progress
//     alert("Congratulations you've completed the test")
//     // calculate score???

//     // todo - Show results
// }
})
