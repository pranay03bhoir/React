import "./App.css";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    text: "",
    checkBox: false,
    radio: "",
    select: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="app">
      <div className="form-container">
        <h1 className="form-title">Form Example</h1>
        <form onSubmit={handleSubmit}>
          {/* Text Input */}
          <div className="form-group">
            <label className="form-label">Text Input</label>
            <input
              type="text"
              name="text"
              value={formData.text}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter some text..."
            />
          </div>

          {/* Checkbox */}
          <div className="form-group checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="checkBox"
                checked={formData.checkBox}
                onChange={handleChange}
                className="checkbox-input"
              />
              <span className="checkmark"></span>
              <span className="checkbox-text">Check this box</span>
            </label>
          </div>

          {/* Radio Buttons */}
          <div className="form-group">
            <p className="radio-label">Radio Buttons</p>
            <div className="radio-group">
              <label className="radio-label">
                <input
                  type="radio"
                  name="radio"
                  value="option1"
                  checked={formData.radio === "option1"}
                  onChange={handleChange}
                  className="radio-input"
                />
                <span className="radio-custom"></span>
                <span>Option 1</span>
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="radio"
                  value="option2"
                  checked={formData.radio === "option2"}
                  onChange={handleChange}
                  className="radio-input"
                />
                <span className="radio-custom"></span>
                <span>Option 2</span>
              </label>
            </div>
          </div>

          {/* Dropdown */}
          <div className="form-group">
            <label className="form-label">Dropdown Menu</label>
            <select
              name="select"
              value={formData.select}
              onChange={handleChange}
              className="form-select"
            >
              <option value="">-- Choose an Option --</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
          </div>

          <button type="submit" className="submit-btn">
            Submit Form
          </button>
        </form>
      </div>

      <div className="form-data">
        <h2>Form Data</h2>
        <div className="data-display">
          <p>
            <strong>Text: </strong>
            <span className={!formData.text ? "text-muted" : ""}>
              {formData.text || "Not provided"}
            </span>
          </p>
          <p>
            <strong>Checkbox: </strong>
            <span className={formData.checkBox ? "text-success" : "text-muted"}>
              {formData.checkBox ? "Checked" : "Unchecked"}
            </span>
          </p>
          <p>
            <strong>Radio Selection: </strong>
            <span className={!formData.radio ? "text-muted" : ""}>
              {formData.radio || "Not selected"}
            </span>
          </p>
          <p>
            <strong>Select: </strong>
            <span className={!formData.select ? "text-muted" : ""}>
              {formData.select || "Not selected"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
