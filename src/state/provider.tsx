// context/StateContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";
import { Engine, Chat, Message } from "../types";
import NipCategoryIcon from "@/pattern/shared/icons/nip-category-icon";
import NipCardIcon from "@/pattern/shared/icons/nip-card-icon";
import FinancialCategoryIcon from "@/pattern/shared/icons/financial-category-icon";
import FinancialCardIcon from "@/pattern/shared/icons/financial-card-icon";
import ProductsCategoryIcon from "@/pattern/shared/icons/products-category-icon";
import ProductsCardIcon from "@/pattern/shared/icons/products-card-icon";
import OnebankLogo from "@/pattern/shared/icons/onebank-logo";
import SpectaLogo from "@/pattern/shared/icons/specta-logo";
import BancaLogo from "@/pattern/shared/icons/banca-logo";
import SwitchLogo from "@/pattern/shared/icons/switch-logo";
import GeneralHealthCategoryIcon from "@/pattern/shared/icons/general-health-category-icon";
import GeneralHealthCardIcon from "@/pattern/shared/icons/general-health-card-icon";
import HumanCapitalCategoryIcon from "@/pattern/shared/icons/human-capital-category-icon";
import HumanCapitalCardIcon from "@/pattern/shared/icons/human-capital-card-icon";
import HamzaLogo from "@/pattern/shared/icons/hamza-logo";
import OnboardingLogo from "@/pattern/shared/icons/onboarding-logo";
import QueryCategoryIcon from "@/pattern/shared/icons/query-category-icon";
import QueryBotCardIcon from "@/pattern/shared/icons/query-bot-card-icon";

interface StateContextProps {
  engines: Engine[]; // Array of all engines
  activeEngineId: number; // ID of the active engine
  activeChatId: string; // ID of the active state within the selected engine
  activeSubCategoryId:number | undefined,
  isLoggedIn: boolean;
  addMessage: (message: Message) => void;
  setActiveEngine: (engineId: number, subcategory?:number) => void; // Set the active engine
  setActiveChat: (chatId: string) => void; // Set the active state within the selected engine
  createNewChat: (title: string) => void; // Create a new chat session for the active engine
  setIsLoggedIn: (status: boolean) => void;
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
      icon: <NipCategoryIcon />,
      cardIcon: <NipCardIcon />,
      description:
        "This engine provides you with all details about NIP queries and financial transactions.",
      position: "middle-left",
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
        {
          id: "chat-5",
          title: "Should I invest in cryptocurrency",
          messages: [],
        },
      ],
      icon: <FinancialCategoryIcon />,
      cardIcon: <FinancialCardIcon />,
      description:
        "This engine provides you with all details about Financial Advisory and financial portfolios.",
      position: "top-left",
    },
    {
      engineId: 3,
      engineName: "Products",
      searchHistory: [{ id: "1", title: "What are products", messages: [] }],
      icon: <ProductsCategoryIcon />,
      cardIcon: <ProductsCardIcon />,
      description:
        "This engine provides you with all details about the different products and offerings.",
      position: "top-right",
      subCategories: [
        { id: 31, sub: <OnebankLogo />, name: "OneBank Query Bot" },
        { id: 32, sub: <SpectaLogo />, name: "Specta Query Bot" },
        { id: 33, sub: <BancaLogo />, name: "Banca Query Bot" },
        { id: 34, sub: <SwitchLogo />, name: "Switch Query Bot" },
      ],
    },
    {
      engineId: 4,
      engineName: "General Health",
      searchHistory: [
        { id: "1", title: "What is general health", messages: [] },
      ],
      icon: <GeneralHealthCategoryIcon />,
      cardIcon: <GeneralHealthCardIcon />,
      description:
        "This engine provides you with all details about General Health queries.",
      position: "bottom-right",
      subCategories: [
        { id: 41, sub: <HamzaLogo />, name: "Hamza Query Bot" },
        { id: 42, sub: <OnboardingLogo />, name: "Onboarding Query Bot" },
      ],
    },
    {
      engineId: 5,
      engineName: "Human Capital",
      searchHistory: [
        { id: "1", title: "What is human capital", messages: [] },
      ],
      icon: <HumanCapitalCategoryIcon />,
      cardIcon: <HumanCapitalCardIcon />,
      description:
        "This engine provides you with all details about Human Capital queries.",
      position: "middle-right",
      subCategories: [
        { id: 51, sub: <HamzaLogo />, name: "Hamza Query Engine" },
        { id: 52, sub: <OnboardingLogo />, name: "Onboarding Query Engine" },
      ],
    },
    {
      engineId: 6,
      engineName: "Query Bot",
      searchHistory: [{ id: "1", title: "Why shoukd I save", messages: [] }],
      icon: <QueryCategoryIcon />,
      cardIcon: <QueryBotCardIcon />,
      description: "This engine provides you with all details about Query Bot",
      position: "bottom-left",
    },
  ];

  const [engines, setEngines] = useState<Engine[]>(initialEngines);
  const [activeEngineId, setActiveEngineId] = useState<number>(2); // Default engine is "NIP Query Engine"
  const [activeSubCategoryId, setSubCategoryId] = useState<number | undefined>(); 
  const [activeChatId, setActiveChatId] = useState<string>("chat-2"); // Default active state
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

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
  const setActiveEngine = (engineId: number, categoryId?:number) => {
    setActiveEngineId(engineId);
    setSubCategoryId(categoryId);
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
        activeSubCategoryId,
        isLoggedIn,
        addMessage,
        setActiveEngine,
        setActiveChat,
        createNewChat,
        setIsLoggedIn,
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
