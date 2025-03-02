import React, { FC } from "react";
import { FieldSet } from "./fieldset";
import { Label } from "@/components/ui/label";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import Hidden from "../data-display/hidden";
import { cn } from "@/lib/utils";
import { ICustomInputProps } from "@/types";
import InputErrorMessage from "./input-error-message";

const FormInput: FC<ICustomInputProps> = ({
  name,
  label,
  error,
  type,
  placeholder,
  prefixIcon,
  suffixIcon,
  className,
  ...props
}) => {
  const { control } = useFormContext();

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
                type={type ?? "text"}
                name={name}
                value={value}
                onChange={onChange}
                // onFocus={() => setIsFocus(true)}
                // onBlur={() => setIsFocus(false)}
                variant={error ? "error" : "default"}
                placeholder={placeholder ?? "Type here"}
                className={cn(
                  prefixIcon ? "pl-[34px]" : "pl-3",
                  type === "number" && "hide-number-input-control-btns",
                  className
                )}
                {...props}
              />
              {/* prefix Icon */}
              <Hidden visible={!!prefixIcon}>
                <span className="absolute top-[15px] left-[12px]">
                  {prefixIcon}
                </span>
              </Hidden>
              {/* suffix Icon */}
              <Hidden visible={!!suffixIcon}>
                <span className="absolute top-[15px] right-[12px]">
                  {suffixIcon}
                </span>
              </Hidden>
            </div>
            <InputErrorMessage name={`${name}`} />
          </div>
        </FieldSet>
      )}
    />
  );
};

export default FormInput;
