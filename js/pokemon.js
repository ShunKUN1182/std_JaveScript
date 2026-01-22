const pokemonInput = document.querySelector(".pokemons");
const url = "https://pokeapi.co/api/v2/pokemon-species/pikachu";

async function pokemonApi() {
    const fetchData = await fetch(url);
    const jsonData = await fetchData.json();

    const jpData = jsonData.names.find((n) => n.language.name === "ja");
    console.log(jpData);

    pokemonInput.textContent = jpData.name;
}

const no1Data = {
    name: "フシギダネ",
    num: "001",
    type: ["grass", "poison"],
    height: 0.7,
    weight: 6.9,
    img: "pokemonImg/pokemon01.png",
};

function pokemonOutput() {
    let pokemonOutput = "";
    pokemonOutput += `<div class="pokemon">`;
    pokemonOutput += `<div class="pokemonBackground">`;
    pokemonOutput += `<img src="${no1Data.img}" alt="${no1Data.name}" />`;
    pokemonOutput += `</div>`;
    pokemonOutput += `<div class="pokemonText">`;
    pokemonOutput += `<div class="noPokemon">`;
    pokemonOutput += `<p>No.${no1Data.num}</p>`;
    pokemonOutput += `<div>`;
    no1Data.type.forEach((e) => {
        pokemonOutput += `<span class="${e}">${e}</span>`;
    });
    pokemonOutput += `</div>`;
    pokemonOutput += `</div>`;
    pokemonOutput += `<h2>フシギダネ</h2>`;
    pokemonOutput += `<div>`;
    pokemonOutput += `<p>高さ:</p>`;
    pokemonOutput += `<p>${no1Data.height}m</p>`;
    pokemonOutput += `</div>`;
    pokemonOutput += `<div>`;
    pokemonOutput += `<p>重さ:</p>`;
    pokemonOutput += `<p>${no1Data.weight}kg</p>`;
    pokemonOutput += `</div>`;
    pokemonOutput += `</div>`;
    pokemonOutput += `</div>`;

    pokemonInput.innerHTML += pokemonOutput;
}

pokemonOutput();
// pokemonApi();
