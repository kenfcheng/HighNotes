import React, { useEffect, useState } from "react";
// import API from "../utils/API";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import { chatMessages, chatMessage } from "./Chat.module.css";

export default function ChatMessages() {
  const [messages, setMessages] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const gettingMessages = async () => {
      const response = []; // await API.getMessages();
      setMessages(response);
      setLoaded(false);
    };
    gettingMessages();
  }, []);
  return (
    <>
      <div className={chatMessages}>
        {loaded ? (
          messages.map((message) => {
            return (
              <ChatMessage
                key={message.id}
                name={message.name}
                time={message.time}
                text={message.text}
              />
            );
          })
        ) : (
          <h4 className={chatMessage}>Loading...</h4>
        )}
        <ChatInput />
      </div>
    </>
  );
}
