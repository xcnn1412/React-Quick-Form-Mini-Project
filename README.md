# 🎬 React Movie Survey Form

แบบสำรวจความคิดเห็นเกี่ยวกับภาพยนตร์ที่สร้างด้วย React และ Tailwind CSS โดยใช้หลักการ **High Cohesion** ในการออกแบบโครงสร้างโค้ด

## 🚀 Features

- ✅ **ฟอร์มกรอกข้อมูล** - ชื่อ, อีเมล, เลือกหนัง, ความคิดเห็น
- ✅ **Validation** - ตรวจสอบความถูกต้องของข้อมูล
- ✅ **หน้าสรุปข้อมูล** - แสดงข้อมูลที่กรอกทั้งหมด
- ✅ **Responsive Design** - ใช้งานได้ทุกขนาดหน้าจอ
- ✅ **Modern UI** - ใช้ Tailwind CSS
- ✅ **High Cohesion Architecture** - โครงสร้างโค้ดที่เป็นระเบียบ

## 🛠️ Tech Stack

- **React** 19.1.1 - JavaScript library สำหรับสร้าง UI
- **Vite** 7.1.2 - Build tool และ development server
- **Tailwind CSS** 3.4.1 - Utility-first CSS framework
- **PostCSS** - CSS processor
- **Autoprefixer** - เพิ่ม vendor prefixes อัตโนมัติ

## 📁 Project Structure

```
src/
├── components/           # React Components
│   ├── UserForm.jsx     # Main form component (orchestrator)
│   ├── FormField.jsx    # Reusable input field component
│   ├── MovieSelector.jsx # Movie selection component
│   ├── SummaryPage.jsx  # Summary display component
│   └── ActionButtons.jsx # Form action buttons component
├── hooks/               # Custom React Hooks
│   └── useMovieForm.js  # Form state management hook
├── constant/            # Static data
│   └── movie.js         # Movie data array
├── App.jsx             # Root component
├── main.jsx            # Application entry point
└── index.css           # Global styles
```

## 🏗️ Architecture - High Cohesion Design

### 1. **Single Responsibility Principle**
แต่ละ component มีหน้าที่เฉพาะเจาะจง:

#### 📝 `FormField.jsx`
```jsx
// จัดการ input field เดียว - รองรับทั้ง input และ textarea
<FormField
  label="ชื่อ-นามสกุล"
  name="name"
  placeholder="กรอกชื่อ-นามสกุลของคุณ"
  value={formData.name}
  onChange={handleChange}
  error={errors.name}
  required
/>
```

#### 🎬 `MovieSelector.jsx`
```jsx
// จัดการการเลือกหนังเท่านั้น
<MovieSelector
  movies={movies}
  selectedMovie={formData.selectedMovie}
  onChange={handleChange}
  error={errors.selectedMovie}
/>
```

#### 📋 `SummaryPage.jsx`
```jsx
// แสดงสรุปข้อมูลเท่านั้น
<SummaryPage 
  submittedData={submittedData}
  onNewSurvey={handleNewSurvey}
  onFinish={handleFinish}
/>
```

#### 🔘 `ActionButtons.jsx`
```jsx
// จัดการปุ่มต่างๆ
<ActionButtons 
  onReset={handleReset}
/>
```

### 2. **Custom Hook - useMovieForm**
จัดการ state และ logic ทั้งหมดของฟอร์ม:

```jsx
const {
  formData,        // ข้อมูลฟอร์ม
  errors,          // ข้อผิดพลาด
  showSummary,     // แสดงหน้าสรุป
  submittedData,   // ข้อมูลที่ส่งแล้ว
  handleChange,    // จัดการการเปลี่ยนแปลง input
  handleSubmit,    // จัดการการส่งฟอร์ม
  handleReset,     // รีเซ็ตฟอร์ม
  handleNewSurvey, // เริ่มแบบสำรวจใหม่
  handleFinish     // ไปหน้า TechUp
} = useMovieForm()
```

### 3. **Data Layer**
```jsx
// src/constant/movie.js
export const movies = [
  { title: "Avatar", year: "2009", director: "James Cameron" },
  { title: "Inception", year: "2010", director: "Christopher Nolan" },
  // ...
];
```

## 🎯 Component Responsibilities

| Component | หน้าที่ | Input Props | Output |
|-----------|---------|-------------|---------|
| `UserForm` | Orchestrator - ควบคุมการทำงานทั้งหมด | - | JSX |
| `FormField` | แสดง input field พร้อม validation | label, name, value, error, etc. | Input element |
| `MovieSelector` | แสดงตัวเลือกหนัง | movies, selectedMovie, onChange | Radio buttons |
| `SummaryPage` | แสดงสรุปข้อมูล | submittedData, callbacks | Summary display |
| `ActionButtons` | แสดงปุ่มต่างๆ | onReset | Submit & Reset buttons |
| `useMovieForm` | จัดการ state และ logic | - | State & handlers |

## 🔧 Installation & Setup

### 1. Clone Repository
```bash
git clone <repository-url>
cd "React Mini Project"
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```

### 4. Build for Production
```bash
npm run build
```

### 5. Preview Production Build
```bash
npm run preview
```

## 📱 Usage Flow

1. **กรอกข้อมูล** - ผู้ใช้กรอกชื่อ, อีเมล, เลือกหนัง, ความคิดเห็น
2. **Validation** - ระบบตรวจสอบความถูกต้องของข้อมูล
3. **แสดงข้อผิดพลาด** - หากข้อมูลไม่ถูกต้อง
4. **หน้าสรุป** - แสดงข้อมูลที่กรอกทั้งหมด
5. **เสร็จสิ้น** - ไปหน้า [TechUp](https://www.techupth.com/) หรือเริ่มใหม่

## ⚡ Validation Rules

### ชื่อ-นามสกุล (Required)
- ไม่ว่าง: "โปรดใส่ชื่อของคุณ"

### อีเมล (Required)
- ไม่ว่าง: "โปรดใส่อีเมลของคุณ"
- รูปแบบถูกต้อง: "รูปแบบอีเมลไม่ถูกต้อง"
- Regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`

### หนังโปรด (Required)
- ต้องเลือก: "กรุณาเลือกหนังที่คุณชอบ"

### ความคิดเห็น (Optional)
- ไม่บังคับกรอก

## 🎨 Styling

### Color Scheme
- **Primary**: `#222831` (เทาเข้ม)
- **Success**: `#047857` (เขียว)
- **Error**: `#dc2626` (แดง)
- **Secondary**: `#6b7280` (เทา)

### Tailwind Classes ที่ใช้บ่อย
```css
/* Form styling */
.shadow-lg rounded-lg px-8 pt-6 pb-8

/* Input styling */
.shadow appearance-none border rounded w-full py-3 px-3

/* Button styling */
.font-bold py-3 px-6 rounded-lg transform hover:scale-105

/* Error styling */
.text-rose-800 text-xs mt-1
```

## 🧪 Testing

### Manual Testing Checklist
- [ ] กรอกข้อมูลครบถ้วน - ส่งได้
- [ ] ไม่กรอกชื่อ - แสดง error
- [ ] อีเมลผิดรูปแบบ - แสดง error
- [ ] ไม่เลือกหนัง - แสดง error
- [ ] ปุ่มรีเซ็ต - ล้างข้อมูลทั้งหมด
- [ ] หน้าสรุป - แสดงข้อมูลถูกต้อง
- [ ] ปุ่มเสร็จสิ้น - เปิด TechUp
- [ ] Responsive - ใช้งานได้ทุกขนาดหน้าจอ

## 🔍 Code Quality Principles

### High Cohesion ✅
- แต่ละ component มีหน้าที่เฉพาะ
- ไม่มีการผสมผสานหน้าที่ที่ไม่เกี่ยวข้อง

### Single Responsibility ✅
- หนึ่ง component หนึ่งหน้าที่
- ง่ายต่อการทดสอบและบำรุงรักษา

### Reusability ✅
- `FormField` ใช้ซ้ำได้กับ input ประเภทต่างๆ
- Components แยกจากกันชัดเจน

### Maintainability ✅
- แก้ไขส่วนใดส่วนหนึ่งไม่กระทบส่วนอื่น
- โครงสร้างโค้ดเป็นระเบียบ

## 📝 Development Notes

### การเพิ่ม Field ใหม่
1. เพิ่มใน `formData` state ใน `useMovieForm.js`
2. เพิ่ม validation ใน `validateForm` function
3. เพิ่ม `<FormField>` ใน `UserForm.jsx`
4. เพิ่มการแสดงผลใน `SummaryPage.jsx`

### การเปลี่ยนสี
แก้ไขใน inline styles:
```jsx
style={{color: '#222831'}}           // Text color
style={{backgroundColor: '#222831'}} // Background color
```

### การเพิ่ม Movie
แก้ไขใน `src/constant/movie.js`:
```jsx
export const movies = [
  // เพิ่มหนังใหม่ที่นี่
  { title: "New Movie", year: "2024", director: "Director Name" }
];
```

## 🤝 Contributing

1. Fork the project
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

This project is licensed under the ISC License.

## 🙏 Acknowledgments

- [TechUp](https://www.techupth.com/) - สถาบันออนไลน์สำหรับการเรียนรู้เทคโนโลยี
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [Vite](https://vitejs.dev/) - Next generation frontend tooling

---

**Made with ❤️ by React & Tailwind CSS**
