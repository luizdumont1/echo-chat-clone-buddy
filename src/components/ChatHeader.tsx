
import { Button } from "@/components/ui/button";
import { Bot, MenuIcon, Plus } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface ChatHeaderProps {
  title: string;
  onNewChat: () => void;
  onToggleSidebar: () => void;
}

export const ChatHeader = ({ title, onNewChat, onToggleSidebar }: ChatHeaderProps) => {
  const isMobile = useIsMobile();
  
  return (
    <header className="flex h-16 items-center justify-between border-b px-4 sticky top-0 bg-background z-10">
      <div className="flex items-center">
        {isMobile && (
          <Button variant="ghost" size="icon" className="mr-2" onClick={onToggleSidebar}>
            <MenuIcon className="h-5 w-5" />
            <span className="sr-only">Toggle sidebar</span>
          </Button>
        )}
        <div className="flex items-center space-x-2">
          <Bot className="h-6 w-6 text-primary" />
          <h1 className="font-semibold text-lg line-clamp-1">{title}</h1>
        </div>
      </div>
      <Button 
        size="sm" 
        variant="outline"
        className="flex items-center"
        onClick={onNewChat}
      >
        <Plus className="h-4 w-4 mr-1" />
        New Chat
      </Button>
    </header>
  );
};
