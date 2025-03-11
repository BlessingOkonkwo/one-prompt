// types.ts
import { FieldError } from "react-hook-form";
import { Dispatch, ReactElement, ReactNode, SetStateAction } from "react";

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
  icon: ReactNode;
  cardIcon: ReactNode;
  description: string;
  position: string;
  subCategories?: {
    id: number;
    name: string;
    sub: ReactNode;
    searchHistory: Chat[];
  }[];
}

export interface ICustomInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  error?: FieldError;
  prefixIcon?: ReactElement;
  suffixIcon?: ReactElement;
  disabled?: boolean;
}

export interface IIconProps extends React.SVGAttributes<SVGElement> {
  children?: never;
  color?: string;
  height?: string;
  width?: string;
  className?: string;
}
export interface ITypographyProps {
  children: string | ReactNode;
  className?: string;
}
export interface IInputIconProps extends IIconProps {
  focused?: boolean; // input focus state
  togglePasswordInput?: boolean; // password input visible state
}

export interface ILoginPayload {
  email: string;
  password: string;
}
