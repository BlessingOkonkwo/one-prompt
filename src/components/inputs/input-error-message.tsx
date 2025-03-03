import React from "react";
import { ErrorMessage } from "@hookform/error-message";
import InputErrorIcon from "@/pattern/shared/icons/input-error-icon";

interface IInputErrorMessage {
  errors?: any;
  name: string;
}

const InputErrorMessage = ({ errors, name }: IInputErrorMessage) => (
  <ErrorMessage
    errors={errors}
    name={name}
    as={<div className="flex items-center gap-1 text-inputError text-xs"></div>}
  >
    {({ messages }: Record<string, string>) =>
      messages &&
      Object.entries(messages).map(([type, message]) => (
        <div key={type} className="flex items-center gap-1 text-inputError">
          <InputErrorIcon /> {/* Error Icon */}
          <p>{message}</p>
        </div>
      ))
    }
  </ErrorMessage>
);

export default InputErrorMessage;
