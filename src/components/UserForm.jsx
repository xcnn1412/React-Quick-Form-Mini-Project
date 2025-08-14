import { useState } from 'react'
import { movies } from '../constant/movie.js'

function UserForm() {
  // State สำหรับเก็บข้อมูลฟอร์ม
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    selectedMovie: '',
    comment: ''
  })

  // State สำหรับเก็บข้อผิดพลาด
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    selectedMovie: '',
    comment: ''
  })

  // State สำหรับแสดงหน้าสรุป
  const [showSummary, setShowSummary] = useState(false)
  const [submittedData, setSubmittedData] = useState(null)

  // ฟังก์ชันตรวจสอบความถูกต้องของอีเมล
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // ฟังก์ชันจัดการการเปลี่ยนแปลงใน input
  const handleChange = (e) => {
    const { name, value } = e.target
    
    // อัปเดตข้อมูลฟอร์ม
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))

    // ล้างข้อผิดพลาดเมื่อผู้ใช้เริ่มพิมพ์
    if (errors[name]) {
      setErrors(prevState => ({
        ...prevState,
        [name]: ''
      }))
    }
  }

  // ฟังก์ชันตรวจสอบข้อมูลก่อนส่ง
  const validateForm = () => {
    const newErrors = {}

    // ตรวจสอบชื่อ
    if (!formData.name.trim()) {
      newErrors.name = 'โปรดใส่ชื่อของคุณ'
    }

    // ตรวจสอบอีเมล
    if (!formData.email.trim()) {
      newErrors.email = 'โปรดใส่อีเมลของคุณ'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'รูปแบบอีเมลไม่ถูกต้อง'
    }

    // ตรวจสอบการเลือกหนัง
    if (!formData.selectedMovie) {
      newErrors.selectedMovie = 'กรุณาเลือกหนังที่คุณชอบ'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // ฟังก์ชันรีเซ็ตฟอร์ม
  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      selectedMovie: '',
      comment: ''
    })
    setErrors({
      name: '',
      email: '',
      selectedMovie: '',
      comment: ''
    })
    setShowSummary(false)
    setSubmittedData(null)
  }

  // ฟังก์ชันจัดการการส่งฟอร์ม
  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      const selectedMovie = movies.find(movie => movie.title === formData.selectedMovie)
      setSubmittedData({
        ...formData,
        movieDetails: selectedMovie
      })
      setShowSummary(true)
    }
  }

  // ฟังก์ชันเริ่มทำแบบสำรวจใหม่
  const handleNewSurvey = () => {
    handleReset()
  }

  // ฟังก์ชันไปหน้า TechUp - ใหม่!
  const handleFinish = () => {
    // เปิดหน้า TechUp ในแท็บใหม่
    window.open('https://www.techupth.com/', '_blank')
  }

  // หน้าสรุปข้อมูล
  if (showSummary && submittedData) {
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

          {/* ปุ่มเสร็จสิ้น - แก้ไขใหม่! */}
          <div className="flex justify-center gap-4 mt-8">
            {/* ปุ่มทำแบบสำรวจใหม่ */}
            <button
              onClick={handleNewSurvey}
              className="text-white font-bold py-3 px-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transform hover:scale-105 transition duration-200 bg-gray-500 hover:bg-gray-700"
            >
              ทำแบบสำรวจใหม่
            </button>

            {/* ปุ่มเสร็จสิ้น */}
            <button
              onClick={handleFinish}
              className="text-white font-bold py-3 px-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 
              transform hover:scale-105 transition duration-200"
              style={{backgroundColor: '#047857'}}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#15803D '}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#047857'}
            >
              เสร็จสิ้น
            </button>
          </div>
        </div>
      </div>
    )
  }

  // หน้าฟอร์ม
  return (
    <div className="w-full max-w-2xl">
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
        <h2 className="text-3xl font-bold mb-6 text-center" style={{color: '#222831'}}>
          Register Form
        </h2>
        
        {/* ฟิลด์ชื่อ */}
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="name" style={{color: '#222831'}}>
            ชื่อ-นามสกุล <span className="text-red-500">*</span>
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-3 px-3 leading-tight focus:outline-none focus:ring-2 ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            style={{color: '#222831'}}
            id="name"
            name="name"
            type="text"
            placeholder="กรอกชื่อ-นามสกุลของคุณ"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && (
            <p className="text-rose-800 text-xs mt-1">⚠️ {errors.name}</p>
          )}
        </div>

        {/* ฟิลด์อีเมล */}
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="email" style={{color: '#222831'}}>
            อีเมล <span className="text-red-500">*</span>
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-3 px-3 leading-tight focus:outline-none focus:ring-2 ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            style={{color: '#222831'}}
            id="email"
            name="email"
            type="email"
            placeholder="example@email.com"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-rose-800 text-xs mt-1">⚠️ {errors.email}</p>
          )}
        </div>

        {/* ฟิลด์เลือกหนัง */}
        <div className="mb-4">
          <label className="block text-sm font-bold mb-3" style={{color: '#222831'}}>
            เลือกหนังโปรดของคุณ <span className="text-red-500">*</span>
          </label>
          <div className="space-y-2">
            {movies.map((movie, index) => (
              <div key={index} className="flex items-start">
                <input
                  type="radio"
                  id={`movie-${index}`}
                  name="selectedMovie"
                  value={movie.title}
                  checked={formData.selectedMovie === movie.title}
                  onChange={handleChange}
                  className="mt-1 mr-3 focus:ring-slate-950"
                  style={{
                    accentColor: '#020617',
                    color: '#020617'
                  }}
                />
                <label 
                  htmlFor={`movie-${index}`} 
                  className="cursor-pointer flex-1"
                  style={{color: '#222831'}}
                >
                  <div className="font-medium">{movie.title}</div>
                  <div className="text-sm text-gray-600">
                    ปี {movie.year} • ผู้กำกับ: {movie.director}
                  </div>
                </label>
              </div>
            ))}
          </div>
          {errors.selectedMovie && (
            <p className="text-rose-800 text-xs mt-1">⚠️ {errors.selectedMovie}</p>
          )}
        </div>

        {/* ฟิลด์ความคิดเห็น - ใหม่! */}
        <div className="mb-6">
          <label className="block text-sm font-bold mb-2" htmlFor="comment" style={{color: '#222831'}}>
            ความคิดเห็นเกี่ยวกับภาพยนตร์
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-3 px-3 leading-tight focus:outline-none focus:ring-2
             border-slate-950"
            style={{color: '#222831'}}
            id="comment"
            name="comment"
            placeholder="แสดงความคิดเห็นของคุณเกี่ยวกับภาพยนตร์..."
            rows="4"
            value={formData.comment}
            onChange={handleChange}
          />
        </div>

        {/* ปุ่มส่งและรีเซ็ต */}
        <div className="flex gap-4">
          <button
            className="flex-1 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 
            transform hover:scale-105 transition duration-200"
            style={{backgroundColor: '#222831'}}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#1a1f26'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#222831'}
            type="submit"
          >
            ส่งข้อมูล
          </button>
          
          <button
            type="button"
            onClick={handleReset}
            className="flex-1 bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg 
            focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transform hover:scale-105 
            transition duration-200"
          >
            รีเซ็ต
          </button>

        </div>

        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500">
            <span className="text-red-500">*</span> ช่องที่จำเป็นต้องกรอก
          </p>
        </div>
      </form>
    </div>
  )
}

export default UserForm