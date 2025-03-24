import axios from "axios";
import { ref } from "vue";

let url = "https://fakestoreapi.com/products/";

export default function useGetData() {
    let data = ref([]);
    axios.get(url)
        .then((response) => {
            console.log(response.data);
            for(let i in response.data){
                data.value.push(response.data[i]);
            }
        })
        .catch((error) => {
            console.log(error);
        });

    return {data};

}