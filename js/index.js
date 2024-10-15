"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//pegando o form e o input
const form = document.querySelector("#search-form");
const input = document.querySelector("#input-location");
const weatherInfo = document.querySelector("#weather-info");
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (event) => __awaiter(void 0, void 0, void 0, function* () {
    event.preventDefault();
    if (!input || !weatherInfo)
        return;
    const localizacao = input.value;
    if (localizacao.length < 3) {
        alert("Localização precisa ter pelo menos 3 caracteres");
        return; //return evita que o código continue a roda enquanto o titulo da tarefa não tiver mais do que tres caracteres
    }
    try {
        const response = yield fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localizacao}&appid=005f727e98cb13efdb1e91db1d26cf5a&lang=pt_br&units=metric`);
        const data = yield response.json();
        const infos = {
            local: data.name,
            temp: Math.round(data.main.temp),
            icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        };
        weatherInfo.innerHTML = `
  <div class = "info">
  <h2>${infos.local}</h2
  <span>${infos.temp}ºC</span>
  </div>

  <img src="${infos.icon}"/>`;
    }
    catch (err) {
        console.log("Erro ao obter os dados da API");
    }
}));
