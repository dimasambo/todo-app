import {Todo} from "../types/types";
import axios from "axios";

export const api = {
    getTodos() {
        return axios.get<Array<Todo>>(`https://jsonplaceholder.typicode.com/todos`)
            .then(response => response.data)
    }
}