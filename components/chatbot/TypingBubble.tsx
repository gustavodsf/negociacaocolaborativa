import React from "react";

export const TypingBubble: React.FC = () => {
  return (
    <div className="m-4 mt-6 flex w-16 items-center justify-start space-x-1 rounded-lg bg-primary/10 px-4 py-4 dark:bg-primary/10">
      <div className="typing-dot animate-typing-bounce h-2 w-2 rounded-full bg-primary/50" />
      <div
        className="typing-dot animate-typing-bounce h-2 w-2 rounded-full bg-primary/50"
        style={{ animationDelay: "0.2s" }}
      />
      <div
        className="typing-dot animate-typing-bounce h-2 w-2 rounded-full bg-primary/50"
        style={{ animationDelay: "0.4s" }}
      />
    </div>
  );
};
