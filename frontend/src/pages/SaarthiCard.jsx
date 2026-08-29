import React, { useState } from 'react';
import { FiPlus, FiList, FiLock, FiUnlock, FiSettings, FiNavigation, FiTruck, FiCreditCard, FiArrowDown, FiArrowUp, FiActivity, FiFlag, FiZap, FiX } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const SaarthiCard = () => {
  const navigate = useNavigate();
  const [balance, setBalance] = useState(850);
  const [isFrozen, setIsFrozen] = useState(false);
  const [showAddMoney, setShowAddMoney] = useState(false);
  const [addAmount, setAddAmount] = useState('');
  const [transactions, setTransactions] = useState([
    { title: 'Metro (Blue Line)', amount: '₹30', time: 'Today', icon: '🚇', type: 'debit' },
    { title: 'Bus 127', amount: '₹10', time: 'Today', icon: '🚌', type: 'debit' },
    { title: 'E-rickshaw', amount: '₹15', time: 'Today', icon: '🛺', type: 'debit' },
    { title: 'Card Recharge', amount: '₹500', time: 'Yesterday', icon: '💳', type: 'credit' },
    { title: 'DTC Bus 423', amount: '₹15', time: 'Yesterday', icon: '🚌', type: 'debit' },
    { title: 'E-rickshaw', amount: '₹20', time: 'Yesterday', icon: '🛺', type: 'debit' },
    { title: 'Metro (Yellow Line)', amount: '₹40', time: 'Mon, 28 Aug', icon: '🚇', type: 'debit' },
  ]);

  const handleAddMoney = () => {
    if (!addAmount) return;
    const amt = parseInt(addAmount.replace('₹', ''));
    if (isNaN(amt)) return;
    
    setBalance(prev => prev + amt);
    setTransactions(prev => [
      { title: 'Card Recharge', amount: `₹${amt}`, time: 'Just Now', icon: '💳', type: 'credit' },
      ...prev
    ]);
    setShowAddMoney(false);
    setAddAmount('');
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <div className="p-4 space-y-6">
        <header className="flex justify-between items-center mb-2">
          <h1 className="text-2xl font-bold text-slate-900">Saarthi Card</h1>
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-slate-200 shadow-sm">
            <FiSettings className="text-slate-600" />
          </div>
        </header>

        {/* Card Visual */}
        <div className={`relative overflow-hidden rounded-2xl p-6 shadow-xl transition-all duration-300 ${isFrozen ? 'bg-slate-600' : 'bg-gradient-to-br from-sky-500 to-sky-700'}`}>
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-white opacity-10 rounded-full blur-xl"></div>
          <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-24 h-24 bg-white opacity-10 rounded-full blur-lg"></div>
          
          <div className="relative z-10 text-white flex justify-between items-start mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-6 bg-yellow-400 rounded-sm opacity-80 border border-yellow-300 shadow-inner"></div>
              <span className="font-semibold text-lg tracking-wide">Saarthi</span>
            </div>
            <div className={`px-2 py-1 rounded text-xs font-bold uppercase tracking-wider ${isFrozen ? 'bg-red-500/80' : 'bg-green-500/80'}`}>
              {isFrozen ? 'Frozen' : 'Active'}
            </div>
          </div>
          
          <div className="relative z-10 text-white mb-6">
            <p className="text-sm opacity-80 mb-1 font-medium">Card Number</p>
            <p className="text-2xl font-mono tracking-widest text-shadow-sm">XXXX XXXX XXXX 2847</p>
          </div>
          
          <div className="relative z-10 text-white flex justify-between items-end">
            <div>
              <p className="text-[10px] opacity-80 uppercase tracking-wider mb-1">Card Holder</p>
              <p className="font-bold tracking-wide">ARYAN SHARMA</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] opacity-80 uppercase tracking-wider mb-1">Expires</p>
              <p className="font-bold tracking-wide">12/28</p>
            </div>
          </div>
        </div>

        {/* Balance Display */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 flex justify-between items-center">
          <div>
            <p className="text-sm text-slate-500 font-medium">Available Balance</p>
            <p className="text-3xl font-bold text-slate-900 mt-1">₹{balance}</p>
          </div>
          <button 
            onClick={() => setShowAddMoney(true)}
            disabled={isFrozen}
            className={`w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-md ${isFrozen ? 'bg-slate-200 text-slate-400' : 'bg-sky-500 text-white hover:bg-sky-600 shadow-sky-200'}`}
          >
            <FiPlus />
          </button>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <button 
            onClick={() => setShowAddMoney(true)}
            disabled={isFrozen}
            className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center justify-center space-y-2 hover:bg-sky-50"
          >
            <FiPlus className="text-sky-500 text-2xl" />
            <span className="text-sm font-medium text-slate-700">Add Money</span>
          </button>
          <button 
            onClick={() => navigate('/wallet')}
            className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center justify-center space-y-2 hover:bg-sky-50"
          >
            <FiList className="text-sky-500 text-2xl" />
            <span className="text-sm font-medium text-slate-700">Transactions</span>
          </button>
          <button 
            onClick={() => setIsFrozen(!isFrozen)}
            className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center justify-center space-y-2 hover:bg-sky-50"
          >
            {isFrozen ? <FiUnlock className="text-green-500 text-2xl" /> : <FiLock className="text-amber-500 text-2xl" />}
            <span className="text-sm font-medium text-slate-700">{isFrozen ? 'Unfreeze' : 'Freeze Card'}</span>
          </button>
          <button 
            className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center justify-center space-y-2 hover:bg-sky-50"
          >
            <FiSettings className="text-slate-500 text-2xl" />
            <span className="text-sm font-medium text-slate-700">Manage</span>
          </button>
        </div>

        {/* Transaction Demo Section */}
        <div className="bg-sky-50 rounded-2xl p-5 border border-sky-100">
          <h3 className="font-bold text-slate-900 mb-3 text-sm">Today's Journey Transactions</h3>
          <div className="space-y-3 mb-4">
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-700 flex items-center"><span className="mr-2">🛺</span> E-rickshaw (Home → Stand)</span>
              <span className="font-semibold text-slate-900">-₹15</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-700 flex items-center"><span className="mr-2">🚌</span> Bus 127 (Stand → Metro)</span>
              <span className="font-semibold text-slate-900">-₹10</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-700 flex items-center"><span className="mr-2">🚇</span> Metro (AIIMS → IIT Delhi)</span>
              <span className="font-semibold text-slate-900">-₹30</span>
            </div>
          </div>
          <div className="border-t border-sky-200 pt-3 flex justify-between items-center">
            <span className="font-bold text-slate-800">Total Deducted</span>
            <span className="font-bold text-red-500">-₹55</span>
          </div>
          <div className="mt-3 bg-white p-3 rounded-lg border border-sky-100 text-center">
            <p className="text-xs font-medium text-slate-600">Opening Balance: <span className="text-slate-400 line-through">₹850</span> → Closing: <span className="text-sky-600 font-bold">₹795</span></p>
          </div>
        </div>

        {/* Recent Transactions List */}
        <div>
          <h3 className="font-bold text-slate-900 mb-4 px-1">Recent Activity</h3>
          <div className="space-y-3">
            {transactions.map((tx, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl ${tx.type === 'credit' ? 'bg-green-50 text-green-500' : 'bg-slate-50 text-slate-600'}`}>
                    {tx.icon}
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-sm">{tx.title}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{tx.time}</p>
                  </div>
                </div>
                <span className={`font-bold ${tx.type === 'credit' ? 'text-green-500' : 'text-slate-900'}`}>
                  {tx.type === 'credit' ? '+' : '-'}{tx.amount}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Add Money Modal */}
        {showAddMoney && (
          <div className="fixed inset-0 bg-slate-900/50 flex items-end sm:items-center justify-center z-50 p-4 sm:p-0">
            <div className="bg-white rounded-t-3xl sm:rounded-3xl p-6 w-full max-w-sm w-full animate-slide-up">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-slate-900">Add Money</h2>
                <button onClick={() => setShowAddMoney(false)} className="p-2 bg-slate-100 rounded-full text-slate-600">
                  <FiX />
                </button>
              </div>
              
              <div className="relative mb-6">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-slate-400 font-medium">₹</span>
                <input 
                  type="number"
                  value={addAmount.replace('₹', '')}
                  onChange={(e) => setAddAmount('₹' + e.target.value)}
                  placeholder="0"
                  className="w-full bg-slate-50 border-2 border-sky-100 rounded-2xl py-4 pl-12 pr-4 text-3xl font-bold text-slate-900 focus:outline-none focus:border-sky-500 transition-colors"
                  autoFocus
                />
              </div>
              
              <div className="grid grid-cols-4 gap-2 mb-8">
                {['100', '200', '500', '1000'].map(amt => (
                  <button 
                    key={amt}
                    onClick={() => setAddAmount('₹' + amt)}
                    className="bg-sky-50 text-sky-700 py-2 rounded-xl font-semibold border border-sky-100 hover:bg-sky-100 text-sm"
                  >
                    +₹{amt}
                  </button>
                ))}
              </div>
              
              <button 
                onClick={handleAddMoney}
                disabled={!addAmount || addAmount === '₹'}
                className="w-full bg-sky-500 disabled:bg-slate-200 disabled:text-slate-400 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-sky-200 transition-colors"
              >
                Proceed to Pay {addAmount}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SaarthiCard;
