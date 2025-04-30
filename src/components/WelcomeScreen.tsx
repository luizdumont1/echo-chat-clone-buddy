
import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";

interface WelcomeScreenProps {
  onNewChat: () => void;
}

export const WelcomeScreen = ({ onNewChat }: WelcomeScreenProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-8 animate-fade-in">
      <Bot className="h-12 w-12 text-primary mb-4" />
      <h1 className="text-3xl font-bold mb-2">Welcome to meubot.online</h1>
      <p className="text-muted-foreground mb-8 max-w-md">
        Your AI assistant is ready to help. Start a new conversation and ask anything.
      </p>
      <Button onClick={onNewChat} size="lg">
        New Conversation
      </Button>
    </div>
  );
};
