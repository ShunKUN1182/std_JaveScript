const pokemonInput = document.querySelector("p");
const url = "https://pokeapi.co/api/v2/pokemon-species/pikachu";

async function pokemonApi() {
    const fetchData = await fetch(url);
    const jsonData = await fetchData.json();

    const jpData = jsonData.names.find((n) => n.language.name === "ja");
    console.log(jpData);

    pokemonInput.textContent = jpData.name;
}

// pokemonApi();
