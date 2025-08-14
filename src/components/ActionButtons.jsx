// src/components/ActionButtons.jsx
const ActionButtons = ({ onSubmit, onReset }) => {
  return (
    <div className="flex gap-4">
      <button
        className="flex-1 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transform hover:scale-105 transition duration-200"
        style={{backgroundColor: '#222831'}}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#1a1f26'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#222831'}
        type="submit"
      >
        ส่งข้อมูล
      </button>
      
      <button
        type="button"
        onClick={onReset}
        className="flex-1 bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transform hover:scale-105 transition duration-200"
      >
        รีเซ็ต
      </button>
    </div>
  )
}

export default ActionButtons
