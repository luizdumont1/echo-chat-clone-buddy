
import React, { useState, useRef, useEffect } from 'react';
import { ChatSidebar } from '@/components/ChatSidebar';
import { ChatMessage } from '@/components/ChatMessage';
import { ChatInput } from '@/components/ChatInput';
import { ChatHeader } from '@/components/ChatHeader';
import { WelcomeScreen } from '@/components/WelcomeScreen';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useIsMobile } from '@/hooks/use-mobile';
import { useChat } from '@/contexts/ChatContext';

const Index = () => {
  const {
    conversations,
    activeConversationId,
    messages,
    isProcessing,
    createNewChat,
    selectConversation,
    sendMessage
  } = useChat();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, activeConversationId]);
  
  // Get current conversation title
  const activeConversation = conversations.find(conv => conv.id === activeConversationId);
  const currentTitle = activeConversation?.title || 'New Conversation';
  
  // Get current messages
  const currentMessages = activeConversationId ? messages[activeConversationId] || [] : [];
  
  const handleNewChat = () => {
    createNewChat();
    if (isMobile) setSidebarOpen(false);
  };
  
  const handleSelectChat = (id: string) => {
    selectConversation(id);
    if (isMobile) setSidebarOpen(false);
  };
  
  const handleSendMessage = (content: string) => {
    if (!activeConversationId) {
      const newChatId = createNewChat();
      setTimeout(() => sendMessage(content), 100);
    } else {
      sendMessage(content);
    }
  };

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <ChatSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onNewChat={handleNewChat}
        chats={conversations}
        activeChat={activeConversationId}
        onSelectChat={handleSelectChat}
      />
      
      <div className="flex-1 flex flex-col h-full ml-0 md:ml-72 transition-all duration-300">
        <ChatHeader
          title={currentTitle}
          onNewChat={handleNewChat}
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />
        
        <main className="flex-1 overflow-hidden relative">
          {activeConversationId && currentMessages.length > 0 ? (
            <ScrollArea className="h-full chat-scrollbar">
              <div className="pb-20">
                {currentMessages.map((msg) => (
                  <ChatMessage
                    key={msg.id}
                    id={msg.id}
                    content={msg.content}
                    role={msg.role}
                    timestamp={msg.timestamp}
                  />
                ))}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>
          ) : (
            <WelcomeScreen onNewChat={handleNewChat} />
          )}
        </main>
        
        {activeConversationId && (
          <ChatInput
            onSendMessage={handleSendMessage}
            isProcessing={isProcessing}
          />
        )}
      </div>
    </div>
  );
};

export default Index;
