import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Search, 
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  ArrowUpDown,
  Trash2,
  Calendar,
  DollarSign,
  CreditCard,
  CheckCircle
} from 'lucide-react';

interface Transaction {
  id: string;
  date: string;
  description: string;
  category: string;
  categoryIcon: string;
  categoryColor: string;
  value: number;
  status: 'completed' | 'pending';
}

interface CardDetailProps {
  card: {
    id: number;
    name: string;
    type: string;
    balance: number;
    dueDate: string;
    color: string;
  };
  onBack: () => void;
}

const CardDetail: React.FC<CardDetailProps> = ({ card, onBack }) => {
  const [selectedMonth, setSelectedMonth] = useState('August 2025');
  
  const transactions: Transaction[] = [
    {
      id: '1',
      date: '07/01/2025',
      description: 'SkyTrain Monthly Pass',
      category: 'SkyTrain',
      categoryIcon: '🚊',
      categoryColor: 'bg-blue-500',
      value: 201.55,
      status: 'completed'
    },
    {
      id: '2',
      date: '07/05/2025',
      description: 'Dollarama',
      category: 'Home',
      categoryIcon: '🏠',
      categoryColor: 'bg-purple-500',
      value: 37.87,
      status: 'completed'
    },
    {
      id: '3',
      date: '07/05/2025',
      description: 'Lunch Sara-Mika',
      category: 'Restaurant',
      categoryIcon: '🍽️',
      categoryColor: 'bg-red-500',
      value: 32.45,
      status: 'completed'
    },
    {
      id: '4',
      date: '07/05/2025',
      description: 'Save On Foods',
      category: 'Supermarket',
      categoryIcon: '🛒',
      categoryColor: 'bg-gray-800',
      value: 8.90,
      status: 'completed'
    },
    {
      id: '5',
      date: '07/05/2025',
      description: 'Tommy',
      category: 'Cloth',
      categoryIcon: '👕',
      categoryColor: 'bg-gray-500',
      value: 75.19,
      status: 'completed'
    },
    {
      id: '6',
      date: '07/05/2025',
      description: 'Advance payment',
      category: 'Credit*',
      categoryIcon: '💳',
      categoryColor: 'bg-green-500',
      value: -278.17,
      status: 'completed'
    },
    {
      id: '7',
      date: '07/07/2025',
      description: 'ILAC',
      category: 'ILAC',
      categoryIcon: '🎓',
      categoryColor: 'bg-red-600',
      value: 1069.79,
      status: 'completed'
    },
    {
      id: '8',
      date: '07/19/2025',
      description: 'Google One',
      category: 'Streaming',
      categoryIcon: '📱',
      categoryColor: 'bg-yellow-500',
      value: 4.47,
      status: 'completed'
    }
  ];

  const invoiceAmount = transactions.reduce((sum, transaction) => sum + transaction.value, 0);

  const navigateMonth = (direction: 'prev' | 'next') => {
    // Month navigation logic would go here
    console.log(`Navigate ${direction}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white px-4 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center space-x-4">
          <button
            onClick={onBack}
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="bg-teal-600 text-white px-4 py-2 rounded-full">
            <span className="font-medium">Card: {card.name}</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <Search className="w-6 h-6" />
          </button>
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <MoreVertical className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="flex">
        {/* Left Sidebar - Desktop only */}
        <div className="hidden lg:block w-16 bg-white shadow-sm">
          <div className="p-4 space-y-6">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <div className="space-y-4">
              <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">+</span>
              </div>
              <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                <div className="w-4 h-4 bg-gray-400 rounded-sm"></div>
              </div>
              <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                <div className="w-4 h-4 bg-gray-400 rounded-sm"></div>
              </div>
              <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                <div className="w-4 h-4 bg-gray-400 rounded-sm"></div>
              </div>
              <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                <div className="w-4 h-4 bg-gray-400 rounded-sm"></div>
              </div>
              <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                <div className="w-4 h-4 bg-gray-400 rounded-sm"></div>
              </div>
              <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                <div className="w-4 h-4 bg-gray-400 rounded-sm"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Month Navigation */}
          <div className="bg-white px-4 py-6 flex items-center justify-center space-x-6">
            <button
              onClick={() => navigateMonth('prev')}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="border-2 border-teal-600 text-teal-600 px-6 py-2 rounded-full font-medium">
              {selectedMonth}
            </div>
            <button
              onClick={() => navigateMonth('next')}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Transactions Table */}
          <div className="bg-white mx-4 rounded-lg shadow-sm overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-6 gap-4 px-6 py-4 bg-gray-50 text-sm font-medium text-gray-600 border-b">
              <div className="flex items-center space-x-1">
                <span>Status</span>
              </div>
              <div className="flex items-center space-x-1">
                <span>Date</span>
                <ArrowUpDown className="w-4 h-4" />
              </div>
              <div>Description</div>
              <div>Category</div>
              <div>Value</div>
              <div>Actions</div>
            </div>

            {/* Transaction Rows */}
            <div className="divide-y divide-gray-100">
              {transactions.map((transaction) => (
                <div key={transaction.id} className="grid grid-cols-6 gap-4 px-6 py-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex items-center text-gray-900">
                    {transaction.date}
                  </div>
                  <div className="flex items-center text-gray-900 font-medium">
                    {transaction.description}
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className={`w-8 h-8 ${transaction.categoryColor} rounded-full flex items-center justify-center text-white text-sm`}>
                      {transaction.categoryIcon}
                    </div>
                    <span className="text-gray-600">{transaction.category}</span>
                  </div>
                  <div className="flex items-center">
                    <span className={`font-semibold ${transaction.value < 0 ? 'text-green-500' : 'text-red-500'}`}>
                      ${Math.abs(transaction.value).toFixed(2)}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <button className="text-gray-400 hover:text-red-500 transition-colors">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar - Card Info */}
        <div className="hidden xl:block w-80 bg-white shadow-sm p-6 space-y-6">
          {/* Invoice Amount */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Invoice amount</span>
              <div className="w-8 h-8 bg-teal-600 rounded flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900">
              ${invoiceAmount.toFixed(2)}
            </div>
          </div>

          {/* Status */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Status</span>
              <div className="w-8 h-8 bg-teal-600 rounded flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="text-xl font-bold text-gray-900">
              Paid invoice
            </div>
          </div>

          {/* Closing Day */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Closing day</span>
              <div className="w-8 h-8 bg-teal-600 rounded flex items-center justify-center">
                <Calendar className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="text-xl font-bold text-gray-900">
              July 30
            </div>
          </div>

          {/* Due Date */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Due date</span>
              <div className="w-8 h-8 bg-teal-600 rounded flex items-center justify-center">
                <Calendar className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="text-xl font-bold text-gray-900">
              August 6
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;