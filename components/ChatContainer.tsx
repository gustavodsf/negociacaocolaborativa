"use client";

// components/ChatContainer.tsx
import { useControlContext } from "@/providers/ControlContext";
import { Message, useChat } from "ai/react";
import { MessageCircleX } from "lucide-react";
import React, { useCallback, useEffect, useRef } from "react";
import { CommonForm } from "./CommonForm";
import { MessageItem } from "./MessageItem";
import { TypingBubble } from "./TypingBubble";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export const ChatContainer = () => {
  const { generalSettings, safetySettings } = useControlContext();

  const {
    messages,
    setMessages,
    input,
    handleInputChange,
    handleSubmit,
    reload,
    isLoading,
  } = useChat({
    id: "gemini-pro",
    api: `/api/gemini-pro`,
    body: {
      general_settings: generalSettings,
      safety_settings: safetySettings,
    },
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const messagesRef = useRef<Message[]>(messages);

  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  const handleRemoveMessage = useCallback(
    (id: string) => {
      const newMessages = messagesRef.current.filter(
        (message) => message.id !== id,
      );
      setMessages(newMessages);
    },
    [setMessages],
  );

  return (
    <div className="flex h-full flex-col">
      <Card className="flex flex-1 flex-col overflow-hidden">
        {messages.length > 0 && (
          <div className={`flex p-4`}>
            <Button
              variant={`secondary`}
              type={`button`}
              size={`sm`}
              onClick={() => setMessages([])}
            >
              <MessageCircleX className={`mr-2`} /> Clear chat history
            </Button>
          </div>
        )}
        <div className="flex-1 overflow-y-auto">
          {messages.map((message, index) => (
            <MessageItem
              key={message.id}
              message={message}
              isLastMessage={messages.length === index + 1}
              isLoading={isLoading}
              onRefresh={reload}
              onRemove={() => handleRemoveMessage(message.id)}
            />
          ))}

          <div ref={messagesEndRef} />
          {isLoading && <TypingBubble />}
        </div>
        <CommonForm
          value={input}
          placeholder="Converse com a nossa IA"
          loading={isLoading}
          onInputChange={handleInputChange}
          onFormSubmit={handleSubmit}
          isSubmittable={input.trim() !== ""}
        />
      </Card>
    </div>
  );
};
