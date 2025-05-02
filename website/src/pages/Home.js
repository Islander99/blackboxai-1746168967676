import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-4xl font-bold mb-6">Welcome to Session Booking</h1>
      <p className="mb-6 text-lg text-gray-700 max-w-xl text-center">
        Book your sessions, join video conferences, and make payments easily.
      </p>
      <div className="space-x-4">
        <Link
          to="/booking"
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Book a Session
        </Link>
        <Link
          to="/video"
          className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
        >
          Join Video Conference
        </Link>
        <Link
          to="/payment"
          className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
        >
          Make a Payment
        </Link>
      </div>
    </div>
  );
}
