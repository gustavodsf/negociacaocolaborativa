"use client";

import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface IPreProps {
  children: React.ReactElement<{ className?: string; children: string }>;
}

export const PreComponent: React.FC<IPreProps> = ({ children }) => {
  const [hasCopied, setHasCopied] = useState(false);
  const language = React.isValidElement(children)
    ? children.props.className?.split("-")[1] || ""
    : "";

  const copyToClipboard = React.useCallback(async () => {
    if ("clipboard" in navigator) {
      try {
        await navigator.clipboard.writeText(children?.props?.children);
        setHasCopied(true);
        setTimeout(() => setHasCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy!", err);
      }
    }
  }, [children?.props?.children]);

  return (
    <pre className="mb-4 rounded-md bg-[#2B2B2B] p-2 text-neutral-50">
      <div className={`flex justify-between`}>
        <div className="text-xs uppercase italic text-neutral-300">
          {language}
        </div>
        <button
          type={`button`}
          className="w-20 rounded border"
          onClick={copyToClipboard}
        >
          {hasCopied ? "Copied!" : "Copy"}
        </button>
      </div>

      {children}
    </pre>
  );
};

interface CodeBlockProps {
  className?: string;
  children?: string | React.ReactNode;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  children,
  className,
  ...rest
}) => {
  const match = /language-(\w+)/.exec(className || "");
  const language = match?.[1];

  if (language) {
    return (
      <SyntaxHighlighter
        {...rest}
        PreTag="div"
        language={language}
        style={a11yDark}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    );
  }

  if (typeof children === "string") {
    return (
      <code {...rest} className={className}>
        {children}
      </code>
    );
  }

  return null;
};
