// src/components/FormField.jsx
const FormField = ({ 
  label, 
  name, 
  type = "text", 
  placeholder, 
  value, 
  onChange, 
  error, 
  required = false,
  as = "input",
  rows = 4 
}) => {
  const inputClasses = `shadow appearance-none border rounded w-full py-3 px-3 leading-tight focus:outline-none focus:ring-2 ${
    error ? 'border-red-500' : 'border-gray-300'
  }`

  const inputStyle = { color: '#222831' }

  return (
    <div className="mb-4">
      <label 
        className="block text-sm font-bold mb-2" 
        htmlFor={name} 
        style={{color: '#222831'}}
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      
      {as === "textarea" ? (
        <textarea
          className={inputClasses}
          style={inputStyle}
          id={name}
          name={name}
          placeholder={placeholder}
          rows={rows}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          className={inputClasses}
          style={inputStyle}
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
      
      {error && (
        <p className="text-rose-800 text-xs mt-1">⚠️ {error}</p>
      )}
    </div>
  )
}

export default FormField
