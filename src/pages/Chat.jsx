//import React from 'react'
import { useState } from "react"

export default function Chat() {
  const initialChats = [
    { id: 1, image:"/vendorDotun.png", name:"Vendor Dotun", messages: ["Hey, how are you?", "I'm fine, thanks!"] },
    { id: 2, image:"/vendorNanso.png", name: "Vendor Nanso", messages: ["Hello!", "Can we meet tomorrow?"] },
    { id: 3, image:"/adminOlayinka.png", name: "Admin Olayinka", messages: ["How's the project going?", "Almost done!"] },
    { id: 4, image:"/vendorTosin.png", name: "Vendor Tosin", messages: ["How's the project going?", "Almost done!"] },
    { id: 5, image:"/adminChika.png", name: "Admin Chika", messages: ["How's the project going?", "Almost done!"] },
  ];

  const [chats, setChats] = useState(initialChats);
  const [activeChat, setActiveChat] = useState(null);
  const [newMessage, setNewMessage] = useState("");


    // Function to handle sending a new message
  const handleSendMessage = () => {
    if (!newMessage.trim()) return; // Prevent sending empty messages
  
     // Update the messages of the active chat
     const updatedChats = chats.map((chat) =>
       chat.id === activeChat.id
         ? { ...chat, messages: [...chat.messages, newMessage] }
         : chat
      );
      setChats(updatedChats);
      setNewMessage(""); // Clear the input field after sending
    };


  return (
    <div>
      <h1 className="text-[#555657] font-semibold text-2xl leading-[48px] mb-5">CHAT</h1>
      <div className="flex justify-between">
          <section>
            <div>
                <h2 className="text-xl font-bold text-neutral">BayaSel</h2>-
                <ul>
                    {chats.map((chat) => (
                    <li
                      key={chat.id}
                      className={`p-2 cursor-pointer mb-3 flex items-center gap-4 ${
                        activeChat?.id === chat.id ? "bg-Green text-white" : "bg-customGray"
                      }`}
                      onClick={() => setActiveChat(chat)}
                    >
                      <img src={chat.image} alt={`${chat.name} image`} />
                      {chat.name}
                    </li>
                    ))}
                </ul>
            </div>

          </section>
          <section>Chat Box</section>
      </div>
    </div>
  )
}
