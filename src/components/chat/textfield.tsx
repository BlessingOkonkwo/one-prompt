// components/AddMessageField.tsx
import { useStateContext } from "@/state/provider";
import React, { useState } from "react";
import { Textarea } from "../ui/textarea";
import UploadIcon from "@/pattern/shared/icons/upload-icon";
import IconButton from "../controls/icon-button";
import SuggestionIcon from "@/pattern/shared/icons/suggestion-icon";
import VoiceNoteIcon from "@/pattern/shared/icons/voice-note-icon";
import AttachmentIcon from "@/pattern/shared/icons/attachment-icon";

const AddMessageField = () => {
  const { activeChatId, addMessage } = useStateContext();
  const [newMessage, setNewMessage] = useState<string>("");

  const handleAddMessage = () => {
    if (newMessage.trim()) {
      const newMessageObj = {
        message: newMessage,
        date: new Date().toISOString(),
        isAi: false,
        id: Date.now().toString(), // Generate a unique ID for the message
      };
      addMessage(newMessageObj);
      setNewMessage(""); // Clear input after adding the message
    }
  };

  if (!activeChatId) {
    return <div>Please select a chat session to add messages.</div>;
  }

  return (
    <div className="flex flex-col p-5 rounded-[20px] bg-textarea mb-4">
      {/* <Input
        type="text"
        color='primary'
        value={newMessage}
        onValueChange={(e) => setNewMessage(e)}
        placeholder="Type a new message"
      /> */}

      <Textarea
        placeholder="Ask anything..."
        value={newMessage}
        onChange={(e) => setNewMessage(e.currentTarget.value)}
      />

      <div className="flex justify-between">
        <div className="flex items-center gap-[14px]">
          <IconButton prefixIcon={<SuggestionIcon />}>Suggestion</IconButton>
          <IconButton prefixIcon={<VoiceNoteIcon />}>Voice</IconButton>
          <IconButton prefixIcon={<AttachmentIcon />}>Attach</IconButton>
        </div>
        <button onClick={handleAddMessage}>
          <UploadIcon />
        </button>
      </div>
    </div>
  );
};

export default AddMessageField;
