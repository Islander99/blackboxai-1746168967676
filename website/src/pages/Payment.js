import React from 'react';

export default function Payment() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h2 className="text-3xl font-semibold mb-6">Payment Processing</h2>
      <p className="text-gray-700 mb-4">Payment integration will be implemented here.</p>
      {/* Placeholder for Stripe payment integration */}
      <div className="w-full max-w-md h-48 bg-gray-200 rounded-md flex items-center justify-center">
        <p className="text-gray-500">Payment component coming soon...</p>
      </div>
    </div>
  );
}
