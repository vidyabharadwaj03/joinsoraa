"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

// If I have a utility to join class names, import it; otherwise define a tiny one.
let cn = (...cls: Array<string | false | null | undefined>) =>
  cls.filter(Boolean).join(" ");

type ButtonProps = HTMLMotionProps<"button"> & {
  variant?: "primary" | "ghost";
};

export function Button({
  className,
  variant = "primary",
  whileHover = { scale: 1.03 },
  whileTap = { scale: 0.98 },
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={whileHover}
      whileTap={whileTap}
      className={cn(
        "rounded-2xl px-8 py-4 uppercase tracking-wide transition-colors font-display text-lg",
        variant === "primary"
          ? "bg-brand-red text-brand-bone hover:bg-brand-rose"
          : "border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-brand-bone",
        className || ""
      )}
      {...props}
    />
  );
}

export default Button;