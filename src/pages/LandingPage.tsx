
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="bg-emerald-500 min-h-screen text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Seu WhatsApp Lead Capture Totalmente Automatizado
          </h1>
          <p className="text-xl mb-8">
            Transforme seus visitantes em conversas reais no WhatsApp sem esforço
          </p>
          <Button className="bg-white text-emerald-600 hover:bg-emerald-50 rounded-full px-8 py-6 text-lg font-medium">
            Comece Grátis Agora
          </Button>
        </div>

        <div className="mt-16 bg-emerald-600/30 backdrop-blur-sm rounded-xl p-4 max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-4">
            <div className="flex items-start">
              <div className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                <span className="text-gray-500">U</span>
              </div>
              <div className="bg-white text-emerald-800 rounded-lg p-3 text-sm">
                Olá, estou interessado em saber mais sobre seus serviços.
              </div>
            </div>
          </div>

          <div className="flex items-start justify-end">
            <div className="bg-emerald-200 text-emerald-800 rounded-lg p-3 text-sm max-w-xs">
              Oi! Obrigado pelo interesse. Como posso ajudar você hoje?
            </div>
            <div className="bg-emerald-600 rounded-full w-8 h-8 flex items-center justify-center ml-3 flex-shrink-0">
              <span className="text-white">B</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-emerald-50 text-emerald-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Como Funciona
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-emerald-600 font-bold">1</span>
              </div>
              <h3 className="font-bold text-xl mb-3">Captura Inteligente</h3>
              <p className="text-emerald-700">Visitantes do site são convertidos em leads automaticamente</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-emerald-600 font-bold">2</span>
              </div>
              <h3 className="font-bold text-xl mb-3">Chatbot Inteligente</h3>
              <p className="text-emerald-700">Interações automáticas que impulsionam vendas</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-emerald-600 font-bold">3</span>
              </div>
              <h3 className="font-bold text-xl mb-3">Análise de Resultados</h3>
              <p className="text-emerald-700">Acompanhe métricas e otimize seu desempenho</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-emerald-600">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            O cliente sempre tem razão
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-emerald-700 border-none text-white">
              <CardContent className="pt-6">
                <p className="mb-4">"O Botzilla transformou completamente nossa abordagem de vendas. Aumentamos nossa taxa de conversão em 40%!"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-emerald-500 mr-3"></div>
                  <div>
                    <p className="font-bold">Maria Silva</p>
                    <p className="text-sm text-emerald-200">Marketing Manager, TechCorp</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-emerald-700 border-none text-white">
              <CardContent className="pt-6">
                <p className="mb-4">"Implementação fácil e resultados imediatos. Nossos clientes adoram a experiência personalizada."</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-emerald-500 mr-3"></div>
                  <div>
                    <p className="font-bold">João Costa</p>
                    <p className="text-sm text-emerald-200">CEO, Empresa Digital</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white text-emerald-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Planos e Preços
          </h2>
          <p className="text-center mb-12 max-w-2xl mx-auto text-emerald-700">
            Escolha o plano ideal para o seu negócio
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <Card className="border border-gray-200 overflow-hidden">
              <CardHeader className="bg-gray-50 pb-4 pt-6 px-6">
                <h3 className="text-xl font-bold">Grátis</h3>
                <div className="mt-2">
                  <span className="text-3xl font-bold">R$ 0,00</span>
                  <span className="text-gray-500 ml-1">/mês</span>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-emerald-500 mr-2" />
                    <span>100 mensagens/mês</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-emerald-500 mr-2" />
                    <span>1 WhatsApp conectado</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-emerald-500 mr-2" />
                    <span>Suporte básico</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-emerald-500 hover:bg-emerald-600">
                  Começar Grátis
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="border-2 border-emerald-500 overflow-hidden relative">
              <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs py-1 px-3 rounded-bl-lg">
                Popular
              </div>
              <CardHeader className="bg-emerald-50 pb-4 pt-6 px-6">
                <h3 className="text-xl font-bold">Pro</h3>
                <div className="mt-2">
                  <span className="text-3xl font-bold">R$ 79,90</span>
                  <span className="text-gray-500 ml-1">/mês</span>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-emerald-500 mr-2" />
                    <span>1000 mensagens/mês</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-emerald-500 mr-2" />
                    <span>3 WhatsApps conectados</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-emerald-500 mr-2" />
                    <span>Suporte avançado</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-emerald-500 mr-2" />
                    <span>Analytics básico</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-emerald-500 hover:bg-emerald-600">
                  Escolher Pro
                </Button>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="border border-gray-200 overflow-hidden">
              <CardHeader className="bg-gray-50 pb-4 pt-6 px-6">
                <h3 className="text-xl font-bold">Premium</h3>
                <div className="mt-2">
                  <span className="text-3xl font-bold">R$ 199,90</span>
                  <span className="text-gray-500 ml-1">/mês</span>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-emerald-500 mr-2" />
                    <span>Mensagens ilimitadas</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-emerald-500 mr-2" />
                    <span>10 WhatsApps conectados</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-emerald-500 mr-2" />
                    <span>Suporte prioritário</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-emerald-500 mr-2" />
                    <span>Analytics completo</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-emerald-500 mr-2" />
                    <span>Integrações avançadas</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-emerald-500 hover:bg-emerald-600">
                  Escolher Premium
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para transformar seu atendimento?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Comece a usar o Botzilla hoje mesmo e veja a diferença em suas conversões
          </p>
          <Button className="bg-white text-emerald-600 hover:bg-emerald-50 rounded-full px-8 py-6 text-lg font-medium">
            Comece Grátis Agora
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-800 py-12 text-emerald-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-white text-lg mb-4">Botzilla</h3>
              <p className="mb-4">Automação inteligente para seu WhatsApp Business</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-white text-lg mb-4">Produto</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Recursos</a></li>
                <li><a href="#" className="hover:text-white">Preços</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Integrações</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white text-lg mb-4">Empresa</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Sobre nós</a></li>
                <li><a href="#" className="hover:text-white">Contato</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Carreiras</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-white">Privacidade</a></li>
                <li><a href="#" className="hover:text-white">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-emerald-700 mt-12 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Botzilla. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
