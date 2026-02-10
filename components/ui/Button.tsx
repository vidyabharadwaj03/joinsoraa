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
        "rounded-full px-8 py-4 tracking-wide transition-all duration-300 font-sans text-lg font-semibold",
        variant === "primary"
          ? "bg-red-600 text-white hover:bg-red-700 hover:scale-105"
          : "border-2 border-white text-white hover:bg-white hover:text-gray-900 hover:scale-105",
        className || ""
      )}
      {...props}
    />
  );
}

export default Button;