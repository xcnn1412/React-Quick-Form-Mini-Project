// src/components/SummaryPage.jsx
const SummaryPage = ({ submittedData, onNewSurvey, onFinish }) => {
  return (
    <div className="w-full max-w-2xl">
      <div className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
        <h2 className="text-3xl font-bold mb-6 text-center" style={{color: '#222831'}}>
          โปรดตรวจสอบข้อมูลของคุณ
        </h2>
        
        <div className="space-y-4">
          {/* ชื่อ */}
          <div className="border-b pb-3">
            <h3 className="text-lg font-semibold" style={{color: '#222831'}}>ชื่อ-นามสกุล</h3>
            <p className="text-gray-700 mt-1">{submittedData.name}</p>
          </div>

          {/* อีเมล */}
          <div className="border-b pb-3">
            <h3 className="text-lg font-semibold" style={{color: '#222831'}}>อีเมล</h3>
            <p className="text-gray-700 mt-1">{submittedData.email}</p>
          </div>

          {/* หนังที่เลือก */}
          <div className="border-b pb-3">
            <h3 className="text-lg font-semibold" style={{color: '#222831'}}>หนังที่เลือก</h3>
            <div className="mt-1">
              <p className="font-medium text-gray-800">{submittedData.movieDetails.title}</p>
              <p className="text-sm text-gray-600">
                ปี {submittedData.movieDetails.year} • ผู้กำกับ: {submittedData.movieDetails.director}
              </p>
            </div>
          </div>

          {/* ความคิดเห็น */}
          <div className="border-b pb-3">
            <h3 className="text-lg font-semibold" style={{color: '#222831'}}>ความคิดเห็น</h3>
            <p className="text-gray-700 mt-1">
              {submittedData.comment || 'คุณไม่ได้แสดงความคิดเห็น'}
            </p>
          </div>
        </div>

        {/* ปุ่มเสร็จสิ้น */}
        <div className="flex justify-center gap-4 mt-8">
          {/* ปุ่มทำแบบสำรวจใหม่ */}
          <button
            onClick={onNewSurvey}
            className="text-white font-bold py-3 px-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transform hover:scale-105 transition duration-200 bg-gray-500 hover:bg-gray-700"
          >
            ทำแบบสำรวจใหม่
          </button>

          {/* ปุ่มเสร็จสิ้น */}
          <button
            onClick={onFinish}
            className="text-white font-bold py-3 px-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transform hover:scale-105 transition duration-200"
            style={{backgroundColor: '#047857'}}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#15803D'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#047857'}
          >
            เสร็จสิ้น
          </button>
        </div>
      </div>
    </div>
  )
}

export default SummaryPage
