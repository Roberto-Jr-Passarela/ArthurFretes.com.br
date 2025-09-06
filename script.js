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

const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const indicatorsContainer = document.querySelector(".indicators");
let currentIndex = 0;
let autoPlay;

// cria os botões de indicador
slides.forEach((_, i) => {
  const btn = document.createElement("button");
  if (i === 0) btn.classList.add("active");
  btn.addEventListener("click", () => goToSlide(i));
  indicatorsContainer.appendChild(btn);
});

const indicators = indicatorsContainer.querySelectorAll("button");

function showSlide(index) {
  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;
  currentIndex = index;
  document.querySelector(".carousel").style.transform = `translateX(${-index * 100}%)`;
  
  indicators.forEach(btn => btn.classList.remove("active"));
  indicators[index].classList.add("active");
}

function goToSlide(index) {
  showSlide(index);
  resetAutoPlay();
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

nextBtn.addEventListener("click", () => {
  nextSlide();
  resetAutoPlay();
});

prevBtn.addEventListener("click", () => {
  prevSlide();
  resetAutoPlay();
});

function startAutoPlay() {
  autoPlay = setInterval(nextSlide, 4000); // troca a cada 4s
}

function resetAutoPlay() {
  clearInterval(autoPlay);
  startAutoPlay();
}

startAutoPlay();

