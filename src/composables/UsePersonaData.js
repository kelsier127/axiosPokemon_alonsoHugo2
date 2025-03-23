import axios from "axios";
import { ref } from "vue";

//const url = "https://jsonplaceholder.typicode.com/users";
const url = "../../public/persona_games.json"

export function usePersonaData() {
  let data = ref([]);
  axios
    .get(url)
    .then((response) => {
      data.value = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  return { data };
}


