import { useEffect } from 'react';
import { SocketInstance } from './create-socket';
import { useQueryClient } from '@tanstack/react-query';
import Message from '../network/type';



type Args = {
  type: 'message-created' | 'message-deleted'
  text: string
}

export default function MainWSManager(): null {
  const queryClient = useQueryClient();
  const wsHandler = (args: Args) => {
    switch (args?.type) {
      case 'message-created':
        queryClient.setQueryData(['messages-list'], (oldData: Message[]) => {
          return [...oldData, { id: oldData.length + 1, text: args?.text }]
        });
        break
      case 'message-deleted':
        queryClient.refetchQueries({ queryKey: ['messages-list'] });
        break
      default:
        break
    }
  }

  useEffect(() => {
    SocketInstance.openSocketFx(wsHandler)
  }, []);

  return null;
}