import React, { FC } from "react";
import { Button, ButtonProps } from "@/components/ui/button";
import Hidden from "../data-display/hidden";
import LoaderLight from "@/pattern/shared/icons/loader-light";

interface ILoadingButtonprops extends ButtonProps {
  loading?: boolean;
}

const LoadingButton: FC<ILoadingButtonprops> = ({
  loading = false,
  children,
  ...props
}) => {
  return (
    <Button {...props} type="submit">
      <Hidden visible={loading}>
        <LoaderLight className="animate-spin" />
      </Hidden>
      <Hidden visible={!loading}>{children}</Hidden>
    </Button>
  );
};

export default LoadingButton;
