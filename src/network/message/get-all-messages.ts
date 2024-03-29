import { get } from "../index";
import Message from "../type";

export const getAllMessages = () =>
    get<Message[], void>(`/api/messages/list`)