import { Delete } from "../index";

export const deleteMessage = (id: number) =>
Delete<void, number>(`/api/messages/delete/${id}`)