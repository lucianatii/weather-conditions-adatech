//pegando o form e o input
const form = document.querySelector('#search-form')
const input: HTMLInputElement | null = document.querySelector('#input-location')

form?.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!input) return

  const localizacao = input.value

  if (localizacao.length < 3) {
    alert("Localização precisa ter pelo menos 3 caracteres");

    return; //return evita que o código continue a roda enquanto o titulo da tarefa não tiver mais do que tres caracteres
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localizacao}&appid=005f727e98cb13efdb1e91db1d26cf5a&lang=pt_br&units=metric`)
})