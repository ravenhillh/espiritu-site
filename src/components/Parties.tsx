import React, { useState } from "react";

const generateTimeOptions = () => {
  const times = [];
  for (let hour = 16; hour <= 22; hour++) {
    for (let min = 0; min < 60; min += 15) {
      if (hour === 22 && min > 0) break;
      const formattedHour = hour > 12 ? hour - 12 : hour;
      const formattedMin = min === 0 ? "00" : min;
      const ampm = hour >= 12 ? "PM" : "AM";
      times.push(`${formattedHour}:${formattedMin} ${ampm}`);
    }
  }
  return times;
};

export default function Parties() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    numberOfPeople: "",
    date: "",
    time: "",
    occasion: "",
    spacePreference: "",
    budgetPerPerson: "",
    description: "",
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can send this data to your backend here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">
        Group Reservations and Private Parties
      </h2>

      <label className="block mb-2 font-medium">Full Name (required):</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full mb-4 p-2 border rounded"
      />

      <label className="block mb-2 font-medium">Phone (required):</label>
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        required
        className="w-full mb-4 p-2 border rounded"
      />

      <label className="block mb-2 font-medium">Email (required):</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full mb-4 p-2 border rounded"
      />

      <label className="block mb-2 font-medium">Number of People:</label>
      <select
        name="numberOfPeople"
        value={formData.numberOfPeople}
        onChange={handleChange}
        required
        className="w-full mb-4 p-2 border rounded"
      >
        <option value="">Select number</option>
        {Array.from({ length: 68 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>

      <label className="block mb-2 font-medium">Date:</label>
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
        className="w-full mb-4 p-2 border rounded"
      />

      <label className="block mb-2 font-medium">Time:</label>
      <select
        name="time"
        value={formData.time}
        onChange={handleChange}
        required
        className="w-full mb-4 p-2 border rounded"
      >
        <option value="">Select time</option>
        {generateTimeOptions().map((time, idx) => (
          <option key={idx} value={time}>
            {time}
          </option>
        ))}
      </select>

      <label className="block mb-2 font-medium">Occasion:</label>
      <input
        type="text"
        name="occasion"
        value={formData.occasion}
        onChange={handleChange}
        className="w-full mb-4 p-2 border rounded"
      />

      <label className="block mb-2 font-medium">Space Preference:</label>
      <select
        name="spacePreference"
        value={formData.spacePreference}
        onChange={handleChange}
        className="w-full mb-4 p-2 border rounded"
      >
        <option value="">Select preference</option>
        <option value="Bar">Bar</option>
        <option value="Dining Room">Dining Room</option>
      </select>

      <label className="block mb-2 font-medium">Budget per Person ($):</label>
      <input
        type="number"
        name="budgetPerPerson"
        value={formData.budgetPerPerson}
        onChange={handleChange}
        className="w-full mb-4 p-2 border rounded"
      />

      <label className="block mb-2 font-medium">Description / Requests:</label>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        rows={4}
        className="w-full mb-6 p-2 border rounded"
      ></textarea>

      <button
        type="submit"
        className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
      >
        Submit Reservation Request
      </button>
    </form>
  );
}
