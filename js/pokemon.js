const pokemonsOutput = document.querySelector(".pokemons");
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
    pokemonBox += `<h2>${jpName001.name}</h2>`;
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
    pokemonBox += `<h2>${jpName002.name}</h2>`;
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

const urlJp003 = "https://pokeapi.co/api/v2/pokemon-species/venusaur";
const url003 = "https://pokeapi.co/api/v2/pokemon/venusaur";
async function pokemon003() {
    const fetchJp003 = await fetch(urlJp003);
    const JpData003 = await fetchJp003.json();
    const fetch003 = await fetch(url003);
    const data003 = await fetch003.json();

    const jpName003 = JpData003.names.find((n) => n.language.name === "ja");
    const img003 = data003.sprites.other["official-artwork"].front_default;
    const type003 = data003.types.map((t) => t.type.name);
    const pokemonNo003 = data003.id;
    let height003 = data003.height;
    let weight003 = data003.weight;
    height003 = height003 / 10;
    weight003 = weight003 / 10;

    console.log(jpName003, type003);
    console.log(height003, weight003);
    console.log(pokemonNo003);

    let pokemonBox = "";
    pokemonBox += `<div class="pokemon">`;
    pokemonBox += `<div class="pokemonBackground">`;
    pokemonBox += `<img src="${img003}" alt="${jpName003.name}" />`;
    pokemonBox += `</div>`;
    pokemonBox += `<div class="pokemonText">`;
    pokemonBox += `<div class="noPokemon">`;
    pokemonBox += `<p>No.${pokemonNo003}</p>`;
    pokemonBox += `<div>`;
    type003.forEach((e) => {
        pokemonBox += `<span class="${e}">${e}</span>`;
    });
    pokemonBox += `</div>`;
    pokemonBox += `</div>`;
    pokemonBox += `<h2>${jpName003.name}</h2>`;
    pokemonBox += `<div>`;
    pokemonBox += `<p>高さ:</p>`;
    pokemonBox += `<p>${height003}m</p>`;
    pokemonBox += `</div>`;
    pokemonBox += `<div>`;
    pokemonBox += `<p>重さ:</p>`;
    pokemonBox += `<p>${weight003}kg</p>`;
    pokemonBox += `</div>`;
    pokemonBox += `</div>`;
    pokemonBox += `</div>`;

    pokemonsOutput.innerHTML += pokemonBox;
}

pokemon003();

const urlJp004 = "https://pokeapi.co/api/v2/pokemon-species/charmander";
const url004 = "https://pokeapi.co/api/v2/pokemon/charmander";
async function pokemon004() {
    const fetchJp004 = await fetch(urlJp004);
    const JpData004 = await fetchJp004.json();
    const fetch004 = await fetch(url004);
    const data004 = await fetch004.json();

    const jpName004 = JpData004.names.find((n) => n.language.name === "ja");
    const img004 = data004.sprites.other["official-artwork"].front_default;
    const type004 = data004.types.map((t) => t.type.name);
    const pokemonNo004 = data004.id;
    let height004 = data004.height;
    let weight004 = data004.weight;
    height004 = height004 / 10;
    weight004 = weight004 / 10;

    console.log(jpName004, type004);
    console.log(height004, weight004);
    console.log(pokemonNo004);

    let pokemonBox = "";
    pokemonBox += `<div class="pokemon">`;
    pokemonBox += `<div class="pokemonBackground">`;
    pokemonBox += `<img src="${img004}" alt="${jpName004.name}" />`;
    pokemonBox += `</div>`;
    pokemonBox += `<div class="pokemonText">`;
    pokemonBox += `<div class="noPokemon">`;
    pokemonBox += `<p>No.${pokemonNo004}</p>`;
    pokemonBox += `<div>`;
    type004.forEach((e) => {
        pokemonBox += `<span class="${e}">${e}</span>`;
    });
    pokemonBox += `</div>`;
    pokemonBox += `</div>`;
    pokemonBox += `<h2>${jpName004.name}</h2>`;
    pokemonBox += `<div>`;
    pokemonBox += `<p>高さ:</p>`;
    pokemonBox += `<p>${height004}m</p>`;
    pokemonBox += `</div>`;
    pokemonBox += `<div>`;
    pokemonBox += `<p>重さ:</p>`;
    pokemonBox += `<p>${weight004}kg</p>`;
    pokemonBox += `</div>`;
    pokemonBox += `</div>`;
    pokemonBox += `</div>`;

    pokemonsOutput.innerHTML += pokemonBox;
}

pokemon004();

const urlJp005 = "https://pokeapi.co/api/v2/pokemon-species/charmeleon";
const url005 = "https://pokeapi.co/api/v2/pokemon/charmeleon";
async function pokemon005() {
    const fetchJp005 = await fetch(urlJp005);
    const JpData005 = await fetchJp005.json();
    const fetch005 = await fetch(url005);
    const data005 = await fetch005.json();

    const jpName005 = JpData005.names.find((n) => n.language.name === "ja");
    const img005 = data005.sprites.other["official-artwork"].front_default;
    const type005 = data005.types.map((t) => t.type.name);
    const pokemonNo005 = data005.id;
    let height005 = data005.height;
    let weight005 = data005.weight;
    height005 = height005 / 10;
    weight005 = weight005 / 10;

    console.log(jpName005, type005);
    console.log(height005, weight005);
    console.log(pokemonNo005);

    let pokemonBox = "";
    pokemonBox += `<div class="pokemon">`;
    pokemonBox += `<div class="pokemonBackground">`;
    pokemonBox += `<img src="${img005}" alt="${jpName005.name}" />`;
    pokemonBox += `</div>`;
    pokemonBox += `<div class="pokemonText">`;
    pokemonBox += `<div class="noPokemon">`;
    pokemonBox += `<p>No.${pokemonNo005}</p>`;
    pokemonBox += `<div>`;
    type005.forEach((e) => {
        pokemonBox += `<span class="${e}">${e}</span>`;
    });
    pokemonBox += `</div>`;
    pokemonBox += `</div>`;
    pokemonBox += `<h2>${jpName005.name}</h2>`;
    pokemonBox += `<div>`;
    pokemonBox += `<p>高さ:</p>`;
    pokemonBox += `<p>${height005}m</p>`;
    pokemonBox += `</div>`;
    pokemonBox += `<div>`;
    pokemonBox += `<p>重さ:</p>`;
    pokemonBox += `<p>${weight005}kg</p>`;
    pokemonBox += `</div>`;
    pokemonBox += `</div>`;
    pokemonBox += `</div>`;

    pokemonsOutput.innerHTML += pokemonBox;
}

pokemon005();
