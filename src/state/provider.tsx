// context/StateContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";
import { Engine, Chat, Message } from "./types";

interface StateContextProps {
  engines: Engine[]; // Array of all engines
  activeEngineId: number; // ID of the active engine
  activeChatId: string; // ID of the active state within the selected engine
  addMessage: (message: Message) => void;
  setActiveEngine: (engineId: number) => void; // Set the active engine
  setActiveChat: (chatId: string) => void; // Set the active state within the selected engine
  createNewChat: (title: string) => void; // Create a new chat session for the active engine
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
      engineName: "NIP Query Engine",
      searchHistory: [{ id: "1", title: "What are Nip", messages: [] }],
    },
    {
      engineId: 2,
      engineName: "Financial Advisory",
      searchHistory: [
        {
          id: "chat-1",
          title: "Investment Strategies",
          messages: [
            {
              id: "msg-1",
              message:
                "What are some good investment strategies for long-term growth?",
              date: "2025-03-02T10:00:00Z",
              isAi: false,
            },
            {
              id: "msg-2",
              message:
                "Long-term growth investments typically include diversified portfolios, index funds, and real estate. It’s important to assess risk tolerance before deciding.",
              date: "2025-03-02T10:05:00Z",
              isAi: true,
            },
            {
              id: "msg-3",
              message:
                "Additionally, dollar-cost averaging and tax-efficient investment strategies can enhance long-term portfolio performance.",
              date: "2025-03-02T10:07:00Z",
              isAi: true,
            },
            {
              id: "msg-4",
              message: "Should I consider bonds as part of my portfolio?",
              date: "2025-03-02T10:10:00Z",
              isAi: false,
            },
          ],
        },
        {
          id: "chat-2",
          title: "Retirement Planning",
          messages: [
            {
              id: "msg-5",
              message: "How much should I save for retirement?",
              date: "2025-03-02T11:00:00Z",
              isAi: false,
            },
            {
              id: "msg-6",
              message:
                "A common rule of thumb is to save at least 15% of your income, but it depends on factors like lifestyle goals and expected retirement age.",
              date: "2025-03-02T11:05:00Z",
              isAi: true,
            },
            {
              id: "msg-7",
              message:
                "What investment vehicles are best for retirement savings?",
              date: "2025-03-02T11:10:00Z",
              isAi: false,
            },
            {
              id: "msg-8",
              message:
                "Retirement accounts like 401(k)s, IRAs, and annuities are great options. Diversification is key to ensuring steady growth and security.",
              date: "2025-03-02T11:15:00Z",
              isAi: true,
            },
          ],
        },
        { id: "chat-3", title: "Best investments to make", messages: [] },
        { id: "chat-4", title: "Passive income advice", messages: [] },
        { id: "chat-5", title: "Should I invest in cryptocurrency", messages: [] },
      ],
    },
    {
      engineId: 3,
      engineName: "Products",
      searchHistory: [{ id: "1", title: "What are products", messages: [] }],
    },
    {
      engineId: 4,
      engineName: "General Health",
      searchHistory: [
        { id: "1", title: "What is general health", messages: [] },
      ],
    },
  ];

  const [engines, setEngines] = useState<Engine[]>(initialEngines);
  const [activeEngineId, setActiveEngineId] = useState<number>(2); // Default engine is "NIP Query Engine"
  const [activeChatId, setActiveChatId] = useState<string>("chat-2"); // Default active state

  // Add a new message to the active chat of the active engine
  const addMessage = (message: Message) => {
    setEngines((prevEngines) =>
      prevEngines.map((engine) =>
        engine.engineId === activeEngineId
          ? {
              ...engine,
              searchHistory: engine.searchHistory.map((state) =>
                state.id === activeChatId
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
      setActiveChatId(engine.searchHistory[0].id);
    }
  };

  // Set the active state (switch between states within the active engine)
  const setActiveChat = (stateId: string) => {
    setActiveChatId(stateId);
  };

  // Create a new chat session for the active engine
  const createNewChat = (title: string) => {
    const newChat: Chat = {
      id: Date.now().toString(),
      title,
      messages: [],
    };
    setEngines((prevEngines) =>
      prevEngines.map((engine) =>
        engine.engineId === activeEngineId
          ? {
              ...engine,
              searchHistory: [...engine.searchHistory, newChat],
            }
          : engine
      )
    );
    setActiveChatId(newChat.id); // Set the newly created state as active
  };

  return (
    <StateContext.Provider
      value={{
        engines,
        activeEngineId,
        activeChatId,
        addMessage,
        setActiveEngine,
        setActiveChat,
        createNewChat,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = (): StateContextProps => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useStateContext must be used within a StateProvider");
  }
  return context;
};
