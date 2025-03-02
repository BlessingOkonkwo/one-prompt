import React, { FC, ReactElement } from "react";
import { Button, ButtonProps } from "@/components/ui/button";
import Hidden from "../data-display/hidden";

interface IButtonWithIconprops extends ButtonProps {
  prefixIcon?: ReactElement;
  suffixIcon?: ReactElement;
}

const IconButton: FC<IButtonWithIconprops> = ({
  prefixIcon,
  suffixIcon,
  children,
  ...props
}) => {
  return (
    <Button
      {...props}
      className="border border-promptBtnBorder bg-promptBtn text-promptBtnForeground text-sm font-normal rounded-lg py-1 px-2 w-fit h-fit gap-1 hover:bg-promptBtnActive"
    >
      <Hidden visible={prefixIcon ? true : false}>
        <span>{prefixIcon}</span>
      </Hidden>
      {children}
      <Hidden visible={suffixIcon ? true : false}>
        <span>{suffixIcon}</span>
      </Hidden>
    </Button>
  );
};

export default IconButton;
