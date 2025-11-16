import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log('Form submitted:', formData);
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
    navigate('/login'); // optional redirect
  };

  return (
    <div className="px-10 py-20 rounded-3xl border-2 border-gray-200 flex items-center justify-center ">
      <div className="mt-8 bg-white p-8 rounded-lg shadow-md w-full max-w-md">

        <h2 className="text-5xl font-semibold mb-6 text-center">Sign Up</h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {['username', 'email', 'password', 'confirmPassword'].map((field) => (
            <div key={field}>
              <input
                type={field.includes('password') ? 'password' : field === 'email' ? 'email' : 'text'}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                placeholder={field === 'confirmPassword' ? 'Confirm Password' : field.charAt(0).toUpperCase() + field.slice(1)}
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-10 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          ))}

          <div className="mt-8 flex flex-col gap-y-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 rounded-md hover:bg-blue-700 transition duration-200 font-semibold"
            >
              Sign Up
            </button>
          </div>
          
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{' '} 
          <Link to="/login" className="text-blue-600 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
