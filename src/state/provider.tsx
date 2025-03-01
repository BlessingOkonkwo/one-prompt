// context/StateContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { State, Message } from './types';

interface StateContextProps {
  states: State[]; // Array of all chat states
  activeStateId: string; // ID of the active state
  addMessage: (message: Message) => void;
  setActiveState: (id: string) => void; // Function to switch between states
  createNewState: (title: string) => void; // Function to create a new state
}

const StateContext = createContext<StateContextProps | undefined>(undefined);

interface StateProviderProps {
  children: ReactNode;
}

export const StateProvider = ({ children }: StateProviderProps) => {
  const initialState: State[] = [
    {"id":"1","title":"NIP Query Engine",messages:[]}
  ];

  const [states, setStates] = useState<State[]>(initialState);
  const [activeStateId, setActiveStateId] = useState<string>('1');

  // Add a new message to the active state
  const addMessage = (message: Message) => {
    setStates((prevStates) =>
      prevStates.map((state) =>
        state.id === activeStateId
          ? { ...state, messages: [...state.messages, message] }
          : state
      )
    );
  };

  // Set the active state (switch between states)
  const setActiveState = (id: string) => {
    setActiveStateId(id);
  };

  // Create a new chat state
  const createNewState = (title: string) => {
    const newState: State = {
      id: Date.now().toString(), 
      title,
      messages: [],
    };
    setStates((prevStates) => [...prevStates, newState]);
    setActiveStateId(newState.id); // Set the newly created state as active
  };

  return (
    <StateContext.Provider
      value={{ states, activeStateId, addMessage, setActiveState, createNewState }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = (): StateContextProps => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error('useStateContext must be used within a StateProvider');
  }
  return context;
};
