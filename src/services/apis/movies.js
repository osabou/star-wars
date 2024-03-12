import axios from "axios";

export const getAllMovies = async (queryParams) => {
    try {
        const response = await axios.get("https://swapi-api.hbtn.io/api/films"+"?search="+queryParams, {
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

export const getItem = async (movieId, route) => {
    try {
        const response = await axios.get(`https://swapi-api.hbtn.io/api${route}/${movieId}`, {
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





// https://swapi-api.hbtn.io/documentation
