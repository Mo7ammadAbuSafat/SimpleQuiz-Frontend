const questions=[
    {
        Q:"The carrier is suppressed in ________",
        a:"A mixer",
        b:"A frequency multiplier",
        c:"A transducer",
        d:"A balance modulator",
        answer:"d"
    }, {
        Q:"Mixing is used in communication to ________",
        a:"Raise the carrier frequency",
        b:"Lower the carrier frequency",
        c:"To altered the deviation",
        d:"To change the carrier frequency to any required value",
        answer:"d"
    }, {
        Q:"On which factor the bandwidth required for a modulated carrier depends",
        a:"Baseband frequency range",
        b:"Signal to noise ratio",
        c:"Carrier frequency",
        d:"Amplitude of carrier frequency",
        answer:"a"
    }, {
        Q:"When two or more signals share a common channel, it is called ________",
        a:"Sub-channeling",
        b:"Channeling",
        c:"Switching",
        d:"Multiplexing",
        answer:"d"
    }, {
        Q:"What is the baseband bandwidth for a voice signal?",
        a:"At least 10 KHz",
        b:"At least 5 KHz",
        c:"Approximately 3 KHz",
        d:"Approximately 15 KHz",
        answer:"c"
    }, {
        Q:"What is the full form of IF?",
        a:"Intermediate Frequency",
        b:"Internal Frequency",
        c:"Indeterminate Frequency",
        d:"Image Frequency",
        answer:"a"
    }, {
        Q:"Which frequencies is produced if Va sin (ωa t) amplitude modulates the carrier Vc sin (ωc t)?",
        a:"(ωc + ωa), (ωc – ωa) and ωc",
        b:"(ωc) and (ωa)",
        c:"(ωc + ωa) and (2ωc + 2ωa)",
        d:"(2ωc) and (2ωa)",
        answer:"a"
    }, {
        Q:"What is the total sideband power if there is 100% modulation?",
        a:"Half the carrier wave",
        b:"Twice the carrier wave",
        c:"Equal to the carrier wave",
        d:"one-fourth of the carrier wave",
        answer:"a"
    }, {
        Q:"How an AM radio station increase its signal-to-noise ratio?",
        a:"By increasing its modulation index",
        b:"By decreasing its modulation index",
        c:"By maintaining a constant modulation index",
        d:"By increasing the frequency",
        answer:"a"
    }, {
        Q:"What is the main problem in using quadrature amplitude modulation?",
        a:"High bandwidth is required",
        b:"High power is required",
        c:"Incapability with ordinary AM radio waves",
        d:"Bandwidth required is less",
        answer:"c"
    }];

const question= document.getElementById("question");
const a_text= document.getElementById("a_text");
const b_text= document.getElementById("b_text");
const c_text= document.getElementById("c_text");
const d_text= document.getElementById("d_text");

let currQuestion=0;
loadQuestion();

function loadQuestion(){
    if(currQuestion>=questions.length){
        alert("your mark is: "+count)
        location.reload();
    }else{
        question.innerHTML= (currQuestion+1)+ " :  "+ questions[currQuestion].Q;
        a_text.innerHTML=questions[currQuestion].a;
        b_text.innerHTML=questions[currQuestion].b;
        c_text.innerHTML=questions[currQuestion].c;
        d_text.innerHTML=questions[currQuestion].d;
        }
    
}

function findSelected(){
    const radioS= document.getElementsByTagName("input");
    for (let index = 0; index < radioS.length; index++) {
        if(radioS[index].checked==true){
            return radioS[index].getAttribute("id");
        }
    }
    return false;
}

function checkAnswer(){
    if(questions[currQuestion].answer==findSelected()){
        return true;
    }
}

let count=0;
function submit(){
    if(checkAnswer()){
        count++;
    }
    currQuestion++;
    loadQuestion();
}

