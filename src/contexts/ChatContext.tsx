
import React, { createContext, useContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ChatMessageProps } from '@/components/ChatMessage';
import { ChatConversation } from '@/components/ChatSidebar';

interface ChatContextType {
  conversations: ChatConversation[];
  activeConversationId: string | null;
  messages: Record<string, ChatMessageProps[]>;
  isProcessing: boolean;
  createNewChat: () => string;
  selectConversation: (id: string) => void;
  sendMessage: (content: string) => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

const SAMPLE_RESPONSES = [
  "I'm Botzilla, your friendly AI assistant. How can I help you today?",
  "That's an interesting question. Let me think about it for a moment...",
  "Based on my knowledge, I can tell you that this is a fascinating topic with multiple aspects to consider.",
  "I'd be happy to help you with that. Let's break it down step by step.",
  "Great question! The answer involves several important concepts.",
  "I'm designed to provide information, have conversations, and assist with various tasks. What would you like to know?",
  "I appreciate your curiosity! Let me provide some insights on this topic.",
];

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const [conversations, setConversations] = useState<ChatConversation[]>([]);
  const [activeConversationId, setActiveConversationId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Record<string, ChatMessageProps[]>>({});
  const [isProcessing, setIsProcessing] = useState(false);

  // Generate a sample response for demo purposes
  const generateResponse = (userMessage: string): Promise<string> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * SAMPLE_RESPONSES.length);
        resolve(SAMPLE_RESPONSES[randomIndex]);
      }, 1000);
    });
  };

  const createNewChat = () => {
    const id = uuidv4();
    const newChat: ChatConversation = {
      id,
      title: 'New Conversation',
      date: new Date(),
      preview: 'Start a new conversation'
    };

    setConversations(prev => [newChat, ...prev]);
    setActiveConversationId(id);
    setMessages(prev => ({ ...prev, [id]: [] }));
    
    return id;
  };

  const selectConversation = (id: string) => {
    setActiveConversationId(id);
  };

  const updateConversationDetails = (id: string, message: string) => {
    setConversations(prev => prev.map(chat => {
      if (chat.id === id) {
        // Use first 20 characters of the message as the title if it's the first message
        const isFirstMessage = !messages[id] || messages[id].length === 0;
        return {
          ...chat,
          title: isFirstMessage 
            ? message.slice(0, 20) + (message.length > 20 ? '...' : '') 
            : chat.title,
          date: new Date(),
          preview: message.slice(0, 30) + (message.length > 30 ? '...' : '')
        };
      }
      return chat;
    }));
  };

  const sendMessage = async (content: string) => {
    if (!activeConversationId) return;
    
    const userMessageId = uuidv4();
    const userMessage: ChatMessageProps = {
      id: userMessageId,
      content,
      role: 'user',
      timestamp: new Date()
    };

    // Update conversation preview with user message
    updateConversationDetails(activeConversationId, content);

    // Add user message to chat
    setMessages(prev => ({
      ...prev,
      [activeConversationId]: [...(prev[activeConversationId] || []), userMessage]
    }));

    // Start processing (for loading indicators)
    setIsProcessing(true);

    try {
      // Generate AI response (in a real app, this would be an API call)
      const responseContent = await generateResponse(content);
      
      const assistantMessageId = uuidv4();
      const assistantMessage: ChatMessageProps = {
        id: assistantMessageId,
        content: responseContent,
        role: 'assistant',
        timestamp: new Date()
      };

      // Add assistant message to chat
      setMessages(prev => ({
        ...prev,
        [activeConversationId]: [...(prev[activeConversationId] || []), assistantMessage]
      }));
    } catch (error) {
      console.error('Error generating response:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <ChatContext.Provider value={{
      conversations,
      activeConversationId,
      messages,
      isProcessing,
      createNewChat,
      selectConversation,
      sendMessage
    }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  
  return context;
};
