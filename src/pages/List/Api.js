import axios from "axios";

const Api = axios.create({
    baseURL: "https://pokeapi.co/",
})

export{Api}