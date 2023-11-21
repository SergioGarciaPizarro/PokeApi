document.addEventListener("DOMContentLoaded", () => {

  const randomPokemonId = Math.floor(Math.random() * 898) + 1;
  const pokemonAPI = `https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`;

  const elementoImagen = document.getElementById("imagen");
  const elementoNombre = document.getElementById("nombre");
  const elementoNumero = document.getElementById("numero");

  
  elementoImagen.src = "pokeball.png";
  elementoNombre.textContent = "Cargando...";
  elementoNumero.textContent = "XXX";

  fetch(pokemonAPI)
    .then(response => response.json())
    .then(data => {
      const nombrePokemon = data.name;
      const numeroPokemon = data.id;

      
      elementoImagen.src = data.sprites.front_default;
      elementoNombre.textContent = nombrePokemon;
      elementoNumero.textContent = `#${numeroPokemon}`;
    })
    .catch(error => {
      // En caso de error, muestra un mensaje de error
      elementoNombre.textContent = "Error al cargar el Pokémon";
      console.error("Error en la solicitud:", error);
    });
});
