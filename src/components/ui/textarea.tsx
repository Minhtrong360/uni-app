import { useState, useEffect } from "react";
import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    const [charCount, setCharCount] = useState(0); // Trạng thái lưu số lượng ký tự

    useEffect(() => {
      if (typeof props.value === "string" || Array.isArray(props.value)) {
        setCharCount(props.value.length);
      } else {
        setCharCount(0); // Nếu không phải chuỗi hoặc mảng thì mặc định là 0
      }
    }, [props.value]);

    return (
      <div className={cn("relative w-full", className)}>
        <textarea
          className={cn(
            "flex min-h-[120px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            className,
          )}
          ref={ref}
          {...props}
        />
        <div className="absolute bottom-2 right-2 text-xs text-muted-foreground">
          {charCount} characters
        </div>
      </div>
    );
  },
);

Textarea.displayName = "Textarea";

export { Textarea };
