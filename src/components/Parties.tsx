import { useState } from "react";

export default function Parties() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    numberOfPeople: "",
    date: "",
    time: "",
    occasion: "",
    spacePreference: "",
    budgetPerPerson: "",
    specialRequests: "",
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // handle form submission here
    // you could connect to a backend here
    const params = new URLSearchParams();
    for (const key in formData) {
      params.append(key, formData[key as keyof typeof formData]);
    }
    try {
      const response = await fetch(
        "https://hooks.zapier.com/hooks/catch/22250764/2jt4iwe/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: params.toString(), // ✅ this is key
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      } else {
        console.log("Form submitted successfully!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const wrapperStyle = {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#534b4b",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    fontFamily: "sans-serif",
    justifyContent: "center",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "6px",
    fontWeight: "bold",
  };

  const inputStyle = {
    width: "80%",
    padding: "10px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
  };

  const buttonStyle = {
    backgroundColor: "#333",
    color: "white",
    padding: "12px 20px",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  };

  const timeOptions = Array.from({ length: 7 * 4 }, (_, index) => {
    const hour = Math.floor(index / 4) + 16;
    const minutes = (index % 4) * 15;
    const displayHour = hour > 12 ? hour - 12 : hour;
    const ampm = hour >= 12 ? "PM" : "AM";
    const displayMinutes = minutes.toString().padStart(2, "0");
    return `${displayHour}:${displayMinutes} ${ampm}`;
  });

  return (
    <form onSubmit={handleSubmit} style={wrapperStyle}>
      <h2
        style={{
          textAlign: "center",
          marginBottom: "20px",
          marginTop: "100px",
        }}
      >
        Group Reservation Request
      </h2>
      <h3>
        Whether it's a bday party, baby shower, office function or any other
        special event, please fill out the form below and we'll do our best to
        accommodate your desired date and any requests you may have to make your
        party/celebration memorable.
      </h3>
      <label style={labelStyle}>Full Name (required):</label>
      <input
        type="text"
        name="fullName"
        placeholder="ex. Pedro Pascal"
        style={inputStyle}
        value={formData.fullName}
        onChange={handleChange}
        required
      />

      <label style={labelStyle}>Phone (required):</label>
      <input
        type="tel"
        name="phone"
        style={inputStyle}
        value={formData.phone}
        onChange={handleChange}
        required
      />

      <label style={labelStyle}>Email (required):</label>
      <input
        type="email"
        name="email"
        style={inputStyle}
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label style={labelStyle}>Number of People:</label>
      <select
        name="numberOfPeople"
        style={inputStyle}
        value={formData.numberOfPeople}
        onChange={handleChange}
        required
      >
        <option value="">Select</option>
        {Array.from({ length: 68 }, (_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>

      <label style={labelStyle}>Date:</label>
      <input
        type="date"
        name="date"
        style={inputStyle}
        value={formData.date}
        onChange={handleChange}
        required
      />

      <label style={labelStyle}>Time:</label>
      <select
        name="time"
        style={inputStyle}
        value={formData.time}
        onChange={handleChange}
        required
      >
        <option value="">Select</option>
        {timeOptions.map((time, idx) => (
          <option key={idx} value={time}>
            {time}
          </option>
        ))}
      </select>

      <label style={labelStyle}>Occasion:</label>
      <input
        type="text"
        name="occasion"
        style={inputStyle}
        value={formData.occasion}
        onChange={handleChange}
      />

      <label style={labelStyle}>Space Preference:</label>
      <select
        name="spacePreference"
        style={inputStyle}
        value={formData.spacePreference}
        onChange={handleChange}
      >
        <option value="">Select</option>
        <option value="Bar">Bar</option>
        <option value="Dining Room">Dining Room</option>
      </select>

      <label style={labelStyle}>Budget Per Person (USD):</label>
      <input
        type="number"
        name="budgetPerPerson"
        style={inputStyle}
        value={formData.budgetPerPerson}
        onChange={handleChange}
        min="0"
        step="0.01"
      />

      <label style={labelStyle}>Description / Requests:</label>
      <textarea
        name="specialRequests"
        rows={4}
        style={inputStyle}
        value={formData.specialRequests}
        onChange={handleChange}
      />

      <button type="submit" style={buttonStyle}>
        Submit Reservation Request
      </button>
    </form>
  );
}
