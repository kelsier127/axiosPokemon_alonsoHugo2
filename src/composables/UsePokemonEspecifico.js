import axios from "axios";
import { ref } from "vue";

export default function usePokemonEspecifico(url) {
  console.log("usePokemonEspecifico en ejecución");
  console.log("URL:", url);

  const data = ref(null);

  axios.get(url)
    .then((response) => {
      data.value = response.data;
    })
    .catch((error) => {
      console.error("Error al obtener datos del Pokémon:", error);
    });

  return { data };
}
