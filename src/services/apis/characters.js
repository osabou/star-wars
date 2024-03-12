import axios from "axios";

export const getAllCharacters = async (characterId) => {
    try {
        const id = characterId?characterId:""
        const response = await axios.get("https://swapi-api.hbtn.io/api/people/"+id, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            }
        });
        return response;
    } catch(error) {
        return error;
    }
}
