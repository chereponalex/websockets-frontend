
import { useQuery, useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { getAllMessages } from "../network/message/get-all-messages";
import { deleteMessage } from "../network/message/delete-message";
import { createMessage } from "../network/message/create-message";
import Message from "../network/type";
import { SocketInstance } from "../ws/create-socket";
import { TiCancelOutline } from "react-icons/ti";
import {
    Container,
    ItemMessage,
    BtnStyled,
    InputStyled,
    InputBlock,
    ChatFill,
    Text,
    DeleteBtn,
    Orientation
} from "../style";
import { Spinner } from "./Spinner/Spinner";



const Chat = () => {
    const [messageText, setMessageText] = useState<string>('');
    const { data: messages = [], isFetching: isMessagingFetching } =
        useQuery({
            queryKey: ['messages-list'],
            queryFn: () =>
                getAllMessages().then((res) => res.data)
        });

    const { mutate: delMessage } = useMutation({
        mutationFn: (id: number) =>
            deleteMessage(id),
        onError(e: any) {
            console.error('DELETE MESSAGE', e)
        },
    });

    const { mutate: addMessage } = useMutation({
        mutationFn: (text: string) =>
            createMessage(text),
        onError(e: any) {
            console.error('ADD MESSAGE', e)
        },
        onSuccess() {
            setMessageText('')
        }
    });

    const handleAddMessage = () => {
        if (messageText && messageText.trim() !== '') {
            addMessage(messageText);
        }
    }

    return (
        <Container>
            <ChatFill>
                {
                    !isMessagingFetching ? messages?.map((message: Message, i) => {
                        return (
                            <Orientation key={i}>
                                <ItemMessage >
                                    <Text>{message.text}</Text>
                                    <div onClick={() => delMessage(message.id)}><DeleteBtn /></div>
                                </ItemMessage>
                            </Orientation>
                        )
                    })
                        :
                        <Spinner />
                }
            </ChatFill>
            <InputBlock>
                <InputStyled type='text' value={messageText} placeholder="Напишите сообщение..." onChange={(e) => setMessageText(e.target.value)} />
                <BtnStyled onClick={handleAddMessage}>Отправить</BtnStyled >
            </InputBlock>
        </Container>
    )
}
export default Chat;
