// src/components/MovieSelector.jsx
const MovieSelector = ({ movies, selectedMovie, onChange, error }) => {
  return (
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
              checked={selectedMovie === movie.title}
              onChange={onChange}
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
      
      {error && (
        <p className="text-rose-800 text-xs mt-1">⚠️ {error}</p>
      )}
    </div>
  )
}

export default MovieSelector
