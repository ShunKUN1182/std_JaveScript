const pokemonsOutput = document.querySelector(".pokemons");
const pokemonCount = document.querySelector("#pokemon");

const pokemons = [
    "bulbasaur",
    "ivysaur",
    "venusaur",
    "charmander",
    "charmeleon",
    "charizard",
    "squirtle",
    "wartortle",
    "blastoise",
    "caterpie",
    "metapod",
    "butterfree",
    "weedle",
    "kakuna",
    "beedrill",
    "pidgey",
    "pidgeotto",
    "pidgeot",
    "rattata",
    "raticate",
    "spearow",
    "fearow",
    "ekans",
    "arbok",
    "pikachu",
    "raichu",
    "sandshrew",
    "sandslash",
    "nidoran-f",
    "nidorina",
    "nidoqueen",
    "nidoran-m",
    "nidorino",
    "nidoking",
    "clefairy",
    "clefable",
    "vulpix",
    "ninetales",
    "jigglypuff",
    "wigglytuff",
    "zubat",
    "golbat",
    "oddish",
    "gloom",
    "vileplume",
    "paras",
    "parasect",
    "venonat",
    "venomoth",
    "diglett",
    "dugtrio",
    "meowth",
    "persian",
    "psyduck",
    "golduck",
    "mankey",
    "primeape",
    "growlithe",
    "arcanine",
    "poliwag",
    "poliwhirl",
    "poliwrath",
    "abra",
    "kadabra",
    "alakazam",
    "machop",
    "machoke",
    "machamp",
    "bellsprout",
    "weepinbell",
    "victreebel",
    "tentacool",
    "tentacruel",
    "geodude",
    "graveler",
    "golem",
    "ponyta",
    "rapidash",
    "slowpoke",
    "slowbro",
    "magnemite",
    "magneton",
    "farfetchd",
    "doduo",
    "dodrio",
    "seel",
    "dewgong",
    "grimer",
    "muk",
    "shellder",
    "cloyster",
    "gastly",
    "haunter",
    "gengar",
    "onix",
    "drowzee",
    "hypno",
    "krabby",
    "kingler",
    "voltorb",
    "electrode",
    "exeggcute",
    "exeggutor",
    "cubone",
    "marowak",
    "hitmonlee",
    "hitmonchan",
    "lickitung",
    "koffing",
    "weezing",
    "rhyhorn",
    "rhydon",
    "chansey",
    "tangela",
    "kangaskhan",
    "horsea",
    "seadra",
    "goldeen",
    "seaking",
    "staryu",
    "starmie",
    "mr-mime",
    "scyther",
    "jynx",
    "electabuzz",
    "magmar",
    "pinsir",
    "tauros",
    "magikarp",
    "gyarados",
    "lapras",
    "ditto",
    "eevee",
    "vaporeon",
    "jolteon",
    "flareon",
    "porygon",
    "omanyte",
    "omastar",
    "kabuto",
    "kabutops",
    "aerodactyl",
    "snorlax",
    "articuno",
    "zapdos",
    "moltres",
    "dratini",
    "dragonair",
    "dragonite",
    "mewtwo",
    "mew",
];

let urlJp = `https://pokeapi.co/api/v2/pokemon-species/`;
let url = `https://pokeapi.co/api/v2/pokemon/`;
let count = 0;

// async function loadPokemons() {
//     for (let i = 0; i < pokemons.length; i++) {
//         const element = array[i];
//     }
// }

pokemons.forEach((e, i) => {
    urlJp = `https://pokeapi.co/api/v2/pokemon-species/${e}`;
    url = `https://pokeapi.co/api/v2/pokemon/${e}`;
    pokemon(url, urlJp);
    pokemonCount.innerHTML = `${i + 1}匹のポケモンが見つかりました`;
});

async function pokemon(url, urlJp) {
    try {
        const fetchJp = await fetch(urlJp);
        if (!fetchJp.ok) {
            throw new Error("APIエラー");
        }
        const JpData = await fetchJp.json();

        const fetchRes = await fetch(url);
        if (!fetchRes.ok) {
            throw new Error("APIエラー");
        }
        const data = await fetchRes.json();

        const jpName = JpData.names.find((n) => n.language.name === "ja");
        const img = data.sprites.other["official-artwork"].front_default;
        const type = data.types.map((t) => t.type.name);
        const pokemonNo = data.id;
        let height = data.height;
        let weight = data.weight;
        height = height / 10;
        weight = weight / 10;

        let pokemonBox = "";
        pokemonBox += `<div class="pokemon">`;
        pokemonBox += `<div class="pokemonBackground">`;
        pokemonBox += `<img src="${img}" alt="${jpName.name}" />`;
        pokemonBox += `</div>`;
        pokemonBox += `<div class="pokemonText">`;
        pokemonBox += `<div class="noPokemon">`;
        pokemonBox += `<p>No.${pokemonNo}</p>`;
        pokemonBox += `<div>`;
        type.forEach((e) => {
            pokemonBox += `<span class="${e}">${e}</span>`;
        });
        pokemonBox += `</div>`;
        pokemonBox += `</div>`;
        pokemonBox += `<h2>${jpName.name}</h2>`;
        pokemonBox += `<div>`;
        pokemonBox += `<p>高さ:</p>`;
        pokemonBox += `<p>${height}m</p>`;
        pokemonBox += `</div>`;
        pokemonBox += `<div>`;
        pokemonBox += `<p>重さ:</p>`;
        pokemonBox += `<p>${weight}kg</p>`;
        pokemonBox += `</div>`;
        pokemonBox += `</div>`;
        pokemonBox += `</div>`;

        pokemonsOutput.innerHTML += pokemonBox;
    } catch (error) {
        console.log(`このポケモンで失敗：${(e, url)}`);
    }
}
