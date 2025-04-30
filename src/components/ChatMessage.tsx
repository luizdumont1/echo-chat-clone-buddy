
import { cn } from '@/lib/utils';
import { Avatar } from "@/components/ui/avatar";
import { Bot, User } from 'lucide-react';

export interface ChatMessageProps {
  id: string;
  content: string;
  role: 'assistant' | 'user';
  timestamp: Date;
}

export const ChatMessage = ({
  content,
  role,
  timestamp
}: ChatMessageProps) => {
  const isBot = role === 'assistant';
  
  return (
    <div className={cn(
      "group relative flex items-start gap-4 p-4",
      isBot ? "bg-background" : "bg-muted/30",
      "message-animation"
    )}>
      <Avatar className={cn(
        "h-8 w-8 rounded-md flex items-center justify-center",
        isBot ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
      )}>
        {isBot ? <Bot className="h-5 w-5" /> : <User className="h-5 w-5" />}
      </Avatar>
      
      <div className="flex-1 space-y-2">
        <div className="flex items-center gap-2">
          <span className="font-semibold">{isBot ? 'Botzilla' : 'You'}</span>
          <span className="text-xs text-muted-foreground">
            {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
        
        <div className="whitespace-pre-wrap text-sm">
          {content}
        </div>
      </div>
    </div>
  );
};
