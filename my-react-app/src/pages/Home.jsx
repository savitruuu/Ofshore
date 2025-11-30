import { useState } from 'react';

function Home() {
    // Simple state management example with useState hook
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleReset = () => {
        setCount(0);
    };

    return (
        <div className="page">
            <h1>Welcome to My React App</h1>
            <p>This is a basic React application skeleton built with Vite and React Router.</p>

            <div className="counter-section">
                <h2>Simple Counter Example</h2>
                <p className="counter-display">Count: <strong>{count}</strong></p>
                <div className="button-group">
                    <button onClick={handleIncrement} className="btn btn-primary">
                        Increment
                    </button>
                    <button onClick={handleReset} className="btn btn-secondary">
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;
