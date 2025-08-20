import React, { useState } from 'react';
import {
  Home,
  Building2,
  ArrowUpDown,
  CreditCard,
  Target,
  FileText,
  MoreHorizontal,
  Settings,
  HelpCircle,
  User,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Plus,
  TrendingUp,
  TrendingDown,
  PieChart,
  DollarSign,
  Calendar,
  Filter,
  Search,
  Download,
  Bell,
  Shield,
  Moon,
  Sun,
  Globe,
  Eye,
  EyeOff,
  Edit,
  Trash2,
  MoreVertical,
  CheckCircle,
  AlertCircle,
  Clock,
  ArrowRight,
  BarChart3,
  LineChart,
  Activity
} from 'lucide-react';

interface DashboardProps {
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('Transactions');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [hoveredSegment, setHoveredSegment] = useState<string | null>(null);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'accounts', label: 'Contas', icon: Building2 },
    { id: 'transactions', label: 'Transações', icon: ArrowUpDown },
    { id: 'credit-cards', label: 'Cartões', icon: CreditCard },
    { id: 'goals', label: 'Metas', icon: Target },
    { id: 'reports', label: 'Relatórios', icon: FileText },
    { id: 'more', label: 'Mais opções', icon: MoreHorizontal },
    { id: 'settings', label: 'Configurações', icon: Settings },
    { id: 'help', label: 'Ajuda', icon: HelpCircle }
  ];

  const filterOptions = ['Transactions', 'Incomes', 'Expenses', 'Transfers'];

  const expenseCategories = [
    { name: 'Casa', amount: 1027.10, percentage: 37.11, color: '#C084FC' },
    { name: 'Transporte', amount: 650.30, percentage: 23.5, color: '#10B981' },
    { name: 'Alimentação', amount: 480.75, percentage: 17.4, color: '#3B82F6' },
    { name: 'Entretenimento', amount: 320.50, percentage: 11.6, color: '#F59E0B' },
    { name: 'Saúde', amount: 288.78, percentage: 10.4, color: '#EF4444' }
  ];

  const incomeCategories = [
    { name: 'Salário', amount: 2500.00, percentage: 79.5, color: '#10B981' },
    { name: 'Freelance', amount: 400.00, percentage: 12.7, color: '#3B82F6' },
    { name: 'Investimentos', amount: 244.75, percentage: 7.8, color: '#8B5CF6' }
  ];

  const renderSidebar = () => (
    <div className={`bg-white border-r border-gray-200 transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'} flex flex-col h-full`}>
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="bg-blue-900 rounded-lg p-2 flex-shrink-0">
            <DollarSign className="w-6 h-6 text-white" />
          </div>
          {!isCollapsed && (
            <span className="text-xl font-bold text-gray-900">Finley</span>
          )}
        </div>
      </div>

      {/* New Transaction Button */}
      <div className="p-4 relative group">
        <button className={`bg-blue-900 text-white rounded-full font-medium hover:bg-blue-800 transition-all flex items-center justify-center ${isCollapsed ? 'w-12 h-12' : 'w-full py-3'}`}>
          <Plus className="w-5 h-5" />
          {!isCollapsed && <span className="ml-2">Nova transação</span>}
        </button>
        
        {/* Collapse/Expand Arrow */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={`absolute -right-3 top-1/2 transform -translate-y-1/2 bg-white border border-gray-200 rounded-full p-1 hover:bg-gray-50 transition-all ${
            isCollapsed ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`}
        >
          {isCollapsed ? (
            <ChevronRight className="w-4 h-4 text-gray-600" />
          ) : (
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          )}
        </button>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 px-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                isActive
                  ? 'bg-blue-50 text-blue-900 border-r-2 border-blue-900'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
              title={isCollapsed ? item.label : undefined}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              {!isCollapsed && <span className="font-medium">{item.label}</span>}
            </button>
          );
        })}
      </nav>
    </div>
  );

  const renderTopBar = () => (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-gray-900 capitalize">
            {currentPage === 'credit-cards' ? 'Cartões de Crédito' : 
             currentPage === 'transactions' ? 'Todas as Transações' :
             currentPage === 'accounts' ? 'Contas' :
             currentPage === 'goals' ? 'Metas Financeiras' :
             currentPage === 'reports' ? 'Relatórios' :
             currentPage === 'settings' ? 'Configurações' :
             currentPage === 'help' ? 'Central de Ajuda' :
             currentPage}
          </h1>
          
          {/* Month Selector for relevant pages */}
          {['dashboard', 'transactions', 'incomes', 'expenses'].includes(currentPage) && (
            <div className="flex items-center space-x-2 bg-gray-100 rounded-lg px-3 py-2">
              <Calendar className="w-4 h-4 text-gray-500" />
              <select className="bg-transparent text-sm font-medium text-gray-700 border-none outline-none">
                <option>Agosto 2025</option>
                <option>Julho 2025</option>
                <option>Junho 2025</option>
              </select>
            </div>
          )}
        </div>

        <div className="flex items-center space-x-4">
          {/* Filter Button for transaction pages */}
          {['transactions', 'incomes', 'expenses'].includes(currentPage) && (
            <div className="relative">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  currentPage === 'incomes' ? 'bg-green-500 text-white hover:bg-green-600' :
                  currentPage === 'expenses' ? 'bg-red-500 text-white hover:bg-red-600' :
                  'bg-purple-500 text-white hover:bg-purple-600'
                }`}
              >
                <Filter className="w-4 h-4" />
                <span>{selectedFilter}</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isFilterOpen && (
                <div className="absolute top-full mt-2 right-0 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50 min-w-[150px]">
                  {filterOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        setSelectedFilter(option);
                        setIsFilterOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-700"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            {currentPage === 'transactions' && (
              <>
                <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                  <Search className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                  <Filter className="w-5 h-5" />
                </button>
              </>
            )}
            
            {currentPage === 'reports' && (
              <button className="flex items-center space-x-2 bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors">
                <Download className="w-4 h-4" />
                <span>Exportar</span>
              </button>
            )}

            {currentPage === 'goals' && (
              <button className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
                <Plus className="w-4 h-4" />
                <span>Nova Meta</span>
              </button>
            )}
          </div>

          {/* User Menu */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <div className="flex items-center space-x-1">
              <span className="font-medium text-gray-900">Rafael</span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMetricCards = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div 
        className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow"
        onClick={() => setCurrentPage('accounts')}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 mb-1">Saldo Atual</p>
            <p className="text-2xl font-bold text-gray-900">R$ 634,15</p>
          </div>
          <div className="bg-blue-100 p-3 rounded-full">
            <Building2 className="w-6 h-6 text-blue-600" />
          </div>
        </div>
      </div>

      <div 
        className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow"
        onClick={() => setCurrentPage('incomes')}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 mb-1">Receitas</p>
            <p className="text-2xl font-bold text-green-600">R$ 3.144,75</p>
          </div>
          <div className="bg-green-100 p-3 rounded-full">
            <TrendingUp className="w-6 h-6 text-green-600" />
          </div>
        </div>
      </div>

      <div 
        className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow"
        onClick={() => setCurrentPage('expenses')}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 mb-1">Despesas</p>
            <p className="text-2xl font-bold text-red-600">R$ 2.691,68</p>
          </div>
          <div className="bg-red-100 p-3 rounded-full">
            <TrendingDown className="w-6 h-6 text-red-600" />
          </div>
        </div>
      </div>

      <div 
        className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow"
        onClick={() => setCurrentPage('credit-cards')}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 mb-1">Cartão de Crédito</p>
            <p className="text-2xl font-bold text-gray-900">R$ 1.759,12</p>
          </div>
          <div className="bg-teal-100 p-3 rounded-full">
            <CreditCard className="w-6 h-6 text-teal-600" />
          </div>
        </div>
      </div>
    </div>
  );

  const renderChart = (data: any[], title: string, total: number, isExpense = false) => (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">{title}</h3>
      
      <div className="flex items-center justify-center mb-6">
        <div className="relative w-64 h-64">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            {data.map((item, index) => {
              const startAngle = data.slice(0, index).reduce((sum, d) => sum + (d.percentage * 3.6), 0);
              const endAngle = startAngle + (item.percentage * 3.6);
              const largeArcFlag = item.percentage > 50 ? 1 : 0;
              
              const x1 = 50 + 35 * Math.cos((startAngle * Math.PI) / 180);
              const y1 = 50 + 35 * Math.sin((startAngle * Math.PI) / 180);
              const x2 = 50 + 35 * Math.cos((endAngle * Math.PI) / 180);
              const y2 = 50 + 35 * Math.sin((endAngle * Math.PI) / 180);

              return (
                <path
                  key={index}
                  d={`M 50 50 L ${x1} ${y1} A 35 35 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                  fill={item.color}
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                  onMouseEnter={() => setHoveredSegment(`${item.name}: R$ ${item.amount.toFixed(2)}`)}
                  onMouseLeave={() => setHoveredSegment(null)}
                />
              );
            })}
            <circle cx="50" cy="50" r="25" fill="white" />
          </svg>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-2xl font-bold text-gray-900">
              R$ {total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </div>
            <div className="text-sm text-gray-500">Total</div>
          </div>
        </div>
      </div>

      {hoveredSegment && (
        <div className="text-center mb-4 p-2 bg-gray-100 rounded-lg">
          <span className="text-sm font-medium text-gray-700">{hoveredSegment}</span>
        </div>
      )}

      <div className="space-y-3">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm text-gray-600">{item.name}</span>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium text-gray-900">
                R$ {item.amount.toFixed(2)}
              </div>
              <div className="text-xs text-gray-500">{item.percentage}%</div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-6 text-purple-600 hover:text-purple-700 font-medium text-sm">
        VER MAIS
      </button>
    </div>
  );

  const renderDashboard = () => (
    <div className="space-y-8">
      {renderMetricCards()}
      
      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {renderChart(expenseCategories, 'Despesas por categoria', 2767.43, true)}
        {renderChart(incomeCategories, 'Receitas por categoria', 3144.75)}
      </div>

      {/* Additional Cards Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Monthly Balance Card */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Balanço Mensal</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-8 bg-green-500 rounded"></div>
                <span className="text-gray-700">Receitas</span>
              </div>
              <span className="font-semibold text-green-600">R$ 3.144,75</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-8 bg-red-500 rounded"></div>
                <span className="text-gray-700">Despesas</span>
              </div>
              <span className="font-semibold text-red-600">R$ 2.691,68</span>
            </div>
            
            <div className="border-t pt-4">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-900">Saldo</span>
                <span className="font-bold text-xl text-gray-900">R$ 453,07</span>
              </div>
            </div>
          </div>

          <button className="w-full mt-6 text-purple-600 hover:text-purple-700 font-medium text-sm">
            VER MAIS
          </button>
        </div>

        {/* Credit Cards Summary */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Cartões de Crédito</h3>
            <div className="flex space-x-2">
              <button className="px-3 py-1 text-sm text-gray-500 hover:text-gray-700">
                Faturas abertas
              </button>
              <button className="px-3 py-1 text-sm bg-teal-500 text-white rounded-lg">
                Faturas fechadas
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-gray-100 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-6 bg-blue-600 text-white text-xs font-bold flex items-center justify-center rounded">
                  VISA
                </div>
                <div>
                  <div className="font-medium text-gray-900">CIBC Sara</div>
                  <div className="text-sm text-teal-600">Fatura paga</div>
                  <div className="text-sm text-red-600">R$ 635,56</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500">13,19%</div>
                <div className="text-xs text-gray-400">Limite disponível R$ 1.736,15</div>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border border-gray-100 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-6 bg-blue-600 text-white text-xs font-bold flex items-center justify-center rounded">
                  VISA
                </div>
                <div>
                  <div className="font-medium text-gray-900">CIBC Rafa</div>
                  <div className="text-sm text-teal-600">Fatura paga</div>
                  <div className="text-sm text-red-600">R$ 478,54</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500">50,19%</div>
                <div className="text-xs text-gray-400">Limite disponível R$ 996,17</div>
              </div>
            </div>
          </div>

          <button className="w-full mt-6 text-purple-600 hover:text-purple-700 font-medium text-sm">
            VER MAIS
          </button>
        </div>
      </div>
    </div>
  );

  const renderAccountsPage = () => (
    <div className="space-y-8">
      {/* Top Summary Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Saldo Atual</p>
              <p className="text-3xl font-bold text-gray-900">R$ 634,15</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <DollarSign className="w-8 h-8 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Saldo Previsto</p>
              <p className="text-3xl font-bold text-gray-900">R$ 1.209,92</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Account Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* CIBC Account */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">CIBC</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">CIBC</h3>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Saldo atual</span>
              <span className="font-semibold text-green-600">R$ 634,15</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Saldo previsto</span>
              <span className="font-semibold text-green-600">R$ 1.209,92</span>
            </div>
          </div>

          <button className="w-full mt-4 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
            ADICIONAR DESPESA
          </button>
        </div>

        {/* Neo Account */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">Neo</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Neo</h3>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Saldo atual</span>
              <span className="font-semibold text-green-600">R$ 0,00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Saldo previsto</span>
              <span className="font-semibold text-green-600">R$ 0,00</span>
            </div>
          </div>

          <button className="w-full mt-4 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
            ADICIONAR DESPESA
          </button>
        </div>

        {/* Add New Account */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border-2 border-dashed border-gray-200 hover:border-purple-300 transition-colors cursor-pointer">
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <Plus className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-purple-600 mb-2">Nova conta</h3>
            <p className="text-sm text-gray-500">Adicione uma nova conta bancária</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderIncomesPage = () => (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Receitas pendentes</p>
              <p className="text-2xl font-bold text-orange-600">R$ 1.907,29</p>
            </div>
            <div className="bg-orange-100 p-3 rounded-full">
              <TrendingUp className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Receitas recebidas</p>
              <p className="text-2xl font-bold text-green-600">R$ 1.237,46</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <TrendingDown className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Total</p>
              <p className="text-2xl font-bold text-green-600">R$ 3.144,75</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <Activity className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-gray-400 hover:text-gray-600">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium">
                Agosto 2025
              </div>
              <button className="flex items-center space-x-2 text-gray-400 hover:text-gray-600">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <button className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
              <Plus className="w-4 h-4" />
              <span>NOVA RECEITA</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Status</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Data</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Descrição</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Categoria</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Conta</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Valor</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-gray-50">
                <td className="py-4 px-6">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                </td>
                <td className="py-4 px-6 text-sm text-gray-900">15/08/2025</td>
                <td className="py-4 px-6 text-sm text-gray-900">Salário Rafa</td>
                <td className="py-4 px-6">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                    Kits House
                  </span>
                </td>
                <td className="py-4 px-6 text-sm text-gray-900">CIBC</td>
                <td className="py-4 px-6 text-sm font-semibold text-green-600">R$ 1.907,29</td>
                <td className="py-4 px-6">
                  <div className="flex items-center space-x-2">
                    <button className="text-gray-400 hover:text-gray-600">
                      <CheckCircle className="w-4 h-4" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-600">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-600">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-4 px-6">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </td>
                <td className="py-4 px-6 text-sm text-gray-900">05/08/2025</td>
                <td className="py-4 px-6 text-sm text-gray-900">Salário Sara</td>
                <td className="py-4 px-6">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                    Gracie Barra Kitsila...
                  </span>
                </td>
                <td className="py-4 px-6 text-sm text-gray-900">CIBC</td>
                <td className="py-4 px-6 text-sm font-semibold text-green-600">R$ 802,34</td>
                <td className="py-4 px-6">
                  <div className="flex items-center space-x-2">
                    <button className="text-gray-400 hover:text-gray-600">
                      <CheckCircle className="w-4 h-4" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-600">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-600">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-4 px-6">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </td>
                <td className="py-4 px-6 text-sm text-gray-900">05/08/2025</td>
                <td className="py-4 px-6 text-sm text-gray-900">Summer Camp</td>
                <td className="py-4 px-6">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                    Salário
                  </span>
                </td>
                <td className="py-4 px-6 text-sm text-gray-900">CIBC</td>
                <td className="py-4 px-6 text-sm font-semibold text-green-600">R$ 435,12</td>
                <td className="py-4 px-6">
                  <div className="flex items-center space-x-2">
                    <button className="text-gray-400 hover:text-gray-600">
                      <CheckCircle className="w-4 h-4" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-600">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-600">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-6 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">
              Linhas por página: 
              <select className="ml-2 border-none bg-transparent">
                <option>50</option>
                <option>100</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">1-3 de 3</span>
              <div className="flex space-x-1">
                <button className="p-1 text-gray-400 hover:text-gray-600">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button className="p-1 text-gray-400 hover:text-gray-600">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderExpensesPage = () => (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Despesas pendentes</p>
              <p className="text-2xl font-bold text-orange-600">R$ 1.245,32</p>
            </div>
            <div className="bg-orange-100 p-3 rounded-full">
              <Clock className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Despesas pagas</p>
              <p className="text-2xl font-bold text-red-600">R$ 1.446,36</p>
            </div>
            <div className="bg-red-100 p-3 rounded-full">
              <CheckCircle className="w-6 h-6 text-red-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Total</p>
              <p className="text-2xl font-bold text-red-600">R$ 2.691,68</p>
            </div>
            <div className="bg-red-100 p-3 rounded-full">
              <Activity className="w-6 h-6 text-red-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-gray-400 hover:text-gray-600">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="bg-red-100 text-red-700 px-4 py-2 rounded-full font-medium">
                Agosto 2025
              </div>
              <button className="flex items-center space-x-2 text-gray-400 hover:text-gray-600">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <button className="flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors">
              <Plus className="w-4 h-4" />
              <span>NOVA DESPESA</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Status</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Data</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Descrição</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Categoria</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Conta</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Valor</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-gray-50">
                <td className="py-4 px-6">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                </td>
                <td className="py-4 px-6 text-sm text-gray-900">28/08/2025</td>
                <td className="py-4 px-6 text-sm text-gray-900">Supermercado Extra</td>
                <td className="py-4 px-6">
                  <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs">
                    Alimentação
                  </span>
                </td>
                <td className="py-4 px-6 text-sm text-gray-900">CIBC</td>
                <td className="py-4 px-6 text-sm font-semibold text-red-600">R$ 245,80</td>
                <td className="py-4 px-6">
                  <div className="flex items-center space-x-2">
                    <button className="text-gray-400 hover:text-gray-600">
                      <CheckCircle className="w-4 h-4" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-600">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-600">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-4 px-6">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </td>
                <td className="py-4 px-6 text-sm text-gray-900">25/08/2025</td>
                <td className="py-4 px-6 text-sm text-gray-900">Posto Shell</td>
                <td className="py-4 px-6">
                  <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs">
                    Transporte
                  </span>
                </td>
                <td className="py-4 px-6 text-sm text-gray-900">CIBC</td>
                <td className="py-4 px-6 text-sm font-semibold text-red-600">R$ 180,50</td>
                <td className="py-4 px-6">
                  <div className="flex items-center space-x-2">
                    <button className="text-gray-400 hover:text-gray-600">
                      <CheckCircle className="w-4 h-4" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-600">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-600">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-4 px-6">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </td>
                <td className="py-4 px-6 text-sm text-gray-900">20/08/2025</td>
                <td className="py-4 px-6 text-sm text-gray-900">Netflix</td>
                <td className="py-4 px-6">
                  <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs">
                    Entretenimento
                  </span>
                </td>
                <td className="py-4 px-6 text-sm text-gray-900">CIBC</td>
                <td className="py-4 px-6 text-sm font-semibold text-red-600">R$ 29,90</td>
                <td className="py-4 px-6">
                  <div className="flex items-center space-x-2">
                    <button className="text-gray-400 hover:text-gray-600">
                      <CheckCircle className="w-4 h-4" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-600">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-600">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-6 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">
              Linhas por página: 
              <select className="ml-2 border-none bg-transparent">
                <option>50</option>
                <option>100</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">1-3 de 3</span>
              <div className="flex space-x-1">
                <button className="p-1 text-gray-400 hover:text-gray-600">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button className="p-1 text-gray-400 hover:text-gray-600">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCreditCardsPage = () => (
    <div className="space-y-8">
      {/* Top Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Sua próxima fatura vence em</p>
              <p className="text-xl font-bold text-gray-900">13 de Agosto, 2025</p>
            </div>
            <div className="bg-teal-100 p-3 rounded-full">
              <CreditCard className="w-6 h-6 text-teal-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Limite Disponível</p>
              <p className="text-2xl font-bold text-green-600">R$ 5.268,07</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Valor Total</p>
              <p className="text-2xl font-bold text-gray-900">R$ 1.114,10</p>
            </div>
            <div className="bg-teal-100 p-3 rounded-full">
              <DollarSign className="w-6 h-6 text-teal-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Credit Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* CIBC Sara Card */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-6 bg-blue-600 text-white text-xs font-bold flex items-center justify-center rounded">
                VISA
              </div>
              <span className="font-semibold text-gray-900">CIBC Sara</span>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-3">
            <div>
              <p className="text-sm text-teal-600 font-medium">Fatura paga</p>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600">Valor pago</span>
              <span className="font-semibold text-red-600">R$ 635,56</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600">Data do pagamento</span>
              <span className="text-gray-900">6 de Agosto, 2025</span>
            </div>

            <div className="mt-4">
              <div className="flex justify-between text-sm mb-1">
                <span>R$ 263,85 de R$ 2.000,00</span>
                <span>13,19%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-teal-500 h-2 rounded-full" style={{ width: '13.19%' }}></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">Limite disponível R$ 1.736,15</p>
            </div>

            <div className="mt-4 text-center">
              <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium">
                FATURA PAGA
              </span>
            </div>
          </div>
        </div>

        {/* CIBC Rafa Card */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-6 bg-blue-600 text-white text-xs font-bold flex items-center justify-center rounded">
                VISA
              </div>
              <span className="font-semibold text-gray-900">CIBC Rafa</span>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-3">
            <div>
              <p className="text-sm text-teal-600 font-medium">Fatura paga</p>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600">Valor pago</span>
              <span className="font-semibold text-red-600">R$ 478,54</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600">Data do pagamento</span>
              <span className="text-gray-900">1 de Agosto, 2025</span>
            </div>

            <div className="mt-4">
              <div className="flex justify-between text-sm mb-1">
                <span>R$ 1.003,83 de R$ 2.000,00</span>
                <span>50,19%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-teal-500 h-2 rounded-full" style={{ width: '50.19%' }}></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">Limite disponível R$ 996,17</p>
            </div>

            <div className="mt-4 text-center">
              <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium">
                FATURA PAGA
              </span>
            </div>
          </div>
        </div>

        {/* Add New Credit Card */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border-2 border-dashed border-gray-200 hover:border-teal-300 transition-colors cursor-pointer">
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
              <Plus className="w-6 h-6 text-teal-600" />
            </div>
            <h3 className="font-semibold text-teal-600 mb-2">Novo cartão de crédito</h3>
            <p className="text-sm text-gray-500">Adicione um novo cartão</p>
          </div>
        </div>

        {/* Neo World Card */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-6 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold flex items-center justify-center rounded">
                MC
              </div>
              <span className="font-semibold text-gray-900">Neo World</span>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-3">
            <div>
              <p className="text-sm text-teal-600 font-medium">Fatura paga</p>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600">Valor pago</span>
              <span className="font-semibold text-red-600">R$ 0,00</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600">Data do pagamento</span>
              <span className="text-gray-900">27 de Julho, 2025</span>
            </div>

            <div className="mt-4">
              <div className="flex justify-between text-sm mb-1">
                <span>R$ 364,25 de R$ 2.500,00</span>
                <span>14,57%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-teal-500 h-2 rounded-full" style={{ width: '14.57%' }}></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">Limite disponível R$ 2.135,75</p>
            </div>

            <div className="mt-4 text-center">
              <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium">
                FATURA PAGA
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTransactionsPage = () => (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Saldo Atual</p>
              <p className="text-2xl font-bold text-gray-900">R$ 634,15</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <Building2 className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Receitas</p>
              <p className="text-2xl font-bold text-green-600">R$ 3.144,75</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Despesas</p>
              <p className="text-2xl font-bold text-red-600">R$ 2.694,97</p>
            </div>
            <div className="bg-red-100 p-3 rounded-full">
              <TrendingDown className="w-6 h-6 text-red-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Balanço Mensal</p>
              <p className="text-2xl font-bold text-gray-900">R$ 449,78</p>
            </div>
            <div className="bg-teal-100 p-3 rounded-full">
              <Activity className="w-6 h-6 text-teal-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-gray-400 hover:text-gray-600">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-medium">
                Agosto 2025
              </div>
              <button className="flex items-center space-x-2 text-gray-400 hover:text-gray-600">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Status</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Data</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Descrição</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Categoria</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Conta</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Valor</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-gray-50">
                <td className="py-4 px-6">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                </td>
                <td className="py-4 px-6 text-sm text-gray-900">30/08/2025</td>
                <td className="py-4 px-6 text-sm text-gray-900">iPhone(2/24)</td>
                <td className="py-4 px-6">
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                    Apple
                  </span>
                </td>
                <td className="py-4 px-6 text-sm text-gray-900">CIBC</td>
                <td className="py-4 px-6 text-sm font-semibold text-red-600">R$ 37,46</td>
                <td className="py-4 px-6">
                  <div className="flex items-center space-x-2">
                    <button className="text-gray-400 hover:text-gray-600">
                      <CheckCircle className="w-4 h-4" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-600">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-600">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
              
              <tr className="bg-gray-50">
                <td colSpan={7} className="py-2 px-6">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Saldo esperado no final do dia</span>
                    <span>R$ 1.206,63</span>
                  </div>
                </td>
              </tr>

              <tr className="hover:bg-gray-50">
                <td className="py-4 px-6">
                  <div className="flex space-x-1">
                    <AlertCircle className="w-4 h-4 text-red-500" />
                    <div className="w-4 h-4 bg-teal-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">$</span>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6 text-sm text-gray-900">27/08/2025</td>
                <td className="py-4 px-6 text-sm text-gray-900">Neo World</td>
                <td className="py-4 px-6">
                  <span className="bg-teal-100 text-teal-700 px-2 py-1 rounded-full text-xs">
                    Cartão Agrupado
                  </span>
                </td>
                <td className="py-4 px-6 text-sm text-gray-900">CIBC</td>
                <td className="py-4 px-6 text-sm font-semibold text-red-600">R$ 648,80</td>
                <td className="py-4 px-6">
                  <div className="flex items-center space-x-2">
                    <button className="text-gray-400 hover:text-gray-600">
                      <CheckCircle className="w-4 h-4" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-600">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-600">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>

              <tr className="bg-gray-50">
                <td colSpan={7} className="py-2 px-6">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Saldo esperado no final do dia</span>
                    <span>R$ 1.244,09</span>
                  </div>
                </td>
              </tr>

              <tr className="hover:bg-gray-50">
                <td className="py-4 px-6">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                </td>
                <td className="py-4 px-6 text-sm text-gray-900">25/08/2025</td>
                <td className="py-4 px-6 text-sm text-gray-900">Novus(9/10)</td>
                <td className="py-4 px-6">
                  <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs">
                    Internet
                  </span>
                </td>
                <td className="py-4 px-6 text-sm text-gray-900">CIBC</td>
                <td className="py-4 px-6 text-sm font-semibold text-red-600">R$ 56,00</td>
                <td className="py-4 px-6">
                  <div className="flex items-center space-x-2">
                    <button className="text-gray-400 hover:text-gray-600">
                      <CheckCircle className="w-4 h-4" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-600">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-600">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-6 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">
              Linhas por página: 
              <select className="ml-2 border-none bg-transparent">
                <option>50</option>
                <option>100</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">1-3 de 3</span>
              <div className="flex space-x-1">
                <button className="p-1 text-gray-400 hover:text-gray-600">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button className="p-1 text-gray-400 hover:text-gray-600">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderGoalsPage = () => (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Suas Metas Financeiras</h2>
          <p className="text-gray-600">Acompanhe seu progresso e alcance seus objetivos</p>
        </div>
        <button className="flex items-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors">
          <Plus className="w-5 h-5" />
          <span>Nova Meta</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Emergency Fund Goal */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Reserva de Emergência</h3>
                <p className="text-sm text-gray-500">6 meses de gastos</p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Progresso</span>
                <span className="font-medium">R$ 2.500 / R$ 15.000</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-blue-500 h-3 rounded-full" style={{ width: '16.67%' }}></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">16,67% concluído</p>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Prazo</span>
              <span className="text-gray-900">Dezembro 2025</span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Economia mensal necessária</span>
              <span className="font-semibold text-blue-600">R$ 2.500</span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center space-x-2 text-sm text-green-600">
              <CheckCircle className="w-4 h-4" />
              <span>No caminho certo! 🎯</span>
            </div>
          </div>
        </div>

        {/* Vacation Goal */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">✈️</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Viagem Europa</h3>
                <p className="text-sm text-gray-500">Férias dos sonhos</p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Progresso</span>
                <span className="font-medium">R$ 4.200 / R$ 8.000</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-orange-500 h-3 rounded-full" style={{ width: '52.5%' }}></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">52,5% concluído</p>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Prazo</span>
              <span className="text-gray-900">Junho 2025</span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Economia mensal necessária</span>
              <span className="font-semibold text-orange-600">R$ 950</span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center space-x-2 text-sm text-green-600">
              <CheckCircle className="w-4 h-4" />
              <span>Mais da metade! 🚀</span>
            </div>
          </div>
        </div>

        {/* Car Goal */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🚗</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Carro Novo</h3>
                <p className="text-sm text-gray-500">Entrada do financiamento</p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Progresso</span>
                <span className="font-medium">R$ 8.500 / R$ 25.000</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-purple-500 h-3 rounded-full" style={{ width: '34%' }}></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">34% concluído</p>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Prazo</span>
              <span className="text-gray-900">Março 2026</span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Economia mensal necessária</span>
              <span className="font-semibold text-purple-600">R$ 1.375</span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center space-x-2 text-sm text-orange-600">
              <Clock className="w-4 h-4" />
              <span>Acelere um pouco! ⚡</span>
            </div>
          </div>
        </div>

        {/* Create New Goal Card */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border-2 border-dashed border-gray-200 hover:border-green-300 transition-colors cursor-pointer">
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Plus className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-semibold text-green-600 mb-2">Criar Nova Meta</h3>
            <p className="text-sm text-gray-500">Defina um novo objetivo financeiro</p>
          </div>
        </div>
      </div>

      {/* Achievement Section */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-2xl border border-green-100">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-3xl">🏆</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">Parabéns!</h3>
            <p className="text-gray-600">Você completou 2 metas este ano. Continue assim!</p>
            <div className="flex items-center space-x-4 mt-2">
              <div className="flex items-center space-x-1">
                <span className="text-2xl">🎯</span>
                <span className="text-sm font-medium text-gray-700">Meta Concluída: Curso Online</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-2xl">💰</span>
                <span className="text-sm font-medium text-gray-700">Meta Concluída: Notebook Novo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderReportsPage = () => (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Relatórios Financeiros</h2>
          <p className="text-gray-600">Análises detalhadas das suas finanças</p>
        </div>
        <button className="flex items-center space-x-2 bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors">
          <Download className="w-5 h-5" />
          <span>Exportar PDF</span>
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Economia Total</p>
              <p className="text-2xl font-bold text-green-600">R$ 15.234,50</p>
              <p className="text-xs text-green-600">+12% vs mês anterior</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Gasto Médio Mensal</p>
              <p className="text-2xl font-bold text-red-600">R$ 2.456,78</p>
              <p className="text-xs text-red-600">-5% vs mês anterior</p>
            </div>
            <div className="bg-red-100 p-3 rounded-full">
              <TrendingDown className="w-6 h-6 text-red-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Maior Categoria</p>
              <p className="text-xl font-bold text-gray-900">Casa</p>
              <p className="text-xs text-gray-600">37% dos gastos</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <PieChart className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Score Financeiro</p>
              <p className="text-2xl font-bold text-blue-600">8.5/10</p>
              <p className="text-xs text-blue-600">Excelente!</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Monthly Trend Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Tendência Mensal</h3>
            <select className="text-sm border border-gray-200 rounded-lg px-3 py-1">
              <option>Últimos 6 meses</option>
              <option>Último ano</option>
            </select>
          </div>
          
          <div className="h-64 flex items-end justify-between space-x-2">
            {[2100, 2400, 1800, 2600, 2200, 2800].map((value, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <div 
                  className="bg-blue-500 rounded-t w-8 hover:bg-blue-600 transition-colors cursor-pointer"
                  style={{ height: `${(value / 3000) * 200}px` }}
                  title={`R$ ${value}`}
                />
                <span className="text-xs text-gray-500">
                  {['Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago'][index]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Category Comparison */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Comparação por Categoria</h3>
            <select className="text-sm border border-gray-200 rounded-lg px-3 py-1">
              <option>Este mês vs anterior</option>
              <option>Este ano vs anterior</option>
            </select>
          </div>

          <div className="space-y-4">
            {[
              { name: 'Casa', current: 1027, previous: 950, color: 'bg-purple-500' },
              { name: 'Transporte', current: 650, previous: 720, color: 'bg-green-500' },
              { name: 'Alimentação', current: 480, previous: 520, color: 'bg-blue-500' },
              { name: 'Entretenimento', current: 320, previous: 280, color: 'bg-yellow-500' }
            ].map((category, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-gray-700">{category.name}</span>
                  <span className={`text-sm ${category.current > category.previous ? 'text-red-600' : 'text-green-600'}`}>
                    {category.current > category.previous ? '+' : ''}
                    {((category.current - category.previous) / category.previous * 100).toFixed(1)}%
                  </span>
                </div>
                <div className="flex space-x-2">
                  <div className="flex-1">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>Atual: R$ {category.current}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`${category.color} h-2 rounded-full`}
                        style={{ width: `${(category.current / 1200) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>Anterior: R$ {category.previous}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`${category.color} opacity-50 h-2 rounded-full`}
                        style={{ width: `${(category.previous / 1200) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Insights Section */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">💡 Insights Personalizados</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <TrendingUp className="w-5 h-5 text-green-500" />
              <span className="font-medium text-gray-900">Economia Crescente</span>
            </div>
            <p className="text-sm text-gray-600">
              Você economizou 12% mais este mês! Continue assim para atingir suas metas mais rapidamente.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <AlertCircle className="w-5 h-5 text-orange-500" />
              <span className="font-medium text-gray-900">Atenção: Entretenimento</span>
            </div>
            <p className="text-sm text-gray-600">
              Seus gastos com entretenimento aumentaram 14%. Considere revisar este orçamento.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSettingsPage = () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Configurações</h2>
        <p className="text-gray-600">Gerencie suas preferências e configurações da conta</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Settings */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Informações do Perfil</h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Alterar foto
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    defaultValue="Rafael Silva"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    defaultValue="rafael@email.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Telefone
                </label>
                <input
                  type="tel"
                  defaultValue="+55 (11) 99999-9999"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <button className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors">
                Salvar alterações
              </button>
            </div>
          </div>

          {/* Security Settings */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Segurança</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-green-500" />
                  <div>
                    <p className="font-medium text-gray-900">Autenticação de dois fatores</p>
                    <p className="text-sm text-gray-500">Adicione uma camada extra de segurança</p>
                  </div>
                </div>
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-600 transition-colors">
                  Ativado
                </button>
              </div>

              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Lock className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="font-medium text-gray-900">Alterar senha</p>
                    <p className="text-sm text-gray-500">Última alteração há 3 meses</p>
                  </div>
                </div>
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  Alterar
                </button>
              </div>

              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Eye className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="font-medium text-gray-900">Sessões ativas</p>
                    <p className="text-sm text-gray-500">Gerencie dispositivos conectados</p>
                  </div>
                </div>
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  Ver todas
                </button>
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Notificações</h3>
            
            <div className="space-y-4">
              {[
                { title: 'Transações', desc: 'Notificações sobre novas transações', enabled: true },
                { title: 'Metas', desc: 'Atualizações sobre progresso das metas', enabled: true },
                { title: 'Faturas', desc: 'Lembretes de vencimento de faturas', enabled: true },
                { title: 'Relatórios', desc: 'Relatórios mensais por email', enabled: false },
                { title: 'Marketing', desc: 'Dicas e novidades do Finley', enabled: false }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                  <button
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      item.enabled ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        item.enabled ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Preferences Sidebar */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Preferências</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Moeda padrão
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Real Brasileiro (R$)</option>
                  <option>Dólar Americano ($)</option>
                  <option>Euro (€)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Idioma
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Português (BR)</option>
                  <option>English (US)</option>
                  <option>Español</option>
                </select>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Modo escuro</p>
                  <p className="text-sm text-gray-500">Tema escuro para a interface</p>
                </div>
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    isDarkMode ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      isDarkMode ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Conta</h3>
            
            <div className="space-y-3">
              <button className="w-full text-left px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                Exportar dados
              </button>
              <button className="w-full text-left px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                Política de privacidade
              </button>
              <button className="w-full text-left px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                Termos de uso
              </button>
              <button 
                onClick={onLogout}
                className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                Sair da conta
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderHelpPage = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Como podemos ajudar?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Encontre respostas para suas dúvidas ou entre em contato com nossa equipe de suporte
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Pesquisar na central de ajuda..."
            className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
          />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow cursor-pointer">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <HelpCircle className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Perguntas Frequentes</h3>
          <p className="text-sm text-gray-600">Respostas para as dúvidas mais comuns</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow cursor-pointer">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Falar com Suporte</h3>
          <p className="text-sm text-gray-600">Chat ao vivo com nossa equipe</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow cursor-pointer">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="w-8 h-8 text-purple-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Tutoriais</h3>
          <p className="text-sm text-gray-600">Guias passo a passo</p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Perguntas Frequentes</h3>
        
        <div className="space-y-4">
          {[
            {
              question: "Como adicionar uma nova conta bancária?",
              answer: "Vá para a página 'Contas', clique em 'Nova conta' e preencha as informações solicitadas. Suas informações são protegidas com criptografia de ponta."
            },
            {
              question: "Como categorizar minhas transações?",
              answer: "As transações são categorizadas automaticamente usando IA. Você pode alterar a categoria clicando na transação e selecionando uma nova categoria."
            },
            {
              question: "Posso definir metas de economia?",
              answer: "Sim! Vá para a página 'Metas', clique em 'Nova Meta' e defina seu objetivo, valor e prazo. O Finley te ajudará a acompanhar o progresso."
            },
            {
              question: "Como funciona a sincronização bancária?",
              answer: "Utilizamos conexões seguras com os bancos para importar suas transações automaticamente. Seus dados são criptografados e nunca compartilhados."
            },
            {
              question: "Posso exportar meus dados?",
              answer: "Sim, você pode exportar seus dados em formato CSV ou PDF através da página de Configurações ou Relatórios."
            }
          ].map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <button className="w-full text-left flex items-center justify-between">
                <h4 className="font-semibold text-gray-900">{faq.question}</h4>
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </button>
              <p className="text-gray-600 mt-3">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-100">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ainda precisa de ajuda?</h3>
          <p className="text-gray-600 mb-6">
            Nossa equipe está sempre pronta para ajudar você a aproveitar ao máximo o Finley
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              <User className="w-5 h-5" />
              <span>Chat ao vivo</span>
            </button>
            <button className="flex items-center space-x-2 bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
              <Mail className="w-5 h-5" />
              <span>Enviar email</span>
            </button>
          </div>
          
          <p className="text-sm text-gray-500 mt-4">
            Tempo médio de resposta: 2 horas • Disponível 24/7
          </p>
        </div>
      </div>
    </div>
  );

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'accounts':
        return renderAccountsPage();
      case 'incomes':
        return renderIncomesPage();
      case 'expenses':
        return renderExpensesPage();
      case 'credit-cards':
        return renderCreditCardsPage();
      case 'transactions':
        return renderTransactionsPage();
      case 'goals':
        return renderGoalsPage();
      case 'reports':
        return renderReportsPage();
      case 'settings':
        return renderSettingsPage();
      case 'help':
        return renderHelpPage();
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {renderSidebar()}
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {renderTopBar()}
        
        <main className="flex-1 overflow-y-auto p-6">
          {renderCurrentPage()}
        </main>
      </div>

      {/* Filter Dropdown Overlay */}
      {isFilterOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsFilterOpen(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;