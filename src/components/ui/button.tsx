import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_hsl(145_85%_50%/0.2)]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-primary/50 bg-transparent text-primary hover:bg-primary/10 hover:border-primary",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-muted hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Hero button variants
        hero: "bg-gradient-to-r from-[hsl(145,85%,50%)] to-[hsl(145,85%,40%)] text-[hsl(222,47%,3%)] shadow-[0_0_40px_hsl(145_85%_50%/0.3)] hover:shadow-[0_0_60px_hsl(145_85%_50%/0.4)] hover:scale-105",
        heroOutline: "border-2 border-primary/40 bg-transparent text-foreground hover:bg-primary/10 hover:border-primary backdrop-blur-sm",
        // Pricing button variants
        popular: "bg-gradient-to-r from-[hsl(145,85%,50%)] to-[hsl(145,85%,40%)] text-[hsl(222,47%,3%)] shadow-[0_0_40px_hsl(145_85%_50%/0.3)] hover:shadow-[0_0_50px_hsl(145_85%_50%/0.5)]",
        elite: "bg-gradient-to-r from-[hsl(262,83%,58%)] to-[hsl(262,83%,45%)] text-white hover:opacity-90",
        premium: "bg-gradient-to-r from-[hsl(45,93%,58%)] to-[hsl(30,90%,50%)] text-[hsl(222,47%,3%)] hover:opacity-90 shadow-[0_0_30px_hsl(45_93%_58%/0.3)]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
