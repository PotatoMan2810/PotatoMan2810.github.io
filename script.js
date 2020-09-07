// Consts comunicação com HTML//
let userScore = 0;
let botscore = 0;

const userscore_span=document.getElementById("user_score");

const botscore_span=document.getElementById("bot_score");
const scoreboard_div = document.querySelector(".scoreboard");

const result_div = document.querySelector(".result > p");

const rock_div = document.getElementById("pedra");
const paper_div = document.getElementById("papel");
const scissors_div = document.getElementById("tesoura");


//Funções
function getComputerChoice(){
    const choices = ["pe", "pa", "te"];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}


function win(userchoice, computerChoice){
    userScore ++;
    userscore_span.innerHTML = userScore;
    botscore_span.innerHTML = botscore;

    const smalluserword = "você".fontsize(3).sup();
    const smallbotword = "bot".fontsize(3).sup();

    result_div.innerHTML = `${convert(userchoice)}${smalluserword} vence de ${convert(computerChoice)}${smallbotword}! <p>Você venceu!</p>`;

}
function lose(userchoice, computerChoice){
    botscore ++;
    userscore_span.innerHTML = userScore;
    botscore_span.innerHTML = botscore;

    const smalluserword = "você".fontsize(3).sup();
    const smallbotword = "bot".fontsize(3).sup();

    result_div.innerHTML = `${convert(userchoice)}${smalluserword} perde de ${convert(computerChoice)}${smallbotword}! <p>Você perdeu :(</p>`;


}
function draw(userchoice, computerChoice){
    userscore_span.innerHTML = userScore;
    botscore_span.innerHTML = botscore;

    const smalluserword = "você".fontsize(3).sup();
    const smallbotword = "bot".fontsize(3).sup();

    result_div.innerHTML = `${convert(userchoice)}${smalluserword} não faz nada contra ${convert(computerChoice)}${smallbotword}! <p>Empate!</p>`;

}

function convert(elemento){
    if (elemento == "te") return "Tesoura";
    if (elemento == "pa") return "Papel";
    if (elemento == "pe") return "Pedra";

}

function game(userchoice){
    const computerChoice = getComputerChoice();
    switch(userchoice + computerChoice){

        case "pape":
        case "tepa":
        case "pete":
            win(userchoice, computerChoice);
            break;

        case "pepa":
        case "pate":
        case "tepe":
            lose(userchoice, computerChoice);
            break;

        case "pepe": 
        case "papa": 
        case "tete": 
            draw(userchoice, computerChoice);
            break;

    }

}

function main(){
    rock_div.addEventListener('click', function(){
        game("pe");
    }
    )

    paper_div.addEventListener('click', function(){
        game("pa");
    }
    )

    scissors_div.addEventListener('click', function(){
        game("te");
    }
    )
}

main();