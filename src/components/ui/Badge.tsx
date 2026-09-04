import type { HTMLAttributes } from "react";
import { cn } from "./cn";

export function Badge({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement> & { className?: string }) {
  return (
    <span
      {...props}
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-white/10 bg-white/6 text-zinc-200",
        className,
      )}
    />
  );
}

