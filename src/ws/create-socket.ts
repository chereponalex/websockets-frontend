class SocketClass {
    socket: any = null
    socketUrl: string = ''

    constructor(url) {
        this.socketUrl = url
    }

    openSocketFx(callback: (args: any) => any) {
        if (this.socket) {
            return
        }
        this.closeSocketFx()
        this.socket = new WebSocket(this.socketUrl)
        this.socket.onopen = () => {
            console.log(' сокет открылся')
        }
        this.socket.onclose = () => callback({ type: 'close' })
        this.socket.onerror = () => callback({ type: 'error' })
        this.socket.onmessage = (e: any) => {
            let message = JSON.parse(e.data)
            callback(message)
        }
    }

    closeSocketFx() {
        if (this.socket) {
            this.socket.close()
        }
    }

    sendSocketMessageFx(message: any) {
        if (this.socket && this.socket.readyState !== WebSocket.CONNECTING && this.socket.readyState !== WebSocket.CLOSING) {
            this.socket.send(JSON.stringify(message))
        }
    }
}

export const SocketInstance = new SocketClass('ws://localhost:8080/websockets')
