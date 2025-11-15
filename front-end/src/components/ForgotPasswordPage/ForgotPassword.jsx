import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Trigger password reset logic here (e.g., API call)
    console.log('Password reset requested for:', email);
    alert('If this email is registered, a reset link has been sent.');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Forgot Password</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Email
            <input
              type="email"
              name="email"
              placeholder="Enter your registered email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </label>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Send Reset Link
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Remembered your password?{' '}
          <a href="/login" className="text-blue-600 hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
