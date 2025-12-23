import { useState } from 'react';
import { Plus, Minus, Trash2, RefreshCw } from 'lucide-react';
import './App.css';

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
    <div className="counter-card">
      <div className="card-content">
        <div className="card-header">
          <h3 className="card-title">Counter #{counter.id}</h3>
          {counters.length > 1 && (
            <button
              onClick={() => removeCounter(counter.id)}
              className="btn-icon"
              aria-label="Remove counter"
            >
              <Trash2 size={18} />
            </button>
          )}
        </div>
        
        <div className="counter-display">
          <span className="count-value">{counter.value}</span>
        </div>
        
        <div className="card-actions">
          <button
            onClick={() => decrementCounter(counter.id)}
            className="btn-action btn-decrement"
            aria-label="Decrement"
          >
            <Minus size={18} />
          </button>
          
          <button
            onClick={() => resetCounter(counter.id)}
            className="btn-action btn-reset"
            aria-label="Reset"
          >
            <RefreshCw size={16} />
          </button>
          
          <button
            onClick={() => incrementCounter(counter.id)}
            className="btn-action btn-increment"
            aria-label="Increment"
          >
            <Plus size={18} />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="app-container">
      <div className="content-wrapper">
        <div className="header">
          <h1 className="title">Counter App</h1>
          <p className="subtitle">Create and manage multiple counters with ease</p>
        </div>
        
        <div className="add-btn-container">
          <button
            onClick={addCounter}
            className="btn btn-primary"
          >
            <Plus size={20} />
            Add New Counter
          </button>
        </div>

        {counters.length === 0 ? (
          <div className="empty-state">
            <p>No counters yet. Add one to get started!</p>
          </div>
        ) : (
          <div className="counters-grid">
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
