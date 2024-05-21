"use client";

// components/MarkdownViewer.tsx
import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";
import { CodeBlock, PreComponent } from "./code";
import { LiComponent, OlComponent, UlComponent } from "./list";
import {
  TableComponent,
  TbodyComponent,
  TdComponent,
  ThComponent,
  TheadComponent,
  TrComponent,
} from "./table";

type AnchorProps = {
  href: string;
  children: React.ReactNode;
};

const Anchor: React.FC<AnchorProps> = ({ href, children }) => {
  return (
    <a
      href={href}
      className="text-blue-500 hover:underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

interface IMarkdownViewerProps {
  text: string;
}

export const MarkdownViewer: React.FC<IMarkdownViewerProps> = React.memo(
  function MarkdownViewer({ text }) {
    const components = {
      a: Anchor,

      ul: UlComponent,
      ol: OlComponent,
      li: LiComponent,

      pre: PreComponent,
      code: CodeBlock,

      table: TableComponent,
      thead: TheadComponent,
      tbody: TbodyComponent,
      tr: TrComponent,
      th: ThComponent,
      td: TdComponent,
    };

    return (
      <ReactMarkdown
        // @ts-ignore
        components={components}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSanitize]}
      >
        {text}
      </ReactMarkdown>
    );
  },
  (prevProps, nextProps) => prevProps.text === nextProps.text,
);
