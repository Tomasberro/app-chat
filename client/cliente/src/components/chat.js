import React, {useState, useEffect, useRef} from "react";
import socket from "./Socket";

const Chat = ({userId}) => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        socket.emit("conectadoclient", userId);
    }, [userId]);

    useEffect(() => {
        socket.on("messages", (data) => {
            setMessages([...messages, data]);
        return () => {socket.off()}
        },
     )}, [messages]);

     const inputRef = useRef(null);
     useEffect(() => {
         inputRef.current.scrollIntoView({behavior: "smooth"});
        }, [messages]);

    const submit = (e) => {
        e.preventDefault();
        socket.emit("message", message, userId);
        setMessage('');
    }
    return (
        <div>
            <div className="chat">
                {messages.map((message, index) => {
                    return <div key={index}>
                        <div>{message.userId}:</div>
                        <div> {message.message}</div>
                            </div>
                }
                )}
                <div ref={inputRef}></div>
            </div>
        <form onSubmit={submit}>
            <label htmlFor="">Escriba su mensaje:</label>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
            <button>Enviar</button>

        </form>
        </div>
    )
}
export default Chat;