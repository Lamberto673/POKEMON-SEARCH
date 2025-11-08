// // FETCH = function used for making HTTP requests to fetch resources (JSON style data, images, files) simplifies asynchronous data fetching in javascript and used for interacting with APIs to retrieve  and send data asynchrounously over the web fetch(url, {options})

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => {
//         if(!response.ok){
//             throw new Error("COuld not fetch resource");
//         }
//         return response.json();
//     })
//     .then(data => console.log(data.id))
//     .catch(error => console.log(error));
fetchData();
async function fetchData(){
    try{
        const pokemon = document.getElementById("PokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

        if(!response.ok){
            throw new Error("Could not fetch this data");
        }
        const data = await response.json();
        const pokeSprite = data.sprites.front_shiny;
        const imgElement = document.getElementById("pokemonsprite");
        imgElement.src = pokeSprite;
        imgElement.style.display = "block";
        console.log(data);

        const info = document.getElementById("Data");
        const abilites = data.abilities.map(a => 
            a.ability.name).join(", ");
        const id = data.id;
        const weigth = data.weight;
        // info.textContent = `abilites: ${abilites}`;
        // info.textContent = `id: ${id}`;
        info.textContent = `weigth: ${weigth} 
        id: ${id} 
        abilities: ${abilites}`;
        info.style.display = "block";
        
    }catch(error){
        console.error(error);
    }
}
