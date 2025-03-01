// components/AddMessageField.tsx
import { useStateContext } from '@/state/provider';
import { Button, Input } from '@heroui/react';
import React, { useState } from 'react';

const AddMessageField = () => {
  const { activeStateId, addMessage } = useStateContext();
  const [newMessage, setNewMessage] = useState<string>('');

  const handleAddMessage = () => {
    if (newMessage.trim()) {
      const newMessageObj = {
        message: newMessage,
        date: new Date().toISOString(),
        isAi: false,
        id: Date.now().toString(), // Generate a unique ID for the message
      };
      addMessage(newMessageObj);
      setNewMessage(''); // Clear input after adding the message
    }
  };

  if (!activeStateId) {
    return <div>Please select a chat session to add messages.</div>;
  }

  return (
    <div className=' flex mb-4'>
      <Input
        type="text"
        color='primary'
        value={newMessage}
        onValueChange={(e) => setNewMessage(e)}
        placeholder="Type a new message"
      />
      <Button onClick={handleAddMessage}>Add Message</Button>
    </div>
  );
};

export default AddMessageField;
