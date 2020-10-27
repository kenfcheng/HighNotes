import React from "react";
import ChatSide from "./ChatSide";
import ChatMessages from "./ChatMessages";
import { chatContainer } from "./Chat.module.css";

export default function ChatArea() {
  return (
    <>
      <div className={chatContainer}>
        <ChatSide />
        <ChatMessages />
      </div>
    </>
  );
}
