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
        d: 'system life-cycle report',
        e: 'Archiving logs',
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

let currentQuestion = 0; 

loadQuiz() ;

function loadQuiz(){
    questionE1.innerHTML = quizData[currentQuestion]
    currentQuestion++
}