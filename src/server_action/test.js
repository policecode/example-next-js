"use server"
import axios from "axios";
export async function getData() {
  let apiUrl = `https://jsonplaceholder.typicode.com/posts`;
    const jsonData = await axios.get(apiUrl)
    return jsonData.data;
}