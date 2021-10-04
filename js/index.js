const form = document.getElementById('form');
// quando for enviado, quero que faça alguma coisa, chama a função
form.addEventListener('submit', handleSubmit); 

// variável do <h2> 'Adivinhe o número sorteado'
let status = document.getElementById('status');

// variável do <span> 'Tentativas: 0'
let attempt =document.getElementById('attempt');

// variável da sessão dos resultados
let result = document.getElementById('result');

const Guess = {
    max: 10,
    attemptsNumber: 0,
    numberDrawn: function randomValue() {
        return Math.round(Math.random() * this.max); //aqui vai multiplicar pela valor da qtd max 10
    }
};
// Math.round arredonda o valor

let numberDrawn = Guess.numberDrawn() //criando a variável que irá receber a função Guess, vai armazenar o valor

function updateAttempt(attempt, value){
    attempt.innerHTML = 'Tentativa: ' + value;
};

// essa função é a principal do sisteminha
function handleSubmit(e){
    e.preventDefault();  //ele não vai recarregar a página quando enviar o formulário

    let kick = document.getElementById('kick').value;

    if(!kick) {
        alert('Digite algum valor!');  //se não tiver valor, vai aparecer um alerta pedindo para digitar o valor
        return;
    };

    // caso passou, quero incrementar antes de passar o valor, vai somar
    updateAttempt(attempt, ++Guess.attemptsNumber);

    if(numberDrawn == kick) {
        playAgain();
        status.innerHTML = 'Parabéns, você acertou!';
        result.style.transition = '0.4s';
        result.style.backgroundColor = '#37c978';
        result.style.color = '#fff';
        status.style.color = '#fff';
    } else if (numberDrawn > kick) {
        status.innerHTML = 'O número é maior!';
        status.style.color = '#de4251';
        clear();
    } else if (numberDrawn < kick) {
        status.innerHTML = 'O número é menor!';
        status.style.color = '#de4251';
        clear();
    };
};


// aqui estou criando a função do botão restart e ele aparecerá depois da primeira jogada
function playAgain(){
    document.getElementById('btnRestart').style.display = 'flex';
};

// aqui a página atualiza automaticamente
function restart() {
    document.location.reload(true);
};

// essa função limpa o valor da caixa depois da jogada
function clear() {
    document.getElementById('kick').value = ' ';
};