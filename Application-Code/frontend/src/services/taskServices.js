import axios from "axios";

// Прямо прописываем адрес твоего локального бэкенда
const apiUrl = "http://localhost:3500/api/tasks";

export function getTasks() {
    return axios.get(apiUrl);
}

export function addTask(task) {
    return axios.post(apiUrl, task);
}

export function updateTask(id, task) {
    return axios.put(apiUrl + "/" + id, task);
}

export function deleteTask(id) {
    return axios.delete(apiUrl + "/" + id);
}