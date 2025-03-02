// components/MessageList.tsx
import { useStateContext } from "@/state/provider";
import React from "react";

const MessageList = () => {
  const { engines, activeEngineId, activeChatId } = useStateContext();
  const activeEngine = engines.find(
    (engine) => engine.engineId === activeEngineId
  );
  const activeState = activeEngine?.searchHistory.find(
    (state) => state.id === activeChatId
  );

  if (!activeState) {
    return <div>Please select a chat session to view messages.</div>;
  }

  return (
    <div className="flex flex-col grow flex-1">
      <h3>Messages in &quot;{activeState.title}&quot;</h3>

      <div>
        {activeState.messages.length === 0 ? (
          <p>No messages yet!</p>
        ) : (
          activeState.messages.map((msg) => (
            <div key={msg.id} style={{ marginBottom: "10px" }}>
              <p>{msg.message}</p>
              <small>{msg.date}</small>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MessageList;
