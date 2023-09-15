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
    password: string,
    isAuthenticated: boolean
}

type Task = {
    id?: number,
    userId?: number,
    title: string,
    description: string,
    createdAt?: Date
}