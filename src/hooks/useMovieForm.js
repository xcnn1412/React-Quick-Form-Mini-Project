// src/hooks/useMovieForm.js
import { useState } from 'react'
import { movies } from '../constant/movie.js'

export const useMovieForm = () => {
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

  // ฟังก์ชันไปหน้า TechUp
  const handleFinish = () => {
    window.open('https://www.techupth.com/', '_blank')
  }

  return {
    formData,
    errors,
    showSummary,
    submittedData,
    handleChange,
    handleSubmit,
    handleReset,
    handleNewSurvey,
    handleFinish
  }
}
