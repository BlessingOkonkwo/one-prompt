// types.ts
export interface Message {
  message: string;
  date: string;
  isAi: boolean;
  id: string;
}

export interface Chat {
  id: string;
  title: string;
  messages: Message[];
}

export interface Engine {
  engineId: number;
  engineName: string;
  searchHistory: Chat[]; // The chat sessions per engine
}
