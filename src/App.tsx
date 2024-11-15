import React from 'react';
import { 
  BarChart3,
  Bot,
  Brain,
  ExternalLink,
  Linkedin,
  Mail,
  MessageSquare,
  Target,
  User2,
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eeeeee] to-[#4b54fd] text-[#101521]">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="text-center mb-12">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#4b54fd]">
            <img 
              src="/src/abc.jpeg"
              alt="Maurício Oliveira" 
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold mb-2">Maurício Oliveira</h1>
          <p className="text-xl text-[#101521] mb-4">Consultor Tecnológico Digital</p>
          <div className="flex justify-center gap-4 mb-8">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
               className="p-2 bg-[#4b54fd] text-white rounded-full hover:bg-[#101521] transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://wa.me/351936255330" target="_blank" rel="noopener noreferrer"
               className="p-2 bg-[#4b54fd] text-white rounded-full hover:bg-[#101521] transition-colors">
              <MessageSquare size={24} />
            </a>
            <a href="mailto:mauricio_vaz97@hotmail.com"
               className="p-2 bg-[#4b54fd] text-white rounded-full hover:bg-[#101521] transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 mb-8 shadow-lg">
          <div className="flex items-center gap-2 mb-4">
            <User2 className="text-[#4b54fd]" />
            <h2 className="text-2xl font-bold">Sobre</h2>
          </div>
          <p className="text-[#101521] leading-relaxed">
            Gestor de marketing e ciêntista de dados, desenvolvo estratégias de marketing que aprendem e se adaptam. 
            Utilizando IA, automatizo tarefas repetitivas e personalizo cada interação com seus clientes, aumentando 
            o engajamento e as conversões.
          </p>
        </div>

        {/* Services Section */}
        <div className="grid grid-cols-1 gap-4 mb-8">
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <Target className="text-[#4b54fd]" />
              <h3 className="text-xl font-semibold">Criação e Otimização de Campanhas Digitais com IA</h3>
            </div>
            <p className="text-[#101521]">
              Crie campanhas altamente segmentadas e personalizadas utilizando algoritmos de machine learning para 
              maximizar o ROI e alcançar seus objetivos de negócio.
            </p>
            <ul className="list-disc list-inside mt-3 text-[#101521] ml-4">
              <li>Criação de personas e buyer personas</li>
              <li>Definição de estratégias de segmentação</li>
              <li>Criação de anúncios altamente relevantes</li>
              <li>Otimização contínua das campanhas com base em dados</li>
              <li>A/B testing para identificar as melhores opções</li>
            </ul>
          </div>

          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <Bot className="text-[#4b54fd]" />
              <h3 className="text-xl font-semibold">Automação de Marketing com Inteligência Artificial</h3>
            </div>
            <p className="text-[#101521]">
              Automatize tarefas repetitivas e otimize seus processos de marketing para aumentar a eficiência 
              e gerar mais leads qualificados.
            </p>
            <ul className="list-disc list-inside mt-3 text-[#101521] ml-4">
              <li>Criação de fluxos de trabalho automatizados</li>
              <li>Nutrição de leads personalizada</li>
              <li>E-mail marketing segmentado</li>
              <li>Chatbots inteligentes para atendimento ao cliente</li>
              <li>Integração de ferramentas de marketing</li>
            </ul>
          </div>

          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <BarChart3 className="text-[#4b54fd]" />
              <h3 className="text-xl font-semibold">Análise de Dados e Insights Estratégicos</h3>
            </div>
            <p className="text-[#101521]">
              Transforme seus dados em insights acionáveis para tomar decisões mais estratégicas e otimizar 
              suas campanhas.
            </p>
            <ul className="list-disc list-inside mt-3 text-[#101521] ml-4">
              <li>Criação de dashboards personalizados</li>
              <li>Análise de dados para identificar tendências e oportunidades</li>
              <li>Relatórios detalhados sobre o desempenho das campanhas</li>
              <li>Consultoria em análise de dados</li>
            </ul>
          </div>

          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <Brain className="text-[#4b54fd]" />
              <h3 className="text-xl font-semibold">Consultoria em Inteligência Artificial para Marketing</h3>
            </div>
            <p className="text-[#101521]">
              Implemente soluções de IA em sua estratégia de marketing para obter resultados mais inteligentes 
              e personalizados.
            </p>
            <ul className="list-disc list-inside mt-3 text-[#101521] ml-4">
              <li>Implementação de chatbots e assistentes virtuais</li>
              <li>Previsão de comportamento do cliente</li>
              <li>Recomendação de produtos e serviços personalizados</li>
              <li>Criação de conteúdo personalizado com IA</li>
            </ul>
          </div>
        </div>

        {/* Contact Buttons */}
        <div className="space-y-4">
          <a href="https://wa.me/351936255330" target="_blank" rel="noopener noreferrer"
             className="flex items-center justify-between w-full bg-[#e7004c] hover:bg-[#101521] text-white transition-colors rounded-xl p-4 shadow-lg">
            <div className="flex items-center gap-3">
              <MessageSquare size={24} />
              <span className="font-semibold">+351 936 255 330</span>
            </div>
            <ExternalLink size={20} />
          </a>

          <a href="mailto:mauricio_vaz97@hotmail.com"
             className="flex items-center justify-between w-full bg-[#e7004c] hover:bg-[#101521] text-white transition-colors rounded-xl p-4 shadow-lg">
            <div className="flex items-center gap-3">
              <Mail size={24} />
              <span className="font-semibold">mauricio_vaz97@hotmail.com</span>
            </div>
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;