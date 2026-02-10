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
        "rounded-full px-8 py-4 tracking-wide transition-colors font-sans text-lg font-semibold",
        variant === "primary"
          ? "bg-black text-white hover:bg-gray-900"
          : "border-2 border-black text-black hover:bg-black hover:text-white",
        className || ""
      )}
      {...props}
    />
  );
}

export default Button;