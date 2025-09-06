// Sempre que a página carregar ou recarregar
window.addEventListener('load', () => {
    // Remove hash da URL
    history.replaceState(null, '', window.location.pathname);

    // Sobe a página suavemente até o topo
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

let cont = 1;
let timer; // variável do intervalo

document.getElementById("radio1").checked = true; 

// função que inicia o timer
function startTimer() {
    timer = setInterval(function() {
        nextImg();
    }, 5000);
}

function nextImg() {
    cont++;
    if (cont > 6) {
        cont = 1;
    }
    document.getElementById("radio" + cont).checked = true;
}

// --- Novo trecho: sincroniza e reseta o timer ---
const radios = document.querySelectorAll('input[name="radio-btn"]');

radios.forEach((radio, index) => {
    radio.addEventListener("click", () => {
        cont = index + 1; // ajusta o contador para o item clicado
        clearInterval(timer); // limpa o timer atual
        startTimer();         // reinicia o timer
    });
});

// inicia o timer na primeira vez
startTimer();

