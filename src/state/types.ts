// types.ts
export interface Message {
    message: string;
    date: string;
    isAi: boolean;
    id: string;
  }
  
  export interface State {
    id: string;
    title: string;
    messages: Message[];
  }
  