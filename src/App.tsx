import { useState } from "react";
import "./App.css";
function App() {
  // Form State
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [course, setCourse] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  // Error Message
  const [error, setError] = useState<string>("");

  // Submitted Student Data
  const [student, setStudent] = useState<any>(null);

  // Form Submit Function
  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    // Validation
    if (!name || !email || !phone || !course || !gender) {
      setError("Please fill all fields!");
      setStudent(null);
      return;
    }
    // Save Student Details
    setStudent({
      name,
      email,
      phone,
      course,
      gender
    });
    setError("");
    // Clear Form
    setName("");
    setEmail("");
    setPhone("");
    setCourse("");
    setGender("");
  }
  return (
    <div className="container">

      <h2>Student Registration Form</h2>

      <form onSubmit={handleSubmit}>

        <label>Full Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Phone Number</label>
        <input
          type="tel"
          placeholder="Enter your phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <label>Select Course</label>
        <select
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        >
          <option value="">Choose Course</option>
          <option value="Web Development">Web Development</option>
          <option value="Graphic Designing">Graphic Designing</option>
          <option value="App Development">App Development</option>
          <option value="Digital Marketing">Digital Marketing</option>
        </select>

        <label>Gender</label>
        <div className="gender">
          <label>
            <input
              type="radio"
              value="Male"
              checked={gender === "Male"}
              onChange={(e) => setGender(e.target.value)}
            />
            Male
            </label>
          <label>
            <input
              type="radio"
              value="Female"
              checked={gender === "Female"}
              onChange={(e) => setGender(e.target.value)}
            />
            Female
          </label>
        </div>
        {error && <p className="error">{error}</p>}

        <button type="submit">Register Now</button>

      </form>
      {/* Display Student Details */}
      {student && (
        <div className="result">
          <h3>Registration Successful!</h3>
          <p><b>Name:</b> {student.name}</p>
          <p><b>Email:</b> {student.email}</p>
          <p><b>Phone:</b> {student.phone}</p>
          <p><b>Course:</b> {student.course}</p>
          <p><b>Gender:</b> {student.gender}</p>
        </div>
      )}
    </div>
  );
}
export default App;
