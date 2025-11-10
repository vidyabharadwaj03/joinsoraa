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
        "rounded-2xl px-6 py-4 uppercase tracking-wide transition",
        variant === "primary"
          ? "bg-brand-red text-brand-bone hover:bg-brand-rose"
          : "bg-transparent ring-1 ring-white/15 text-brand-bone hover:ring-brand-rose/60",
        className || ""
      )}
      {...props}
    />
  );
}

export default Button;
