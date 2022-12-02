const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

start_btn.onclick = () => {
    info_box.classList.add("activeInfo"); 
}


exit_btn.onclick = () => {
    window.location = 'chamativo_quiz.html'; 
}


continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); 
    quiz_box.classList.add("activeQuiz"); 
    showQuetions(0); 
    queCounter(1);
    startTimer(15);
    startTimerLine(0); 
}

var timeValue = 15;
var que_count = 0;
var que_numb = 1;
var userScore = 0;
var counter;
var counterLine;
var widthValue = 0;
var vitoria = 0;
var pontos = 0;
var jogadas = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");


restart_quiz.onclick = () => {
    quiz_box.classList.add("activeQuiz");
    result_box.classList.remove("activeResult"); 
    timeValue = 15;
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); 
    queCounter(que_numb); 
    clearInterval(counter); 
    clearInterval(counterLine); 
    startTimer(timeValue); 
    startTimerLine(widthValue);
    timeText.textContent = "Tempo restante"; 
    next_btn.classList.remove("show"); 
}


quit_quiz.onclick = () => {
    window.location = 'chamativo_quiz.html';
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");


next_btn.onclick = () => {
    if (que_count < questions.length - 1) { 
        que_count++; 
        que_numb++;
        showQuetions(que_count); 
        queCounter(que_numb); 
        clearInterval(counter); 
        clearInterval(counterLine); 
        startTimer(timeValue); 
        startTimerLine(widthValue); 
        timeText.textContent = "Tempo restante"; 
        next_btn.classList.remove("show"); 
    } else {
        clearInterval(counter); 
        clearInterval(counterLine); 
        showResult(); 
        computarResultado();
    }
}


function showQuetions(index) {
    const que_text = document.querySelector(".que_text");


    var que_tag = '<span>' + questions[index].numb + ". " + questions[index].question + '</span>';
    var option_tag = '<div class="option"><span>' + questions[index].options[0] + '</span></div>'
        + '<div class="option"><span>' + questions[index].options[1] + '</span></div>'
        + '<div class="option"><span>' + questions[index].options[2] + '</span></div>'
        + '<div class="option"><span>' + questions[index].options[3] + '</span></div>';
    que_text.innerHTML = que_tag; 
    option_list.innerHTML = option_tag; 

    const option = option_list.querySelectorAll(".option");


    for (i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

var tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
var crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';


function optionSelected(answer) {
    clearInterval(counter); 
    clearInterval(counterLine); 
    var userAns = answer.textContent; 
    var correcAns = questions[que_count].answer; 
    const allOptions = option_list.children.length; 

    if (userAns == correcAns) { 
        userScore += 1; 
        answer.classList.add("correct");
        answer.insertAdjacentHTML("beforeend", tickIconTag); 
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
        pontos += 100;
    } else {
        answer.classList.add("incorrect"); 
        answer.insertAdjacentHTML("beforeend", crossIconTag); 
        console.log("Wrong Answer");

        for (i = 0; i < allOptions; i++) {
            if (option_list.children[i].textContent == correcAns) { answer 
                option_list.children[i].setAttribute("class", "option correct"); 
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); 
                console.log("Auto selected correct answer.");
            }
        }
    }
    for (i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled"); 
    }
    next_btn.classList.add("show"); 
}


function showResult() {
    info_box.classList.remove("activeInfo"); 
    quiz_box.classList.remove("activeQuiz"); 
    result_box.classList.add("activeResult"); 
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 6) { 
       
        var scoreTag = '<span>Parabéns! Você acertou <p>' + userScore + '</p> de <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;  
    }
    else if (userScore > 3) { 
        var scoreTag = '<span>Ótimo! Você acertou <p>' + userScore + '</p> de <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else { 
        var scoreTag = '<span>Que pena! Você acertou apenas <p>' + userScore + '</p> de <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

function startTimer(time) {
    counter = setInterval(timer, 1000);
    function timer() {
        timeCount.textContent = time; 
        time--; 
        if (time < 9) { 
            var addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero; 
        }
        if (time < 0) { 
            clearInterval(counter); 
            timeText.textContent = "Time Off"; 
            const allOptions = option_list.children.length; 
            var correcAns = questions[que_count].answer;
            for (i = 0; i < allOptions; i++) {
                if (option_list.children[i].textContent == correcAns) { 
                    option_list.children[i].setAttribute("class", "option correct");
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); 
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for (i = 0; i < allOptions; i++) {
                option_list.children[i].classList.add("disabled");
            }
            next_btn.classList.add("show"); 
        }
    }
}

function startTimerLine(time) {
    counterLine = setInterval(timer, 29);
    function timer() {
        time += 1; 
        time_line.style.width = time + "px"; 
        if (time > 549) { 
            clearInterval(counterLine); 
        }
    }
}

function queCounter(index) {

    var totalQueCounTag = '<span><p>' + index + '</p> de <p>' + questions.length + '</p> Questões</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;
}



function computarResultado() {

    if (userScore == 5) {
        vitoria = 1;
    }
    else {
        vitoria = 0;
    }

    fetch(`/quiz/computarResultado`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            vitoria: vitoria,
            pontos: pontos
        })

    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            console.log("Inseriu vitória");
            console.log("Inseriu pontos");

            jogadas += 1;

            inserirFkQuiz();

        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
    return false;

}


function inserirFkQuiz() {

    var idUsuario = sessionStorage.IDUSUARIO_USUARIO;

    fetch(`/quiz/inserirFkQuiz/${jogadas}${idUsuario}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        }
        // body: JSON.stringify({
        //     descricao: textarea_descricao.value
        // })
    }).then(function (resposta) {

        if (resposta.ok) {
            console.log("Atualizou idQuiz na tabela Usuario (idUsuario)");
        } else if (resposta.status == 404) {
            window.alert("Deu 404!");
        } else {
            throw ("Houve um erro ao tentar realizar a postagem! Código da resposta: " + resposta.status);
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
}




