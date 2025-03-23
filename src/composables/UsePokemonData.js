import axios from "axios";
import { ref } from "vue";

export default function usePokemonData(url) {
  console.log("usePokemonData en ejecucion");

  let data = ref([]);

  axios.get(url)
    .then((response) => {
      data.value = response.data.results;
    })
    .catch((error) => {
      console.log(error);
    });

  console.log("aqui se acaba usePokemonData");

  return { data };
}
