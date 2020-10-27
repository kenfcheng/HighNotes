import React from "react";
import { chatMessage, chatTitle, chatSpan } from "./Chat.module.css";

export default function ChatMessage({ name, time, text }) {
  return (
    <>
      <div className={chatMessage}>
        <p className={chatTitle}>
          {name} <span className={chatSpan}>{time}</span>
        </p>
        <p>{text}</p>
      </div>
    </>
  );
}
