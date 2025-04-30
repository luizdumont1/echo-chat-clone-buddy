
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { PlusCircle, MessageSquare, Bot, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface ChatSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onNewChat: () => void;
  chats: ChatConversation[];
  activeChat: string | null;
  onSelectChat: (id: string) => void;
}

export interface ChatConversation {
  id: string;
  title: string;
  date: Date;
  preview: string;
}

export const ChatSidebar = ({ 
  isOpen, 
  onClose,
  onNewChat, 
  chats, 
  activeChat,
  onSelectChat 
}: ChatSidebarProps) => {
  const isMobile = useIsMobile();

  return (
    <div 
      className={cn(
        "fixed inset-y-0 left-0 z-50 flex w-72 flex-col bg-sidebar border-r border-sidebar-border transition-transform duration-300 ease-in-out",
        isMobile && !isOpen ? "-translate-x-full" : "translate-x-0"
      )}
    >
      <div className="flex h-16 items-center justify-between px-4 border-b border-sidebar-border">
        <div className="flex items-center space-x-2">
          <Bot className="h-6 w-6 text-primary" />
          <span className="font-semibold text-lg">Botzilla</span>
        </div>
        {isMobile && (
          <Button variant="ghost" size="icon" onClick={onClose}>
            <span className="sr-only">Close sidebar</span>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
          </Button>
        )}
      </div>
      <div className="p-4">
        <Button 
          onClick={onNewChat}
          className="w-full justify-start"
        >
          <PlusCircle className="mr-2 h-4 w-4" />
          New Chat
        </Button>
      </div>
      <ScrollArea className="flex-1 px-4">
        {chats.length > 0 ? (
          <div className="space-y-1 py-2">
            {chats.map((chat) => (
              <Button
                key={chat.id}
                variant={chat.id === activeChat ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start font-normal",
                  chat.id === activeChat ? "bg-sidebar-accent text-sidebar-accent-foreground" : ""
                )}
                onClick={() => onSelectChat(chat.id)}
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                <div className="flex flex-col items-start text-left">
                  <span className="line-clamp-1">{chat.title}</span>
                  <span className="text-xs text-muted-foreground line-clamp-1">{chat.preview}</span>
                </div>
              </Button>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-40 text-muted-foreground">
            <MessageSquare className="h-8 w-8 mb-2 opacity-50" />
            <p>No conversations yet</p>
          </div>
        )}
      </ScrollArea>
      <div className="flex-shrink-0 p-4">
        <Separator className="my-2" />
        <Button variant="outline" size="sm" className="w-full justify-start">
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
      </div>
    </div>
  );
};
