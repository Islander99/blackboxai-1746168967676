import React, { useState } from 'react';

export default function Booking() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just simulate booking success
    setMessage(`Thank you, ${name}. Your session is booked for ${date} at ${time}.`);
    // Reset form
    setName('');
    setEmail('');
    setDate('');
    setTime('');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h2 className="text-3xl font-semibold mb-6">Book a Session</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
        <label className="block mb-2 font-medium" htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />

        <label className="block mb-2 font-medium" htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />

        <label className="block mb-2 font-medium" htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          required
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />

        <label className="block mb-2 font-medium" htmlFor="time">Time</label>
        <input
          id="time"
          type="time"
          required
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Book Session
        </button>
      </form>
      {message && <p className="mt-4 text-green-600 font-semibold">{message}</p>}
    </div>
  );
}
