let count = 0;
let suggestionIndex = 0;

const counterElement = document.getElementById("counter");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const resetButton = document.getElementById("reset");
const suggestionText = document.getElementById("suggestionText");
//botoes laterais 
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

const suggestions = [
  "Registre a quantidade de água consumida ao longo do dia para garantir que você está se hidratando adequadamente.",
  "Use o contador para rastrear suas sessões de estudo. Cada vez que completar 30 minutos, clique em 'Incrementar'. Ao terminar, você terá uma visão clara do tempo total de estudo.",
  "Controle a quantidade de tarefas concluídas a cada dia e acompanhe seu progresso",
];

incrementButton.addEventListener("click", () => {
  count++;
  updateCounter();
});

decrementButton.addEventListener("click", () => {
  if (count > 0) {
    count--;
  }
  updateCounter();
});

resetButton.addEventListener("click", () => {
  count = 0;
  updateCounter();
});

//referente ao botões de sugestão
prevButton.addEventListener("click", () => {
    suggestionIndex--;
    if (suggestionIndex < 0) {
      suggestionIndex = suggestions.length - 1; 
    }
    updateSuggestion();
  });
  

nextButton.addEventListener("click", () => {
    suggestionIndex++;
    if (suggestionIndex >= suggestions.length) {
      suggestionIndex = 0; 
    }
    updateSuggestion();
  });
  
function updateCounter() {
  counterElement.textContent = count;
}

function updateSuggestion() {
    suggestionText.innerHTML = "<h2>Sugestão de Uso:</h2><p>" + suggestions[suggestionIndex] + "</p>";
  }
  

updateSuggestion();
