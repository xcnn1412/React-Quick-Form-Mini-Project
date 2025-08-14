import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          React + Tailwind CSS
        </h1>
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            คุณคลิกไปแล้ว <span className="font-semibold text-blue-600">{count}</span> ครั้ง
          </p>
          <button 
            onClick={() => setCount(count + 1)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            คลิกที่นี่
          </button>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            ตัวอย่างการใช้ Tailwind CSS กับ React
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
