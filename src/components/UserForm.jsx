// src/components/UserForm.jsx
import { useMovieForm } from '../hooks/useMovieForm'
import { movies } from '../constant/movie.js'
import FormField from './FormField'
import MovieSelector from './MovieSelector'
import SummaryPage from './SummaryPage'
import ActionButtons from './ActionButtons'

function UserForm() {
  const {
    formData,
    errors,
    showSummary,
    submittedData,
    handleChange,
    handleSubmit,
    handleReset,
    handleNewSurvey,
    handleFinish
  } = useMovieForm()

  // Show Summary Page
  if (showSummary && submittedData) {
    return (
      <SummaryPage 
        submittedData={submittedData}
        onNewSurvey={handleNewSurvey}
        onFinish={handleFinish}
      />
    )
  }

  // Show Form
  return (
    <div className="w-full max-w-2xl">
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
        <h2 className="text-3xl font-bold mb-6 text-center" style={{color: '#222831'}}>
          Register Form
        </h2>
        
        <FormField
          label="ชื่อ-นามสกุล"
          name="name"
          placeholder="กรอกชื่อ-นามสกุลของคุณ"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          required
        />

        <FormField
          label="อีเมล"
          name="email"
          type="email"
          placeholder="example@email.com"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          required
        />

        <MovieSelector
          movies={movies}
          selectedMovie={formData.selectedMovie}
          onChange={handleChange}
          error={errors.selectedMovie}
        />

        <FormField
          label="ความคิดเห็นเกี่ยวกับภาพยนตร์"
          name="comment"
          as="textarea"
          placeholder="แสดงความคิดเห็นของคุณเกี่ยวกับภาพยนตร์..."
          value={formData.comment}
          onChange={handleChange}
          error={errors.comment}
        />

        <ActionButtons 
          onReset={handleReset}
        />

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