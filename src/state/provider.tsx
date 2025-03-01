// context/StateContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Engine, State, Message } from './types';

interface StateContextProps {
  engines: Engine[]; // Array of all engines
  activeEngineId: number; // ID of the active engine
  activeStateId: string; // ID of the active state within the selected engine
  addMessage: (message: Message) => void;
  setActiveEngine: (engineId: number) => void; // Set the active engine
  setActiveState: (stateId: string) => void; // Set the active state within the selected engine
  createNewState: (title: string) => void; // Create a new chat session for the active engine
}

const StateContext = createContext<StateContextProps | undefined>(undefined);

interface StateProviderProps {
  children: ReactNode;
}

export const StateProvider = ({ children }: StateProviderProps) => {
  // Initializing engines with predefined chat sessions
  const initialEngines: Engine[] = [
    {
      engineId: 1,
      engineName: 'NIP Query Engine',
      searchHistory: [{ id: '1', title: 'What are Nip', messages: [] }],
    },
    {
      engineId: 2,
      engineName: 'Financial Advisory',
      searchHistory: [{ id: '2', title: 'How do i make money', messages: [] }],
    },
    {
      engineId: 3,
      engineName: 'Products',
      searchHistory: [{ id: '3', title: 'What are products', messages: [] }],
    },
    {
      engineId: 4,
      engineName: 'General Health',
      searchHistory: [{ id: '4', title: 'What is general health', messages: [] }],
    },
  ];

  const [engines, setEngines] = useState<Engine[]>(initialEngines);
  const [activeEngineId, setActiveEngineId] = useState<number>(2); // Default engine is "NIP Query Engine"
  const [activeStateId, setActiveStateId] = useState<string>('2'); // Default active state

  // Add a new message to the active state of the active engine
  const addMessage = (message: Message) => {
    setEngines((prevEngines) =>
      prevEngines.map((engine) =>
        engine.engineId === activeEngineId
          ? {
              ...engine,
              searchHistory: engine.searchHistory.map((state) =>
                state.id === activeStateId
                  ? { ...state, messages: [...state.messages, message] }
                  : state
              ),
            }
          : engine
      )
    );
  };

  // Set the active engine (switch between engines)
  const setActiveEngine = (engineId: number) => {
    setActiveEngineId(engineId);
    // Automatically set the first state of the new engine as active
    const engine = engines.find((engine) => engine.engineId === engineId);
    if (engine) {
      setActiveStateId(engine.searchHistory[0].id);
    }
  };

  // Set the active state (switch between states within the active engine)
  const setActiveState = (stateId: string) => {
    setActiveStateId(stateId);
  };

  // Create a new chat session for the active engine
  const createNewState = (title: string) => {
    const newState: State = {
      id: Date.now().toString(),
      title,
      messages: [],
    };
    setEngines((prevEngines) =>
      prevEngines.map((engine) =>
        engine.engineId === activeEngineId
          ? {
              ...engine,
              searchHistory: [...engine.searchHistory, newState],
            }
          : engine
      )
    );
    setActiveStateId(newState.id); // Set the newly created state as active
  };

  return (
    <StateContext.Provider
      value={{
        engines,
        activeEngineId,
        activeStateId,
        addMessage,
        setActiveEngine,
        setActiveState,
        createNewState,
      }}
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
