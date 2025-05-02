
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface WelcomeScreenProps {
  onNewChat: () => void;
}

export const WelcomeScreen = ({ onNewChat }: WelcomeScreenProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-8 animate-fade-in bg-gradient-to-b from-whatsapp-teal to-whatsapp-darkGreen">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
        <div className="bg-whatsapp-green rounded-full p-3 inline-block mb-4">
          <MessageCircle className="h-8 w-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold mb-2 text-gray-800">Bem-vindo ao meubot.online</h1>
        <p className="text-muted-foreground mb-8 max-w-md">
          Seu assistente de WhatsApp está pronto para ajudar. Inicie uma nova conversa.
        </p>
        <Button 
          onClick={onNewChat} 
          size="lg" 
          className="bg-whatsapp-green hover:bg-whatsapp-teal text-white transition-colors"
        >
          Nova Conversa
        </Button>
      </div>
      
      <div className="mt-12 p-5 bg-white/10 backdrop-blur-sm rounded-lg max-w-sm">
        <div className="flex justify-end mb-4">
          <div className="whatsapp-chat-bubble max-w-xs text-left">
            <p className="text-gray-800">Olá, como posso ajudar você hoje?</p>
            <p className="text-xs text-gray-500 text-right mt-1">10:32</p>
          </div>
        </div>
        <div className="flex justify-start">
          <div className="whatsapp-chat-bubble whatsapp-chat-bubble-received max-w-xs text-left">
            <p className="text-gray-800">Quero saber mais sobre os serviços do meubot.online!</p>
            <p className="text-xs text-gray-500 text-right mt-1">10:33</p>
          </div>
        </div>
      </div>
    </div>
  );
};
