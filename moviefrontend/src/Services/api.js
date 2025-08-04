import axios from "axios";
const BASE_URL = "http://127.0.0.1:8000/api/movietracker/";





export async function get_All_Movie() {
  return await axios.get(BASE_URL);
}

export async function add_Movie(data) {
  return await axios.post(BASE_URL, data);
}


