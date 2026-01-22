const pokemonsOutput = document.querySelector(".pokemons");
// const url = "https://pokeapi.co/api/v2/pokemon-species/pikachu";
const urlJp001 = "https://pokeapi.co/api/v2/pokemon-species/bulbasaur";
const url001 = "https://pokeapi.co/api/v2/pokemon/bulbasaur";

async function pokemon001() {
    const fetchJp001 = await fetch(urlJp001);
    const JpData001 = await fetchJp001.json();
    const fetch001 = await fetch(url001);
    const data001 = await fetch001.json();

    const jpName001 = JpData001.names.find((n) => n.language.name === "ja");
    const img001 = data001.sprites.other["official-artwork"].front_default;
    const type001 = data001.types.map((t) => t.type.name);
    const pokemonNo001 = data001.id;
    let height001 = data001.height;
    let weight001 = data001.weight;
    height001 = height001 / 10;
    weight001 = weight001 / 10;

    // pokemonsOutput.innerHTML = `<img src="${img001}">`;
    console.log(jpName001, type001);
    console.log(height001, weight001);
    console.log(pokemonNo001);

    let pokemonBox = "";
    pokemonBox += `<div class="pokemon">`;
    pokemonBox += `<div class="pokemonBackground">`;
    pokemonBox += `<img src="${img001}" alt="${jpName001.name}" />`;
    pokemonBox += `</div>`;
    pokemonBox += `<div class="pokemonText">`;
    pokemonBox += `<div class="noPokemon">`;
    pokemonBox += `<p>No.${pokemonNo001}</p>`;
    pokemonBox += `<div>`;
    type001.forEach((e) => {
        pokemonBox += `<span class="${e}">${e}</span>`;
    });
    pokemonBox += `</div>`;
    pokemonBox += `</div>`;
    pokemonBox += `<h2>フシギダネ</h2>`;
    pokemonBox += `<div>`;
    pokemonBox += `<p>高さ:</p>`;
    pokemonBox += `<p>${height001}m</p>`;
    pokemonBox += `</div>`;
    pokemonBox += `<div>`;
    pokemonBox += `<p>重さ:</p>`;
    pokemonBox += `<p>${weight001}kg</p>`;
    pokemonBox += `</div>`;
    pokemonBox += `</div>`;
    pokemonBox += `</div>`;

    pokemonsOutput.innerHTML += pokemonBox;
}

pokemon001();

const urlJp002 = "https://pokeapi.co/api/v2/pokemon-species/ivysaur";
const url002 = "https://pokeapi.co/api/v2/pokemon/ivysaur";
async function pokemon002() {
    const fetchJp002 = await fetch(urlJp002);
    const JpData002 = await fetchJp002.json();
    const fetch002 = await fetch(url002);
    const data002 = await fetch002.json();

    const jpName002 = JpData002.names.find((n) => n.language.name === "ja");
    const img002 = data002.sprites.other["official-artwork"].front_default;
    const type002 = data002.types.map((t) => t.type.name);
    const pokemonNo002 = data002.id;
    let height002 = data002.height;
    let weight002 = data002.weight;
    height002 = height002 / 10;
    weight002 = weight002 / 10;

    // pokemonsOutput.innerHTML = `<img src="${img002}">`;
    console.log(jpName002, type002);
    console.log(height002, weight002);
    console.log(pokemonNo002);

    let pokemonBox = "";
    pokemonBox += `<div class="pokemon">`;
    pokemonBox += `<div class="pokemonBackground">`;
    pokemonBox += `<img src="${img002}" alt="${jpName002.name}" />`;
    pokemonBox += `</div>`;
    pokemonBox += `<div class="pokemonText">`;
    pokemonBox += `<div class="noPokemon">`;
    pokemonBox += `<p>No.${pokemonNo002}</p>`;
    pokemonBox += `<div>`;
    type002.forEach((e) => {
        pokemonBox += `<span class="${e}">${e}</span>`;
    });
    pokemonBox += `</div>`;
    pokemonBox += `</div>`;
    pokemonBox += `<h2>フシギダネ</h2>`;
    pokemonBox += `<div>`;
    pokemonBox += `<p>高さ:</p>`;
    pokemonBox += `<p>${height002}m</p>`;
    pokemonBox += `</div>`;
    pokemonBox += `<div>`;
    pokemonBox += `<p>重さ:</p>`;
    pokemonBox += `<p>${weight002}kg</p>`;
    pokemonBox += `</div>`;
    pokemonBox += `</div>`;
    pokemonBox += `</div>`;

    pokemonsOutput.innerHTML += pokemonBox;
}

pokemon002();
