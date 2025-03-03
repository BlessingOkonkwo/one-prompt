import React, { FC, useState } from "react";
import InputErrorMessage from "./input-error-message";
import { FieldSet } from "./fieldset";
import { Label } from "@/components/ui/label";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import PasswordInputToggleIcon from "@/pattern/shared/icons/password-input-toggle-icon";
import { ICustomInputProps } from "@/types";

const PasswordInput: FC<ICustomInputProps> = ({
  name,
  label,
  error,
  placeholder,
}) => {
  const { control } = useFormContext();
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [toggleinputType, setToggleinputType] = useState<boolean>(true);

  return (
    <Controller
      name={name!}
      control={control}
      render={({ field: { value, name, onChange } }) => (
        <FieldSet>
          <Label>{label}</Label>
          <div className="w-full space-y-[4px]">
            <div className="relative w-full">
              <Input
                name={name}
                value={value}
                type={toggleinputType ? "password" : "text"}
                onChange={onChange}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                variant={error ? "error" : "default"}
                placeholder={placeholder ?? "Enter password"}
                className="pr-[40px]"
              />

              {/* Suffix Icon */}
              <span
                className="absolute top-[13px] right-[12px]"
                onClick={() => setToggleinputType(!toggleinputType)}
              >
                <PasswordInputToggleIcon
                  togglePasswordInput={toggleinputType}
                />
              </span>
            </div>
            <InputErrorMessage name={`${name}`} />
          </div>
        </FieldSet>
      )}
    />
  );
};

export default PasswordInput;
