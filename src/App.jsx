import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(localStorage.getItem("count") ? Number(localStorage.getItem("count")) : 0);
  const [action, setAction] = useState("none");
  
  useEffect(() => {
    localStorage.setItem("count", counter);
  }, [counter])


  const decrease = () => {
    let decreased = counter - 1;
    if (decreased < 0) {
      decreased = 0;
    }
    setCounter(decreased);
    setAction("decrease");
  }

  const increase = () => {
    const increased = counter + 1;
    setCounter(increased);
    setAction("increase");
  }

  const reset = () => {
    setCounter(0);
    setAction("none");
  }
  
  return (
    <div className='Counter-page'> 
      <h1 className="text-4xl font-extrabold leading-none tracking-tight text-customGray md:text-5xl lg:text-6xl dark:text-white">
        Counter
      </h1>
      <div className='Counter-container'>
        <div className={`Counter-number ${action}`}>
          {counter}
        </div>
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button 
            type="button" 
            className="px-10 py-2 text-xl font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
            onClick={decrease}
          >
            −
          </button>
          <button 
            type="button" 
            className="px-10 py-2 text-base font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
            onClick={reset}
          >
            reset
          </button>
          <button 
            type="button" 
            className="px-10 py-2 text-xl font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
            onClick={increase}
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
