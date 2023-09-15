
import axios from "axios";


export const api = axios.create({
    baseURL: "http://localhost:5000/api/",
});


api.interceptors.request.use(
    config => {
        config.headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`
        
        return config;
    }
)

type AuthParams = {
    username: string,
    password: string
}

type LoginAnswer = {
    user: User,
    token: string
}

type User = {
    id: number,
    username: string,
    passwordHash: string
}

type Task = {
    id: number,
    userId: number,
    title: string,
    description: string,
    createdAt: Date
}

export const method = {
    user: {
        login(data: AuthParams) {
            return api.post<LoginAnswer>("auth/login", data)
        },
        register(data: AuthParams) {
            return api.post("auth/register", data)
        },
    },
    task: {
        get() {
            return api.get<Task[]>("/task")
        },
        delete(id: string) {
            return api.delete<{answer: string}>("/task", {params: {id}})
        },
        create(data: Task) {
            return api.post<Task>("/task", {...data})
        },
        update(data: Task) {
            return api.put<Task>("/task", {...data})
        },
    }
}