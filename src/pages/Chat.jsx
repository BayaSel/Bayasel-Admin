import { useState } from "react";

export default function Chat() {
  const initialChats = [
    { id: 1, image: "/vendorDotun.png", name: "Vendor Dotun", messages: [{ text: "Hey, how are you?", isUser: false }, { text: "I'm fine, thanks!", isUser: true }] },
    { id: 2, image: "/vendorNanso.png", name: "Vendor Nanso", messages: [{ text: "Hello!", isUser: false }, { text: "Can we meet tomorrow?", isUser: false }] },
    { id: 3, image: "/adminOlayinka.png", name: "Admin Olayinka", messages: [{ text: "How's the project going?", isUser: false }, { text: "Almost done!", isUser: true }] },
    { id: 4, image: "/vendorTosin.png", name: "Vendor Tosin", messages: [{ text: "How's the project going?", isUser: false }, { text: "Almost done!", isUser: true }] },
    { id: 5, image: "/adminChika.png", name: "Admin Chika", messages: [{ text: "How's the project going?", isUser: false }, { text: "Almost done!", isUser: true }] },
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
        ? { ...chat, messages: [...chat.messages, { text: newMessage, isUser: true }] }
        : chat
    );
    
    setChats(updatedChats); // Update chat array with new message
    setActiveChat({
      ...activeChat,
      messages: [...activeChat.messages, { text: newMessage, isUser: true }], // Update activeChat with the new message
    });
    setNewMessage(""); // Clear the input field after sending
  };

  return (
    <div>
      <h1 className="text-[#555657] font-semibold text-2xl leading-[48px] mb-5">CHAT</h1>
      <div className="flex justify-between gap-6 p-6 bg-[#E7EDE8]">
        {/* Left side chat list */}
        <section className="w-1/3 p-4 rounded">
          <h2 className="text-xl font-bold text-neutral mb-4">BayaSel</h2>
          <ul>
            {chats.map((chat) => (
              <li
                key={chat.id}
                className={`p-2 cursor-pointer mb-3 flex items-center gap-4 ${
                  activeChat?.id === chat.id ? "bg-green-500 text-white" : "bg-[none]"
                }`}
                onClick={() => setActiveChat(chat)}
              >
                <img src={chat.image} alt={`${chat.name} image`} className="w-10 h-10 rounded-full" />
                {chat.name}
              </li>
            ))}
          </ul>
        </section>

        {/* Right side chat box */}
        <section className="w-2/3 bg-white border rounded">
          {activeChat ? (
            <div className="chat-box">
              {/* Chat header */}
              <div className="flex justify-around items-center gap-4 mb-4 bg-Green p-2">
                <img src={activeChat.image} alt={`${activeChat.name} image`} className="w-10 h-10 rounded-full" />
                <h3 className="text-lg font-semibold text-white">{activeChat.name}</h3>
                <i class='bx bx-phone text-white text-3xl'></i>
              </div>

              <div className="flex items-center justify-evenly text-gray-500 gap-2">
                  <span className="border-t border-t-5 flex-grow"></span>
                  <p>Thu, 21</p>
                  <span className="border-t border-t-5 flex-grow"></span>
              </div>

              {/* Chat messages */}
              <div className="mb-4 max-h-[300px] overflow-y-auto bg-gray-50 p-4 rounded">
                {activeChat.messages.map((message, index) => (
                  <p
                    key={index}
                    className={`mb-2 p-2 rounded max-w-[70%] ${
                      message.isUser ? "ml-auto bg-Green text-white" : "mr-auto bg-gray-200 text-black"
                    }`}
                  >
                    {message.text}
                  </p>
                ))}
              </div>

              {/* Input for new message */}
              <div className="flex items-center">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="flex-grow p-2 border border-gray-300 rounded mr-2"
                  placeholder="Type a message..."
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-blue-500 text-white p-2 rounded"
                >
                  Send
                </button>
              </div>
            </div>
          ) : (
            <p className="text-gray-500">Select a chat to start messaging</p>
          )}
        </section>
      </div>
    </div>
  );
}
