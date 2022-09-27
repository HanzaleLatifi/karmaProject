import axios from "axios";

const baseURL="https://jsonplaceholder.typicode.com" ;

export const getAllpost=async()=>{
    return await axios.get(`${baseURL}/posts`) ;
}

export const getPost=async(id)=>{
   return await axios.get(`${baseURL}/posts/${id}`) ;
}

