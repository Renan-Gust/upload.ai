import axios from "axios";

let baseURL = "http://localhost:3333";

if(window.location.hostname !== "localhost"){
    baseURL = "https://upload-ai-server-doolkvyz1-renan-gust.vercel.app";
}

export const api = axios.create({
    baseURL,
});