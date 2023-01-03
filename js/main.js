let res = 0
let index = 0;

const data = [
    {
        question: "Html-ը դա",
        choice1: "Home Tool Markup Language",
        choice2: "Hyperlinks and Text Markup Language",
        choice3: "Hyper Text Markup Language",
        choice4: "Hyperloop Machine Language",
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Ինչն է սահմանուն վեբ ստանդարտը",
        choice1: "Google",
        choice2: "The World Wide Web consortium",
        choice3: "Mozila",
        choice4: "w3schools",
        answer: "The World Wide Web consortium"
    },
    {
        question: "Որ թեգն է վերնագիրը հատկանշում HTML-ում",
        choice1: "<հ0>",
        choice2: "<հ7>",
        choice3: "<հ1>",
        choice4: "<հ1 + 1>",
        answer: "<հ1>"
    },
    {
        question: "Որ տեգն է հատկանշված տողադարձի համաւր",
        choice1: "select",
        choice2: "hr",
        choice3: "br",
        choice4: "br1",
        answer: "br"
    },
    {
        question: "Որը չի համարվում ծրագրավորման լեզու",
        choice1: "c#",
        choice2: "php",
        choice3: "c++",
        choice4: "jango",
        answer: "php"
    },
    {
        question: "Որը  թեգն է նախատեսված շեղատառ գրելու համար",
        choice1: "b",
        choice2: "i",
        choice3: "strong",
        choice4: "s",
        answer: "i"
    }
]

function toHTML(id){
    const questRoom = document.querySelector(".questRoom")
        return questRoom.innerHTML = `
        <div class="quest" id="${id}">
            <div class="questions">
                <h4>${id + 1}.${data[id].question}</h4>
            </div>
            <div class="answers">
                <label>
                    <input type="radio" name="answer">
                    <p>${data[id].choice1}</p>
                </label>
                <label>
                    <input type="radio" name="answer">
                    <p>${data[id].choice2}</p>
                </label>
                <label>
                    <input type="radio" name="answer">
                    <p>${data[id].choice3}</p>
                </label>
                <label>
                    <input type="radio" name="answer">
                    <p>${data[id].choice4}</p>
                </label>
                <span>${id + 1} / ${data.length}</span>
            </div>
            <button class="nextBtn">Next</button>
        </div>
            
            `
}

function result(res){
    const questRoom = document.querySelector(".questRoom")
    return questRoom.innerHTML = `
        <div>${res} / ${data.length}</div>
        <button class="restartBtn">Restart</button>
    `
}

function quizRun(qvestRoom, id){
    qvestRoom.forEach(elem => {
        elem.addEventListener("click", () =>{
            const input = elem.firstElementChild;
            const value = elem.lastElementChild.textContent;
            const nextBtn = elem.parentElement.parentElement.lastElementChild
            nextBtn.addEventListener("click", (e)=> {
                e.preventDefault()
                if(input.checked){
                    input.checked = false
                    if(id === value){
                        res++
                    }
                    if(index + 1 === data.length){
                        result(res) 
                        restartBtn(document.querySelector(".restartBtn") )
                    }
                    index++;
                    toHTML(index);
                    quizRun(document.querySelectorAll(".questRoom label"),  data[index].answer)
                }
            })
        })
    });
}

function restartBtn(restartBtn){
    restartBtn.addEventListener("click", () => {
        res=0
        toHTML(index=0);
        quizRun(document.querySelectorAll(".questRoom .quest label"),  data[index].answer)
    })
}

toHTML(index);
quizRun(document.querySelectorAll(".questRoom .quest label"),  data[index].answer)