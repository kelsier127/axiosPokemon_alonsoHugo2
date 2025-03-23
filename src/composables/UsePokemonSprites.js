import axios from "axios";

export default async function usePokemonSprites(url) {
    console.log("usePokemonSprites en ejecucion");
    try{
        const response = await axios.get(url);
        return response.data.sprites.front_default;
    }catch(error){
        console.log(error);
    }
}