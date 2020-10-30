import React, { useEffect, useState } from "react";
// import API from "../utils/API";
import ChatSideFriends from "./ChatSideFriends";
import {
  chatSelected,
  chatSidebar,
  chatSidebarH3,
  chatSidebarLi,
} from "./Chat.module.css";

export default function ChatSide() {
  const [friends, setFriends] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [clickedFriend, setClickedFriend] = useState("");
  useEffect(() => {
    const gettingFriends = async () => {
      const response = []; // await API.getFriends();
      setFriends(response);
      setLoaded(false);
    };
    gettingFriends();
  }, []);
  const selectedFriend = (id) => {
    setClickedFriend(id);
  };
  return (
    <>
      <ul className={chatSidebar}>
        <h3 className={chatSidebarH3}>
          <i className="fas fa-users"></i>&nbsp;&nbsp;&nbsp;Friends
        </h3>
        {loaded ? (
          friends.map((friend) => {
            return (
              <ChatSideFriends
                className={
                  friend.id === clickedFriend ? chatSelected : chatSidebarLi
                }
                key={friend.id}
                id={friend.id}
                name={friend.name}
                onClick={(e) => selectedFriend(e.target.id)}
              />
            );
          })
        ) : (
          <>
            <li className={chatSelected}>Brad</li>
            <li className={chatSidebarLi}>John</li>
            <li className={chatSidebarLi}>Mary</li>
            <li className={chatSidebarLi}>Paul</li>
            <li className={chatSidebarLi}>Mike</li>
          </>
        )}
      </ul>
    </>
  );
}
