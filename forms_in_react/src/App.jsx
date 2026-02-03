import "./App.css";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({});
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    return newErrors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    }
    return console.log(`Formdata submitted: `, formData);
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errors.name) {
      const newErrors = { ...errors };
      delete newErrors.name;
      setErrors(newErrors);
    }
  };
  return (
    <>
      <div>
        <h1>Forms in React</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type={`text`}
              name={`name`}
              value={formData.name}
              onChange={handleChange}
            />
            <p style={{ color: "red" }}>{errors.name}</p>
          </label>
          <label>
            Email:
            <input
              type={`email`}
              name={`email`}
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <button type={`submit`}>Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
