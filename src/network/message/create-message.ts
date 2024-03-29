import { post } from "../index";

export const createMessage = (message: string) =>
    post<void, { message: string }>(`/api/messages`, { message })