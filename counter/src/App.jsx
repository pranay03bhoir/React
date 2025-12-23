import { useState } from 'react';
import { Plus, Minus, Trash2, RefreshCw } from 'lucide-react';

function App() {
  const [counters, setCounters] = useState([{ id: 1, value: 0 }]);

  const addCounter = () => {
    setCounters([...counters, { id: Date.now(), value: 0 }]);
  };

  const incrementCounter = (id) => {
    setCounters(counters.map(counter =>
      counter.id === id ? { ...counter, value: counter.value + 1 } : counter
    ));
  };

  const decrementCounter = (id) => {
    setCounters(counters.map(counter =>
      counter.id === id ? { ...counter, value: Math.max(0, counter.value - 1) } : counter
    ));
  };

  const resetCounter = (id) => {
    setCounters(counters.map(counter =>
      counter.id === id ? { ...counter, value: 0 } : counter
    ));
  };

  const removeCounter = (id) => {
    if (counters.length > 1) {
      setCounters(counters.filter(counter => counter.id !== id));
    }
  };

  const CounterCard = ({ counter }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Counter #{counter.id}</h3>
          {counters.length > 1 && (
            <button
              onClick={() => removeCounter(counter.id)}
              className="text-gray-400 hover:text-red-500 transition-colors"
              aria-label="Remove counter"
            >
              <Trash2 size={18} />
            </button>
          )}
        </div>
        
        <div className="text-center my-6">
          <span className="text-5xl font-bold text-indigo-600">{counter.value}</span>
        </div>
        
        <div className="flex justify-between space-x-3">
          <button
            onClick={() => decrementCounter(counter.id)}
            className="flex-1 bg-red-100 hover:bg-red-200 text-red-600 font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <Minus size={18} />
          </button>
          
          <button
            onClick={() => resetCounter(counter.id)}
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-600 font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <RefreshCw size={16} />
          </button>
          
          <button
            onClick={() => incrementCounter(counter.id)}
            className="flex-1 bg-green-100 hover:bg-green-200 text-green-600 font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <Plus size={18} />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Counter App</h1>
          <p className="text-gray-600">Create and manage multiple counters with ease</p>
        </div>
        
        <div className="flex justify-center mb-12">
          <button
            onClick={addCounter}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <Plus size={20} />
            Add New Counter
          </button>
        </div>

        {counters.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl shadow-sm">
            <p className="text-gray-500">No counters yet. Add one to get started!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {counters.map((counter) => (
              <CounterCard key={counter.id} counter={counter} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
