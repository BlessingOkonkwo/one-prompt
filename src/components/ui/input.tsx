import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const inputVariants = cva(
  "appearance-none flex items-center justify-start gap-[8px] h-[48px] min-w-[335px] w-full rounded-[8px] bg-input font-normal p-3 text-base text-inputForeground transition-colors border file:border-0 file:bg-transparent file:text-base file:font-medium placeholder:text-inputPlaceholder focus:outline-none disabled:cursor-not-allowed disabled:bg-border disabled:border-border",
  {
    variants: {
      variant: {
        default:
          "border-inputBorder focus:ring-[3px] focus:ring-[var(--ring-primary)] ",
        error:
          "border border-error disabled:border-border focus:ring-[3px] focus:ring-[hsla(0,86%,61%,0.05)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({variant, className})
          // "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          // className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
