'use client'
// components/AddMessageField.tsx
import { useStateContext } from "@/state/provider";
import React, { useState } from "react";
import { Textarea } from "../../components/ui/textarea";
import UploadIcon from "@/pattern/shared/icons/upload-icon";
import IconButton from "../../components/controls/icon-button";
import SuggestionIcon from "@/pattern/shared/icons/suggestion-icon";
import VoiceNoteIcon from "@/pattern/shared/icons/voice-note-icon";
import AttachmentIcon from "@/pattern/shared/icons/attachment-icon";

interface AddMessageFieldProps {
  isTyping: boolean;
}
const AddMessageField: React.FC<AddMessageFieldProps> = ({ isTyping }) => {
  const { activeChatId, addMessage } = useStateContext();
  const [newMessage, setNewMessage] = useState<string>("");

  const handleAddMessage = () => {
    if (newMessage.trim()) {
      const newMessageObj = {
        message: newMessage,
        date: new Date().toISOString(),
        isAi: false,
        id: Date.now().toString(),
      };
      addMessage(newMessageObj);
      setNewMessage("");
    }
  };

  if (!activeChatId) {
    return <div>Please select a chat session to add messages.</div>;
  }

  return (
    <div className="flex flex-col p-5 rounded-[20px] bg-textarea mb-4">
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
        <button disabled={isTyping} className={`${isTyping && "opacity-30 cursor-wait"}`} onClick={handleAddMessage}>
          <UploadIcon />
        </button>
      </div>
    </div>
  );
};

export default AddMessageField;
