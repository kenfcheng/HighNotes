import React, { useState } from "react";
import API from "../../utils/API";
import { chatForm, chatFormContainer, btn } from "./Chat.module.css";

export default function ChatInput() {
  const [message, setMessage] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    API.sendMessage(message);
  };
  return (
    <>
      <div className={chatFormContainer}>
        <form className={chatForm}>
          <input
            id="msg"
            type="text"
            placeholder="Enter Message"
            required
            autocomplete="off"
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className={btn} onClick={handleSubmit}>
            <i className="fas fa-paper-plane"></i> Send
          </button>
        </form>
      </div>
    </>
  );
}
