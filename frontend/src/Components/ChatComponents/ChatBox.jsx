import React, { useEffect, useState } from "react";
import { Send, User, MessageCircle, Search } from "lucide-react";
import axios from "axios";
import { socket } from "../../../socket";

export default function ChatBox() {
  const [sessions, setSessions] = useState([]);
  const [selectedSession, setSelectedSession] = useState(null);
  const [allMessages, setAllMessages] = useState({});
  const [text, setText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/admin/usernames", { withCredentials: true })
      .then((res) => setSessions(res.data))
      .catch((err) => console.error("Failed to fetch usernames", err));
  }, []);

  useEffect(() => {
    if (!selectedSession) return;

    axios
      .get(`http://localhost:3000/admin/session/${selectedSession}`)
      .then((res) =>
        setAllMessages((prev) => ({
          ...prev,
          [selectedSession]: res.data,
        }))
      )
      .catch((err) => console.error("Failed to fetch messages", err));
  }, [selectedSession]);

  // Socket listener
  useEffect(() => {
    socket.on("receive_message", (msg) => {
      const { sessionId } = msg;
      setAllMessages((prev) => ({
        ...prev,
        [sessionId]: [...(prev[sessionId] || []), msg],
      }));

      setSessions((prev) => {
        const exists = prev.find((s) => s.sessionId === sessionId);
        if (exists) return prev;
        return [{ sessionId, username: sessionId }, ...prev]; // fallback if not registered
      });
    });

    return () => socket.off("receive_message");
  }, []);

  const sendMessage = () => {
    if (!text.trim() || !selectedSession) return;

    const msg = {
      sessionId: selectedSession,
      senderId: "admin",
      receiverId: selectedSession,
      text,
    };

    socket.emit("send_message", msg);

    setAllMessages((prev) => ({
      ...prev,
      [selectedSession]: [
        ...(prev[selectedSession] || []),
        { ...msg, sender: "admin", message: text },
      ],
    }));

    setText("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  const filteredSessions = sessions.filter((s) =>
    s.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getLastMessage = (sessionId) => {
    const messages = allMessages[sessionId] || [];
    return messages.length > 0 ? messages[messages.length - 1] : null;
  };

  const hasUnreadMessages = (sessionId) => {
    const messages = allMessages[sessionId] || [];
    const lastMessage = messages[messages.length - 1];
    return lastMessage && lastMessage.sender === "user";
  };

  const getUsername = (sessionId) => {
    const session = sessions.find((s) => s.sessionId === sessionId);
    return session?.username && session.username !== sessionId
      ? session.username
      : sessionId;
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-600" />
            Admin Chat
          </h1>
        </div>

        {/* Search */}
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Session List */}
        <div className="flex-1 overflow-y-auto">
          {filteredSessions.map(({ sessionId, username }, index) => {
            const lastMessage = getLastMessage(sessionId);
            const isActive = selectedSession === sessionId;
            const hasUnread = hasUnreadMessages(sessionId);

            return (
              <div
                key={index}
                onClick={() => setSelectedSession(sessionId)}
                className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                  isActive ? "bg-blue-50 border-r-4 border-r-blue-600" : ""
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      hasUnread ? "bg-green-100" : "bg-gray-100"
                    }`}
                  >
                    <User
                      className={`w-5 h-5 ${
                        hasUnread ? "text-green-600" : "text-gray-600"
                      }`}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3
                        className={`text-sm font-semibold truncate ${
                          isActive ? "text-blue-900" : "text-gray-900"
                        }`}
                      >
                        {username}
                      </h3>
                      {hasUnread && (
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      )}
                    </div>
                    {lastMessage && (
                      <p className="text-xs text-gray-500 truncate">
                        {lastMessage.sender === "admin" ? "You: " : ""}
                        {lastMessage.message || lastMessage.text}
                      </p>
                    )}
                    {lastMessage?.timestamp && (
                      <p className="text-xs text-gray-400 mt-1">
                        {new Date(lastMessage.timestamp).toLocaleTimeString(
                          [],
                          { hour: "2-digit", minute: "2-digit" }
                        )}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Chat */}
      <div className="flex-1 flex flex-col">
        {selectedSession ? (
          <>
            {/* Header */}
            <div className="bg-white p-4 border-b border-gray-200 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h2 className="font-semibold text-gray-900">
                    {getUsername(selectedSession)}
                  </h2>
                  <p className="text-sm text-green-600">Online</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {(allMessages[selectedSession] || []).map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${
                    msg.sender === "admin" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      msg.sender === "admin"
                        ? "bg-blue-600 text-white"
                        : "bg-white text-gray-900 shadow-sm"
                    }`}
                  >
                    <p className="text-sm">{msg.message || msg.text}</p>
                    {msg.timestamp && (
                      <p
                        className={`text-xs mt-1 ${
                          msg.sender === "admin"
                            ? "text-blue-100"
                            : "text-gray-500"
                        }`}
                      >
                        {new Date(msg.timestamp).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="bg-white p-4 border-t border-gray-200">
              <div className="flex items-center gap-3">
                <input
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  onClick={sendMessage}
                  disabled={!text.trim()}
                  className={`p-3 rounded-full transition-colors ${
                    text.trim()
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center bg-gray-50">
            <div className="text-center">
              <MessageCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                Welcome to Admin Chat
              </h2>
              <p className="text-gray-500">
                Select a conversation to start chatting
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
