import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import { 
  DollarSign, 
  TrendingUp, 
  Shield, 
  PieChart, 
  Target, 
  Smartphone,
  X,
  Mail,
  Lock,
  User,
  Eye,
  EyeOff
} from 'lucide-react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsModalOpen(false);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const features = [
    {
      icon: <PieChart className="w-8 h-8" />,
      title: "Controle Visual",
      description: "Veja seus gastos de forma clara com gráficos intuitivos e relatórios personalizados."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Metas Inteligentes",
      description: "Defina objetivos financeiros e acompanhe seu progresso de forma automática."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Insights Personalizados",
      description: "Receba dicas baseadas nos seus hábitos para otimizar suas finanças."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Segurança Total",
      description: "Seus dados protegidos com criptografia de ponta e backup automático."
    }
  ];

  if (isLoggedIn) {
    return <Dashboard onLogout={handleLogout} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-900 rounded-lg p-2">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Finley</span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#recursos" className="text-gray-600 hover:text-blue-900 transition-colors font-medium">
                Recursos
              </a>
              <a href="#sobre" className="text-gray-600 hover:text-blue-900 transition-colors font-medium">
                Sobre
              </a>
              <a href="#contato" className="text-gray-600 hover:text-blue-900 transition-colors font-medium">
                Contato
              </a>
            </nav>

            <button
              onClick={openModal}
              className="bg-blue-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-800 transition-colors"
            >
              Entrar
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Seu dinheiro sob
              <span className="text-emerald-400 block">controle total</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Bem-vindo ao Finley! Aqui o controle do seu dinheiro é simples, visual e no seu tempo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={openModal}
                className="bg-emerald-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-400 transition-all transform hover:scale-105 w-full sm:w-auto"
              >
                Começar agora
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all w-full sm:w-auto">
                Ver demonstração
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="recursos" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Funcionalidades que fazem a diferença
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubra como o Finley pode transformar sua relação com o dinheiro através de ferramentas inteligentes e intuitivas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-gradient-to-br hover:from-blue-50 hover:to-emerald-50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50K+</div>
              <p className="text-emerald-100 text-lg">Usuários ativos</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">R$ 2M+</div>
              <p className="text-emerald-100 text-lg">Economia gerada</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">4.9★</div>
              <p className="text-emerald-100 text-lg">Avaliação média</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Smartphone className="w-20 h-20 mx-auto mb-8 text-emerald-400" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para transformar suas finanças?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Junte-se a milhares de pessoas que já descobriram como é fácil ter controle total do seu dinheiro.
          </p>
          <button
            onClick={openModal}
            className="bg-emerald-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-400 transition-all transform hover:scale-105"
          >
            Baixar o app grátis
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-blue-900 rounded-lg p-2">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Finley</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Transformando a forma como você gerencia suas finanças pessoais.
              </p>
            </div>
            
            <div className="hidden md:block">
              <h3 className="text-white font-semibold mb-4">Produto</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Recursos</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Preços</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Segurança</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">API</a></li>
              </ul>
            </div>
            
            <div className="hidden md:block">
              <h3 className="text-white font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Sobre nós</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Carreiras</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Contato</a></li>
              </ul>
            </div>
            
            <div className="hidden md:block">
              <h3 className="text-white font-semibold mb-4">Suporte</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Central de ajuda</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Status do sistema</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Termos de uso</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacidade</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
            <p>&copy; 2025 Finley. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Login/Signup Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {isLogin ? 'Entrar' : 'Criar conta'}
                </h2>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form className="space-y-4">
                {!isLogin && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nome completo
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Seu nome completo"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Senha
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type={showPassword ? "text" : "password"}
                      className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  onClick={handleLogin}
                  className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                >
                  {isLogin ? 'Entrar' : 'Criar conta'}
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  {isLogin ? 'Não tem uma conta?' : 'Já tem uma conta?'}
                  <button
                    onClick={() => setIsLogin(!isLogin)}
                    className="ml-1 text-blue-900 hover:text-blue-700 font-semibold"
                  >
                    {isLogin ? 'Cadastre-se' : 'Faça login'}
                  </button>
                </p>
              </div>

              {isLogin && (
                <div className="mt-4 text-center">
                  <a href="#" className="text-sm text-blue-900 hover:text-blue-700">
                    Esqueceu sua senha?
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;