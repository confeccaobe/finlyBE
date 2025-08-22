import React, { useState } from 'react';
import { 
  Home, 
  List, 
  Plus, 
  PieChart, 
  MoreHorizontal,
  ChevronDown,
  Eye,
  ArrowUp,
  ArrowDown,
  CreditCard,
  LogOut,
  Crown
} from 'lucide-react';

interface DashboardProps {
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  const [selectedMonth, setSelectedMonth] = useState('August');
  const [activeTab, setActiveTab] = useState('open');
  const [showBalance, setShowBalance] = useState(true);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const creditCards = [
    {
      id: 1,
      name: 'CIBC Sara',
      type: 'VISA',
      balance: 345.10,
      dueDate: '30/Aug',
      color: 'bg-blue-600'
    },
    {
      id: 2,
      name: 'CIBC Rafa',
      type: 'VISA',
      balance: 7.40,
      dueDate: '24/Aug',
      color: 'bg-blue-600'
    },
    {
      id: 3,
      name: 'Neo World',
      type: 'Mastercard',
      balance: 914.30,
      dueDate: '08/Sep',
      color: 'bg-gradient-to-r from-red-500 to-orange-500'
    },
    {
      id: 4,
      name: 'Neo Sara',
      type: 'Mastercard',
      balance: 100.00,
      dueDate: '06/Sep',
      color: 'bg-gradient-to-r from-red-500 to-orange-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-lg">U</span>
            </div>
            <div className="absolute -top-1 -right-1 bg-yellow-400 rounded-full p-1">
              <Crown className="w-3 h-3 text-yellow-800" />
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <select 
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="text-gray-600 bg-transparent border-none text-lg font-medium focus:outline-none appearance-none pr-6"
          >
            {months.map(month => (
              <option key={month} value={month}>{month}</option>
            ))}
          </select>
          <ChevronDown className="w-5 h-5 text-gray-400 -ml-6 pointer-events-none" />
        </div>

        <button
          onClick={onLogout}
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          <LogOut className="w-5 h-5" />
        </button>
      </div>

      {/* Balance Card */}
      <div className="bg-white mx-4 mt-4 rounded-2xl p-6 shadow-sm">
        <div className="text-center">
          <p className="text-gray-500 text-sm mb-2">Account balance</p>
          <div className="flex items-center justify-center space-x-3">
            <h1 className="text-4xl font-bold text-gray-900">
              {showBalance ? '$487.10' : '••••••'}
            </h1>
            <button
              onClick={() => setShowBalance(!showBalance)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <Eye className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="flex justify-between mt-8">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
              <ArrowUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Income</p>
              <p className="text-green-500 font-semibold text-lg">$6,659.98</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
              <ArrowDown className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Expenses</p>
              <p className="text-red-500 font-semibold text-lg">$4,237.77</p>
            </div>
          </div>
        </div>
      </div>

      {/* Credit Cards Section */}
      <div className="mt-6 px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Credit cards</h2>
          <CreditCard className="w-6 h-6 text-gray-400" />
        </div>

        <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
          {/* Tabs */}
          <div className="flex">
            <button
              onClick={() => setActiveTab('open')}
              className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                activeTab === 'open'
                  ? 'bg-teal-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Open invoices
            </button>
            <button
              onClick={() => setActiveTab('closed')}
              className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                activeTab === 'closed'
                  ? 'bg-teal-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Closed invoices
            </button>
          </div>

          {/* Credit Cards List */}
          <div className="p-4 space-y-4">
            {creditCards.map((card) => (
              <div key={card.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-8 ${card.color} rounded flex items-center justify-center`}>
                    <span className="text-white text-xs font-bold">
                      {card.type === 'VISA' ? 'VISA' : 'MC'}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{card.name}</h3>
                    <p className="text-gray-500 text-sm">Closes on {card.dueDate}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <p className="text-red-500 font-semibold">${card.balance.toFixed(2)}</p>
                  <button className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                    <Plus className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 safe-area-pb">
        <div className="flex items-center justify-around">
          <button className="flex flex-col items-center space-y-1 py-2 px-3">
            <Home className="w-6 h-6 text-blue-600" />
            <span className="text-xs text-blue-600 font-medium">Dashboard</span>
          </button>
          
          <button className="flex flex-col items-center space-y-1 py-2 px-3">
            <List className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-400">Transactions</span>
          </button>
          
          <button className="w-14 h-14 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center -mt-6 shadow-lg">
            <Plus className="w-8 h-8 text-white" />
          </button>
          
          <button className="flex flex-col items-center space-y-1 py-2 px-3">
            <PieChart className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-400">Budget</span>
          </button>
          
          <button className="flex flex-col items-center space-y-1 py-2 px-3">
            <MoreHorizontal className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-400">More</span>
          </button>
        </div>
      </div>

      {/* Bottom padding to account for fixed navigation */}
      <div className="h-20"></div>
    </div>
  );
};

export default Dashboard;